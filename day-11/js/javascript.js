

var buttonElement = document.getElementById('submit');
buttonElement.onclick = function () {
    var firstNamevalue = document.getElementById('firstName').value;
    var lastNamevalue = document.getElementById('lastName').value;
    var fullName2= firstNamevalue+' '+lastNamevalue;
    document.getElementById('fullName').value = fullName2;
};



var addBtn = document.getElementById('add');
addBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result= firstNumber+secondNumber;
    document.getElementById('result').value = result;
};

var minusBtn = document.getElementById('minus');
minusBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result= firstNumber-secondNumber;
    document.getElementById('result').value = result;
};

var multiBtn = document.getElementById('multi');
multiBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result= firstNumber*secondNumber;
    document.getElementById('result').value = result;
};


var divideBtn = document.getElementById('divide');
divideBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result= firstNumber/secondNumber;
    document.getElementById('result').value = result;
};





//array
// var paragraphElement = document.getElementsByTagName('p');
var paragraphElement = document.getElementsByTagName('a');

for(var key=0; key< paragraphElement.length; key++){
    document.write(paragraphElement[key].innerHTML+'<br/>');
    //document.write(paragraphElement[4].innerHTML+'<br/>');
}

document.write('<hr/>');
// var data= new Array();
// var data1= Array();
var data2=[];

data2[0]=10;
data2[1]=20;
data2[2]=30;

data2['name']='sofiq';
data2['city']='dhaka';
data2['country']='bangladesh';

for(var key in data2){
    document.write(data2[key]+'<br/>');
}

var data2= ['sofiq', 'dhaka', 'bangladesh'];

// document.write(data2[2]);
// document.write(data2['name']);
for(var key in data2){
    document.write(data2[key]+'<br/>');
}


document.write('<hr/>');

var data = ['sofiq', 'dhaka', 'bangladesh'];
document.write(data.length-1);

document.write('<hr/>');


// function

function demo(){
    var firstName= 'sofiqul';
    var lastName= 'islam';
    var fullName = firstName+' '+lastName;
    document.write(fullName);
}
document.write('<br/>======<br/>');
demo();
document.write('<br/>======<br/>');
demo();
document.write('<br/>======<br/>');
demo();
document.write('<br/>======<br/>');
demo();

document.write('<hr/>');


function  demo1(firstName, lastName) {
    var fullName = firstName+' '+lastName;
    document.write(fullName);

}

document.write('<br/>======<br/>');
demo1('sofiq', 'sazzad');
document.write('<hr/>');




