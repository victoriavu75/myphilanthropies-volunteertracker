$(document).ready(function(){
    $('button').on('click', function(){
        if ($(this).hasClass('select-multiple')){
            if ($(this).hasClass('is-primary')) {
                $(this).removeClass('is-primary');
            }
            else {
                $(this).removeClass('is-primary');
                $(this).addClass('is-primary');
            }
        }
    });
});