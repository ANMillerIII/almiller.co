// Google Tag
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-176048536-1');

// Scroll transition color
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        console.log($(this).scrollTop(), $nav.height())
    });
});

// Send get_in_touch_form
$(document).ready(function () {
    $("#submit_get_in_touch").click(function (e) {
        e.preventDefault();
        var first_name = $("#first_name").val(),
            last_name = $("#last_name").val(),
            email_address = $("#email_address").val(),
            phone_number = $("#phone_number").val();
            when_to_call = $("#when_to_call").val(),
            how_found = $("#how_found").val();
            subject = $("#subject").val();
            elaboration = $("#elaboration").val();


        
        // submit to dynamodb
        $.ajax({
            type: "POST",
            url: 'https://3o7m812l2i.execute-api.us-east-1.amazonaws.com/prod',
            contentType: 'application/json',
            data: JSON.stringify({
                'first_name': first_name,
                'last_name': last_name,
                'email_address': email_address,
                'phone_number': phone_number,
                'when_to_call': when_to_call,
                'how_found': how_found,
                'subject': subject,
                'elaboration': elaboration,                
            }),
            success: function (res) {
                console.log("yes");
                $('#form-response').text('Email was sent.');
            },
            error: function () {
                console.log("nope");
                $('#form-response').text('Error.');
            }
        });

            // submit request
        $.ajax({
            type: "POST",
            url: 'https://e9gt09evxd.execute-api.us-east-1.amazonaws.com/getintouch',
            contentType: 'application/json',
            data: JSON.stringify({
                'first_name': first_name,
                'last_name': last_name,
                'email_address': email_address,
                'phone_number': phone_number,
                'when_to_call': when_to_call,
                'how_found': how_found,
                'subject': subject,
                'elaboration': elaboration,                
            }),
            success: function (res) {
                console.log("yo this worked");
                $('#form-response').text('Email was sent.');
            },
            error: function () {
                console.log("naho this workdded");
                $('#form-response').text('Error.');
            }
        });


    })
});

// Send email_sign_up_form
$(document).ready(function () {
    $("#submit_email").click(function (e) {
        e.preventDefault();
        var first_name = $("#first_name").val(),
            last_name = $("#last_name").val(),
            email_address = $("#email_address").val()

        $.ajax({
            type: "POST",
            url: 'https://wlac8ij5md.execute-api.us-east-1.amazonaws.com/emailsignup',
            contentType: 'application/json',
            data: JSON.stringify({
                'first_name': first_name,
                'last_name': last_name,
                'email_address': email_address            
            }),
            success: function (res) {
                console.log("yo this worked");
                $('#form-response').text('Email was sent.');
            },
            error: function () {
                console.log("ynaho this workdded");
                $('#form-response').text('Error.');
            }
        });


        // submit to dynamodb
        $.ajax({
            type: "POST",
            url: 'https://3o7m812l2i.execute-api.us-east-1.amazonaws.com/prod',
            contentType: 'application/json',
            data: JSON.stringify({
                'first_name': first_name,
                'last_name': last_name,
                'email_address': email_address            
            }),
            success: function (res) {
                console.log("dynamo worked");
                $('#form-response').text('Email was sent.');
            },
            error: function () {
                console.log("dynamo did not work");
                $('#form-response').text('Error.');
            }
        });


    })

});