$('#navbar-toggler-button').click(function () {
    $('#navbar-toggler-icon').toggleClass('flip180');
});

$('.navbar-brand').click(function () {
    let tabs = $('.tab');
    tabs.removeClass('active');
    $('#go-to-home').addClass('active');

    let layouts = $('.layout');
    layouts.addClass('hide');

    $('#home').removeClass('hide');
});

$('.tab').click(function () {
    $('#navbar-toggler-icon').toggleClass('flip180');
    $('.navbar-collapse').collapse('hide');

    let tabs = $('.tab');
    tabs.removeClass('active');
    $(this).addClass('active');

    let layouts = $('.layout');
    layouts.addClass('hide');
    let go_to = $(this).data('go-to');

    $(go_to).removeClass('hide');

    // window.history.pushState('data', 'Egor Turchinovich', '/' + go_to.substring(1, go_to.length));
});