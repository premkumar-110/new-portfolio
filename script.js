var display_menu=0;function myFunction(e){e.classList.toggle("change"),document.querySelector(".nav-bar-mobile").classList.toggle("active-bar")}function reveal(){for(var e=document.querySelectorAll(".reveal"),t=0;t<e.length;t++){var l,o=window.innerHeight;e[t].getBoundingClientRect().top<o-150?e[t].classList.add("active"):e[t].classList.remove("active")}}function sendEmail(){var e=document.getElementById("name").value,t=document.getElementById("email").value,l=document.getElementById("message").value;emailjs.send("service_4oirutf","template_nwa4owo",{from_name:"websitehostformysite@gmail.com",from_email:"websitehostformysite@gmail.com",to_name:"scpprem006@gmail.com",subject:"This is the subject",message:e+" "+t+" "+l}).then(function(e){console.log("Email sent successfully!",e.status,e.text),customAlert.alert("Email sent successfully")},function(e){console.log("Failed to send email. Error:",e)})}function CustomAlert(){this.alert=function(e,t){document.body.innerHTML=document.body.innerHTML+'<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';let l=document.getElementById("dialogoverlay"),o=document.getElementById("dialogbox"),i=window.innerHeight;l.style.height=i+"px",o.style.top="100px",l.style.display="block",o.style.display="block",document.getElementById("dialogboxhead").style.display="block",void 0===t?document.getElementById("dialogboxhead").style.display="none":document.getElementById("dialogboxhead").innerHTML='<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+t,document.getElementById("dialogboxbody").innerHTML=e,document.getElementById("dialogboxfoot").innerHTML='<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>'},this.ok=function(){document.getElementById("dialogbox").style.display="none",document.getElementById("dialogoverlay").style.display="none"}}window.onload=function(){var e=document.getElementById("loader");document.getElementById("visible").style.display="block",e.style.display="none"},window.addEventListener("scroll",reveal),emailjs.init("-P_CVIJi1JBaWXeKh");let customAlert=new CustomAlert;function showProject1(){var e=document.getElementById("projectdemo"),t=document.getElementById("video-close");e.style.display="flex",t.style.display="block",console.log("Viewd")}function closeProject1(){var e=document.getElementById("projectdemo"),t=document.getElementById("video-close");e.style.display="none",t.style.display="none"}function showProject2(){var e=document.getElementById("projectdemo1"),t=document.getElementById("video-close1");e.style.display="flex",t.style.display="block",console.log("Viewd")}function closeProject2(){var e=document.getElementById("projectdemo1"),t=document.getElementById("video-close1");e.style.display="none",t.style.display="none"}