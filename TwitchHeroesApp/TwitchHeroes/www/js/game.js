/**
 * Created by kenn3898 on 23-09-2015.
 */

var Money = 0;
var Level = 1;
var enemyCount = 0;
var maxEnemy = 10;
var CurrentEnemy = new MakeEnemy(EnemyList[Math.floor(Math.random() * EnemyList.length)], Level * 10, Level * 200);


(function($)
{

    $('#moneyP').replaceWith("<p id='#moneyP'>$ "+ Money +"</p>");
<<<<<<< HEAD
    $('#levelP').replaceWith("<p id='#levelP'>Level: "+ Level +"</p>");
    $('#counterP').replaceWith("<p id='#counterP'>"+ enemyCount +" / "+ maxEnemy +"</p>");
=======
    //$('#levelP').replaceWith("<p id='#levelP'>Level: "+ Level +"</p>");
    //$('#counterP').replaceWith("<p id='#counterP'>"+ enemyCounter +"</p>");
>>>>>>> origin/master

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
        UpdateLevel();
    }
}


function UpdateGold(){

}