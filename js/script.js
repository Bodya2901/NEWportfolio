const { format } = require("upath");

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

jQuery(document).ready(function () {

    jQuery('form button').click( function () {

        if ( format.valid() ) {
            var actUrl = form.attr('action');

            jQuery.ajax({
                url:actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialsize(),
                success: function(data) {
                    form.find('.status').html('form sent');
                },
                error: function() {
                    form.find('.status').html('do not form sent');
                }
            });
        }
    });
});