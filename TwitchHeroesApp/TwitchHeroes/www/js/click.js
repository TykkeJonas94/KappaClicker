/**
 * Created by kenn3898 on 23-09-2015.
 */


var ClickDamage = 20;
var DamagePerSecond = 0;





(function($){

    setInterval(function(){
        CurrentEnemy.health -= DamagePerSecond;
        if (CurrentEnemy.health <= 0)
        {
            GiveMoney(Math.floor(CurrentEnemy.gold / 3));
            EnemyCounter();
        }
    }, 1000);
    $(document).on('click','#enemy',function(){
        CurrentEnemy.health -= ClickDamage;
        if (CurrentEnemy.health <= 0)
        {
            GiveMoney(Math.floor(CurrentEnemy.gold / 3));
            EnemyCounter();
        }


        function GiveMoney(gold)
        {
            for (var i = 0; i < 3; i++)
            {
            // create ticket
            var ticket="<div class='ticket'><p>+"+ gold +"</p></div>";
            $(ticket).appendTo("body");
            var ThisTicket = $('.ticket').last();
            // get window dimentions
            var ww = $(window).width();
            var wh = $(window).height();
            var posx = Math.floor(Math.random() * ww - 20);
            var posy = (wh / 3);
                console.log("Pos x: " + posx);
                console.log("Pos y; " + posy);
            ThisTicket.last().css("top", posy + "px").css("left", posx + "px");
            ThisTicket.last()
                .animate({
                    opacity: 'hide',      // animate fade
                    top: 0        // animation slideUp
                }, 1500, function() {
                    $(this).remove();
                });
            }
        }
    });



})(jQuery);
