/**
 * Created by kenn3898 on 23-09-2015.
 */

var Money = 0;
var Level = 1;
var currentEnemy = 0;
var maxEnemy = 10;
var enemyCounter = currentEnemy + " / " + maxEnemy;
var CurrentEnemy = new MakeEnemy(EnemyList[Math.floor(Math.random() * EnemyList.length)], Level * 10, Level * 200);

(function($)
{
    $('#enemyImg').replaceWith("<img src='"+ CurrentEnemy.img +"' id='enemy' class='enemy'>");
})(jQuery);

    function EnemyCounter(){

        CurrentEnemy = new MakeEnemy(EnemyList[Math.floor(Math.random() * EnemyList.length)], Level * 10, Level * 200);
        console.log(CurrentEnemy);
        jQuery.('#enemy').replaceWith("<img src='"+ CurrentEnemy.img +"' id='enemy' class='enemy'>");
        currentEnemy++;

        if(currentEnemy >= maxEnemy){
            Level++;
        }
    }

