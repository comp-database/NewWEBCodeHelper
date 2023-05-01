import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9szz1Lu3vApAXL9rcch3d6dJ2eaXS81g",
  authDomain: "code-helper-e22c0.firebaseapp.com",
  databaseURL: "https://code-helper-e22c0-default-rtdb.firebaseio.com",
  projectId: "code-helper-e22c0",
  storageBucket: "code-helper-e22c0.appspot.com",
  messagingSenderId: "599658171378",
  appId: "1:599658171378:web:5dee9b9a5579dd7a07f96b",
  measurementId: "G-45TH1MW2P8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.alert("Success! Account created.");
        window.location.replace("/main.html");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.alert("Success! Welcome back!");
      window.location.replace("/main.html");
      createacct.style.display = "none";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

const logoutButton = document.querySelector("#signout");

signupButton.addEventListener("click", function () {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});

// user name

const user = firebase.auth().currentUser;

if (user) {
  const displayName = user.displayName;
  const welcomeElement = document.getElementById("user-welcome");
  welcomeElement.textContent = `Welcome, ${displayName}!`;
}

// Progress wheel

var currentProgress = 0;
var clickedButtons = {};

function updateProgressWheel(buttonId, increment) {
  if (!clickedButtons[buttonId]) {
    var newProgress = currentProgress + increment;
    if (newProgress > 100) {
      newProgress = 100;
    }
    var progress = document.getElementById("progress");
    var circumference = 2 * Math.PI * progress.r.baseVal.value;
    var offset = circumference - (newProgress / 100) * circumference;
    progress.style.strokeDashoffset = offset;
    var text = document.querySelector("#progressWheel text");
    text.textContent = newProgress + "%";
    currentProgress = newProgress;
    clickedButtons[buttonId] = true;
  }
}

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");

button1.onclick = function () {
  updateProgressWheel("button1", 10);
};

button2.onclick = function () {
  updateProgressWheel("button2", 10);
};

button3.onclick = function () {
  updateProgressWheel("button3", 10);
};

button4.onclick = function () {
  updateProgressWheel("button4", 10);
};

button5.onclick = function () {
  updateProgressWheel("button5", 10);
};

button6.onclick = function () {
  updateProgressWheel("button6", 10);
};

button7.onclick = function () {
  updateProgressWheel("button7", 10);
};

button8.onclick = function () {
  updateProgressWheel("button8", 10);
};

button9.onclick = function () {
  updateProgressWheel("button9", 10);
};

button10.onclick = function () {
  updateProgressWheel("button10", 10);
};
