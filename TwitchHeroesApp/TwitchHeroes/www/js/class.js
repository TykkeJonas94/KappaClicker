/**
 * Created by kenn3898 on 23-09-2015.
 */

var EnemyList = [{name:"BibleThump",url:"img/enemy/BibleThump.png"}, {name:"Brain Slug",img:"img/enemy/BrainSlug.png"},{name:"Kappa",img:"img/enemy/Kappa.png"}];

function MakeEnemy(object,health,gold)
{
    this.name = object.name;
    this.img = object.url;
    this.health = health;
    this.gold = gold;
}