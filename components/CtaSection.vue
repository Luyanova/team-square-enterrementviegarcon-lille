<template>
  <section>
    <div class="text-grey-100 bg-gradient-to-t from-primary-800 from-10% to-primary-500 to-40% py-25 px-12 my-12 flex flex-col gap-6 items-center">
      <h3 class="text-center">{{ data?.CtaTitle }}</h3>
      <p class="text-center text-grey-100">{{ data?.CtaText }}</p>
      <div class="flex justify-center">
        <ButtonSecondary to="https://team-square.fr/reservation-4escape/#/catalog/1eb72797-ef26-4aaf-9afa-bd2005eef01d?date=2025-06-21">{{ data?.CtaButton }}</ButtonSecondary>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home-cta', () => {
  return queryCollection('content').path('/').first()
})
</script> 