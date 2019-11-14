$(document).ready(function(){
    updatePersonalDetails();
    updateContactInfo();
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
    "driver": "N",
    "reliable_transportation": "N"
};

var contactInfo = {
    "street": "777 somewhere ave.",
    "city": "someplace",
    "state": "CA",
    "zip_code": 92612,
    "numbers": []
};

//First replace empty strings with information from the user inputs
//Then, on click of the "submit at the end" button, send the information to the server.
function updatePersonalDetails()
{
    $('#first-name').change(function()
    {
        personalInfo.first_name = this.value;
    });
    $('#last-name').change(function()
    {
        personalInfo.last_name = this.value;
    });
    $('#middle-initial').change(function()
    {
        personalInfo.middle_init = this.value;
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
    if (document.querySelector('#checkbox1').checked)
    {
        personalInfo.reliable_transportation = "Y";
    }
    else{
        personalInfo.reliable_transportation = "N";
    }
    if (document.querySelector('#checkbox2').checked)
    {
        personalInfo.driver = "Y";
    }
    else{
        personalInfo.driver = "N";
    }
}

function updateContactInfo()
{
    $('#street-name').change(function()
    {
        contactInfo.street = this.value;
    });
    $('#city-name').change(function()
    {
        contactInfo.city = this.value;
    });
    $('#state-name').change(function()
    {
        contactInfo.state = this.value;
    });
    $('#zipcode').change(function()
    {
        contactInfo.zip_code = this.value;
    });
    //Add the numbers to the list of phone numbers
    var phone_info = {
        "type": "",
        "area_code": 0,
        "phone_number": 0,
        "text": "Y"
    }
    $('#home-number').click(function()
    {
        phone_info.type = "Home";
    });
    $('#cell-number').click(function()
    {
        phone_info.type = "Cell";
    });
    if ($('#switchText').prop("checked") == true)
    {
        phone_info.text = "Y";
    }
    else
    {
        phone_info.text = "N";
    }
    contactInfo.numbers.push(phone_info);
}
