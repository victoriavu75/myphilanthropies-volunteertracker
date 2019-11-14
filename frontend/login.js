function logIn()
{
    $('#form-container').unbind().on('submit', function(e){
        e.preventDefault();
        var details = $('#form-container').serialize();
        $.post('http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/idm/login', details, function(data){
            /*if (data.message = "Invalid credentials.")
                {
                    document.getElementById("invalidpass").style.display = "block";
                }
            else */if (data.firstTime == true)
                {
                    window.location.replace("personal-details_v2.html");
                }
            else if (data.firstTime == false){
                console.log("Send to profile page.");
            }
            console.log(data);
            return;
        })
    })
}

