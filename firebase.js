var firebaseConfig = {
    apiKey: 'AIzaSyB-yfddTXrFwxYBZlRXBS2B8Hl4OErELVY',
    authDomain: 'todo-list-768a2.firebaseapp.com',
    projectId: 'todo-list-768a2',
    storageBucket: 'todo-list-768a2.appspot.com',
    messagingSenderId: '209142654072',
    appId: '1:209142654072:web:a9a2e570eb3f38d523f98d',
    measurementId: 'G-PM64GLXV39',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.Analytics(app)

var db = firebase.firestore()
    // this is the update to keep going with the app