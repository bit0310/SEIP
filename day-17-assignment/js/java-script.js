alert(document.getElementById('h1').innerHTML);
//alert($('#h1').text('Hello world'));


var btnElement = document.getElementById('submit');
btnElement.onclick = function(){

    var firstNumber = Number(document.getElementById('firstNumber').value);
    var endNumber = Number(document.getElementById('endNumber').value);
    var res = '';
    for(var x=firstNumber; x<=endNumber; x++){
        res+=x;
        document.getElementById('result').value = res ;
    }

};





var redbtnElement = document.getElementById('redBtn');
redbtnElement. onclick= function(){
    var divOneElement = document.getElementById('divOne');
    //divOneElement.style.backgroundColor = 'red';
    divOneElement.className = 'class-one';

};


var greenbtnElement = document.getElementById('greenBtn');
greenbtnElement.onclick = function(){
    var divOneElement = document.getElementById('divOne');
    //divOneElement.style.backgroundColor = 'green';
    divOneElement.className = 'class-two';
};


var bluebtnElement = document.getElementById('blueBtn');
bluebtnElement.onclick = function(){
    var divOneElement = document.getElementById('divOne');
    //divOneElement.style.backgroundColor = 'blue';
    divOneElement.className = 'class-three';

};


var defaultbtnElement = document.getElementById('defaultBtn');
defaultbtnElement.onclick = function(){
    var divOneElement = document.getElementById('divOne');
    //divOneElement.style.backgroundColor = 'white';
    divOneElement.className = 'class-four';
};




//jquery start




$('#btn').click(function(){
    var firstNameValue= $('#firstName').val();
    var lastNameValue= $('#lastName').val();
    var fullName= firstNameValue+' '+lastNameValue;
    $('#fullName').val(fullName);
});


$('#btn1').click(function () {
    var firstNumber= Number($('#firstNumber1').val());
    var lastNumber= Number($('#lastNumber1').val());
    var result= firstNumber+lastNumber;
    $('#result1').val(result);
});


$('#btn2').click(function () {
    var firstNumber= Number($('#firstNumber1').val());
    var lastNumber= Number($('#lastNumber1').val());
    var result= firstNumber-lastNumber;
    $('#result1').val(result);
});


$('#btn3').click(function () {
    var firstNumber= Number($('#firstNumber1').val());
    var lastNumber= Number($('#lastNumber1').val());
    var result= firstNumber*lastNumber;
    $('#result1').val(result);
});

$('#btn4').click(function () {
    var firstNumber= Number($('#firstNumber1').val());
    var lastNumber= Number($('#lastNumber1').val());
    var result= firstNumber/lastNumber;
    $('#result1').val(result);
});



