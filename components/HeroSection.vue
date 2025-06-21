<template>
  <section class="py-12">
    <div class="flex flex-col gap-16 lg:flex-row items-center justify-between bg-grey-100 px-3 lg:px-10 py-12">
      <div class="flex flex-col gap-8 sm:gap-12">
        <header class="flex flex-col gap-4 sm:gap-6">
          <h4 class="text-primary-500">VIBREZ, CÉLÉBREZ, ENSEMBLE</h4>
          <h1 class="text-grey-900">{{ data?.title }}</h1>
          <p class="text-grey-600 lg:w-2/3">
            {{ data?.description }}
          </p>
        </header>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-4 sm:flex-row">

              <ButtonPrimary to="/booking">Réserver l'activité</ButtonPrimary>

            <div>
              <NuxtLink v-if="data?.moreLink" :to="data.moreLink" target="_blank" external>
                <ButtonSecondary>En savoir plus</ButtonSecondary>
              </NuxtLink>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <HalfStarIcon />
              <p class="text-[#FBBC04] pl-1 leading-none">4,6</p>
            </div>
            <p class="text-grey-600">+1500 avis sur <NuxtLink to="https://www.google.com/search?hl=fr&gl=FR&q=Team%20Square%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDQwNLUwNDQxNjUwtjAyNbEwM9jAyPiKUSAkNTFXIbiwNLEoVcGxLLN4ESuGEAA5EGsYQQAAAA&rldimm=11015811435038254860&tbm=lcl&cs=1&sa=X&ved=0CCAQ9fQKKABqFwoTCMi20r7M-I0DFQAAAAAdAAAAABAG&biw=777&bih=1039&dpr=1#lkt=LocalPoiReviews" target="_blank" external class="underline">Google</NuxtLink></p>
          </div>
        </div>
      </div>

      <NuxtImg 
        v-if="data?.image"
        :src="data.image" 
        class="inset-0 w-full h-full object-cover rounded-sm lg:w-2/3"
        loading="lazy"
        format="webp"
        quality="70"
        fit="cover"
      />
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('home', () => {
  return queryCollection('content').path('/').first()
})
</script> 