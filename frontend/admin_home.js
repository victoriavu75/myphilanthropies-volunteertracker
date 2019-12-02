$(document).ready(function(){
    //Load up event info
    loadEvents();
});

eventObject = {
    "id": 10,
    "program": 3,
    "name": "event for affordable professional services",
    "description": "event description",
    "start_time": "2020-01-10T12:00:00Z",
    "end_time": "2020-01-10T15:00:00Z",
    "location": "Irvine, CA",
    "desired_hard_skills": [
        1,
        2,
        3
    ],
    "desired_soft_skills": [
        1,
        2,
        5
    ]};

//Function that loads up all the events in the event database
function loadEvents()
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
            complete: function(XMLHttpRequest, status)
            {
                //Write into the DOM using the event info
                console.log(XMLHttpRequest.responseJSON);
                showEventsInDOM(XMLHttpRequest.responseJSON);
                console.log(status);
                return status;
            }
        }
    );
}

//Function that writes all the events into the HTML DOM
function showEventsInDOM(data){
    var HTMLWrite = "<div>"
}

//Function to send event data
function addEvent(){
    
}
    
//Toggle the add event form
function openForm() {
    document.getElementById("event-form").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("event-form").style.display = "none";
}