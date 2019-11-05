function sendEmail() {
    $('#form-container').unbind().on('submit', function (e) {
        e.preventDefault();
        var details = $('#form-container').serialize();
        $.post('http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/idm/register', details, function (data) {
            console.log(data);
        //Make separate alerts for response codes
        })
    })
}
