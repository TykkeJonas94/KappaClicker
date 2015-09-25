/**
 * Created by kenn3898 on 23-09-2015.
 */
var ClickDamage = 1;
var DamagePerSecond = 1;

(function($){
var HealthBar = $('#HealthBar');
var HealthText = $('#healthText');
var EnemyName = $('#nameP');
var image = $('#enemyImg');

    $(EnemyName).text(CurrentEnemy.name);
    $(HealthText).text(CurrentEnemy.health + " HP");

    // DamagePerSecond function runs every 0.2 second
    setInterval(function(){
        CurrentEnemy.health -= DamagePerSecond / 5;
        $(HealthText).text(CurrentEnemy.health.toFixed(0) + " HP");
        $(HealthBar).css("width", (CurrentEnemy.health / CurrentEnemy.MaxHealth) * 100 + "%");
        if (CurrentEnemy.health <= 0)
        {
            GiveMoney(Math.floor(CurrentEnemy.gold));
            EnemyCounter();
            UpdateCounter();
            $(HealthBar).css("width","100%");
            $(EnemyName).text(CurrentEnemy.name);
            $(image).attr("src",CurrentEnemy.img);
        }
    }, 200);


        // when enemy is clicked
    $(document).on('click','#enemy',function(){
        CurrentEnemy.health -= ClickDamage;
        $(HealthText).text(CurrentEnemy.health.toFixed(0) + " HP");
        $(HealthBar).css("width", (CurrentEnemy.health / CurrentEnemy.MaxHealth) * 100 + "%");
        if (CurrentEnemy.health <= 0)
        {
            GiveMoney(Math.floor(CurrentEnemy.gold));
            EnemyCounter();
            UpdateCounter();
            $(HealthBar).css("width","100%");
            $(EnemyName).text(CurrentEnemy.name);
            $(image).attr("src",CurrentEnemy.img);
        }
    });

    // creates visual money, that goes up when the enemy dies.
    function GiveMoney(gold)
    {
        if (Popup == false) {
            // create ticket
            var ticket = "<div class='ticket'><h1>+" + gold + "</h1></div>";
            $(ticket).appendTo("body");
            var ThisTicket = $('.ticket').last();
            // get window dimentions
            var ww = $(window).width();
            var wh = $(window).height();
            var posx = Math.floor(Math.random() * ww - 20);
            var posy = (wh / 3);
            ThisTicket.last().css("top", posy + "px").css("left", posx + "px");
            ThisTicket.last()
                .animate({
                    opacity: 'hide',      // animate fade
                    top: 0        // animation slideUp
                }, 1500, function () {
                    $(this).remove();
                });
             }
        UpdateMoney(gold);
    }
})(jQuery);
