<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <UiToaster class="pointer-events-auto" />
  </div>
</template>
