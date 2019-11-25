$(document).ready(function()
{
    loadUserInfo();
    //Add in function to set the picture 
    loadEventInfo();
});

function loadUserInfo()
{
    var authToken = localStorage.getItem('token');
    $.ajax({
        type: "GET",
        url: "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/volunteer/personalinfo/",
        beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+authToken);
            },
        success: function(result)
            {
                return setUserInfo(result);
            }
    });
    $.ajax({
        type: "GET",
        url: "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/volunteer/contactinfo/",
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

function setUserInfo(response)
{
    console.log(response);
   $("#volunteer-name").html(response[response.length-1].first_name);
}

function loadEventInfo()
{
    var authToken = localStorage.getItem('token');
    $.ajax({
        type: "GET",
        url: "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com//peinfo/events",
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