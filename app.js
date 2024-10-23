// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-exampleAPIKey",
    authDomain: "my-firebase-app.firebaseapp.com",
    projectId: "my-firebase-app",
    storageBucket: "my-firebase-app.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:exampleAppId"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

// File upload function
function uploadFile() {
    var file = document.getElementById("fileInput").files[0];
    var storageRef = storage.ref('files/' + file.name);
    
    // Upload file
    storageRef.put(file).then(function(snapshot) {
        console.log('File uploaded successfully');
        alert('File uploaded successfully');
    });
}

// File download function
function downloadFile(fileName) {
    var storageRef = storage.ref('files/' + fileName);
    
    // Get the download URL
    storageRef.getDownloadURL().then(function(url) {
        window.open(url, '_blank');
    }).catch(function(error) {
        console.log("Error downloading file:", error);
    });
}
