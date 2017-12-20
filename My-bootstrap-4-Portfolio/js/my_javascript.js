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

//firstName.....................................................................
    function check_firstName() {
        var firstName_length = $('#firstName').val().length;
        if (firstName_length < 6 || firstName_length > 20){
            $('#firstName_error_msg').html("FirstName Should be between 6-20 Characters!");
            $('#firstName_error_msg').show();
            return false;
            //error_firstName = true;
        } else{
            $('#firstName_error_msg').hide();
            return true;
        }
    }

    $('#firstName').focusout(function () {
        check_firstName();
    });

    $('#firstName').blur(function () {
        check_firstName();
    });

    $('#firstName').keyup(function () {
        check_firstName();
    });
//lastName.....................................................................
    function check_lastName() {
        var firstName_length = $('#lastName').val().length;
        if (firstName_length < 6 || firstName_length > 20){
            $('#lastName_error_msg').html("LastName Should be between 6-20 Characters!");
            $('#lastName_error_msg').show();
           // error_lastName = true;
            return false;
        } else{
            $('#lastName_error_msg').hide();
            return true;
        }
    }

    $('#lastName').focusout(function () {
        check_lastName();
    });

    $('#lastName').blur(function () {
        check_lastName();
    });

    $('#lastName').keyup(function () {
        check_lastName();
    });

//email.....................................................................
    function check_email() {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($('#email1').val())){
            $('#email1_error_msg').hide();
            return true;
        } else{
            $('#email1_error_msg').html("Invalid Email Address!");
            $('#email1_error_msg').show();
            return false;
            //error_email1 = true;
        }
    }

    $('#email1').focusout(function () {
        check_email();
    });

    $('#email1').blur(function () {
        check_email();
    });

    $('#email1').keyup(function () {
        check_email();
    });

//password.....................................................................
    function check_password() {
        var password = $('#password1').val().length;
        if (password < 8 ){
            $('#password1_error_msg').html("Password  Should be minimum 8 Characters!");
            $('#password1_error_msg').show();
            return false;
            //error_password1 = true;
        } else{
            $('#password1_error_msg').hide();
            return true;
        }
    }

    $('#password1').focusout(function () {
        check_password();
    });

    $('#password1').blur(function () {
        check_password();
    });

    $('#password1').keyup(function () {
        check_password();
    });


//showpassword.................................................

    $('#showRegPassword').click(function () {
        if(this.checked){
            $('#password1').attr('type', 'text');
        }else{
            $('#password1').attr('type', 'password');
        }
    });

//againPassword.....................................................................
    function check_againPassword() {
        var password = $('#password1').val();
        var againPassword = $('#againPassword').val();
        if (password != againPassword ){
            $('#again_password_error_msg').html("Password did not match!");
            $('#again_password_error_msg').show();
            return false;
            //error_again_password = true;
        } else{
            $('#again_password_error_msg').hide();
            return true;
        }
    }

    $('#againPassword').focusout(function () {
        check_againPassword();
    });

    $('#againPassword').blur(function () {
        check_againPassword();
    });

    $('#againPassword').keyup(function () {
        check_againPassword();
    });

//phone number.....................................................................

    function check_phoneNumber() {
        var phoneNumber_length = $('#phone').val().length;
        if (phoneNumber_length < 11 || phoneNumber_length > 11){
            $('#phone_error_msg').html("PhoneNumber should be 11 Characters!");
            $('#phone_error_msg').show();
            return false;
            //error_phoneNumber = true;
        } else{
            $('#phone_error_msg').hide();
            return true;
        }
    }

    $('#phone').focusout(function () {
        check_phoneNumber();
    });

    $('#phone').blur(function () {
        check_phoneNumber();
    });

    $('#phone').keyup(function () {
        check_phoneNumber();
    });

//date of birth.....................................................................

    function checkBirthDate() {
        var dateOfBirth = $('input[type="date"]').val();
        if(dateOfBirth){
            $('#date_of_birth_error_msg').hide();
            return true;
        } else {
            $('#date_of_birth_error_msg').html("Please select Date of Birth!");
            $('#date_of_birth_error_msg').show();
            return false;
        }
    }

    $('input[type="date"]').blur(function () {
        checkBirthDate();
    });


//check gender.....................................................................

function checkGender() {
    var genderValue = $('input[type="radio"]:checked').val();
    if(genderValue){
        $('#gender_error_msg').hide();
        return true;
    } else {
        $('#gender_error_msg').html("Please select a gender!");
        $('#gender_error_msg').show();
        return false;
    }
}

    $('input[type="radio"]').blur(function () {
        checkGender();
    });

//check address.....................................................................

   function checkAddress() {
       var addressLength = $('#address').val().length;
       if(addressLength > 10){
           $('#address_error_msg').hide();
           return true;
       } else {
           $('#address_error_msg').html("Address Must be more than 10 Characters!");
           $('#address_error_msg').show();
           return false;
       }
   }

$('#address').focusout(function () {
    checkAddress();
});

$('#address').blur(function () {
        checkAddress();
});

 $('#address').keyup(function () {
        checkAddress();
});


//check districtName.....................................................................

    function checkDistrict() {
        var districtName = $('#district').val();
        if(districtName == ' '){
            $('#district_error_msg').html("Please select a district ");
            $('#district_error_msg').show();
            return false;
        } else {
            $('#district_error_msg').hide();
            return true;
        }
    }

    $('#district').change(function () {
        checkDistrict();
    });



//check image.....................................................................

    function image() {
        var checkBox = $('input[type="file"]').val();
        if (checkBox) {
            $('#image_error_msg').hide();
            return true;
        } else {
            $('#image_error_msg').html("Please select 1 or more image!");
            $('#image_error_msg').show();
            return false;
        }
    }



    $('input[type="file"]').change(function () {
        image();
    });

//checkbox.......................................................

    function checkBox() {
        var checkBox = $('input[type="checkbox"]:checked').val();
        if (checkBox) {
            $('#checkbox_error_msg').hide();
            return true;
        } else {
            $('#checkbox_error_msg').html("Please select I Agree!");
            $('#checkbox_error_msg').show();
            return false;
        }
    }



$('input[type="checkbox"]').change(function () {
    checkBox();
});





    $('#myForm').submit(function () {

        if(check_firstName() == true && check_lastName() == true && check_email() == true &&
            check_password() == true && check_againPassword() == true && check_phoneNumber() == true &&
            checkBirthDate() == true && checkGender() == true && checkAddress() == true && checkDistrict()== true &&
            image() == true &&
            checkBox() == true){
            return true;
        }else {
            return false;
        }

    });
});





































