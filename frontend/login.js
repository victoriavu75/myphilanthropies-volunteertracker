function logIn()
{
    $('#form-container').unbind().on('submit', function(e){
        e.preventDefault();
        var details = $('#form-container').serialize();
        $.post('http://ec2-3-15-201-67.us-east-2.compute.amazonaws.com/idm/login', details, function(data){
            console.log(data);
            return;
        })
    })
}