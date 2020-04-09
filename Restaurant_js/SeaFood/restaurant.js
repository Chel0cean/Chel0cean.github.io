//if #Email is =""


function sendMe() {
  console.log("inside send");
var email = String(document.getElementById("reqfield").value);
if (email == "") {
document.getElementById("error").style.display = "block";
document.getElementById("error").innerHTML = "*Please complete this field.";
return false;
}
document.getElementById("error").style.display = "none";
document.getElementById("sent").style.display = "block";
document.getElementById("sent").innerHTML ="<br>*Thank you for your submission! We will be in touch with you within 48 hours.";
return false;
}

function refreshMe() {
  console.log("inside refresh function");
  document.getElementById("myName").value = "";
  return false;
}
