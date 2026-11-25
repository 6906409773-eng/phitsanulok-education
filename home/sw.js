self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // ปล่อยให้ดึงข้อมูลจากอินเทอร์เน็ตตามปกติ (รองรับ Supabase แบบเรียลไทม์)
  event.respondWith(fetch(event.request));
});
