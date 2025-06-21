<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 25" 
    fill="none"
  >
    <path 
      d="M22 13.1055C22 7.54894 17.5229 3.04443 12 3.04443C6.47715 3.04443 2 7.54894 2 13.1055C2 18.1272 5.65684 22.2896 10.4375 23.0444V16.0138H7.89844V13.1055H10.4375V10.889C10.4375 8.36739 11.9305 6.97455 14.2146 6.97455C15.3088 6.97455 16.4531 7.17106 16.4531 7.17106V9.64704H15.1922C13.95 9.64704 13.5625 10.4227 13.5625 11.2183V13.1055H16.3359L15.8926 16.0138H13.5625V23.0444C18.3432 22.2896 22 18.1274 22 13.1055Z" 
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
  size: 24,
  color: '#FAF9FA'
})
</script>