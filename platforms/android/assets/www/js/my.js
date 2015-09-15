

var Kappas = 25;         // Here comes the money!
var KappasPerSecond = 0;            // Kappas Per Second!
var KappaPerClick = 1;  // Fuck nu af!

(function($){
    $(document).on('click', '.app', function(){
        setKappas(+KappaPerClick);
    });

    $(document).on('click', '.effects', function(){
        var price = $(this).text();
        price = parseInt(price);

        if(getKappas() < price){
            alert("Not enough Kappas.. :)");
        }
        else{
            setKappas(-price);
            if($(this).is("#plusPerClick")){
                setKappaPerClick(+1);
                price += 1;
                $(this).replaceWith("<li class='effects' id='plusPerClick'>"+ price +"</li>");
            }
            else if($(this).is("#plusPerSecond")){
                setKappaPerSecond(+1);
                price += 1;
                $(this).replaceWith("<li class='effects' id='plusPerSecond'>"+ price +"</li>");
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