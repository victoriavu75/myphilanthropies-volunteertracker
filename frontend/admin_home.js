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