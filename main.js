var btnAdd = document.getElementById('add-btn');
btnAdd.style.display = 'none';

var deferredPrompt;

var notifyCard = document.getElementById('notify-card');
notifyCard.style.display = 'none';

var btnNotify = document.getElementById('notify-btn');


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(() => { 
      console.log('~~~1. Service Worker Registered');
      checkNotificationSupport();
     })
    .catch(() => {console.log("Registration Failed")});
}



window.addEventListener('beforeinstallprompt', (event) => {
  console.log('~~~~beforeinstallprompt');
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can add to home screen
  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', (e) => {
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
      // hide our user interface that shows our A2HS button
      btnAdd.style.display = 'none';
    });
});


// Notification 
function checkNotificationSupport(){
  if('Notification' in window){
    console.log("Notification supported");
    notifyCard.style.display = 'block';
    Notification.requestPermission((status) => {
        console.log("Notification Status ::",status);
    })
  }
  else{
    console.log("Notification NOT supported");
    
  }
};


var notificationOptions={
  body:'Msg From PWA',
  icon:'images/icons/icon-192x192.png',
  data:{
    timestamp:Date.now(),
    loc:'index.html'
  },
  actions:[
    {action:'go',title:'Go Now'}
  ]
}

function notify(title,options){
  if(Notification.permission === 'granted'){
    navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification(title,options);
    });
  }
}

btnNotify.addEventListener('click', (e) => {
  var notify_text = document.getElementById('notify_text').value;
  notify(notify_text,notificationOptions);
});


// CLOSE NOTIFICATION
function closeNotification(msg,evt){
  console.log(msg, evt.notification.data);
  evt.notification.close();
}


self.addEventListener('notificationclose',(event)=>{
  closeNotification('Notification Closed ',event) ;
});


