import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  scrollBehavior(to, from, savedPosition) {
    // The 4escape widget uses hash-based routing which interferes with Vue Router.
    // We prevent Vue Router from handling these hashes.
    if (to.hash && to.hash.startsWith('#/catalog')) {
      return;
    }

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      try {
        // This will fail for invalid selectors, we catch and ignore.
        if (document.querySelector(to.hash)) {
          return {
            el: to.hash,
            behavior: 'smooth',
          };
        }
      } catch (e) {
        console.warn(`[router.options] Failed to find element for hash: "${to.hash}"`, e);
      }
    }

    // Scroll to top of page on route change.
    if (to.path !== from.path) {
      return { top: 0, left: 0 };
    }

    return {};
  }
}; 