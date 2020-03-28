$('.form-control').focusout(function() {
    $('.form-group').removeClass('focus');
});
$('.form-control').focus(function() {
    $(this).closest('.form-group').addClass('focus');
});

/// Check for the input field keypress
$('.form-control').keyup(function() {
    if($(this).val().length > 0){
        $(this).closest('.form-group').addClass('filled');
    }

    else{
        $(this).closest('.form-group').removeClass('filled');
    }
});

/// Check for the input field filled focus
var $formControl = $('.form-control');
var values = {};
var validate =    $formControl.each(function() {
    if($(this).val().length > 0){
        $(this).closest('.form-group').addClass('filled');
    }
    else{
        $(this).closest('.form-group').removeClass('filled');
    }
});