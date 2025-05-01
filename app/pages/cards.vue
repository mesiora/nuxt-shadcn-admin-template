<script setup lang="ts">
useHead({
  title: 'Cards',
})
</script>

<template>
  <div
    class="grid items-start justify-center gap-6 rounded-lg lg:grid-cols-2 xl:grid-cols-3"
  >
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <CardContainer>
        <CardCreateAccount />
      </CardContainer>
      <CardContainer>
        <CardPaymentMethod />
      </CardContainer>
    </div>
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <CardContainer>
        <CardTeamMembers />
      </CardContainer>
      <CardContainer>
        <CardShareDocument />
      </CardContainer>
      <CardContainer>
        <CardDatePicker />
      </CardContainer>
      <CardContainer>
        <CardNotifications />
      </CardContainer>
    </div>
    <div
      class="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1"
    >
      <CardContainer>
        <CardReportAnIssue />
      </CardContainer>
      <CardContainer>
        <CardGitHub />
      </CardContainer>
      <CardContainer>
        <CardCookieSettings />
      </CardContainer>
    </div>
  </div>
</template>
