/**
 * Created by kenn3898 on 23-09-2015.
 */

var Popup = false;
var Money = 0;
var Level = 1;
var enemyCount = 1;
var maxEnemy = 10;
var CurrentEnemy = new MakeEnemy(EnemyList[Math.floor(Math.random() * EnemyList.length)], Level * 10, Level * 200);


(function($)
{



    $('#moneyP').text("$ "+ Money);
    $('#levelP').text("Level: "+ Level);
    $('#counterP').text(enemyCount +" / "+ maxEnemy);

    window.UpdateLevel = function(){
        Level++;
        //$('#levelP').replaceWith("<p id='#levelP'>Level: "+ Level +"</p>");
        $('#levelP').text("Level: "+ Level);
    };

    window.UpdateCounter = function(){
        enemyCount++;
        //$('#counterP').replaceWith("<p id='#counterP'>"+ enemyCount +" / "+ maxEnemy +"</p>");
        $('#counterP').text(enemyCount +" / "+ maxEnemy);
    };

    window.UpdateMoney = function(gold){
        Money += gold;

        $('#moneyP').text("$ "+ Money);
    };
})(jQuery);

function EnemyCounter(){

    jQuery('#HealthBar').css('width',"100%");
    if(enemyCount >= maxEnemy){
        enemyCount = 0;
        UpdateLevel();
    }
    CurrentEnemy = new MakeEnemy(EnemyList[Math.floor(Math.random() * EnemyList.length)], Level * 10, Level * 200);
}