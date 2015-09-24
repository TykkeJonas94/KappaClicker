if (localStorage.getItem("GameSave") != null)
{

    var save = JSON.parse(localStorage.getItem("GameSave"));
    ClickDamage = save[0].ClickDamage;
    DamagePerSecond = save[1].DamagePerSecond;
    console.log("----------------------Save Loaded -------------------------------------");
    console.log("ClickDamage: " + save[0].ClickDamage);
    console.log("DamagePerSecond: " + save[1].DamagePerSecond);
    console.log("----------------------Save Done -------------------------------------");
}