// changes themes based on age
$("input[name='age']").click(function () {
    $('#child-form').css('display', ($(this).val() === 'child') ? 'block':'none');
    $('#ya-form').css('display', ($(this).val() === 'ya') ? 'block':'none');
    $('#adult-form').css('display', ($(this).val() === 'adult') ? 'block':'none');
});