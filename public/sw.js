if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const r=e=>n(e,c),o={module:{uri:c},exports:a,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TqVcm9_wK_SNpMxvF2rXd/_buildManifest.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/TqVcm9_wK_SNpMxvF2rXd/_middlewareManifest.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/TqVcm9_wK_SNpMxvF2rXd/_ssgManifest.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/163.7cd40698aeb65867.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/main-b89e7c6359538933.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/pages/%5Bslug%5D-b13938df1f142ac0.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/pages/_app-4d4c964d79621db4.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/pages/_error-1f95674706ce531a.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/pages/index-999df11dd13be417.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-98088e2aba9c3f63.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/_next/static/chunks/webpack-5e92eb599564cfdb.js",revision:"TqVcm9_wK_SNpMxvF2rXd"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"f0f096bfbd622c0bb11a5102c172df7d"},{url:"/manifest.json",revision:"00fe96a5bc6f3a10230b1e8df5130933"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
