<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    class="cta text-grey-900 bg-gradient-to-t from-grey-100 to-white px-6 py-3 rounded-sm border border-grey-200 hover:from-grey-200 hover:to-grey-50 transition-all duration-200"
  >
    <slot />
  </component>
</template>

<script setup>
import { NuxtLink } from '#components'

defineProps({
  to: {
    type: [String, Object],
    default: null
  }
})
</script>

<style scoped>
.cta {
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>