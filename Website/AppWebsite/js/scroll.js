/**
 * Created by kenn3898 on 16-09-2015.
 */
(function($)
{
    var speed = 600;
    // scroll down page when menu-anchor is clicked
    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );
        if (!$("Menu").is(":animated")) {
            if (target.length) {
                event.preventDefault();
                $('html, body').finish().stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
                    console.log("function 1 going up");
                $('#Menu').animate({
                    'top': "-=100px" //moves right
                }, speed, 'linear');
                $('#Menudiv ul').slideUp(1000);
                $('#Menudiv').slideUp(1000);
            }
        }
    });






    // menu scroll down
    $('#Menu').click(function() {
        var menu = $('#Menu');
        if( !$("#Menu").is(":animated") ){
            if ($('#Menudiv').is(":visible")) {
                console.log("function 2 going up");
                $(menu).finish().stop().animate({
                    'top': "-=100px"  //moves right
                }, speed, 'linear');
                $('#Menudiv ul').slideUp(600);
                $('#Menudiv').slideUp(600);
            }
            else
            {
                console.log("function 3 going down");
                $(menu).finish().stop().animate({
                    'top': "+=100px" //moves right
                },speed,'linear');
                $('#Menudiv').slideDown(600);
                $('#Menudiv ul').slideDown(600);

           }
        }
    });





})(jQuery);