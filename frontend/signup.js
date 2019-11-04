function sendEmail() {
    $('#form-container').unbind().on('submit', function (e) {
        e.preventDefault();
        var details = $('#form-container').serialize();
        $.post('http://127.0.0.1:8000/idm/register', details, function (data) {
            console.log(data);
        //Make separate alerts for response codes
        })
    })
}
