//
// $('#firstName').keyup(function () {
//     var firstName= $('#firstName').val();
//     $('#firstName1').val(firstName);
//
// });
//
//
// $('#lastName').keyup(function () {
//     var lastName= $('#lastName').val();
//     $('#lastName1').val(lastName);
//
// });
//
//
// $('#fullName').blur(function(){
//     var firstName= $('#firstName').val();
//     var lastName= $('#lastName').val();
//     var fullName= firstName+' '+lastName;
//     $('#fullName').val(fullName);
//     $('#fullName1').val(fullName);
// });
//
//
//
//
//
// function createElement()
// {
//     var newHeadingElement = document.createElement('h1');
//     var newParagraphElement = document.createElement('p');
//
//
//     newHeadingElement.innerHTML = "This is a Heading.";
//     newParagraphElement.innerHTML = "This is a Paragraph.";
//
//     document.getElementById('div').appendChild(newHeadingElement);
//     document.getElementById('div').appendChild(newParagraphElement);
// }
//
// document.getElementById('btn').onclick = function () {
//     createElement();
// };
//


$('#img1').click(function () {
    var imgSrcValue = $(this).attr('src');
    $('#mainImage').attr('src', imgSrcValue);
});


$('#img2').click(function () {
    var imgSrcValue = $(this).attr('src');
    $('#mainImage').attr('src', imgSrcValue);
});

$('#img3').click(function () {
    var imgSrcValue = $(this).attr('src');
    $('#mainImage').attr('src', imgSrcValue);
});


$('#img4').click(function () {
    var imgSrcValue = $(this).attr('src');
    $('#mainImage').attr('src', imgSrcValue);
});

