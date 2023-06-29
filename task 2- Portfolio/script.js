hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function () {
  nav.classList.toggle("active");
};
let vid = document.getElementById("myVideo");
vid.playbackRate = 0.5;

//---------------contact form-------------------

function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let body =
    "Name: " +
    name +
    "<br> Email: " +
    email +
    "<br> Mobile no: " +
    phone +
    "<br> Message: " +
    message;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ankur662002@gmail.com",
    Password: "B47DFDFC513BF876786C5F33551701DF313F",
    To: "ankurmessi5@gmail.com",
    From: "ankur662002@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body: body,
  }).then((message) => alert("Message send successfully!!"));
}