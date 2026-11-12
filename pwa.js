// pwa.js — v15
// Registers the service worker and asks the browser to keep this app's storage.
// Opened as a local file (file://) nothing happens and the app works exactly as before.
(function(){
  let secure=location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1';
  if(!secure)return;

  if('serviceWorker' in navigator){
    window.addEventListener('load',function(){
      navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(function(e){console.warn('Service worker registration failed',e)});
    });
  }

  // Ask that localStorage is not cleaned up under storage pressure (honoured by Chrome/Android,
  // ignored on most iOS versions — the cloud save in a later phase is the real fix there).
  if(navigator.storage&&navigator.storage.persist){
    navigator.storage.persisted().then(function(already){
      if(!already)return navigator.storage.persist();
    }).catch(function(){});
  }
})();

function isStandaloneApp(){
  return (window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone===true;
}
