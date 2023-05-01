// Firebase configuration
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// Submit review form
document.getElementById("review-form").addEventListener("submit", submitReview);

// Submit review function
function submitReview(e) {
  e.preventDefault();

  // Get form values
  var name = getInputVal("name");
  var review = getInputVal("review");
  var stars = document.getElementById("stars").value;

  // Save review to Firebase
  saveReview(name, review, stars);

  // Clear form
  document.getElementById("review-form").reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save review to Firebase
function saveReview(name, review, stars) {
  var newReviewRef = database.ref("reviews").push();
  newReviewRef.set({
    name: name,
    review: review,
    stars: stars,
  });
}

// Display reviews on page load and when a new review is submitted
function displayReviews() {
  var reviewsRef = database.ref("reviews");
  reviewsRef.on("child_added", function (data) {
    var childData = data.val();
    var starsHtml = "";
    for (var i = 0; i < childData.stars; i++) {
      starsHtml += "&#9733;";
    }
    for (var i = childData.stars; i < 5; i++) {
      starsHtml += "&#9734;";
    }
    var reviewHtml =
      '<div class="card border-warning mb-3 col-lg-4 col-sm-4">' +
      '<div class="card-body">' +
      '<i class="fa-regular fa-star">' +
      starsHtml +
      "</i>" +
      '<h5 class="card-title">' +
      childData.name +
      "</h5>" +
      '<p class="card-text">' +
      childData.review +
      "</p>" +
      "</div>" +
      "</div>";
    document.getElementById("reviews").innerHTML += reviewHtml;
  });
}

displayReviews();

