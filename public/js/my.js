$(document).ready(function() {
    $('#captcha').click(function() {
        $.ajax({
            type: 'GET',
            url: 'reloadcaptcha',
            success: function(data) {
                $(".captcha").html(data.captcha);
            }
        });
    });
});