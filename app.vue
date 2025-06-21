<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <transition name="page-slide-fade" mode="out-in">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>

<script setup>
const config = useAppConfig()

useSeoMeta({
  title: config.title,
  description: config.description,
})
</script>

<style>
.page-slide-fade-enter-active, .page-slide-fade-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.page-slide-fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.page-slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>

