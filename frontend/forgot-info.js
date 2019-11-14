function sendForgotEmail()
{
    var xhttp = new XMLHttpRequest();
    var email = document.getElementById("pswemail").value;
    xhttp.open("POST", "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/idm/reset/request", true);
    xhttp.setRequestHeader("username", email);
    xhttp.send();
    console.log('sent');
}