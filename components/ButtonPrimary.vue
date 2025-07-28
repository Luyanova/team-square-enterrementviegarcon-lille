<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    v-bind="isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
    class="w-fit h-fit cta text-grey-100 bg-gradient-to-t from-primary-800 from-10% to-primary-500 to-40% px-6 py-3 rounded-sm hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
  >
    <slot />
  </component>
</template>

<script setup>
import { NuxtLink } from '#components'

const props = defineProps({
  to: {
    type: [String, Object],
    default: null
  }
})

const isExternal = computed(() => {
  if (!props.to || typeof props.to !== 'string') return false
  return props.to.startsWith('http')
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