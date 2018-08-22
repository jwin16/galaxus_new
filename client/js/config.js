var socket = io();
var WIDTH = 1200;
var HEIGHT = 1000;

var TILE_SIZE = 32;


var ctx = document.getElementById("ctx").getContext("2d");
var ctxIntro = document.getElementById("ctx-intro").getContext("2d");
var ctxUi = document.getElementById("ctx-ui").getContext("2d");
var ctxFx = document.getElementById("ctx-fx").getContext("2d");

ctxUi.font = '30px Arial';


// Menu & intro vars 
//
var cloudOneX = 0; 
var cloudTwoX = -1500; 
var starOneY = 1500; 
var starTwoY = 0; 


var galaxySound = new Audio('/client/audio/travelyey.mp3');
var legendSound = new Audio('/client/audio/legends.mp3');
var lavaSound = new Audio('/client/audio/intense.mp3');
var pulseSound = new Audio('/client/audio/onwards.mp3');
var windgustSound = new Audio('/client/audio/windgust.mp3');
var comebackSound = new Audio('/client/audio/comeback.mp3');
var whereareyouSound = new Audio('/client/audio/whereareyou.mp3');
var levelUpSound = new Audio('/client/audio/ding2.mp3');
var famazeSound = new Audio('/client/audio/famaze.mp3');
var shrineSound = new Audio('/client/audio/mystic.mp3');
var gameDeathSound = new Audio('/client/audio/gameover.mp3');
var typeSound = new Audio('/client/audio/keyboard2.mp3');
var bookSound = new Audio('/client/audio/bookopen2.mp3');
var popSound = new Audio('/client/audio/pop.mp3');
var yaySound = new Audio('/client/audio/yay.mp3');

var cashSound = new Audio('/client/audio/getcoins.mp3');
var potionSound = new Audio('/client/audio/healpot.mp3');


var orcSound = new Audio('/client/audio/thief.mp3');
var wooshSound1 = new Audio('/client/audio/woosh.mp3');
var wooshSound2 = new Audio('/client/audio/woosh.mp3');
var wooshSound3 = new Audio('/client/audio/woosh.mp3');
var swingSound = new Audio('/client/audio/swingsword.mp3');
var dashSound = new Audio('/client/audio/dashswing.mp3');

var ouchSound = new Audio('/client/audio/jab.mp3');
var ninebitSound = new Audio('/client/audio/9bit.mp3');
var jaguarSound = new Audio('/client/audio/jaguar.mp3');
var riseSound = new Audio('/client/audio/healone.mp3');

var starFallSound = new Audio('/client/audio/starf.mp3');
var starFallSound1 = new Audio('/client/audio/starf.mp3');
var starFallSound2 = new Audio('/client/audio/starf.mp3');
var starFallSound3 = new Audio('/client/audio/starf.mp3');
var starFallSound4 = new Audio('/client/audio/starf.mp3');
var starFallSound5 = new Audio('/client/audio/starf.mp3');
var starFallSound6 = new Audio('/client/audio/starf.mp3');



// Main config settings 
//
var DEBUG = true; 
var allowAudio = true; 


var Img = {};

Img.menu = new Image();
Img.menu.src = '/client/img/menu/menuw.png';

Img.class = {}; 
Img.attack = {}; 
Img.enemy = {};
Img.map = {}; 
Img.effect = {};
Img.mob = {};
Img.portrait = {};
Img.item = {};


Img.item['longSword'] = new Image();
Img.item['longSword'].src = "/client/img/items/longsword.png";

Img.mob['fairy'] = new Image();
Img.mob['fairy'].src = "/client/img/sprites/mob/angelsix.gif";

Img.mob['warriormaster'] = new Image();
Img.mob['warriormaster'].src = "/client/img/sprites/mob/warriormaster.png";

Img.mob['magemaster'] = new Image();
Img.mob['magemaster'].src = "/client/img/sprites/mob/angelseven.png";

Img.mob['healermaster'] = new Image();
Img.mob['healermaster'].src = "/client/img/sprites/mob/angelfive.png";

Img.mob['enchantermaster'] = new Image();
Img.mob['enchantermaster'].src = "/client/img/sprites/mob/enchanter.png";

Img.mob['guri'] = new Image();
Img.mob['guri'].src = "/client/img/sprites/mob/guri.gif";

Img.mob['cat'] = new Image();
Img.mob['cat'].src = "/client/img/sprites/mob/cat.png";

Img.mob['beefairy'] = new Image();
Img.mob['beefairy'].src = "/client/img/sprites/mob/beefairy.png";

Img.mob['happycat'] = new Image();
Img.mob['happycat'].src = "/client/img/sprites/mob/cat.png";

Img.mob['dog'] = new Image();
Img.mob['dog'].src = "/client/img/sprites/mob/dog.png";

Img.mob['angelone'] = new Image();
Img.mob['angelone'].src = "/client/img/sprites/mob/angelone.png";

Img.mob['angelthree'] = new Image();
Img.mob['angelthree'].src = "/client/img/sprites/mob/angelthree.png";

Img.mob['prince'] = new Image();
Img.mob['prince'].src = "/client/img/sprites/mob/prince.gif";

Img.mob['ladyzi'] = new Image();
Img.mob['ladyzi'].src = "/client/img/sprites/mob/ladyzi.gif";

Img.mob['tibet'] = new Image();
Img.mob['tibet'].src = "/client/img/sprites/mob/tibet.gif";

Img.mob['toki'] = new Image();
Img.mob['toki'].src = "/client/img/sprites/mob/toki.png";

Img.mob['dancer'] = new Image();
Img.mob['dancer'].src = "/client/img/sprites/mob/dancer.gif";


Img.mob['mothernature'] = new Image();
Img.mob['mothernature'].src = "/client/img/sprites/mob/mothernature.gif";

Img.mob['siren'] = new Image();
Img.mob['siren'].src = "/client/img/sprites/mob/siren.gif";

Img.mob['queen'] = new Image();
Img.mob['queen'].src = "/client/img/sprites/mob/queen.gif";

Img.mob['green'] = new Image();
Img.mob['green'].src = "/client/img/sprites/mob/green.gif";

Img.mob['rydia'] = new Image();
Img.mob['rydia'].src = "/client/img/sprites/mob/nature.gif";

Img.mob['guri'] = new Image();
Img.mob['guri'].src = "/client/img/sprites/mob/guri.gif";

Img.mob['harvey'] = new Image();
Img.mob['harvey'].src = "/client/img/sprites/mob/harvey.png";

Img.mob['leblanc'] = new Image();
Img.mob['leblanc'].src = "/client/img/sprites/mob/leblanc.gif";

Img.enemy['levi'] = new Image();
Img.enemy['levi'].src = "/client/img/sprites/enemies/levi.png";

Img.enemy['siren'] = new Image();
Img.enemy['siren'].src = "/client/img/sprites/enemies/siren.png";

Img.enemy['angel'] = new Image();
Img.enemy['angel'].src = "/client/img/sprites/enemies/siren.png";

Img.enemy['zemus'] = new Image();
Img.enemy['zemus'].src = "/client/img/sprites/enemies/zemus.png";

Img.enemy['jenova'] = new Image();
Img.enemy['jenova'].src = "/client/img/sprites/enemies/jenova.png";

Img.enemy['silverfish'] = new Image();
Img.enemy['silverfish'].src = "/client/img/sprites/enemies/silverfish.png";

Img.enemy['golbez'] = new Image();
Img.enemy['golbez'].src = "/client/img/sprites/enemies/golbez.png";

Img.enemy['smallBat'] = new Image();
Img.enemy['smallBat'].src = "/client/img/sprites/enemies/brownbat.png";

Img.enemy['pinkBat'] = new Image();
Img.enemy['pinkBat'].src = "/client/img/sprites/enemies/pinkbat.png";

Img.enemy['redbat'] = new Image();
Img.enemy['redbat'].src = "/client/img/sprites/enemies/redbat.png";

Img.enemy['goldBat'] = new Image();
Img.enemy['goldBat'].src = "/client/img/sprites/enemies/goldbat.png";

Img.enemy['greenBat'] = new Image();
Img.enemy['greenBat'].src = "/client/img/sprites/enemies/greenbat.png";

Img.enemy['wombat'] = new Image();
Img.enemy['wombat'].src = "/client/img/sprites/enemies/lilwombat.png";

Img.enemy['frostBat'] = new Image();
Img.enemy['frostBat'].src = "/client/img/sprites/enemies/frostbat.png";

Img.enemy['frostBat'] = new Image();
Img.enemy['frostBat'].src = "/client/img/sprites/enemies/frostbat.png";

Img.enemy['swampDweller'] = new Image();
Img.enemy['swampDweller'].src = "/client/img/sprites/enemies/tonberry.png";

Img.enemy['frostDweller'] = new Image();
Img.enemy['frostDweller'].src = "/client/img/sprites/enemies/frosttonberry.png";

Img.enemy['willow'] = new Image();
Img.enemy['willow'].src = "/client/img/sprites/enemies/shining.png";

Img.enemy['largeSwampDweller'] = new Image();
Img.enemy['largeSwampDweller'].src = "/client/img/sprites/enemies/tonberry.png";

Img.enemy['orcPup'] = new Image();
Img.enemy['orcPup'].src = "/client/img/sprites/enemies/orcPup.png";

Img.enemy['orcDruid'] = new Image();
Img.enemy['orcDruid'].src = "/client/img/sprites/enemies/orcDruid.png";

Img.enemy['orcWarrior'] = new Image();
Img.enemy['orcWarrior'].src = "/client/img/sprites/enemies/orcTwo.png";

Img.enemy['frostskele'] = new Image();
Img.enemy['frostskele'].src = "/client/img/sprites/enemies/frostskele2.png";

Img.enemy['bee'] = new Image();
Img.enemy['bee'].src = "/client/img/sprites/enemies/bee2.png";

Img.enemy['orcSlaveMaster'] = new Image();
Img.enemy['orcSlaveMaster'].src = "/client/img/sprites/enemies/orcSlave.png";

Img.enemy['orcKing'] = new Image();
Img.enemy['orcKing'].src = "/client/img/sprites/enemies/orcKing.png";

Img.enemy['orcServant'] = new Image();
Img.enemy['orcServant'].src = "/client/img/sprites/enemies/orc.png";

Img.enemy['centaur'] = new Image();
Img.enemy['centaur'].src = "/client/img/sprites/enemies/centaur.gif";

Img.enemy['phoenix'] = new Image();
Img.enemy['phoenix'].src = "/client/img/sprites/enemies/phoenix.png";

Img.enemy['largePhoenix'] = new Image();
Img.enemy['largePhoenix'].src = "/client/img/sprites/enemies/phoenix.png";

Img.enemy['tiv'] = new Image();
Img.enemy['tiv'].src = "/client/img/sprites/enemies/kingdrag.png";

Img.enemy['gate1'] = new Image();
Img.enemy['gate1'].src = "/client/img/sprites/enemies/gate1.png";

Img.enemy['gate2'] = new Image();
Img.enemy['gate2'].src = "/client/img/sprites/enemies/gate2.png";

Img.enemy['gate3'] = new Image();
Img.enemy['gate3'].src = "/client/img/sprites/enemies/gate3.png";

Img.enemy['gate4'] = new Image();
Img.enemy['gate4'].src = "/client/img/sprites/enemies/gate4.png";


Img.enemy['darkRider'] = new Image();
Img.enemy['darkRider'].src = "/client/img/sprites/enemies/darkrider.png";

Img.enemy['frostRider'] = new Image();
Img.enemy['frostRider'].src = "/client/img/sprites/enemies/frostrider.png";

Img.enemy['sshraWisk'] = new Image();
Img.enemy['sshraWisk'].src = "/client/img/sprites/enemies/leviblue.gif";

Img.enemy['sshraMarrow'] = new Image();
Img.enemy['sshraMarrow'].src = "/client/img/sprites/enemies/levibig.png";

Img.enemy['sshraDesert'] = new Image();
Img.enemy['sshraDesert'].src = "/client/img/sprites/enemies/desertssha.png";

Img.enemy['sshraScaled'] = new Image();
Img.enemy['sshraScaled'].src = "/client/img/sprites/enemies/levigreen.gif";

Img.enemy['sshraGuard'] = new Image();
Img.enemy['sshraGuard'].src = "/client/img/sprites/enemies/levigreen.gif";

Img.enemy['queenSshra'] = new Image();
Img.enemy['queenSshra'].src = "/client/img/sprites/enemies/leviblue.gif";

Img.enemy['frostSshra'] = new Image();
Img.enemy['frostSshra'].src = "/client/img/sprites/enemies/leviblue.gif";

Img.enemy['lordSshra'] = new Image();
Img.enemy['lordSshra'].src = "/client/img/sprites/enemies/sshralord.png";

Img.enemy['blackDragon'] = new Image();
Img.enemy['blackDragon'].src = "/client/img/sprites/enemies/blackdragon.png";

Img.enemy['darkDragon'] = new Image();
Img.enemy['darkDragon'].src = "/client/img/sprites/enemies/darkDragon.png";

Img.enemy['dragonSmall'] = new Image();
Img.enemy['dragonSmall'].src = "/client/img/sprites/enemies/dragonSmall.png";

Img.enemy['dragonSmallIce'] = new Image();
Img.enemy['dragonSmallIce'].src = "/client/img/sprites/enemies/smallDragon.png";

Img.enemy['darkmatter'] = new Image();
Img.enemy['darkmatter'].src = "/client/img/sprites/enemies/darkmatter.png";

Img.enemy['depthskele'] = new Image();
Img.enemy['depthskele'].src = "/client/img/sprites/enemies/depthskele.png";

Img.enemy['fireeye'] = new Image();
Img.enemy['fireeye'].src = "/client/img/sprites/enemies/fireeye.png";

Img.enemy['firehead'] = new Image();
Img.enemy['firehead'].src = "/client/img/sprites/enemies/flamehead.png";

Img.enemy['floateye'] = new Image();
Img.enemy['floateye'].src = "/client/img/sprites/enemies/floateye.png";

Img.enemy['floateyetwo'] = new Image();
Img.enemy['floateyetwo'].src = "/client/img/sprites/enemies/floateyetwo.png";

Img.enemy['flameHead'] = new Image();
Img.enemy['flameHead'].src = "/client/img/sprites/enemies/flameHead.png";

Img.enemy['darkBug'] = new Image();
Img.enemy['darkBug'].src = "/client/img/sprites/enemies/darkbug.png";

Img.enemy['dinonew'] = new Image();
Img.enemy['dinonew'].src = "/client/img/sprites/enemies/dinonew.png";

Img.enemy['fireHorse'] = new Image();
Img.enemy['fireHorse'].src = "/client/img/sprites/enemies/firehorse.png";

Img.enemy['orcScout'] = new Image();
Img.enemy['orcScout'].src = "/client/img/sprites/enemies/orcfemale.png";

Img.enemy['kingRa'] = new Image();
Img.enemy['kingRa'].src = "/client/img/sprites/enemies/kingRa.png";

Img.enemy['ghost'] = new Image();
Img.enemy['ghost'].src = "/client/img/sprites/enemies/ghost.png";

Img.enemy['iceghost'] = new Image();
Img.enemy['iceghost'].src = "/client/img/sprites/enemies/iceghost.png";

Img.enemy['iceghostb'] = new Image();
Img.enemy['iceghostb'].src = "/client/img/sprites/enemies/iceghostb.png";

Img.enemy['iceking'] = new Image();
Img.enemy['iceking'].src = "/client/img/sprites/enemies/iceking.png";

Img.enemy['poisonSnake'] = new Image();
Img.enemy['poisonSnake'].src = "/client/img/sprites/enemies/poisonSnake.png";

Img.enemy['scropion'] = new Image();
Img.enemy['scropion'].src = "/client/img/sprites/enemies/scropion.png";

Img.enemy['samurai'] = new Image();
Img.enemy['samurai'].src = "/client/img/sprites/enemies/samurai.png";

Img.enemy['guardsamurai'] = new Image();
Img.enemy['guardsamurai'].src = "/client/img/sprites/enemies/guardsamurai.png";

Img.enemy['desertScorpion'] = new Image();
Img.enemy['desertScorpion'].src = "/client/img/sprites/enemies/desertscorpion.png";

Img.enemy['wallman'] = new Image();
Img.enemy['wallman'].src = "/client/img/sprites/enemies/wallman.png";

Img.enemy['skeleton'] = new Image();
Img.enemy['skeleton'].src = "/client/img/sprites/enemies/skeleton.png";

Img.enemy['iceskeleton'] = new Image();
Img.enemy['iceskeleton'].src = "/client/img/sprites/enemies/iceskeleton.png";

Img.enemy['whitetiger'] = new Image();
Img.enemy['whitetiger'].src = "/client/img/sprites/enemies/whitetiger.png";

Img.enemy['yellowdragon'] = new Image();
Img.enemy['yellowdragon'].src = "/client/img/sprites/enemies/yellowdragon.png";

Img.enemy['yellowWolf'] = new Image();
Img.enemy['yellowWolf'].src = "/client/img/sprites/enemies/yellowWolf.png";

Img.enemy['titan'] = new Image();
Img.enemy['titan'].src = "/client/img/sprites/enemies/titan.gif";

Img.enemy['undeadrock'] = new Image();
Img.enemy['undeadrock'].src = "/client/img/sprites/enemies/undeadrock.png";

Img.enemy['emperor'] = new Image();
Img.enemy['emperor'].src = "/client/img/sprites/enemies/emperor.png";

Img.enemy['ghostsnake'] = new Image();
Img.enemy['ghostsnake'].src = "/client/img/sprites/enemies/ghostsnake.png";

Img.enemy['scorpionman'] = new Image();
Img.enemy['scorpionman'].src = "/client/img/sprites/enemies/scorpionman.png";

Img.enemy['firebug'] = new Image();
Img.enemy['firebug'].src = "/client/img/sprites/enemies/firebug.png";

Img.enemy['firebird'] = new Image();
Img.enemy['firebird'].src = "/client/img/sprites/enemies/firebird.png";

Img.enemy['skeletonwarrior'] = new Image();
Img.enemy['skeletonwarrior'].src = "/client/img/sprites/enemies/skeletonwarrior.png";

Img.enemy['centaur'] = new Image();
Img.enemy['centaur'].src = "/client/img/sprites/enemies/centaur.png";

Img.class['mage'] = new Image();
Img.class['mage'].src = "/client/img/sprites/hero/mage.png";

Img.class['enchanter'] = new Image();
Img.class['enchanter'].src = "/client/img/sprites/hero/enchanter.png";

Img.class['ranger'] = new Image();
Img.class['ranger'].src = "/client/img/sprites/hero/ranger.png";

Img.class['healer'] = new Image();
Img.class['healer'].src = "/client/img/sprites/hero/healer.png";

Img.class['warrior'] = new Image();
Img.class['warrior'].src = "/client/img/sprites/hero/warrior3.gif";

Img.attack['warrior_hit'] = new Image();
Img.attack['warrior_hit'].src = "/client/img/sprites/hero/warriorknock2.png";

Img.attack['monk_hit'] = new Image();
Img.attack['monk_hit'].src = "/client/img/sprites/hero/monkknock.png";


Img.class['monk'] = new Image();
Img.class['monk'].src = "/client/img/sprites/hero/monk4.png";

Img.attack['warrior'] = new Image();
Img.attack['warrior'].src = "/client/img/sprites/effects/warriorattack6.gif";

Img.attack['monk'] = new Image();
Img.attack['monk'].src = "/client/img/sprites/effects/monkpunch4.png";

Img.map['mythicCity'] = new Image();
Img.map['mythicCity'].src = "/client/img/maps/city_bot_1.png";

Img.map['mythos_top'] = new Image();
Img.map['mythos_top'].src = "/client/img/maps/city_top_1.png";

Img.map['orc_top'] = new Image();
Img.map['orc_top'].src = "/client/img/maps/orc_top2.png";

Img.map['frostpeak_top'] = new Image();
Img.map['frostpeak_top'].src = "/client/img/maps/frostpeak_top2.png";

Img.map['mythicforest_top'] = new Image();
Img.map['mythicforest_top'].src = "/client/img/maps/mythicforest_top2.png";

Img.effect['fountain'] = new Image();
Img.effect['fountain'].src = "/client/img/maps/fountain.gif";

Img.effect['heart'] = new Image();
Img.effect['heart'].src = "/client/img/sprites/effects/hearts.png";

Img.effect['hplus'] = new Image();
Img.effect['hplus'].src = "/client/img/sprites/effects/hplus.png";


Img.map['sunkenDepths'] = new Image();
Img.map['sunkenDepths'].src = "/client/img/maps/sunken_new4.png";

Img.map['sunken_top'] = new Image();
Img.map['sunken_top'].src = "/client/img/maps/sunken_top.png";

Img.map['sunken2'] = new Image();
Img.map['sunken2'].src = "/client/img/maps/sunken2.png";

Img.map['frostpeak'] = new Image();
Img.map['frostpeak'].src = "/client/img/maps/frostpeakn3.png";

Img.map['frostpeakb'] = new Image();
Img.map['frostpeakb'].src = "/client/img/maps/frostpeakb3.png";

Img.map['sunPalace'] = new Image();
Img.map['sunPalace'].src = "/client/img/maps/newsun3.png";

Img.map['sunPalace_top'] = new Image();
Img.map['sunPalace_top'].src = "/client/img/maps/sunpalace_top2.png";

Img.map['mythicForest'] = new Image();
Img.map['mythicForest'].src = "/client/img/maps/mythicforest2.png";

Img.map['hall'] = new Image();
Img.map['hall'].src = "/client/img/maps/newhall5.png";

Img.map['hall_top'] = new Image();
Img.map['hall_top'].src = "/client/img/maps/hall_top2.png";

Img.map['orcEncampment'] = new Image();
Img.map['orcEncampment'].src = "/client/img/maps/orcnew9.png";

Img.questmark = new Image();
Img.questmark.src = "/client/img/assets/questmark.png";

Img.portrait['fairy'] = new Image();
Img.portrait['fairy'].src = "/client/img/portrait/raja.png";

Img.portrait['guri'] = new Image();
Img.portrait['guri'].src = "/client/img/portrait/guri.png";

Img.portrait['harvey'] = new Image();
Img.portrait['harvey'].src = "/client/img/portrait/harvey.png";

Img.portrait['healermaster'] = new Image();
Img.portrait['healermaster'].src = "/client/img/portrait/char1.gif";

//Img.portrait['healermaster'] = new Image();
//Img.portrait['healermaster'].src = "/client/img/portrait/char1.gif";

Img.portrait['enchantermaster'] = new Image();
Img.portrait['enchantermaster'].src = "/client/img/portrait/p1.png";

Img.portrait['beefairy'] = new Image();
Img.portrait['beefairy'].src = "/client/img/sprites/mob/beefairy.png";

Img.portrait['happycat'] = new Image();
Img.portrait['happycat'].src = "/client/img/sprites/mob/cat.png";

Img.portrait['dog'] = new Image();
Img.portrait['dog'].src = "/client/img/portrait/happydog.gif";

Img.portrait['prince'] = new Image();
Img.portrait['prince'].src = "/client/img/portrait/dodrich.gif";

Img.portrait['ladyzi'] = new Image();
Img.portrait['ladyzi'].src = "/client/img/sprites/mob/ladyzi.gif";

Img.portrait['tibet'] = new Image();
Img.portrait['tibet'].src = "/client/img/portrait/tibet.png";

Img.portrait['rydia'] = new Image();
Img.portrait['rydia'].src = "/client/img/portrait/rydia.png";

Img.portrait['siren'] = new Image();
Img.portrait['siren'].src = "/client/img/portrait/lara.gif";

Img.portrait['queen'] = new Image();
Img.portrait['queen'].src = "/client/img/portrait/queen.png";

Img.portrait['green'] = new Image();
Img.portrait['green'].src = "/client/img/portrait/lela.png";

Img.portrait['guri'] = new Image();
Img.portrait['guri'].src = "/client/img/sprites/mob/guri.gif";

Img.portrait['toki'] = new Image();
Img.portrait['toki'].src = "/client/img/portrait/toki.png";

Img.portrait['leblanc'] = new Image();
Img.portrait['leblanc'].src = "/client/img/portrait/leblanc.png";

Img.effect['musicnotes'] = new Image();
Img.effect['musicnotes'].src = "/client/img/sprites/effects/musicnotes2.png";

Img.effect['fireburn'] = new Image();
Img.effect['fireburn'].src = "/client/img/sprites/effects/fireburn.png";

Img.effect['explode'] = new Image();
Img.effect['explode'].src = "/client/img/sprites/effects/explo.gif";

Img.effect['spiritEagle'] = new Image();
Img.effect['spiritEagle'].src = "/client/img/sprites/effects/spriteofeagle.gif";

Img.effect['iceBlock'] = new Image();
Img.effect['iceBlock'].src = "/client/img/sprites/effects/ice_s.gif";

Img.effect['zup'] = new Image();
Img.effect['zup'].src = "/client/img/sprites/effects/zup3.gif";

Img.effect['boom'] = new Image();
Img.effect['boom'].src = "/client/img/sprites/effects/zo2.png";

Img.effect['starsUp'] = new Image();
Img.effect['starsUp'].src = "/client/img/sprites/effects/star2.png";

Img.effect['splash'] = new Image();
Img.effect['splash'].src = "/client/img/sprites/effects/splash.gif";

Img.effect['wsplash'] = new Image();
Img.effect['wsplash'].src = "/client/img/sprites/effects/bbs.gif";

Img.effect['teleport'] = new Image();
Img.effect['teleport'].src = "/client/img/sprites/effects/teleport.gif";

Img.effect['healn'] = new Image();
Img.effect['healn'].src = "/client/img/sprites/effects/healn.gif";

Img.effect['lionr'] = new Image();
Img.effect['lionr'].src = "/client/img/sprites/effects/lionr.png";

Img.effect['lzap'] = new Image();
Img.effect['lzap'].src = "/client/img/sprites/effects/zlight.gif";

Img.effect['mez'] = new Image();
Img.effect['mez'].src = "/client/img/sprites/effects/mez.gif";

Img.effect['plusover'] = new Image();
Img.effect['plusover'].src = "/client/img/sprites/effects/plusover.png";

Img.effect['runBoost'] = new Image();
Img.effect['runBoost'].src = '/client/img/sprites/effects/runboost.gif';

Img.effect['flashWarmup'] = new Image();
Img.effect['flashWarmup'].src = "/client/img/sprites/effects/flashsprite_red.gif";

Img.effect['healOne'] = new Image();
Img.effect['healOne'].src = "/client/img/sprites/effects/healsprite.png";

Img.effect['fireStorm'] = new Image();
Img.effect['fireStorm'].src = "/client/img/sprites/effects/firestorm.gif";

Img.effect['electShock'] = new Image();
Img.effect['electShock'].src = "/client/img/sprites/effects/elect_shock.gif";

Img.effect['meteor']  = new Image();
Img.effect['meteor'].src = '/client/img/sprites/effects/meteor2.gif';

Img.cloudOne  = new Image();
Img.cloudOne.src = '/client/img/assets/cloud_one.png';

Img.poof = new Image(); 
Img.poof.src = "/client/img/sprites/hero/vanish.png";

Img.warnzone = new Image(); 
Img.warnzone.src = "/client/img/assets/warnzone.png";

Img.activemark = new Image(); 
Img.activemark.src = "/client/img/assets/activemark.png";

Img.firezone = new Image(); 
Img.firezone.src = "/client/img/assets/firezone.png";

Img.moneytop = new Image(); 
Img.moneytop.src = "/client/img/assets/moneytop.png";

Img.shadow1 = new Image(); 
Img.shadow1.src = "/client/img/assets/shadow1.png";

Img.cloudTwo  = new Image();
Img.cloudTwo.src = '/client/img/assets/cloud_two.png';

Img.shieldray = new Image();
Img.shieldray.src = "/client/img/effects/flash_ray.gif";

Img.hpBar = new Image();
Img.hpBar.src = "/client/img/assets/hpbar.png";

Img.starFall  = new Image();
Img.starFall.src = '/client/img/assets/stars_o.png';

Img.starFall2  = new Image();
Img.starFall2.src = '/client/img/assets/stars_o.png';