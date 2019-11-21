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
    "month": "",
    "day": "",
    "year": "",
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

//Add the numbers to the list of phone numbers
var phone_info = {
    "type": "",
    "phone_number": 0,
    "text": "Y"
}

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
    $('#month').change(function()
    {
        personalInfo.month = this.value;
    });
    $('#day').change(function()
    {
        personalInfo.day = this.value;
    });
    $('#year').change(function()
    {
        personalInfo.year = this.value;
    });
    $('#genderselect').change(function()
    {
        personalInfo.gender = this.value;
    })
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
}

function changeCheckBox1()
{
    if (personalInfo.reliable_transportation == "Y")
    {
        personalInfo.reliable_transportation = "N";
    }
    else{
        personalInfo.reliable_transportation = "Y";
    }
}

function changeCheckBox2()
{
    if (personalInfo.driver == "Y")
    {
        personalInfo.driver = "N";
    }
    else{
        personalInfo.driver = "Y";
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
        contactInfo.zip_code = parseInt(this.value);
    });
    $('#home-number').click(function()
    {
        phone_info.type = "Home";
    });
    $('#cell-number').click(function()
    {
        phone_info.type = "Cell";
    });
    $('#phonenumber').change(function()
    {
        phone_info.phone_number = "+1"+this.value;
    })
    contactInfo.numbers.push(phone_info);
}

function changeCheckBox3()
{
    if (phone_info.text == "Y")
    {
        phone_info.text = "N";
    }
    else{
        phone_info.text = "Y";
    }
}

function submitPersonalInfo()
{
    var x = localStorage.getItem("token");
    var personalInfoEndpoint = "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/volunteer/personalinfo/";
    return $.ajax(
        {
            type: "POST",
            url: personalInfoEndpoint,
            dataType: 'json',
            data: personalInfo,
            beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+x);
            },
            complete: function(XMLHttpRequest, status)
            {
                console.log(status);
            }
        }
    );
}

function submitContactInfo()
{
    var contactInfoEndpoint = "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/volunteer/contactinfo/";
    var x = localStorage.getItem("token");
    return $.ajax(
        {
            type: "POST",
            url: contactInfoEndpoint,
            dataType: 'json',
            data: contactInfo,
            beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+x);
            },
            complete: function(XMLHttpRequest, status)
            {
                console.log(status);
            }
        }
    );
}

function submitInformation()
{
    $("button").click(function(e){
        e.preventDefault();
        submitPersonalInfo();
        submitContactInfo();
        return;    
    });     
}