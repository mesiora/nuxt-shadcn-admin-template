<script setup lang="ts">
import * as z from 'zod'

definePageMeta({
  layout: 'auth',
})

useHead({
  title: 'Login',
})

const schema = z.object({
  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters.',
    }),
})

const loading = ref(false)
function onSubmit(values: Record<string, any>) {
  console.log('Submitted values:', values)
  loading.value = true

  setTimeout(() => {
    loading.value = false
    useRouter().push({ name: 'index' })
  }, 1000)

  // useToast('Event has been created', {
  //   description: 'Sunday, December 03, 2023 at 9:00 AM',
  //   action: {
  //     label: 'Undo',
  //     onClick: () => console.log('Undo'),
  //   },
  // })
}
</script>

<template>
  <div class="flex items-center justify-center py-12">
    <div class="mx-auto grid w-[350px] gap-6">
      <div class="grid gap-2 text-center">
        <h1 class="text-3xl font-bold">Login</h1>
        <p class="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <UiAutoForm
        class="grid gap-4"
        :schema="schema"
        :field-config="{
          password: {
            inputProps: {
              type: 'password',
              placeholder: '••••••••',
            },
          },
        }"
        @submit="onSubmit"
      >
        <div class="flex items-center">
          <NuxtLink
            :to="{ name: 'reset-password' }"
            class="ml-auto inline-block text-sm underline"
          >
            Forgot your password?
          </NuxtLink>
        </div>

        <UiButton type="submit">
          <AppSpinner v-if="loading" class="mr-2" />
          Login
        </UiButton>
      </UiAutoForm>
    </div>
  </div>
</template>
