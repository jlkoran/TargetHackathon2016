// changes themes based on age
$("input[name='age']").click(function () {
    $('#child-form').css('display', ($(this).val() === 'child') ? 'block':'none');
    $('#ya-form').css('display', ($(this).val() === 'ya') ? 'block':'none');
    $('#adult-form').css('display', ($(this).val() === 'adult') ? 'block':'none');
});

// function f1(){
//     // $("input[id='theme']").click(function () {
//     // 	$('#sophisticated')
//     // }

// 	document.getElementById("function-click").href="stock_results2.html";
// }

// $("input[id='theme']").click(function () {
//     $('#sophisticated').click(function() {
// 			  window.location='/stock_results.html';
// 			});
//     $('#superheroes').click(function() {
// 			  window.location='stock_results2.html';
// 			});
// });


// function submit(){

// }

// myLink = document.getElementById('function-click');
// myLink.onclick = submit();
