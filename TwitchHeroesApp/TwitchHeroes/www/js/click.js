/**
 * Created by kenn3898 on 23-09-2015.
 */

var Money = 0;

var ClickDamage = 1;
var DamagePerSecond = 0;
var EnemyHealth;


var CurrentEnemy = new MakeEnemy(EnemyList[Math.floor(Math.random() * EnemyList.length)], 100, 2000);


(function($){
    console.log(CurrentEnemy);
    $(document).on('click','#enemy',function(){
        EnemyHealth -= ClickDamage;
    });

})(jQuery);