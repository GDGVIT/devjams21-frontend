/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js'
)

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
)

const filesToCache = [
  // Train Animations
  '/src/Assets/TrainAnimations/Day/CityLightHouse.svg',
  '/src/Assets/TrainAnimations/Day/DayBg.svg',
  '/src/Assets/TrainAnimations/Day/GrassAndTrees.svg',
  '/src/Assets/TrainAnimations/Day/Sun.svg',
  '/src/Assets/TrainAnimations/Night/Moon.svg',
  '/src/Assets/TrainAnimations/Night/CityLighthouse.svg',
  '/src/Assets/TrainAnimations/Night/GrassAndTrees.svg',
  '/src/Assets/TrainAnimations/Night/NightBg.svg',
  '/src/Assets/TrainAnimations/Train.svg',
  // Home page logos
  '/src/Assets/Logos/CTF Logo.svg',
  '/src/Assets/Logos/DevJams Logo.svg',
  '/src/Assets/Logos/DevTalks Logo.svg',
  '/src/Assets/Logos/GDSC Logo Day.svg',
  '/src/Assets/Logos/GDSC Logo Mobile.png',
  '/src/Assets/Logos/GDSC Logo Night.svg',
  '/src/Assets/Logos/Hexathon Logo.svg',
  '/src/Assets/Logos/Knockathons Logo.svg',
  // Sponsors
  '/src/Assets/Logos/Sponsors/1Password.svg',
  '/src/Assets/Logos/Sponsors/Deepnote.png',
  '/src/Assets/Logos/Sponsors/DigitalOcean.svg',
  '/src/Assets/Logos/Sponsors/EchoAR.png',
  '/src/Assets/Logos/Sponsors/Eggheadio.svg',
  '/src/Assets/Logos/Sponsors/Framer.svg',
  '/src/Assets/Logos/Sponsors/genxyz.png',
  '/src/Assets/Logos/Sponsors/HashiCorp.svg',
  '/src/Assets/Logos/Sponsors/Ren.png',
  '/src/Assets/Logos/Sponsors/replit.png',
  '/src/Assets/Logos/Sponsors/Taskade.png',
  '/src/Assets/Logos/Sponsors/Voiceflow.png',
  '/src/Assets/Logos/Sponsors/agoraLogo.svg',
  '/src/Assets/Logos/Sponsors/Alchemy.svg',
  '/src/Assets/Logos/Sponsors/CrowdStrike.png',
  '/src/Assets/Logos/Sponsors/KumoSpace.png',
  '/src/Assets/Logos/Sponsors/GFGlogo.png',
  '/src/Assets/Logos/Sponsors/Groww.png',
  '/src/Assets/Logos/Sponsors/Kaspersky.png',
  '/src/Assets/Logos/Sponsors/HackTheBox.png',
  '/src/Assets/Logos/Sponsors/Sketch.svg',
  '/src/Assets/Logos/Sponsors/TheDappList.svg',
  // Social media
  '/src/Assets/SocialMedia/Facebook.svg',
  '/src/Assets/SocialMedia/Github.svg',
  '/src/Assets/SocialMedia/Instagram.svg',
  '/src/Assets/SocialMedia/Linkedin.svg',
  '/src/Assets/SocialMedia/Medium.svg',
  '/src/Assets/SocialMedia/Twitter.svg',
  '/src/Assets/SocialMedia/YouTube.svg',
  // Mouse
  '/src/Assets/Mouse.svg',
  // Brochure
  '/src/Assets/Brochure.pdf',
  // About
  '/src/Assets/About/devjams.svg',
  '/src/Assets/About/gdsc.svg',
  '/src/Assets/About/vit.svg',
  // Timeline
  '/src/Assets/About/Timeline Dark.svg',
  '/src/Assets/About/Timeline Light.svg'
]

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open("DevJams'21").then(function (cache) {
      console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          return caches.delete(cacheName)
        })
      )
    })
  )
})
