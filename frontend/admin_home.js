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
                //console.log(XMLHttpRequest.responseJSON);
                showEventsInDOM(XMLHttpRequest.responseJSON);
                return status;
            }
        }
    );
}

//Function that writes all the events into the HTML DOM
function showEventsInDOM(data){
    var allEvents = data.events;
    console.log(allEvents);
    var eventListing = [];
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    for(let i=0; i < allEvents.length; i++)
    {
        var eventName=allEvents[i].name;
        var dateObject = new Date(allEvents[i].start_time);
        var eventMonth = monthNames[dateObject.getUTCMonth()];
        var eventLocation = allEvents[i].location;
        var eventDate = eventMonth + " " + dateObject.getUTCDay() + ", " + dateObject.getUTCFullYear();
        if (i==0)
        {
            var HTMLWrite = '<div class="columns listingadjust">\
            <div class="column is-1"></div>\
            <div class="column is-2">\
                <h1 class="title is-6 has-text-centered">'+eventMonth+'</h1>\
                <h2 class="subtitle has-text-centered"><b class="date">'+eventDate+'</b></h2>\
            </div>\
            <div class="vertical"></div>\
            <div class="column is-6">\
                <h1 class="title is-6">'+eventName+'</h1>\
                <h2 class="subtitle is-7">'+eventLocation+'</h2>\
                <div class="tags">\
                    <span class="tag is-link is-light"><span class="icon"><i class="fas fa-car"></i></span>Drivers required</span>\
                    <span class="tag is-link is-light"><span class="icon"><i class="fas fa-sign-language"></i></span>ASL</span>\
                </div>\
                <p class="learnmore"><a>+ Learn More</a></p>\
            </div>\
            <div class="column is-2 ">\
                <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-pencil-alt"></i></span><b>Edit Event</b></button>\
                <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-trash"></i></span><b>Delete Event</b></button>\
                <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-people-carry"></i></span><b>See Volunteers</b></button>\
            </div>\
            <div class="column is-1 "></div>\
        </div>'
        }
        else{
            var HTMLWrite = '<div class="columns afterlistings">\
        <div class="column is-1"></div>\
        <div class="column is-2">\
            <h1 class="title is-6 has-text-centered">'+eventMonth+'</h1>\
            <h2 class="subtitle has-text-centered"><b class="date">'+eventDate+'</b></h2>\
        </div>\
        <div class="vertical"></div>\
        <div class="column is-6">\
            <h1 class="title is-6">'+eventName+'</h1>\
            <h2 class="subtitle is-7">'+eventLocation+'</h2>\
            <div class="tags">\
                <span class="tag is-link is-light"><span class="icon"><i class="fas fa-car"></i></span>Drivers required</span>\
                <span class="tag is-link is-light"><span class="icon"><i class="fas fa-sign-language"></i></span>ASL</span>\
            </div>\
            <p class="learnmore"><a>+ Learn More</a></p>\
        </div>\
        <div class="column is-2 ">\
            <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-pencil-alt"></i></span><b>Edit Event</b></button>\
            <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-trash"></i></span><b>Delete Event</b></button>\
            <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-people-carry"></i></span><b>See Volunteers</b></button>\
        </div>\
        <div class="column is-1 "></div>\
    </div>'
        }
        eventListing.push(HTMLWrite);
    }
    document.getElementById("eventlisting").innerHTML = eventListing.join(' ');
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