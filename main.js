 
 if ('serviceWorker' in navigator) {
 navigator.serviceWorker
          .register('./service-worker.js')
          .then(() => { console.log('~~~1. Service Worker Registered'); });
}


window.addEventListener('beforeinstallprompt', (e) => {
    console.log('~~~~beforeinstallprompt');
 e.prompt();
 e.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    })
});



var deferredPrompt;

var btnAdd = document.getElementById('add-btn');
btnAdd.style.display = 'none';


/*
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('~~~~beforeinstallprompt');
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
   // Update UI notify the user they can add to home screen
   btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  //btnAdd.style.display = 'none';

  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });

    btnAdd.style.display = 'none';
});

*/