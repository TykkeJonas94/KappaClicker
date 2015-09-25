if (localStorage.getItem("GameSave") != null)
{

    var save = JSON.parse(localStorage.getItem("GameSave"));
    ClickDamage = save[0].ClickDamage;
    DamagePerSecond = save[1].DamagePerSecond;
    Level = save[3].Level - 1;
    enemyCount = save[4].enemyCount;

    UpdateMoney(save[2].Money);
    UpdateLevel();
    UpdateCounter();

    console.log("----------------------Save Loaded -------------------------------------");


}
DrawShop();