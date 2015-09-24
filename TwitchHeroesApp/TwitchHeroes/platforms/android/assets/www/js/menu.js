/**
 * Created by kenn3898 on 24-09-2015.
 */

var CanGoTrue = 0;


$(document).on('click','.dialogPopup', function(){
    Popup = true;
});


function Write(text, margin)
{

    var ticket = "<h1 class='SavedGame'> "+ text +" </h1>";
    $(ticket).appendTo("body");
    var ThisTicket = $('.SavedGame');
    var ww = $(window).width();
    var wh = $(window).height();
    var posx = Math.floor((ww / 5));
    var posy = Math.floor((wh / 3));
    if (margin != 0)
    {
        ThisTicket.css("top", posy + "px").css("left", posx + "px").css("margin-left", margin + "%");
    }
    else
    {
        ThisTicket.css("top", posy + "px").css("left", posx + "px");
    }

    ThisTicket
        .animate({
            opacity: 'hide',      // animate fade
            top: 0        // animation slideUp
        }, 1500, function () {
            $(this).remove();
        });
}


// save game
$(document).on('click','#SaveGame',function(){
    console.log("Clicked");
    Popup = false;
    window.localStorage.setItem("GameSave", JSON.stringify(
        [
            {"ClickDamage": ClickDamage},
            {"DamagePerSecond": DamagePerSecond}
        ]));

    Write("Saved Game!",0);
});




$(document).on('click','.ui-btn',function(){
    console.log("CanGoTrue = " + CanGoTrue);
    if (CanGoTrue == 0) {
        Popup = false;
    }
    else
    {
        CanGoTrue--;
        console.log("CanGoTrue- : " + CanGoTrue);
    }
});

$(document).on('click','.back',function()
{
    if (CanGoTrue == 0)
    {
        Popup = false;
    }

});
$(document).on('click','.plus',function(){
    CanGoTrue++;
});


$(document).on('click','#Resetme',function(){

    window.localStorage.removeItem("Contact");
    Popup = false;
    Write("Reset", 16);
});



$("#contactform").submit(function(event){
    var contactname = $('#contactName').val();
    var contactemail = $('#contactEmail').val();
    var contactcomment = $('#contactComment').val();

    if(contactname.length > 2)
    {
        if (contactemail.length > 12)
        {
            window.localStorage.setItem("Contact", JSON.stringify(
                [
                    {"name": contactname},
                    {"email": contactemail},
                    {"comment": contactcomment}
                ]
            ));
        }
    }
});