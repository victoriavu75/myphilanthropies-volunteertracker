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
    "type": "",
    "phone_number": 0,
    "text": "Y"
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
    $('#selfemployed').click(function()
    {
        personalInfo.job_status += "Self-employed ";
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
        contactInfo.type = "Home";
    });
    $('#cell-number').click(function()
    {
        contactInfo.type = "Cell";
    });
    $('#phonenumber').change(function()
    {
        contactInfo.phone_number = "+1"+this.value;
    });
    changeCheckBox3();
}

function changeCheckBox3()
{
    if (contactInfo.text == "Y")
    {
        contactInfo.text = "N";
    }
    else{
        contactInfo.text = "Y";
    }
}

//Submitting the personalInfo object to the endpoint
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
                return status;
            }
        }
    );
}

//Submitting contactInfo object to the endpoint
function submitContactInfo()
{
    var contactInfoEndpoint = "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/volunteer/contactinfo/";
    var x = localStorage.getItem("token");
    return $.ajax(
        {
            type: "POST",
            url: contactInfoEndpoint,
            dataType: 'json',
            data: JSON.stringify(contactInfo),
            contentType: 'application/json; char=utf-8',
            beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+x);
            },
            complete: function(XMLHttpRequest, status)
            {
                console.log(status);
                return status;
            }
        }
    );
}

//On click event, send everything and return so that you don't create multiple send requests
function submitInformation()
{
    $("button").click(function(e){
        e.preventDefault();
        submitPersonalInfo();
        submitContactInfo();
        submitSkills();
    });

}

//testing skills
function submitSkills()
{
    var skillEndpoint = "http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/volunteer/skills/";
    var x = localStorage.getItem('token');
    var test = {
        "hardskills": [
            {
                "hard_skill": "Programming"
            }
        ],
        "softskills": [
            {
                "soft_skill": "teamwork"
            }
        ]
};
    return $.ajax(
        {
            type: "POST",
            url: skillEndpoint,
            dataType: 'json',
            data: JSON.stringify(test),
            contentType: 'application/json; char=utf-8',
            beforeSend: function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader('Authorization', "Token "+x);
            },
            complete: function(XMLHttpRequest, status)
            {
                console.log(status);
                return status;
            }
        }
    );
}