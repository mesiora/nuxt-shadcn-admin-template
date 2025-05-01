import { promises as fs } from 'fs'
import path from 'path'
import { exec as execCallback } from 'child_process'
import { promisify } from 'util'
import { fileURLToPath } from 'url'

const exec = promisify(execCallback)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const config = {
  directoryPath: path.join(__dirname, '../app/components/ui'),
  command: 'npx shadcn-vue@latest add',
  options: '--overwrite',
  concurrentLimit: 3, // Number of concurrent updates
}

// Helper to sleep between retries
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Execute command with retries
async function executeWithRetry(command, maxRetries = 3, delayMs = 1000) {
  let lastError

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const { stdout, stderr } = await exec(command)
      if (stderr) {
        console.warn(`Warning for command "${command}":`, stderr)
      }
      return stdout
    } catch (error) {
      lastError = error
      console.error(`Attempt ${attempt}/${maxRetries} failed:`, error.message)

      if (attempt < maxRetries) {
        console.log(`Retrying in ${delayMs / 1000} seconds...`)
        await sleep(delayMs)
      }
    }
  }

  throw lastError
}

// Process components in batches
async function processBatch(components, startIndex, batchSize) {
  const batch = components.slice(startIndex, startIndex + batchSize)
  const results = await Promise.allSettled(
    batch.map(async (component) => {
      const command = `${config.command} ${component} ${config.options}`
      console.log(`Updating component ${component}...`)

      try {
        const stdout = await executeWithRetry(command)
        console.log(`✓ Successfully updated ${component}`)
        return { component, success: true, output: stdout }
      } catch (error) {
        console.error(`✗ Failed to update ${component}:`, error.message)
        return { component, success: false, error: error.message }
      }
    }),
  )

  return results
}

// Main function
async function updateComponents() {
  try {
    // Get list of components
    const components = await fs.readdir(config.directoryPath)
    console.log(`Found ${components.length} components to update`)

    // Process all components in batches
    const results = {
      successful: [],
      failed: [],
    }

    for (let i = 0; i < components.length; i += config.concurrentLimit) {
      const batchResults = await processBatch(
        components,
        i,
        config.concurrentLimit,
      )

      batchResults.forEach((result) => {
        if (result.value.success) {
          results.successful.push(result.value.component)
        } else {
          results.failed.push({
            component: result.value.component,
            error: result.value.error,
          })
        }
      })
    }

    // Print summary
    console.log('\nUpdate Summary:')
    console.log('---------------')
    console.log(`Total components: ${components.length}`)
    console.log(`Successfully updated: ${results.successful.length}`)
    console.log(`Failed updates: ${results.failed.length}`)

    if (results.failed.length > 0) {
      console.log('\nFailed Components:')
      results.failed.forEach(({ component, error }) => {
        console.log(`- ${component}: ${error}`)
      })
    }
  } catch (error) {
    console.error('Fatal error:', error.message)
    process.exit(1)
  }
}

// Run the script
updateComponents().catch(console.error)
