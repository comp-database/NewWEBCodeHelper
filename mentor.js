/**
 * The function submits a form and saves the data to the Realtime Database using Firebase.
 */

var firebaseConfig = {
  apiKey: "AIzaSyD9szz1Lu3vApAXL9rcch3d6dJ2eaXS81g",
  authDomain: "code-helper-e22c0.firebaseapp.com",
  databaseURL: "https://code-helper-e22c0-default-rtdb.firebaseio.com",
  projectId: "code-helper-e22c0",
  storageBucket: "code-helper-e22c0.appspot.com",
  messagingSenderId: "599658171378",
  appId: "1:599658171378:web:5dee9b9a5579dd7a07f96b",
  measurementId: "G-45TH1MW2P8",
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function submitForm() {
  // Get the form data
  var email = document.getElementById("email").value;
  var language = document.getElementById("language").value;
  var doubts = document.getElementById("doubts").value;

  // Save the data to the Realtime Database
  var newResponseRef = database.ref("mentorresponses").push();
  newResponseRef
    .set({
      email: email,
      language: language,
      doubts: doubts,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    })
    .then(function () {
      // Display a success message
      alert("Your response has been recorded. Thank you for your feedback!");

      // Clear the form fields
      document.getElementById("email").value = "";
      document.getElementById("language").value = "";
      document.getElementById("doubts").value = "";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      alert("Oops! Something went wrong. Please try again later.");
    });
}
