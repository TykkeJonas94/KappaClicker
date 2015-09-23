/**
 * Created by kenn3898 on 23-09-2015.
 */

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
        console.log(Level);
        //$('#levelP').replaceWith("<p id='#levelP'>Level: "+ Level +"</p>");
        $('#levelP').text("Level: "+ Level);
    };

    window.UpdateCounter = function(){
        enemyCount++;
        console.log(enemyCount);
        //$('#counterP').replaceWith("<p id='#counterP'>"+ enemyCount +" / "+ maxEnemy +"</p>");
        $('#counterP').text(enemyCount +" / "+ maxEnemy);
    };

})(jQuery);

function EnemyCounter(){

    CurrentEnemy = new MakeEnemy(EnemyList[Math.floor(Math.random() * EnemyList.length)], Level * 10, Level * 200);
    jQuery('#HealthBar').css('width',"100%");
    if(enemyCount >= maxEnemy){
        enemyCount = 0;
        UpdateLevel();
    }
}


function UpdateGold(){

}