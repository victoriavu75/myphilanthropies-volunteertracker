$(document).ready(function(){
    //Success
    getEventObjects();
    //Success
    testPostingEventObjects();
});

function getEventObjects()
{
    var eventEndpoint = "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/peinfo/events";
    var x = localStorage.getItem('token');
    return $.ajax(
        {
            type: "GET",
            url: eventEndpoint,
            dataType: 'json',
            contentType: 'application/json; char=utf-8',
            async:false,
            beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+x);
            },
            complete: function(data, status)
            {
                console.log(data.responseJSON);
                console.log(status);
                return status;
            }
        }
    );
}

function testPostingEventObjects()
{
    var eventEndpoint = "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/peinfo/events/add";
    var x = localStorage.getItem('token');
    var testEvent = {
        "name": "event_name",
        "pid": 1,
        "pid": 2,
        "after_date": "2019-12-25",
        "before_date": "2020-02-01",
        "hard_skills": 2,
        "soft_skills": 3
    };
    return $.ajax(
        {
            type: "POST",
            url: eventEndpoint,
            dataType: 'json',
            contentType: 'application/json; char=utf-8',
            data: JSON.stringify(testEvent),
            async:false,
            beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+x);
            },
            complete: function(data, status)
            {
                console.log(data);
                console.log(status);
                return status;
            }
        }
    );
}