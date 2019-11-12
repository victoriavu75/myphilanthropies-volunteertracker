$(document).ready(function(){
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