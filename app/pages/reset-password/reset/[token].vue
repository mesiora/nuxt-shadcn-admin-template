<script setup lang="ts">
import * as z from 'zod'

definePageMeta({
  layout: 'auth',
  validate: async ({ params }) => {
    try {
      // TODO: Validate token with API
      // const token = params.token as string
      // const valid = await $fetch(`/api/auth/reset-password/${token}`)
      // return valid
      return true
    } catch (error) {
      return false
    }
  },
})

useHead({
  title: 'Reset Password',
})

const schema = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords must match.',
    path: ['confirm'],
  })

const loading = ref(false)
function onSubmit(values: Record<string, any>) {
  console.log('Submitted values:', values)
  loading.value = true

  setTimeout(() => {
    loading.value = false
    useRouter().push({ name: 'login' })
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
        <h1 class="text-3xl font-bold">Reset Your Password</h1>
        <p class="text-balance text-muted-foreground">
          Enter your new password below
        </p>
      </div>
      <AutoForm
        class="grid gap-4"
        :schema="schema"
        :field-config="{
          password: {
            inputProps: {
              type: 'password',
              placeholder: '••••••••',
            },
          },
          confirm: {
            description: 'The confirm password must match the password.',
            inputProps: {
              type: 'password',
              placeholder: '••••••••',
            },
          },
        }"
        @submit="onSubmit"
      >
        <UiButton type="submit">
          <AppSpinner v-if="loading" class="mr-2" />
          Reset Password
        </UiButton>
        <UiButton variant="ghost" as-child>
          <NuxtLink to="/login">Back</NuxtLink>
        </UiButton>
      </AutoForm>
    </div>
  </div>
</template>
