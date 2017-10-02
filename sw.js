importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/vue-a11y-calendar/_nuxt/app.293d05de3c6dacd958c5.js",
    "revision": "2e902895923e67a3b29ab760ddc5a67a"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/common.4cab845d36892e4634f3.js",
    "revision": "cc2c9b404a241dbd76c2e8375eb393ce"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/layouts/default.53e5a550435acdeb0ba4.js",
    "revision": "c4f8fe2c8d0be2fe7fcccbbc4975d4c3"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/manifest.e96b7b9e149470f3d36c.js",
    "revision": "c17670d98dd0c7519276d20e3276047c"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/pages/components/_component.a80f4ae1c3fda1032bf8.js",
    "revision": "0cba75e242040682443a877351ca3410"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/pages/index.262ca893493f6579bb27.js",
    "revision": "85692508a39a44317da4f578ded2ebc9"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "vue-a11y-calendar_0.1.2",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/vue-a11y-calendar/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/vue-a11y-calendar/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
