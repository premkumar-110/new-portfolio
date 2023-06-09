var display_menu = 0;
function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector(".nav-bar-mobile").classList.toggle("active-bar");
}

window.onload = function () {
  var loader = document.getElementById("loader");
  var visible = document.getElementById("visible");
  visible.style.display = "block";
  loader.style.display = "none";
};

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

(function(){
  emailjs.init("-P_CVIJi1JBaWXeKh");
  console.log("initiated")
})();

function sendEmail() { // Prevent the form from submitting normally
  
  var templateId = 'template_nwa4owo'; // Replace 'YOUR_TEMPLATE_ID' with your EmailJS template ID
  
  var userName=document.getElementById('name').value;
  var userEmail=document.getElementById('email').value;
  var userBody=document.getElementById('message').value;

  var templateParams = {
    from_name: "websitehostformysite@gmail.com",
    from_email: "websitehostformysite@gmail.com",
    to_name: 'scpprem006@gmail.com', // Replace with the recipient's name
    subject: "This is the subject",
    message: userName+" " + userEmail +" "+ userBody 
  };
  
  emailjs.send('service_n2s6ukm', templateId, templateParams)
    .then(function(response) {
      console.log('Email sent successfully!', response.status, response.text);
      customAlert.alert("Email sent successfully")
    }, function(error) {
      console.log('Failed to send email. Error:', error);
    });
}


function CustomAlert(){
  this.alert = function(message,title){
    document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById('dialogoverlay');
    let dialogbox = document.getElementById('dialogbox');
    
    let winH = window.innerHeight;
    dialogoverlay.style.height = winH+"px";
    
    dialogbox.style.top = "100px";

    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";
    
    document.getElementById('dialogboxhead').style.display = 'block';

    if(typeof title === 'undefined') {
      document.getElementById('dialogboxhead').style.display = 'none';
    } else {
      document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
    }
    document.getElementById('dialogboxbody').innerHTML = message;
    document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
  }
  
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}
let customAlert = new CustomAlert();



function showProject1(){
  var project=document.getElementById('projectdemo');
  var close=document.getElementById('video-close');
  project.style.display='flex';
  close.style.display='block';
  console.log("Viewd");
}
function closeProject1(){
  var project=document.getElementById('projectdemo');
  var close=document.getElementById('video-close');
  project.style.display='none';
  close.style.display='none';
}
function showProject2(){
  var project=document.getElementById('projectdemo1');
  var close=document.getElementById('video-close1');
  project.style.display='flex';
  close.style.display='block';
  console.log("Viewd");
}
function closeProject2(){
  var project=document.getElementById('projectdemo1');
  var close=document.getElementById('video-close1');
  project.style.display='none';
  close.style.display='none';
}