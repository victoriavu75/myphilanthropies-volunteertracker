$(document).ready(function(){
    sendPersonalDetails();
    $('button').on('click', function(){
        if ($(this).hasClass('select-multiple')){
            if ($(this).hasClass('is-link')) {
                console.log('this works?')
                $(this).removeClass('is-link');
            }
            else {
                $(this).removeClass('is-link');
                $(this).addClass('is-link');
            }
        }
    });
  });
//JSON objects to send to the server
var personalInfo = {
    "first_name": "",
    "last_name": "",
    "middle_init": "",
    "gender": "Prefer not to say",
    "age_range": 0,
    "job_status": "",
    "driver": "",
    "reliable_transportation": ""
};

//First replace empty strings with information from the user inputs
//Then, on click of the "submit", send the information to the server.
function sendPersonalDetails()
{
    $('#first-name').change(function()
    {
        personalInfo["first_name"] = this.value;
    });
    $('#last-name').change(function()
    {
        personalInfo["last_name"] = this.value;
    });
    $('#middle-initial').change(function()
    {
        personalInfo["middle_init"] = this.value;
    });
    $('#student').click(function()
    {
        personalInfo.job_status += "Student ";
    });
    $('#full-time').click(function()
    {
        personalInfo.job_status += "Full-Time ";
    });
    $('#part-time').click(function()
    {
        personalInfo.job_status += "Part-Time ";
    });
    $('#unemployed').click(function()
    {
        personalInfo.job_status += "Unemployed ";
    });
    if ($('#checkbox-1').prop("checked"))
    {
        personalInfo.reliable_transportation = "Y";
    }
    else
    {
        personalInfo.reliable_transportation = "N";
    }
    if ($('#checkbox-2').prop("checked"))
    {
        personalInfo.driver = "Y";
    }
    else
    {
        personalInfo.driver = "N";
    }
    console.log(personalInfo);
}