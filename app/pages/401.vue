<script lang="ts" setup>
// This Is just an example to show the error. Can be removed.
throw showError({
  statusCode: 401,
  statusMessage: 'Access Denied',
  fatal: true, // trigger a full-screen error page.
})
</script>

<template>
  <div />
</template>
