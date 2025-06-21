<template>
  <div class="relative">
    <div class="forescape-catalog" data-widget-id="1eb72797-ef26-4aaf-9afa-bd2005eef01d" data-settings="b64.eyJkb21haW4iOiJ0ZWFtLXNxdWFyZS40ZXNjYXBlLmlvIn0="></div>
    <div class="forescape-cart" data-settings="b64.eyJkb21haW4iOiJ0ZWFtLXNxdWFyZS40ZXNjYXBlLmlvIn0="></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Load the CSS
  const link = document.createElement('link')
  link.href = 'https://widgets.4escape.app/main.css'
  link.rel = 'stylesheet'
  link.crossOrigin = 'anonymous'
  document.head.appendChild(link)

  // Monkey-patch pushState to prevent the widget from changing the URL path.
  const originalPushState = window.history.pushState;
  window.history.pushState = (data, title, url) => {
    // We only block the widget's specific catalog URLs.
    if (typeof url === 'string' && url.startsWith('/catalog/')) {
      console.warn(`[BookingWidget] Blocked pushState to: ${url}`);
      return;
    }
    // For all other calls, use the original pushState.
    originalPushState.call(window.history, data, title, url);
  };

  // Load the script
  const script = document.createElement('script')
  script.defer = true
  script.type = 'module'
  script.src = 'https://widgets.4escape.app/main.js'
  document.body.appendChild(script)
})
</script> 
