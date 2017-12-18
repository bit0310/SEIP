//menu-bar
$(document).ready(function(){
    $('#menu').hover(function () {

        $("#dropdown").hover(function() {
            $('#dropdown-menu', this).fadeIn("medium");
            },
            function() { $('#dropdown-menu', this).fadeOut("fast");
            });

        $("#sub-dropdown").click(function() {
                $('#sub-dropdown-menu', this).fadeIn("medium");
            },
            function() { $('#sub-dropdown-menu', this).fadeOut("fast");
            });
    });

});



//scroll to top
$(document).ready(function(){
    $(window).scroll(function (){
        if ($(this).scrollTop() > 200) {
            $('#gotoup').fadeIn();
        } else {
            $('#gotoup').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#gotoup').click(function (){
        $("html, body").animate({scrollTop:0}, 500);
    });

});


// gallery page
$(document).ready(function(){
    $('#lightgallery').lightGallery();
});


//skillbar
$(document).ready(function(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },5000);
    });
});


//show password

$('#showPassword').click(function(){
    var password = $('#password');
    var fieldType = password.attr('type');
    if (fieldType == 'password') {
        password.attr('type', 'text');
        $(this).text("Hide password");
    }else{
        password.attr('type', 'password');
        $(this).text("Show password");
    }

});

//Register form validation

$(function () {
    $('#firstName_error_msg').hide();
    $('#lastName_error_msg').hide();
    $('#email1_error_msg').hide();
    $('#password1_error_msg').hide();
    $('#again_password_error_msg').hide();
    $('#phone_error_msg').hide();


    var error_firstName = false;
    var error_lastName = false;
    var error_email1 = false;
    var error_password1 = false;
    var error_again_password = false;
    var error_phoneNumber = false;

    $('#firstName').focusout(function () {
        check_firstName();
    });

    $('#lastName').focusout(function () {
        check_lastName();
    });

    $('#email1').focusout(function () {
        check_email();
    });

    $('#password1').focusout(function () {
        check_password();
    });

    $('#againPassword').focusout(function () {
        check_againPassword();
    });
    $('#phone').focusout(function () {
        check_phoneNumber();
    });


//firstName.....................................................................
    function check_firstName() {
        var firstName_length = $('#firstName').val().length;
        if (firstName_length < 6 || firstName_length > 20){
            $('#firstName_error_msg').html("FirstName Should be between 6-20 Characters!");
            $('#firstName_error_msg').show();
            error_firstName = true;
        } else{
            $('#firstName_error_msg').hide();
        }
    }
//lastName.....................................................................
    function check_lastName() {
        var firstName_length = $('#lastName').val().length;
        if (firstName_length < 6 || firstName_length > 20){
            $('#lastName_error_msg').html("LastName Should be between 6-20 Characters!");
            $('#lastName_error_msg').show();
            error_lastName = true;
        } else{
            $('#lastName_error_msg').hide();
        }
    }

//email.....................................................................
    function check_email() {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($('#email1').val())){
            $('#email1_error_msg').hide();
        } else{
            $('#email1_error_msg').html("Invalid Email Address!");
            $('#email1_error_msg').show();
            error_email1 = true;
        }
    }

//password.....................................................................
    function check_password() {
        var password = $('#password1').val().length;
        if (password < 8 ){
            $('#password1_error_msg').html("Password  Should be minimum 8 Characters!");
            $('#password1_error_msg').show();
            error_password1 = true;
        } else{
            $('#password1_error_msg').hide();
        }
    }

//againPassword.....................................................................
    function check_againPassword() {
        var password = $('#password1').val();
        var againPassword = $('#againPassword').val();
        if (password != againPassword ){
            $('#again_password_error_msg').html("Password did not match!");
            $('#again_password_error_msg').show();
            error_again_password = true;
        } else{
            $('#again_password_error_msg').hide();
        }
    }

//phone number.....................................................................

    function check_phoneNumber() {
        var phoneNumber_length = $('#phone').val().length;
        if (phoneNumber_length < 11 || phoneNumber_length > 11){
            $('#phone_error_msg').html("PhoneNumber should be 11 Characters!");
            $('#phone_error_msg').show();
            error_phoneNumber = true;
        } else{
            $('#phone_error_msg').hide();
        }
    }

    $('#myForm').submit(function () {
        var error_firstName = false;
        var error_lastName = false;
        var error_email1 = false;
        var error_password1 = false;
        var error_again_password = false;
        var error_phoneNumber = false;

        if(error_firstName == false && error_lastName == false && error_email1==false && error_password1 == false &&
            error_again_password==false && error_phoneNumber == false){
            return true;
        }else{
            return false;
        }

    });
});





































