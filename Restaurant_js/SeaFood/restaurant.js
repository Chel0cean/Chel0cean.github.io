//if #Email is =""


function send() {
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

function refresh() {

  document.getElementById(‘name’).value = ”“;
  return false;
}
