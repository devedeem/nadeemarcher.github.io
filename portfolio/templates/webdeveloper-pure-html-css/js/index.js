"use strict";

//grab a form
const form = document.querySelector(".form-inline");

//grab an input
const inputEmail = form.querySelector("#inputEmail");

//config your firebase push
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPzt3zHAaOwu69rXUyLE26nIKgNQ2sud0",
  authDomain: "daring-design.firebaseapp.com",
  databaseURL: "https://daring-design-default-rtdb.firebaseio.com",
  projectId: "daring-design",
  storageBucket: "daring-design.appspot.com",
  messagingSenderId: "832759277670",
  appId: "1:832759277670:web:53704ce25ea94b555025a7",
};
document.onload = function () {
  console.log("jelljdslfjs");
  firebase.initializeApp(firebaseConfig);
};
//create a functions to push
function firebasePush(input) {
  //prevents from braking
  //   if (!firebase.apps.length) {
  // Initialize Firebase

  //   }

  //push itself
  var mailsRef = firebase.database();
  mailsRef.ref("emails").push().set({
    mail: input.value,
  });
}

//push on form submit
// if (form) {
form.addEventListener("submit", function (evt) {
  console.log("hello");
  evt.preventDefault();
  firebasePush(inputEmail);

  //shows alert if everything went well.
  return alert("Data Successfully Sent to Realtime Database");
});
// }
