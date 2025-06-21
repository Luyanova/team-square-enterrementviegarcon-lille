<template>
  <section>
    <div class="flex flex-col gap-12 py-24 lg:flex-row">
      <h2 class="text-grey-900">
        {{ data?.growthMainTitle }}
      </h2>
      <div class="flex flex-col gap-8">
        <p class="text-grey-600">{{ data?.growthText }}</p>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <h2 class="text-grey-900">{{ data?.growthInfo1 }}</h2>
            <p class="text-grey-900">{{ data?.growthTitle1 }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <h2 class="text-grey-900">{{ data?.growthInfo2 }}</h2>
            <p class="text-grey-900">{{ data?.growthTitle2 }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <h2 class="text-grey-900">{{ data?.growthInfo3 }}</h2>
            <p class="text-grey-900">{{ data?.growthTitle3 }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <h2 class="text-grey-900">{{ data?.growthInfo4 }}</h2>
            <p class="text-grey-900">{{ data?.growthTitle4 }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home', () => {
  return queryCollection('content').path('/').first()
})
</script> 