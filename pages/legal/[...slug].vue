<template>
  <div class="container mx-auto px-4 py-8">
    <div class="prose max-w-none">
      <ContentRenderer v-if="data" :value="data" />
      <div v-else>
        <p>Document non trouvé</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(`legal-${route.path}`, () => {
  return queryCollection('legal').path(route.path).first()
})
</script>

