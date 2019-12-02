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
        url: "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/peinfo/events",
        beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+authToken);
            },
        success: function(result)
            {
                showEventsInDOM(result);
            }
    });
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
        //The first event listing will always have a special CSS class to is to account for the search bar
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
                <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-clipboard"></i></span><b>RSVP</b></button>\
            </div>\
            <div class="column is-1"></div>\
        </div>'
        }
        //The subsequent classes won't require that special class and have their own styling
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
                <button class="button btncolor hidebtns"><span class="icon"><i class="fas fa-clipboard"></i></span><b>RSVP</b></button>\
            </div>\
            <div class="column is-1 "></div>\
        </div>'
        }
        eventListing.push(HTMLWrite);
    }
    document.getElementById("eventlisting").innerHTML = eventListing.join(' ');
}