//---------------------------------------lastName---------------

function checkFirstName() {
    var firstNameLength =  $('#firstName').val().length;
    if(firstNameLength>=6 && firstNameLength<16){
        $('#firstName_Error').text(' ');
        return true;
    }else{
        $('#firstName_Error').text('First Name Should be between 6 to 15');
        return false;
    }
}

$('#firstName').click(function () {
    checkFirstName();
});

$('#firstName').blur(function () {
    checkFirstName();
});
$('#firstName').keyup(function () {
    checkFirstName();

});
//---------------------------------------lastName--------------------
function checkLastName() {
    var lastNameLength =  $('#lastName').val().length;
    if(lastNameLength>=6 && lastNameLength<16){
        $('#lastName_Error').text(' ');
        return true;
    }else{
        $('#lastName_Error').text('First Name Should be between 6 to 15');
        return false;
    }
}

$('#lastName').click(function () {
    checkLastName();
});

$('#lastName').blur(function () {
    checkLastName();
});
$('#lastName').keyup(function () {
    checkLastName();

});


//---------------------------------------lastName--------------------
function checkGender() {
    var genderValue =  $('input[type="radio"]:checked').val();
    if(genderValue){
        $('#genderError').text(' ');
        return true;
    }else{
        $('#genderError').text('Please select a gender');
        return false;
    }
}

$('input[type="radio"]').blur(function () {
    checkGender();
});






//----------------------------------email-----------------

function email() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if(pattern.test($('#email').val())){
        $('#email_Error').text(' ');
        return true;
    }else{
        $('#email_Error').text('Invalid Email!');
        return false;
    }
}


$('#email').blur(function () {
    email();
});
$('#email').keyup(function () {
    email();

});


//---------------------------------password----------------------

function password() {
    var passwordLength =  $('#password').val().length;
    if(passwordLength> 8){
        $('#password_Error').text(' ');
        return true;
    }else{
        $('#password_Error').text('Password Should be more than 8');
        return false;
    }
}

$('#password').click(function () {
    password();
});

$('#password').blur(function () {
    password();
});
$('#password').keyup(function () {
    password();

});

//---------------------------------Show password----------------------

$('#checkbox').click(function () {
    if(this.checked){
        $('#password').attr('type', 'text');
    }else{
        $('#password').attr('type', 'password');
    }
});






//--------------------------------- confirm password--------------------


function ConfirmPassword() {
    var password =  $('#password').val();
    var confirmPassword =  $('#againPassword').val();
    if(password == confirmPassword){
        $('#againPassword_Error').text(' ');
        return true;
    }else{
        $('#againPassword_Error').text('Password did not match!');
        return false;
    }
}

$('#againPassword').blur(function () {
    ConfirmPassword();
});
$('#againPassword').keyup(function () {
    ConfirmPassword();

});


//--------------------------------- option------------------------


function checkDistrictName() {
    var districtName =  $('#districtName').val();
    if(districtName == ' '){
        $('#districtName_Error').text('Please select a district name');
        return false;
    }else{
        $('#districtName_Error').text(' ');
        return true;
    }
}

$('#districtName').change(function () {
    checkDistrictName();
});




$('#registration').submit(function () {
    if(checkFirstName() == true && checkLastName() == true && checkGender() == true && email() == true &&
        password() == true && ConfirmPassword() == true && checkDistrictName() == true){
        return true;
    }else {
        return false;
    }
});
