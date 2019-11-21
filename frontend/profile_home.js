$(document).ready(function()
{
    loadUserInfo();
});

function loadUserInfo()
{
    var authToken = localStorage.getItem('token');
    var userInfo;
    $.ajax({
        type: "GET",
        url: "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/volunteer/personalinfo/",
        beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+authToken);
            },
        success: function(result)
            {
                console.log(result);
            }
    });
}