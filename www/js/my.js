

var Kappas = 0;            // Here comes the money!
var KappasPerSecond = 0;    // Kappas Per Second!
var KappaPerClick = 1;      // Fuck nu af!


(function($){
    setKappaPerSecond(KappasPerSecond);
    // Save games
    $(document).on('click','#Resetme', function(){
        window.localStorage.setItem("GameSave", JSON.stringify(
            [
                {"Kappas": 0},
                {"KappasPerClick": 0}
            ]
        ));
    });

    $(document).on('click','#SaveGame', function(){
        console.log("saving");
        window.localStorage.setItem("GameSave", JSON.stringify(
            [
                {"Kappas": Kappas},
                {"KappasPerClick": KappaPerClick}
            ]
        ));
    });

    // Update Kappas Per second;
    window.setInterval(function(){

        console.log("running KPS");
        Kappas += KappasPerSecond;
        $('.kappas').replaceWith("<p class='kappas'> Kappas: "+ Kappas +"</p>");

    },1000);


    // click on kappa for money
    $(document).on('click','.app',function()
    {
        setKappas(KappaPerClick);


        CreateTicket();
    });

    // check form submit and set local storage
    $("#contactform").submit(function(event){
        var contactname = $('#name').val();
        var contactemail = $('#email').val();
        alert(contactname);

        console.log(contactname.length);
        console.log(contactemail.length);
        if(contactname.length > 2)
        {
            console.log("im in");
            if (contactemail.length > 12)
            {
                console.log("setting item");
                window.localStorage.setItem("Contact", JSON.stringify(
                    [
                        {"name": contactname},
                        {"email": contactemail}
                    ]
                ));
            }
        }
    });

    // create ticket to slide up when kappaface is clicked
    function CreateTicket()
    {
        // create ticket
        var ticket="<div class='ticket'><p>+"+ KappaPerClick +"</p></div>";
        $(ticket).appendTo("body");
        var ThisTicket = $('.ticket').last();
        // get window dimentions
        var ww = $(window).width();
        var wh = $(window).height();
        var posx = Math.random() * ww - 20;
        var posy = (wh / 3);
        ThisTicket.last().css("top", posy + "px").css("left", posx + "px");
        ThisTicket.last()
            .animate({
                opacity: 'hide',      // animate fade
                top: 0        // animation slideUp
            }, 1500, function() {
                $(this).remove();
            });
    }

    $(document).on('click', '.effects', function(){
        var upgrade = $(this);
        var price = "";
        var upgradeQuant = "";

        if(upgrade.is("#plusPerClick")){
            price = parseInt($('#effectOnePrice').text());
            upgradeQuant = parseInt($('#effectOneQuant').text());

            if(getKappas() < price){
                alert("Not enough Kappas.. :)");
            }
            else{
                setKappas(-price);
                setKappaPerClick(+1);
                price += 1;
                upgradeQuant ++;
                $('#effectOnePrice').replaceWith("<p id='effectOnePrice'>"+ price +"</p>");
                $('#effectOneQuant').replaceWith("<p id='effectOneQuant'>"+ upgradeQuant +"</p>")
            }
        }
        else if(upgrade.is("#plusPerSecond")){
            price = parseInt($('#effectTwoPrice').text());
            upgradeQuant = parseInt($('#effectTwoQuant').text());

            if(getKappas() < price){
                alert("Not enough Kappas.. :)");
            }
            else{
                setKappas(-price);
                setKappaPerSecond(+1);
                price += 1;
                upgradeQuant ++;
                $('#effectTwoPrice').replaceWith("<p id='effectTwoPrice'>"+ price +"</p>");
                $('#effectTwoQuant').replaceWith("<p id='effectTwoQuant'>"+ upgradeQuant +"</p>")
            }
        }
    });

    function getKappas(){
        return Kappas;
    }

    function setKappas(number){
        Kappas += number;
        $('.kappas').replaceWith("<p class='kappas'>Kappas: " + Kappas + "</p>");
    }

    function setKappaPerClick(number){
        KappaPerClick += number;
    }

    function setKappaPerSecond(number){
        KappasPerSecond += number;
        $('#KPS').replaceWith("<p id='KPS'> Kappas Per Second: "+ KappasPerSecond +"</p>");
    }
})(jQuery);