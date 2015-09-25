/**
 * Created by jona796m on 23-09-2015.
 */

/**Upgrade Effect Value     0 = +damagePerClick */
/**Upgrade Effect Value     1 = +damagePerSecond */


var UpgradeList = [ {upgName:"upgrade1", upgPrice:10, upgEffectName:"+1 Damage per Click", upgEffectValue:0, upgEffect:1, upgQuantity:0},
                    {upgName:"upgrade2", upgPrice:100, upgEffectName:"+10 Damage per Click", upgEffectValue:0, upgEffect:10, upgQuantity:0},
                    {upgName:"upgrade3", upgPrice:40, upgEffectName:"+1 Damage per Second", upgEffectValue:1, upgEffect:1, upgQuantity:0},
                    {upgName:"upgrade4", upgPrice:400, upgEffectName:"+10 Damage per Second", upgEffectValue:1, upgEffect:10, upgQuantity:0}
];

function upgrade(upgName, upgPrice, upgEffectName, upgEffectValue, upgEffect, upgQuantity){
    this.upgName = upgName;
    this.upgPrice = upgPrice;
    this.upgEffectName = upgEffectName;
    this.upgEffectValue = upgEffectValue;
    this.upgEffect = upgEffect;
    this.upgQuantity = upgQuantity;
}

(function($){
    // Draws shop
    window.DrawShop = function(){
        for(var i = 0; i < UpgradeList.length; i++){
            $('#upgradeList').append('<div class="effects" id="effects'+ i +'">');
            $('#upgradeList').append('</div>');

            $('#effects'+ i).append('<p class="listItem">'+ UpgradeList[i].upgName +'</p>');
            $('#effects'+ i).append('<p class="listItem">'+ UpgradeList[i].upgEffectName +'</p>');
            $('#effects'+ i).append('<p class="listItem" id="d'+ i +'">'+ UpgradeList[i].upgQuantity +'</p>');
            $('#effects'+ i).append('<p class="listItem upgBuy" id="e'+ i +'">'+ UpgradeList[i].upgPrice +'</p>');
        }
    }
    $(document).on('click','.upgBuy',function(){
        var upgradeID = $(this).attr('id');
        upgradeID = upgradeID.replace('e', '');

        if(Money > UpgradeList[upgradeID].upgPrice) {

            UpgradeList[upgradeID].upgQuantity++;
            UpdateMoney(-$(this).text());

            if (UpgradeList[upgradeID].upgEffectValue == 0) {
                ClickDamage += UpgradeList[upgradeID].upgEffect;
                UpdateShopText('d'+upgradeID);

            }
            else if (UpgradeList[upgradeID].upgEffectValue == 1) {
                DamagePerSecond += UpgradeList[upgradeID].upgEffect;
                UpdateShopText('d' + upgradeID);
            }
        }

    });
        // updates shop text
    function UpdateShopText(id)
    {
        var value = parseInt($('#'+ id).text());
        value++;
        $('#'+ id).text(value);
    }
})(jQuery);