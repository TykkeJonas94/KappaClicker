/**
 * Created by jona796m on 23-09-2015.
 */

/**Upgrade Effect Value 0 = +damagePerClick */
/**Upgrade Effect Value     1 = +damagePerSecond */

var UpgradeList = [ {upgName:"upgrade1", upgPrice:10, upgEffectName:"+1 Damage per Click", upgEffectValue:0, upgEffect:1},
                    {upgName:"upgrade2", upgPrice:40, upgEffectName:"+1 Damage per Second", upgEffectValue:1, upgEffect:1}
];

function upgrade(upgName, upgPrice, upgEffectName, upgEffectValue, upgEffect){
    this.upgName = upgName;
    this.upgPrice = upgPrice;
    this.upgEffectName = upgEffectName;
    this.upgEffectValue = upgEffectValue;
    this.upgEffect = upgEffect;
}

$(document).on('click','#shop',function(){
    for(var i = 0; i < UpgradeList.length; i++){

    }
});

