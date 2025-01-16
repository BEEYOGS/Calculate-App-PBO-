if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(({ scope }) => console.log('Service Worker registered with scope:', scope))
    .catch((error) => console.error('Service Worker registration failed:', error));
}
