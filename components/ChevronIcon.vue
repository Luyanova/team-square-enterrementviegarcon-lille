<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    :width="size" 
    :height="size" 
    viewBox="0 0 32 32" 
    fill="none"
  >
    <path 
      d="M24 13.3334L22.12 11.4534L16 17.56L9.88 11.4534L8 13.3334L16 21.3334L24 13.3334Z" 
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: 32,
  color: '#0B0C11'
})
</script>