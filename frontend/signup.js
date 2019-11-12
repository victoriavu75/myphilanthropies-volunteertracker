function sendEmail() {
    $('#form-container').unbind().on('submit', function (e) {
        e.preventDefault();
        var details = $('#form-container').serialize();
        $.post('http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/idm/register', details, function (data) {
            console.log(data);
        //Make separate alerts for response codes
            if (data.message == "JSON Mapping Exception.")
            {
                console.log("Problem with connecting endpoints.");
                document.getElementById("endPointError").style.display = "block";
                document.getElementById("serverError").style.display = "none";
                document.getElementById("userAlreadyExists").style.display = "none";
                document.getElementById("successRegister").style.display = "none";
                return;
            }
            else if (data.message == "Internal server error.")
            {
                console.log("Something wrong with server.");
                document.getElementById("endPointError").style.display = "none";
                document.getElementById("serverError").style.display = "block";
                document.getElementById("userAlreadyExists").style.display = "none";
                document.getElementById("successRegister").style.display = "none";
                return;
            }
            else if (data.message == "User already exists.")
            {
                console.log("There's a user already associated with this email.");  
                document.getElementById("endPointError").style.display = "none";
                document.getElementById("serverError").style.display = "none";
                document.getElementById("userAlreadyExists").style.display = "block";
                document.getElementById("successRegister").style.display = "none";
                return;
            }
            else
            {
                console.log("User registered successfully.");
                document.getElementById("endPointError").style.display = "none";
                document.getElementById("serverError").style.display = "none";
                document.getElementById("userAlreadyExists").style.display = "none";
                document.getElementById("successRegister").style.display = "block";
                return;
            }
        })
    })
}


