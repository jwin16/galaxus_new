
var changeClass = function( className ){

	socket.emit( 'updateClass' , className );

}

var preloadImages = [];

preload = function(){
    for (var i = 0; i < arguments.length; i++) {
        preloadImages[i] = new Image();
        preloadImages[i].src = preload.arguments[i];
    }
}


socket.on('levelUp', function(){

	if( allowAudio ){
		levelUpSound.play();
	}

});

socket.on('clearEnemy', function(){

	Enemy.list = {};

});


function formatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


var messageCount = 0; 


socket.on('newMessage',function( data ){

	var chatText = document.getElementById('chat-text');

	if( data.username !== undefined ){
		thisTarget = data.username; 
	}else{
		thisTarget = "";
	} 

	// Reset the HTML every 300 messages
	messageCount++ 
	if( messageCount > 300 ){
		chatText.innerHTML = ''; 
		messageCount = 0; 
	}

	chatText.innerHTML += '<div style="color:' + data.color + ';">' + thisTarget + " " + data.text + '</div>';
	chatText.scrollTop = chatText.scrollHeight;

});


var setEndGame = false; 

socket.on('userDeath',function( data ){

	clearInterval( gameUpdate );

	document.getElementById("gameEndScreen").style.display = "block";

	if( setEndGame == false ){
		galaxySound.pause(); 
		legendSound.pause();
		lavaSound.pause(); 
		pulseSound.pause(); 
		windgustSound.pause(); 
		comebackSound.pause(); 
		ninebitSound.pause();
		whereareyouSound.pause(); 
		levelUpSound.pause();
		famazeSound.pause(); 
		shrineSound.pause(); 
		gameDeathSound.play(); 
	}

	setEndGame = true; 

});


respawn = function(){

	document.getElementById("gameEndScreen").style.display = "none";

	Player.list[selfId].x = 736;
	Player.list[selfId].y = 2756;
	Player.list[selfId].hp = Player.list[selfId].hpMax;

	socket.emit('respawn', selfId );

	setEndGame = false; 

	gameUpdate = setInterval( update , 40 ); 

	thisRand = Math.random();

	document.getElementById("front_effect_two").style.background = "none";
	document.getElementById("front_effect_two").style.display = "none";	

	if( thisRand > .7 ){
		document.getElementById("front_effect_two").style.background = "url('/client/img/effects/leaveswindsmall2.gif')";
		document.getElementById("front_effect_two").style.display = "block";
	}else{

	}

	startMapEffects("mythicCity"); 

	Enemy.list = {}; 

}


showWelcomeText = function( welcomeText ){

	document.getElementById("welcometext").style.display = "block";
	document.getElementById("welcometext").innerHTML = welcomeText;
	setInterval(function(){
		document.getElementById("welcometext").style.display = "none";
	}, 3500);

}



startMobGroup = function( region ){


	if( region == 'hall'){

		Mob({
			mobName:"Gate Guardian",
			imageName:"toki",
			imageHeight:66,
			imageWidth:95,
			x:2480,
			y:4945,
			hasDialog:true,
			hasQuest:false, 
			shadowYOff:30, 
		});

		Mob({
			mobName:"Shrine Devotee",
			imageName:"tibet",
			imageHeight:66,
			imageWidth:95,
			x:2660,
			y:2750,
			hasDialog:true,
			hasQuest:true, 
			shadowYOff:30, 
		});

	}


	if( region == 'orcEncampment'){

		Mob({
			mobName:"Azazel",
			imageName:"guri",
			imageHeight:66,
			imageWidth:95,
			x:4200,
			y:2200,
			hasDialog:true,
			hasQuest:true, 
			shadowYOff:30, 
		});

	}


	if( region == 'sunkenDepths'){

		Mob({
			mobName:"Tamostu, Time Custodian",
			imageName:"harvey",
			imageHeight:66,
			imageWidth:95,
			x:3450,
			y:1295,
			hasDialog:true,
			hasQuest:true, 
			shadowYOff:30, 
		});

	}


	if( region == 'mythicCity'){ 

		Mob({
			mobName:"Lelett the Heroic",
			imageName:"warriormaster",
			imageHeight:66,
			imageWidth:95,
			x:1057,
			y:2205,
			hasDialog:true,
			hasQuest:true, 
			shadowYOff:30, 
		});

		Mob({
			mobName:"Rah'ja the Awakened",
			imageName:"fairy",
			imageHeight:92,
			imageWidth:92,
			x:870,
			y:2279,
			hasDialog:true,
			shadowYOff:30, 

		});

		Mob({
			mobName:"Ealdan'aniel the Wise",
			imageName:"magemaster",
			imageHeight:54,
			imageWidth:95,
			x:1663,
			y:2220,
			hasDialog:true, 
			shadowYOff:30, 
		});


		Mob({
			mobName:"Elric the Savior",
			imageName:"healermaster",
			imageHeight:100,
			imageWidth:100,
			x:877,
			y:3790,
			hasDialog:true,
			shadowYOff:30, 
		});


		Mob({
			mobName:"Das the Enlightened",
			imageName:"enchantermaster",
			imageHeight:67,
			imageWidth:100,
			x:2256,
			y:2840,
			hasDialog:true, 
			shadowYOff:30, 
		});


		Mob({
			mobName:"Ta'sha the Angel",
			imageName:"angelthree",
			imageHeight:60,
			imageWidth:90,
			x:2107,
			y:3700,
			hasDialog:true, 
			shadowYOff:30, 

		});


		Mob({
			mobName:"Ka-adel the Angel",
			imageName:"angelone",
			imageHeight:100,
			imageWidth:100,
			x:1231,
			y:3034,
			hasDialog:true,
			shadowYOff:30, 
		});


		Mob({
			mobName:"Blessed Spirit Fairy",
			imageName:"beefairy",
			imageHeight:100,
			imageWidth:100,
			pathId:2,
			x:1633,
			y:3606,
			hasDialog:false, 
			shadowYOff:1000, 

		});


		Mob({
			mobName:"Blessed Spirit Fairy",
			imageName:"beefairy",
			imageHeight:100,
			imageWidth:100,
			pathId:2,
			x:1030,
			y:3606,
			hasDialog:false,
			shadowYOff:1000, 

		});


		Mob({
			mobName:"Happy Dog",
			imageName:"dog",
			imageHeight:70,
			imageWidth:70,
			allowWalk:true, 
			x:1576,
			y:3840,
			hasDialog:true,
			shadowYOff:1000, 
		});


		Mob({
			mobName:"Glowing Kitty",
			imageName:"cat",
			imageHeight:40,
			imageWidth:40,
			allowWalk:true, 
			x:2008,
			y:3011,
			hasDialog:false, 
			shadowYOff:0, 
		});


		Mob({
			mobName:"Happy Cat",
			imageName:"cat",
			imageHeight:50,
			imageWidth:50,
			allowWalk:true, 
			x:1543,
			y:2834,
			hasDialog:true,
			shadowYOff:12, 
		});


		Mob({
			mobName:"Princess Dodrich",
			imageName:"prince",
			imageHeight:67,
			imageWidth:90,
			x:995,
			y:4170,
			hasDialog:true,
			shadowYOff:30, 
		});


		Mob({
			mobName:"Dancer of Light",
			imageName:"dancer",
			imageHeight:67,
			imageWidth:90,
			x:2550,
			y:1675,
			hasDialog:true,
			shadowYOff:30, 
		});


		Mob({
			mobName:"Guardian of the Forest",
			imageName:"rydia",
			imageHeight:67,
			imageWidth:90,
			x:2005,
			y:796,
			hasDialog:true,
			shadowYOff:30, 
		});


		Mob({
			mobName:"Leblanc",
			imageName:"leblanc",
			imageHeight:67,
			imageWidth:90,
			allowWalk:true, 
			x:1834,
			y:1500,
			hasDialog:true,
			shadowYOff:30, 
		});


		Mob({
			mobName:"Queen Ra",
			imageName:"queen",
			imageHeight:67,
			imageWidth:90,
			x:1666,
			y:1160,
			hasDialog:true,
			hasQuest:true, 
			shadowYOff:30, 
		});


		Mob({
			mobName:"Ria",
			imageName:"green",
			imageHeight:67,
			imageWidth:90,
			x:820,
			y:860,
			hasDialog:true, 
			hasQuest:true,
			shadowYOff:30, 

		});


		Mob({
			mobName:"Sara The Wise",
			imageName:"siren",
			imageHeight:140,
			imageWidth:90,
			x:1987,
			y:2260,
			hasDialog:true,
			hasQuest:true,
			shadowYOff:30, 
		});


		Mob({
			mobName:"",
			imageName:"beefairy",
			imageHeight:100,
			imageWidth:100,
			pathId:2, 
			x:1180,
			y:2610,
			hasDialog:false,
			shadowYOff:1000, 

		});


		Mob({
			mobName:"",
			imageName:"beefairy",
			imageHeight:100,
			imageWidth:100,
			pathId:2, 
			x:1753,
			y:2610,
			hasDialog:false,
			shadowYOff:1000, 
		});


		Mob({
			mobName:"Mother Nature",
			imageName:"mothernature",
			imageHeight:82,
			imageWidth:130,
			x:1375,
			y:3975,
			hasDialog:true,
			hasQuest:true,
			shadowYOff:45, 
		});


	}


}



// zStartmapEffects
// 
startMapEffects = function( regionName ){


	if( regionName == 'mythicCity'){

		MapEffect.list = {}; 

		// Music Box 1 
		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:740,
			y:2396,
			frameCount:10, 
		});

		// Main Fountain
		// 
		MapEffect({
			effectName:"fountain",
			imageName:"fountain",
			imageHeight:325,
			imageWidth:266,
			x:1520,
			y:2552,
			frameCount:6, 
		});

	}


	if( regionName == 'mythicForest'){

		MapEffect.list = {}; 

		// Load city effects
		// 
		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:670,
			y:3280,
			frameCount:10,
		});

		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:2010,
			y:1268,
			frameCount:10,
		});
	}



	if( regionName == 'orcEncampment'){

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:1125,
			y:3464,
			frameCount:12,
		});


		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:4545,
			y:3890,
			frameCount:10,
		});

		MapEffect({
			effectName:"fire3",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:2526,
			y:1070,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire4",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:2656,
			y:1070,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire4",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3135,
			y:1070,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire5",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3231,
			y:1070,
			frameCount:12,
		});


		MapEffect({
			effectName:"fire6",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3231,
			y:1327,
			frameCount:12,
		});


		MapEffect({
			effectName:"fire7",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3231,
			y:1586,
			frameCount:12,
		});


		MapEffect({
			effectName:"fire8",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:2526,
			y:1580,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire9",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:2526,
			y:1327,
			frameCount:12,
		});

	}


	if( regionName == 'frostpeak'){

		MapEffect.list = {}; 

		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:1880,
			y:2340,
			frameCount:10,
		});

		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:1595,
			y:700,
			frameCount:10,
		});

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3360,
			y:2442,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3648,
			y:2442,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3648,
			y:2347,
			frameCount:12,
		});


		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3360,
			y:2347,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3360,
			y:2251,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3648,
			y:2251,
			frameCount:12,
		});


		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3360,
			y:2154,
			frameCount:12,
		});


		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3648,
			y:2154,
			frameCount:12,
		});


		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3360,
			y:2059,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:3648,
			y:2059,
			frameCount:12,
		});


	}




	if( regionName == 'sunPalace'){


		MapEffect({
			effectName:"fountain",
			imageName:"fountain",
			imageHeight:325,
			imageWidth:266,
			x:730,
			y:3930,
			frameCount:6, 
		});



		MapEffect({
			effectName:"fountain",
			imageName:"fountain",
			imageHeight:325,
			imageWidth:266,
			x:1440,
			y:4945,
			frameCount:6, 
		});

		MapEffect({
			effectName:"fountain",
			imageName:"fountain",
			imageHeight:325,
			imageWidth:266,
			x:2964,
			y:3290,
			frameCount:6, 
		});

		MapEffect({
			effectName:"fountain",
			imageName:"fountain",
			imageHeight:325,
			imageWidth:266,
			x:900,
			y:4945,
			frameCount:6, 
		});

		MapEffect({
			effectName:"fountain",
			imageName:"fountain",
			imageHeight:325,
			imageWidth:266,
			x:1175,
			y:3135,
			frameCount:6, 
		});

		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:2590,
			y:4815,
			frameCount:10,
		});

	}


	if( regionName == 'hall'){

		MapEffect.list = {}; 

		/* 
		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:2400,
			y:2300,
			frameCount:10,
		});
		*/ 

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:1406,
			y:3915,
			frameCount:12,
		});

		MapEffect({
			effectName:"fire1",
			imageName:"fireburn",
			imageHeight:100,
			imageWidth:140,
			x:1086,
			y:3915,
			frameCount:12,
		});

		// Main Fountain
		// 
		MapEffect({
			effectName:"heart",
			imageName:"heart",
			imageHeight:40,
			imageWidth:40,
			x:2780,
			y:2390,
			frameCount:2, 
		});

		// 
		MapEffect({
			effectName:"hplus",
			imageName:"hplus",
			imageHeight:70,
			imageWidth:70,
			x:2925,
			y:2560,
			frameCount:9, 
		});


				// 
		MapEffect({
			effectName:"hplus",
			imageName:"hplus",
			imageHeight:70,
			imageWidth:70,
			x:2925,
			y:2410,
			frameCount:9, 
		});


		MapEffect({
			effectName:"hplus",
			imageName:"hplus",
			imageHeight:70,
			imageWidth:70,
			x:2630,
			y:2410,
			frameCount:9, 
		});

		MapEffect({
			effectName:"hplus",
			imageName:"hplus",
			imageHeight:70,
			imageWidth:70,
			x:2630,
			y:2560,
			frameCount:9, 
		});

	}


	if( regionName == 'sunkenDepths'){
		MapEffect({
			effectName:"musicbox1",
			imageName:"musicnotes",
			imageHeight:80,
			imageWidth:80,
			x:3420,
			y:855,
			frameCount:10,
		});
	}

}





// zPlayer
// 
Player = function( initPack ){

	var self = {};
	self.id = initPack.id;
	self.number = initPack.number;
	self.x = initPack.x;
	self.y = initPack.y;
	self.hp = initPack.hp;
	self.hpMax = initPack.hpMax;
	self.lastHp = self.hp;
	self.score = initPack.score;
	self.map = initPack.map;
	self.className = initPack.className;
	self.spriteAnimCounter = initPack.spriteAnimCounter; 
	self.goldAmount = 0; 
	self.drawTrigger1 = initPack.drawTrigger1; 
	self.drawTrigger2 = initPack.drawTrigger2; 
	self.drawTrigger3 = initPack.drawTrigger3; 
	self.drawTrigger4 = initPack.drawTrigger4; 
	self.drawTrigger5 = initPack.drawTrigger5; 
	self.drawTrigger6 = initPack.drawTrigger6; 
	self.drawTrigger7 = initPack.drawTrigger7;
	self.currentRegion = "mythicCity"; 
	self.hasPrimaryAttack = false;
	self.playerLevel = initPack.playerLevel;
	self.currentMap = initPack.currentMap;  
	self.totalXp = initPack.totalXp; 
	self.prevLevelXp = initPack.prevLevelXp; 
	self.nextLevelXp = initPack.nextLevelXp; 
	self.currentTargetName = "none";
	self.username = initPack.username; 
	self.pressingDown = false;
	self.pressingUp = false;
	self.pressingLeft = false;
	self.pressingRight = false;
	self.pressingAttack = false;
	self.pressingSecondaryAttack = false; 
	self.attackActive = false;
	self.frostEntranceFlag = false;
	self.frostSunExitFlag = false;
	self.frostExitFlag = false;
	self.forestEntranceFlag = false; 
	self.cityEntranceFlag = true;
	self.orcEntranceFlag = false;
	self.orcExitFlag = false; 
	self.mythicCEntranceFlag = false; 
	self.cityMidFlag = false; 
	self.emperorFlag = false; 
	self.clearFrost = false; 
	self.clearOrc = false;
	self.clearShrine = false;  
	self.shrineEntranceFlag = false;
	self.shrineStartFlag = false;  
	self.shrineEventFlag = false; 
	self.valleyEventFlag = false; 
	self.sunkenEntranceFlag = false; 
	self.sunPalacePortal = false; 
	self.frostpeakPortal = false;
	self.moveBackActive = false; 
	self.moveBackDrawActive = false; 
	self.lastHitAmount = 0; 
	self.lastGoldAmount = 0; 
	self.sunPalaceWall = false; 
	self.lastCirleCount = 0; 
	self.circleCount = 0; 
	self.tivKey = false; 
	self.gate1Key = false; 
	self.gate2Key = false; 
	self.gate3Key = false; 
	self.gate4Key = false; 

	var directionMod = 0;


	self.renderEffect = function( thisImage , frameCount , pxW , pxH , offX , offY , animCounter , target = 'self' ){

			var frameWidth = thisImage.width / frameCount;

			var frameHeight = thisImage.height;

			var imgHeight = thisImage.height;

			var imgWidth = thisImage.width; 

			var canvasWidth = window.innerWidth;

			var canvasHeight = window.innerHeight;


			if( target == 'self'){

				var cX = self.x - Player.list[selfId].x + WIDTH / 2;
				var cY = self.y - Player.list[selfId].y + HEIGHT / 2;

				var spriteMod = Math.floor( animCounter ) % frameCount; //1,2
	
				ctx.globalAlpha = 1;

				ctx.drawImage( thisImage , spriteMod * frameWidth , 0 , frameWidth , frameHeight , cX - ( frameWidth / 2 ) + offX , cY - ( frameHeight / 2 ) + offY , pxW , pxH
				);

			}else if( target == 'team' ){

				for(var i in Player.list){

					var cX = Player.list[i].x - self.x + WIDTH / 2;
					var cY = Player.list[i].y - self.y + HEIGHT / 2;

					var spriteMod = Math.floor( animCounter ) % frameCount; //1,2

					ctx.globalAlpha = 1;
					ctx.drawImage( thisImage , spriteMod * frameWidth , 0 , frameWidth , frameHeight , cX - ( frameWidth / 2 ) + offX , cY - ( frameHeight / 2 ) + offY , pxW , pxH
					);

				}

			}

			ctx.restore();	

		}

		// zupdate
		//
		self.update = function(){

			self.checkForAreaTrigger();

			// Collect gold 
			if( self.lastGoldAmount != self.goldAmount ){
				self.lastGoldAmount = self.goldAmount; 
				var goldAm = formatNumberLength(self.goldAmount, 7);
				document.getElementById("moneyText").innerHTML = goldAm;
				cashSound.volume = 0.4;
				cashSound.play();
			}

			// SFX for getting hit 
			if( self.curFrame > 100 ){
				if( self.lastHp != self.hp ){
					if( self.lastHp > self.hp ){
						ouchSound.volume = 0.2;
						ouchSound.play();
					}
				}
			}


			if( self.lastXp != self.totalXp ){

				totalXPInLevel = ( player.nextLevelXp - player.prevLevelXp );
				var totalProgressInLevel = player.totalXp - player.prevLevelXp;
				var levelPercent = ( totalProgressInLevel / totalXPInLevel ) * 100;

				levelPercent = levelPercent - 1; // compensate for max being 96 and not 100 

				if( levelPercent > 96 ){
					levelPercent = 96; 
				}

				//console.log("XP UPDATE");
				document.getElementById("xpProgress").style.width = levelPercent + "%";

			}

			self.lastHp = self.hp; 
			self.lastXp = self.totalXp;

		}




		
		self.checkForAreaTrigger = function(){

			//console.log( " sX  " + self.x + " sY "  + self.y );

			if( self.currentMap == 'sunPalace'){

				if( self.x > 2000 && self.x < 2250 && self.y > 1700 && self.y < 1900 && self.sunPalaceWall == false ){
					self.sunPalaceWall = true; 
					socket.emit('palaceWall', self.id ); 
				}

			}


			if( self.currentMap == 'hall'){

				if( self.x > 2560 && self.x < 2595 && self.y > 2030 && self.y < 2350 ){

					if( self.lastCirleCount < self.curFrame ){

						self.lastCircleCount = self.curFrame + 20;

						self.circleCount++;

						if( self.circleCount > 30 ){


							document.getElementById("front_effect_two").style.display = "block";

							$('#front_effect_two').animate({
				    		'background-color': '#fff',
				    		duration: 100,
							}, 100 );

							document.getElementById("eventtext").style.display = "block";
							document.getElementById("eventtext").innerHTML = "As you approach the statue suddenly you are transported into a clear white light.";

							setTimeout(function(){

								document.getElementById("eventtext").style.display = "block";
								document.getElementById("eventtext").innerHTML = "As you dissolve into the light, you feel a connectedness with all things.  Your inner clarity and purpose has been reinvigorated.";

								setTimeout(function(){

									document.getElementById("eventtext").style.display = "block";
									document.getElementById("eventtext").innerHTML = "Emerging from the light you notice everything is glowing. Its as if you are walking on wind, all feelings of anger, fear, and anxiety are gone.";

									document.getElementById("front_effect_two").style.display = "block";
									document.getElementById("front_effect_two").style.background = "url('/client/img/effects/leaveswindsmall2.gif')";

									setTimeout(function(){
											document.getElementById("eventtext").style.display = "none";
									},8000 ); 

								}, 6500);

							}, 4000);

							self.shrineEventFlag = true;
							console.log( "SHRINE EVENT ");

							showCompleteQuest('tibet');


						}


					} 

				}


			}


			if( self.currentMap == 'frostpeak'){


				if( self.x > 3320 && self.x < 3740 && self.y > 2300 && self.y < 2390 && self.sunPalacePortal == false ){

					document.getElementById("welcometext").style.display = "block";
					document.getElementById("welcometext").innerHTML = "Portal to Sun Palace";
					setInterval(function(){
						document.getElementById("welcometext").style.display = "none";
					}, 4500);
					self.sunPalacePortal = true; 
					self.frostpeakPortal = false; 

				}


				if( self.x > 3320 && self.x < 3740 && self.y > 2400 && self.y < 2490 && self.frostpeakPortal == false ){

					document.getElementById("welcometext").style.display = "block";
					document.getElementById("welcometext").innerHTML = "Frostpeak";
					setInterval(function(){
						document.getElementById("welcometext").style.display = "none";
					}, 4500);
					self.frostpeakPortal = true; 
					self.sunPalacePortal = false; 

				}



				if( self.x > 3320 && self.x < 3740 && self.y > 2500 && self.y < 2530 ){

					self.frostpeakPortal = false; 

				}



				if( self.x > 3320 && self.x < 3740 && self.y > 2000 && self.y < 2020 ){

					document.getElementById("front_effect_two").style.background = "url('/client/img/effects/leaveswindsmall2.gif')";
					document.getElementById("front_effect_two").style.display = "block";

				}



				if( self.x > 3320 && self.x < 3740 && self.y > 2030 && self.y < 2050 ){

					document.getElementById("front_effect_two").style.background = "url('/client/img/effects/leaveswindsmall2.gif')";
					document.getElementById("front_effect_two").style.display = "none";

					self.frostpeakPortal = false; 


				}




			}


		}






		// Trigger mythic forest entrace


		// Trigger shrine entrance 
		//
		/* 
		if( self.x > 2620 && self.x < 2750 && self.y > 1720 && self.y < 2600 && self.shrineEntranceFlag == false ){

			if( self.clearShrine == false ){
					Enemy.list = {}; 
					self.clearShrine = true; 
				}

			changeBGTrack({
				"trackLocation":"shrine",
				"fadeEffect":true,
			});

			self.shrineEntranceFlag = true; 
			self.currentRegion = "shrine";

			startMapEffects("shrine"); 

			console.log("SHRINE");

			document.getElementById("welcometext").style.display = "block";
			document.getElementById("welcometext").innerHTML = "Shrine of Protection";
			setInterval(function(){
				document.getElementById("welcometext").style.display = "none";
			}, 3000);

				//document.getElementById("front_effect_two").style.display = "block";

		}


		if( self.x > 2120 && self.x < 2280 && self.y > 1720 && self.y < 3000 && self.shrineStartFlag == false ){

			document.getElementById("eventtext").style.display = "block";
			document.getElementById("eventtext").innerHTML = "You feel a gentle blessing of pure love radiating from the statue nearby.";
			setInterval(function(){
				document.getElementById("eventtext").style.display = "none";
			}, 10000);

			self.shrineStartFlag = true; 

		}


		// Trigger shrine end event 
		if( self.x > 1700 && self.x < 1900 && self.y > 2335 && self.y < 2390 && self.shrineEventFlag == false ){

			document.getElementById("front_effect_two").style.display = "block";

			$('#front_effect_two').animate({
    		'background-color': '#fff',
    		duration: 100,
			}, 100 );

			document.getElementById("eventtext").style.display = "block";
			document.getElementById("eventtext").innerHTML = "As you approach the statue suddenly you are transported into a clear white light.";

			setTimeout(function(){

				document.getElementById("eventtext").style.display = "block";
				document.getElementById("eventtext").innerHTML = "As you dissolve into the light, you feel a connectedness with all things.  Your inner clarity and purpose has been reinvigorated.";

				setTimeout(function(){

					document.getElementById("eventtext").style.display = "block";
					document.getElementById("eventtext").innerHTML = "Emerging from the light you notice everything is glowing. Its as if you are walking on wind, all feelings of anger, fear, and anxiety are gone.";

					document.getElementById("front_effect_two").style.display = "block";
					document.getElementById("front_effect_two").style.background = "url('/client/img/effects/leaveswindsmall2.gif')";

					setTimeout(function(){
							document.getElementById("eventtext").style.display = "none";
					},8000 ); 

				}, 6500);

			}, 4000);

			self.shrineEventFlag = true;
			console.log( "SHRINE EVENT ");

		}

	*/




		self.drawEffects = function(){

			if( self.drawTrigger1 == 'flash'){

				animWidth = 220; 
				animHeight = 220;
				animFrames = 32; 
				offX = 70; 
				offY = 0; 
				self.renderEffect( Img.effect['flashWarmup'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 ); 

			}

			if( self.drawTrigger4 == 'flashBig'){

				animWidth = 450; 
				animHeight = 450;
				animFrames = 32; 
				offX = -32; 
				offY = -100; 

				self.renderEffect( Img.effect['flashWarmup'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 ); 
			}


			if( self.drawTrigger1 == 'iceOne' ){

				animWidth = 120; 
				animHeight = 200;
				animFrames = 13; 
				offX = -20; 
				offY = -30;

				self.renderEffect( Img.effect['iceBlock'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 ); 
			}


			if( self.drawTrigger2 == 'plusover' ){

				animWidth = 230; 
				animHeight = 230;
				animFrames = 20; 
				offX = 16; 
				offY = -4;

				self.renderEffect( Img.effect['plusover'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter2 ); 

				riseSound.volume = .3;
				riseSound.play(); 
			}



			if( self.drawTrigger2 == 'fireStorm' ){

				animWidth = 360; 
				animHeight = 330;
				animFrames = 14; 
				offX = 50; 
				offY = 25;

				self.renderEffect( Img.effect['fireStorm'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter2 ) 

			}


			if( self.drawTrigger1 == 'lion' ){

				animWidth = 220; 
				animHeight = 220;
				animFrames = 24; 
				offX = 157; 
				offY = 140;
				self.renderEffect( Img.effect['lionr'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 , 'self' ) 

				jaguarSound.volume = .3;
				jaguarSound.play(); 

			}


			if( self.drawTrigger7 == 'teleport' ){

				animWidth = 160; 
				animHeight = 320;
				animFrames = 10; 
				offX = 0; 
				offY = -90;
				self.renderEffect( Img.effect['teleport'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 , 'self' ) 

			}


			if( self.drawTrigger7 == 'starsUp' ){

				animWidth = 150; 
				animHeight = 270;
				animFrames = 22; 
				offX = 0; 
				offY = -56;
				self.renderEffect( Img.effect['starsUp'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 , 'self' ) 

			}


			if( self.drawTrigger2 == 'mez' ){

				animWidth = 400; 
				animHeight = 300;
				animFrames = 18; 
				offX = 12; 
				offY = 15;
				self.renderEffect( Img.effect['mez'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter2 , 'team' ) 

			}


			if( self.drawTrigger2 == 'zup' ){

				animWidth = 325; 
				animHeight = 175;
				animFrames = 12; 
				offX = 110; 
				offY = 40;
				self.renderEffect( Img.effect['zup'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 , 'team' ) 

			}


			if( self.drawTrigger3 == 'boom' ){

				animWidth = 350; 
				animHeight = 350;
				animFrames = 28; 
				offX = -30; 
				offY = -50;
				self.renderEffect( Img.effect['boom'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 , 'self' ) 

			}


			if( self.drawTrigger1 == 'lzap' ){

				animWidth = 220; 
				animHeight = 300;
				animFrames = 16; 
				offX = 0; 
				offY = -50;
				self.renderEffect( Img.effect['lzap'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 , 'team' ) 

			}



			if( self.drawTrigger4 == 'meteor' ){

				animFrames = 51; 
				animWidth = 350; 
				animHeight = 350;
				offX = -250; 
				offY = -250;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter4 );

				animWidth = 350; 
				animHeight = 350;
				offX = 50; 
				offY = -250;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 );

				animWidth = 350; 
				animHeight = 350;
				offX = 350; 
				offY = 0;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter2 );

				animWidth = 350; 
				animHeight = 350;
				offX = -750; 
				offY = -750;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 );

				animWidth = 850; 
				animHeight = 850;
				offX = 150; 
				offY = 365;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter2 );

				animWidth = 250; 
				animHeight = 250;
				offX = 0; 
				offY = -265;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 );

				animWidth = 250; 
				animHeight = 250;
				offX = -350; 
				offY = 65;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter4 );

				animWidth = 450; 
				animHeight = 450;
				offX = -250; 
				offY = 365;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 );

				animWidth = 200; 
				animHeight = 200;
				offX = 400; 
				offY = 20;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter1 );

				animWidth = 300; 
				animHeight = 300;
				offX = 400; 
				offY = -100;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 );

				animWidth = 1000; 
				animHeight = 1000;
				offX = 800; 
				offY = -500;
				self.renderEffect( Img.effect['meteor'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter2 );


				thisRand = Math.random(); 

				if( thisRand > .97 ){
					starFallSound.volume = .3; 
					starFallSound.play();
				}else if( thisRand > .95){
					starFallSound1.volume = .3; 
					starFallSound1.play();
				}else if( thisRand > .93 ){
					starFallSound2.volume = .3; 
					starFallSound2.play();
				}else if( thisRand > .91 ){
					starFallSound3.volume = .3; 
					starFallSound3.play();
				}else if( thisRand > .88 ){
					starFallSound4.volume = .3; 
					starFallSound4.play();	
				}else if( thisRand > .85 ){
					starFallSound5.volume = .3; 
					starFallSound5.play();		
				}else if( thisRand > .83 ){
					starFallSound6.volume = .3; 
					starFallSound6.play();	
				}

			}


			if( self.drawTrigger3 == 'shieldray' ){
				animWidth = 220; 
				animHeight = 220;
				animFrames = 6; 
				offX = 0; 
				offY = 0;
				self.renderEffect( Img.effect['shieldray'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 ) 
			}


			if( self.drawTrigger4 == 'lightzap'){

				document.getElementById("front_effect").style.background = "url('/client/img/effects/lightt.gif')";
				document.getElementById("front_effect").style.display = "block";

			}


			if( self.drawTrigger1 == 'leafs'){

				document.getElementById("front_effect").style.background = "url('/client/img/effects/lightt.gif')";
				document.getElementById("front_effect").style.display = "block";

			}


			if( self.drawTrigger1 == 'flower' ){
				animWidth = 122; 
				animHeight = 122;
				animFrames = 20; 
				offX = 32; 
				offY = 30;
				self.renderEffect( Img.effect['healn'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 ) 
			}


			if( self.drawTrigger3 == 'bslash' ){
				animWidth = 552; 
				animHeight = 310;
				animFrames = 9; 
				offX = -80; 
				offY = -50;
				self.renderEffect( Img.effect['bslash'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 ) 
			}


			if( self.drawTrigger2 == 'wsplash' ){
				animWidth = 341; 
				animHeight = 229;
				animFrames = 11; 
				offX = -10; 
				offY = -30;
				self.renderEffect( Img.effect['wsplash'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 );

				dashSound.volume = .4; 
				dashSound.play();

			}


			if( self.drawTrigger3 == 'splash' ){
				animWidth = 321; 
				animHeight = 264;
				animFrames = 8; 
				offX = 20; 
				offY = 0;
				self.renderEffect( Img.effect['splash'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 ) 
			}


			if( self.drawTrigger4 == 'fullHearts' ){

				document.getElementById("front_effect").style.background = "url(/client/img/effects/heartup4.gif)";
				document.getElementById("front_effect").style.display = "block";

			}

			if( self.drawTrigger4 == 'lightzapEnd'){

				document.getElementById("front_effect").style.background = "none";
				document.getElementById("front_effect").style.display = "none";

			}

			if( self.drawTrigger4 == 'fullHeartsEnd'){

				document.getElementById("front_effect").style.background = "none";
				document.getElementById("front_effect").style.display = "none";

			}

			if( self.drawTrigger5 == 'healOne' ){

				animWidth = 90; 
				animHeight = 90;
				animFrames = 43; 
				offX = 133; 
				offY = 35;
				self.renderEffect( Img.effect['healOne'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter5 );

				potionSound.volume = .6;
				potionSound.play(); 

			}


			if( self.drawTrigger4 == 'spiritofEagle' ){

				animWidth = 220; 
				animHeight = 220;
				animFrames = 45; 
				offX = 24; 
				offY = -10;
				self.renderEffect( Img.effect['spiritEagle'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter4 );

			}


			if( self.drawTrigger6 == 'runBoost' ){
				animWidth = 158; 
				animHeight = 115;
				animFrames = 8; 
				offX = 23; 
				offY = 9;

				self.renderEffect( Img.effect['runBoost'] , animFrames , animWidth , animHeight , offX , offY , self.effectAnimCounter3 );

				self.drawTrigger1 = initPack.drawTrigger1; 


				if( playWindgust ){

					windgustSound.volume = 0.2;

					windgustSound.play();

					playWindgust = false;	

				}

			}

			playWindgust = true; 




		}





	self.initShowHit = function(){

		self.showHitEndFrame = self.curFrame + 40;
		self.showHitAnim = true;  

		self.pointX = self.x - Player.list[selfId].x + WIDTH / 2;
		self.pointY = self.y - Player.list[selfId].y + HEIGHT / 2;

		self.yOffset = 40; 
		self.xOffset = 0; 

		thisRand = Math.random(); 
		if( thisRand > .75 ){
			self.hitDirection = 1;
		}else if( thisRand > .5 ){
			self.hitDirection = 2; 
		}else if( thisRand > .25 ){
			self.hitDirection = 3; 
		}else{
			self.hitDirection = 0; 
		}


	}




	self.drawHitDamage = function(){

		if( self.showHitEndFrame > self.curFrame ){

			if( self.lastHitAmount != 0 ){
				
				hitDisplay = numberWithCommas( self.lastHitAmount );

				//console.log( self.lastHitColor ); 

				ctx.fillStyle="#000";
				ctx.font="bold 30px Trebuchet MS";
				ctx.textAlign="center";

				subY = ( self.pointY - self.yOffset ) + 3;
				subX = ( self.pointX - self.xOffset ) + 3;

				ctx.fillText(  hitDisplay , subX , subY );

				//ctx.fillStyle= self.lastHitColor;
				ctx.fillStyle="#ff0000";
				ctx.font="bold 30px Trebuchet MS";
				ctx.textAlign="center";
				ctx.fillText(  hitDisplay , self.pointX - self.xOffset , self.pointY - self.yOffset );

				if( self.hitDirection == 3 ){
					self.yOffset = self.yOffset + 2.8; 
					self.xOffset = self.xOffset - 1.8;
				}else if( self.hitDirection == 2 ){
					self.yOffset = self.yOffset + 2.8; 
					self.xOffset = self.xOffset - 2.8;
				}else if( self.hitDirection == 1 ){
					self.yOffset = self.yOffset + 1.5; 
					self.xOffset = self.xOffset + 1.8;
				}else{
					self.yOffset = self.yOffset + 1.5; 
					self.xOffset = self.xOffset + 2.8;		
				} 

			}
			

		}else{
			self.showHitAnim = false; 
		}



	}





	self.draw = function(){	


		if ( Player.list[selfId].currentMap == self.currentMap ){ 

		var player = Player.list[selfId];

		var x = self.x - Player.list[selfId].x + WIDTH / 2;
		var y = self.y - Player.list[selfId].y + HEIGHT / 2;


		if( self.lastHitAmount != 0 && self.lastHitAmount != self.prevHitAmount ){
			self.initShowHit(); 
			self.prevHitAmount = self.lastHitAmount; 
		}

		// shadow 
		ctx.drawImage( Img.shadow1 , x - 21 , y + 32 );

		var walkingMod = 1; 

		if( self.pressingRight )	//Right
			directionMod = 1;

		else if( self.pressingLeft )	//left
			directionMod = 3;

		else if( self.pressingUp )	//up
			directionMod = 2;

		else if( self.pressingDown )	//down
			directionMod = 0;



		if( self.moveBackDrawActive ){

				if( self.className == 'warrior'){
				var frameWidth = Img.attack['warrior_hit'].width / 4;
				var frameHeight = Img.attack['warrior_hit'].height / 4;
				var width = 50;
				var height = 94;
				var walkingMod = Math.floor( self.effectAnimCounter1 ) % 4;
				ctx.drawImage( Img.attack['warrior_hit'] , walkingMod * frameWidth , directionMod * frameHeight , Img.attack['warrior_hit'].width / 4, Img.attack['warrior_hit'].height / 4 , ( x - width / 2 ) , (  y - height / 2 )  , width , height );
				}

				if( self.className == 'monk'){
				var frameWidth = Img.attack['monk_hit'].width / 4;
				var frameHeight = Img.attack['monk_hit'].height / 4;
				var width = 50;
				var height = 94;
				var walkingMod = Math.floor( self.effectAnimCounter1 ) % 4;
				ctx.drawImage( Img.attack['monk_hit'] , walkingMod * frameWidth , directionMod * frameHeight , Img.attack['warrior_hit'].width / 4, Img.attack['warrior_hit'].height / 4 , ( x - width / 2 ) , (  y - height / 2 )  , width , height );
				}
		
		}else{

			if( self.attackActive && self.className == 'warrior'){

				var frameWidth = Img.attack[self.className].width / 4;
				var frameHeight = Img.attack[self.className].height / 4;
				var width = 155;
				var height = 180;
				var walkingMod = Math.floor( self.effectAnimCounter1 ) % 4;
				ctx.drawImage( Img.attack[self.className] , walkingMod * frameWidth , directionMod * frameHeight , Img.attack[self.className].width / 4 , Img.attack[self.className].height / 4 , ( x - width / 2 ) - 1 , (  y - height / 2 ) + 10  , width , height );

				swingSound.volume = .4; 
				swingSound.play();

			}else if( self.attackActive && self.className == 'monk'){

				var frameWidth = Img.class[self.className].width / 4;
				var frameHeight = Img.class[self.className].height / 4;
				var width = 45;
				var height = 102;
				var walkingMod = Math.floor( self.spriteAnimCounter ) % 4;
				var soundMod = Math.floor( self.effectAnimCounter1 ) % 4;
				ctx.drawImage( Img.class[self.className] , walkingMod * frameWidth , directionMod * frameHeight , Img.class[self.className].width / 4 , Img.class[self.className].height / 4 , x - width / 2 , y - height / 2 , width , height );

				var frameWidth = Img.attack[self.className].width / 6;
				var frameHeight = Img.attack[self.className].height / 4;
				var width = 132;
				var height = 128;
				var attackMod = Math.floor( self.effectAnimCounter1 ) % 6;
				ctx.drawImage( Img.attack[self.className] , attackMod * frameWidth , directionMod * frameHeight , Img.attack[self.className].width / 6 , Img.attack[self.className].height / 4 , x - width / 2 , y - height / 2 , width , height );

				if( soundMod == 1 )
					wooshSound1.play();

				if( soundMod == 2 )
					wooshSound2.play();

				if( soundMod == 3 )
					wooshSound3.play();

			}else{

				var frameWidth = Img.class[self.className].width / 4;
				var frameHeight = Img.class[self.className].height / 4;
				var width = 45;
				var height = 102;
				var walkingMod = Math.floor( self.spriteAnimCounter ) % 4;
				ctx.drawImage( Img.class[self.className] , walkingMod * frameWidth , directionMod * frameHeight , Img.class[self.className].width / 4 , Img.class[self.className].height / 4 , x - width / 2 , y - height / 2 , width , height );

			}

		}


		if( self.showHitAnim ){

			self.drawHitDamage(); 
		
		}

		// Text over name 
		ctx.fillStyle="#FFF";
		ctx.font="13px Verdana";
		ctx.textAlign="center";

		ctx.fillText( self.username , x , y - 53 );
		ctx.restore();

		}


	}
	
	Player.list[self.id] = self;
	
	
	return self;
}

Player.list = {};

	
var Bullet = function( initPack ){

	var self = {};

	self.id = initPack.id;
	self.x = initPack.x;
	self.y = initPack.y;
	
	self.draw = function(){

		var width = Img.bullet.width/2;
		var height = Img.bullet.height/2;
		
		var x = self.x - Player.list[selfId].x + WIDTH / 2;
		var y = self.y - Player.list[selfId].y + HEIGHT / 2;
		
		ctx.drawImage(Img.bullet,
			0,0,Img.bullet.width,Img.bullet.height,
			x-width/2,y-height/2,width,height);
	}
	
	Bullet.list[self.id] = self;		
	return self;
}

Bullet.list = {};





getDistance = function( selfX , selfY , thisX , thisY ){

	return Math.sqrt(Math.pow( thisX - selfX , 2 ) + Math.pow( thisY - selfY , 2 ));

}

initTalkCount = 0; 
typeEnd = 0; 

// zMob
// 
var Mob = function( params ){

	var self = {};

	self.id = Math.random(); 
	self.x = params.x;
	self.y = params.y; 
	self.mobName = params.mobName; 
	self.imageName = params.imageName;
	self.imageHeight = params.imageHeight;
	self.imageWidth = params.imageWidth; 
	self.spriteAnimCounter = 0;  
	self.directionMod = 0; 
	self.nameOffY = 46;
	self.pressingLeft = false;
	self.pressingRight = false;
	self.pressingDown = false;
	self.pressingUp = false; 
	self.maxSpd = 2; 
	self.allowWalk = params.allowWalk; 
	self.spdX = 0;
	self.spdY = 0;
	self.walkCounter = 0;
	self.pathCounter = 0; 
	self.thisPathCount = 0; 
	self.showSpeech = false; 
	self.mobText = ""; 
	self.turnOffSpeech = 0; 
	self.hasDialog = params.hasDialog;
	self.hasQuest = params.hasQuest; 
	self.questWait = false; 
	self.shadowYOff = params.shadowYOff;
	self.initType = false; 
	self.curFrame = 0; 
	self.talkCount = 0; 

	if( params.pathId !== undefined ){ 
		self.pathId = params.pathId; 
	}else{
		self.pathId = 0; 
	}	


	self.draw = function(){

		self.spriteAnimCounter = self.spriteAnimCounter + .1; 
		self.curFrame = self.curFrame + 1; 

		var width = Img.mob[self.imageName].width / 2;
		var height = Img.mob[self.imageName].height / 2;

		var x = self.x - Player.list[selfId].x + WIDTH / 2;
		var y = self.y - Player.list[selfId].y + HEIGHT / 2;
		
		if( self.shadowYOff != 1000 ){
			ctx.drawImage( Img.shadow1 , x - 21 , y + self.shadowYOff );
		}

		var frameWidth = Img.mob[self.imageName].width / 4;
		var frameHeight = Img.mob[self.imageName].height / 4;

		var width = self.imageHeight;
		var height = self.imageWidth;

		if( self.pressingRight )	//Right
			self.directionMod = 2;

		else if( self.pressingLeft )	//left
			self.directionMod = 1;

		else if( self.pressingUp )	//up
			self.directionMod = 3;

		else if( self.pressingDown )	//down
			self.directionMod = 0;

		var walkingMod = Math.floor( self.spriteAnimCounter ) % 4;

		ctx.drawImage(  Img.mob[self.imageName] , walkingMod * frameWidth , self.directionMod * frameHeight , Img.mob[self.imageName].width / 4 , Img.mob[self.imageName].height / 4 , x - width / 2 , y - height / 2 , width , height );

		ctx.fillStyle="#FFF";
		ctx.font="13px Verdana";
		ctx.textAlign="center";

		var offYText = self.nameOffY + 5;  

		ctx.fillText( self.mobName , x , y - offYText );

		if( self.hasQuest ){
			ctx.drawImage( Img.questmark , x - 12 , y + walkingMod - 118 );	
		}

		if( self.questWait ){
			ctx.drawImage( Img.activemark , x - 12 , y + walkingMod - 118 );	
		}

		if( self.hasDialog ){
			self.showDialog( x , y , width ); 
		}

	}


	self.update = function(){

		if( self.allowWalk ){
			self.walk(); 
		}

		if( self.pathId != 0 ){
			self.movePath(); 
		}

		self.draw(); 

		// Stop the mob when dialog is registered
		//
		if( self.showSpeech == false ){
			self.updateSpd();
			self.updatePosition();
		}

		getDistance(); 

	}


	self.movePath = function(){

		self.pathCounter++; 

		if( self.pathId == 2 ){

			if( self.pathCounter % 68 == 1 ){

				self.thisPathCount++; 

				var pathMod = Math.floor( self.thisPathCount ) % 4;				

				if( pathMod == 0 ){
					self.pressingLeft = true; 
				}

				if( pathMod == 1){
					self.pressingLeft = false; 
				}

				if( pathMod == 2 ){
					self.pressingRight = true; 
				}

				if( pathMod == 3 ){
					self.pressingRight = false;
				}

			}

		}

	}



	self.walk = function(){

		self.walkCounter++; 

		if( self.walkCounter % 50 == 1 ){

			var directionRand = Math.random(); 

			if( directionRand >= .75 ){

				self.pressingRight = true;
				self.pressingLeft = false;
				self.pressingUp = false;
				self.pressingDown = false;

			}else if( directionRand >= .5 ){

				self.pressingRight = false;
				self.pressingLeft = true;
				self.pressingUp = false;
				self.pressingDown = false;

			}else if( directionRand >= .25 ){

				self.pressingRight = false;
				self.pressingLeft = false;
				self.pressingUp = true;
				self.pressingDown = false;

			}else{

				self.pressingRight = false;
				self.pressingLeft = false;
				self.pressingUp = false;
				self.pressingDown = true;

			}

		}

	}


	self.showDialog = function( x , y , width ){

		distance = getDistance( Player.list[selfId].x , Player.list[selfId].y , self.x , self.y );

		if( distance < 100 ){
			self.showSpeech = true; 
			self.firstRun = true; 
		}else{
			self.showSpeech = false; 
			//typeSound.pause(); 

		}

		if( self.turnOffSpeech ){
			document.getElementById("talktext_" + self.imageName ).style.display = 'none'; 
			document.getElementById("dialog_name" ).style.display = 'none';
			document.getElementById("dzone" ).style.display = 'none'; 
			document.getElementById("dportrait" ).style.display = 'none'; 
			self.turnOffSpeech = 0; 
		}

		if( self.showSpeech ){

			thisX = ( x - width / 2 ) - 290; 
			thisY = ( y - width / 2 ) - 232; 

			thisLeft = ( x - width / 2 ) - 82; 
			thisRight = ( y - width / 2 ) - 190; 
			document.getElementById("talktext_" + self.imageName ).style.display = 'block';

 

			if( self.initType == false){

				self.mobText = self.getMobText( ); 


				initTalkCount++; 

				if( initTalkCount == 11 ){
					showCompleteQuest('villager'); 
				}

				//typeSound.volume = .3; 
				//typeSound.currentTime = 0;
				//typeSound.play(); 

				var frameCut = 20;


				if( self.imageName == 'fairy'){
					frameCut = 115; 
				}

				if( self.imageName == 'warriormaster'){
					frameCut = 195; 
				}

				if( self.imageName == 'dog'){
					frameCut = 10; 
				}

				if( self.imageName == 'cat'){
					frameCut = 10; 
				}

				if( self.imageName == 'magemaster'){
					frameCut = 95; 
				}

				if( self.imageName == 'siren'){
					frameCut = 162; 
				}

				if( self.imageName == 'enchantermaster'){
					frameCut = 55; 
				}

				if( self.imageName == 'angelone'){
					frameCut = 90; 
				}

				if( self.imageName == 'angelthree'){
					frameCut = 70; 
				}

				if( self.imageName == 'prince'){
					frameCut = 70; 
				}

				if( self.imageName == 'mothernature'){
					frameCut = 	200; 
				}

				if( self.imageName == 'dancer'){
					frameCut = 	40; 
				}

				if( self.imageName == 'leblanc' ){
					frameCut = 56;
				}

				if( self.imageName == 'queen' ){
					frameCut = 136;
				}

				if( self.imageName == 'green'){
					frameCut = 78;
				}

				if( self.imageName == 'rydia' ){
					frameCut = 90;
				}

				typeEnd = self.curFrame + frameCut;  


				document.getElementById("talktext_" + self.imageName ).innerHTML = self.mobText; 
				typeWriter("#talktext_" + self.imageName ,"true", 38 );
				self.initType = true; 

				setTimeout(function(){ 
					self.initType = false; 
				}, 22000);


				// Quest management 
				//
				if( self.hasQuest == true ){
					self.hasQuest = false; 
					self.questWait = true; 
					document.getElementById("journalIconHold").style.display = "block";

					if(self.imageName == 'warriormaster'){
						document.getElementById("willowQuest").style.display = "block";
						document.getElementById("newIconWillow").style.display = "block";

					}

					if(self.imageName == 'siren'){
						document.getElementById("orcQuest").style.display = "block";
						document.getElementById("newIconOrc").style.display = "block";
					}

					if(self.imageName == 'mothernature'){
						document.getElementById("emperorQuest").style.display = "block";
						document.getElementById("newIconEmperor").style.display = "block";
					}

					if(self.imageName == 'green'){
						document.getElementById("fishQuest").style.display = "block";
						document.getElementById("newIconFish").style.display = "block";
					}

					if(self.imageName == 'queen'){
						document.getElementById("iceQuest").style.display = "block";
						document.getElementById("newIconIce").style.display = "block";
					}

					if(self.imageName == 'tibet'){
						document.getElementById("tibetQuest").style.display = "block";
						document.getElementById("newIconTibet").style.display = "block";
					}

					if(self.imageName == 'harvey'){
						document.getElementById("harveyQuest").style.display = "block";
						document.getElementById("newIconHarvey").style.display = "block";
					}

					if( self.imageName == 'wallman'){
						document.getElementById("voicelessQuest").style.display = "block";
						document.getElementById("newIconVoiceless").style.display = "block";						
					}

				}

			}


			if( typeEnd > self.curFrame ){

			}else{
				//typeSound.pause(); 
			}

			document.getElementById("dialog_name").innerHTML = self.mobName + ": "; 
			document.getElementById("dialog_name" ).style.display = 'block';

			thisRightB = thisRight - 40; 
			thisLeftB = thisLeft - 180; 

			document.getElementById("dzone" ).style.display = 'block';
			document.getElementById("dzone").style.top = thisRightB + "px";  
			document.getElementById("dzone").style.left = thisLeftB + "px";  

			thisRightC = thisRight - 30; 
			thisLeftC = thisLeft - 168; 

			document.getElementById("dportrait").style.display = 'block'; 
			document.getElementById("dportrait").style.backgroundImage =  "url('/client/img/portrait/" + self.imageName + ".png' )"; 
			document.getElementById("dportrait").style.top = thisRightC + "px";  
			document.getElementById("dportrait").style.left = thisLeftC + "px"; 

			var div = document.getElementById("talktext_" + self.imageName );
			div.style.left = thisLeft + 'px';
			div.style.top = thisRight + 'px';

			thisRight = thisRight - 32;
			thisLeft = thisLeft + 30;  
			var div = document.getElementById("dialog_name" );
			div.style.left = thisLeft + 'px';
			div.style.top = thisRight + 'px';

			self.turnOffSpeech = 1; 

		}

	}



	self.getMobText = function( ){

		var player = Player.list[selfId];

		mobRand = Math.random(); 

		imageName = self.imageName;

		self.talkCount++; 

		console.log( self.talkCount );

		if( imageName == 'fairy' ){
			if( self.talkCount > 1 ){
				mobText = "Ah how time flies."
			}else{
				mobText = "Good to see you again " + player.username + ". We were parted many thousands of years ago, yet we have not been separated even for a moment.";
			}
		}

		if( imageName == 'angelthree' ){
			mobText = "Hello 111";
		}

		if( imageName == 'magemaster' ){
			mobText = "Hardy har har. Tis a lovely day. After you find a smithing stone, visit me to learn the art of smithing.";
		}

		if( imageName == 'angelone'){
			mobText = "I asked the Zen Master what is Zen? He said, 'All of these worlds are shining in my mind.'"; 
		}

		if( imageName == 'angelthree' ){
			mobText = "What a glorious day it is today!";
		}

		if( imageName == 'cat' ){
			mobText = "Oh hello there " + player.username;
		}

		if( imageName == 'toki' ){
			mobText = "Caution hero, the monsters ahead are very dangerous. If your looking for experience travel to the forest south of the city.";
		}

		if( imageName == 'tibet' ){
			if( self.questWait ){
				mobText = "Aha! Oh hum.";
			}else{
				mobText = "Walk around the shrine 7 times.";
			}
		}

		if( imageName == 'warriormaster'){

			if( self.questWait ){
				mobText = "If you end up catching a Willow Wisp that would be so epic. Come back when you have found one."; 
			}else{
				mobText = "Greetings " + player.username + ". Recently I heard a tale about a rare creature called a willow wisp that lives in Mythic Forest. If you spot one would you please capture it for me? A hefty prize will be awaiting. ";
			}
		}

		if( imageName == 'siren'){
			if( self.questWait ){
				mobText = "Any luck finding my magic pendant? I am guessing by now the Orc King has it in his possession.";
			}else{
				mobText = "I was recently ambushed by a pack of Orcs, they have captured my magic pendent. Would you travel to the Orc Encampment and find my precious keepsake?";
			}
		}

		if( imageName == 'mothernature'){
			if( self.questWait ){
				mobText = "Travel to the Sun Palace with haste hero, it is time for the Corrupt Emperor to face redemption."
			}else{
				mobText = "The Sun Palace was once a place of peace and beauty. Recently a dark force has crept in and taken hold. " + player.username + " you must travel to the Sun Palace and lay waste to the false Emperor.";
			}
		}

		if( imageName == 'enchantermaster'){
			mobText = "When the many are reduced to one, to what is the one reduced?";
		}

		if( imageName == 'leblanc'){
			mobText = "Oh girl, you better go get em.";
		}

		if( imageName == 'queen'){
			//mobText = "King Ra has become corrupted he must be stopped, travel through the valley of the snakes to find him.";
			mobText = "The lands of mythos have begun to fall out of balance. We must restore harmony, begin by traveling to frostpeak and slaying the Ice King.";
		}

		if ( imageName == 'dog'){
			mobText = "WOOF!";
		}

		if( imageName == 'dancer'){
			mobText = "When I dance I am free.";
		}

		if( imageName == 'rydia'){
			mobText = "What you see in nature is alive and a part of all of us.";
		}

		if( imageName == 'green'){
			mobText = "Come visit me when you find a fishing pole.";
		}

		if( imageName == 'healermaster'){
			mobText = "I hope to open a town general store soon.";
		}

		if( imageName == 'harvey'){
			mobText = "To gain passage to Tiv's lair you must first defeat the four gatekeepers.";
		}

		if( imageName == 'guri'){
			mobText = "Up ahead lies a mighty creature named Ovrenen, The Voiceless. If you are wise proceed with caution, many great warriors have been laid to rest attempting to slay Ovrenen.";
		}

		if( imageName == 'prince'){
			mobText = "What moves- the flag or the wind?";
		}

		return mobText; 

	}



	self.updateSpd = function(){

		if(self.pressingRight)
			self.spdX = self.maxSpd;

		else if(self.pressingLeft)
			self.spdX = -self.maxSpd;

		else
			self.spdX = 0;
		
		if(self.pressingUp)
			self.spdY = -self.maxSpd;

		else if(self.pressingDown)
			self.spdY = self.maxSpd;

		else
			self.spdY = 0;	

	}

	self.updatePosition = function(){
		self.x += self.spdX;
		self.y += self.spdY;
	}

	Mob.list[self.id] = self;

	return self;

}

Mob.list = {};


var hasSpawn = false; 

// zEnemy 
// 
var Enemy = function( initPack ){

	var self = {};

	self.id = initPack.id;
	self.x = initPack.x;
	self.y = initPack.y;
	self.hasShadow = initPack.hasShadow; 
	self.pressingDown = false;
	self.pressingUp = false;
	self.pressingLeft = false;
	self.pressingRight = false;
	self.spriteAnimCounter = initPack.spriteAnimCounter; 
	self.mobName = initPack.mobName; 
	self.imageName = initPack.imageName; 
	self.currentMap = initPack.currentMap;
	self.imageHeight = initPack.imageHeight;
	self.imageWidth = initPack.imageWidth;
	self.nameOffY = initPack.nameOffY; 
	self.isAlive = 1; 
	self.healthPercent = 100; 
	self.directionMod = 0; 
	self.isStunned = false;
	self.lastHitAmount = 0;  
	self.lastHitColor = "#fff";
	self.yOffset = 40; 
	self.xOffset = 0; 
	self.pointX = 0; 
	self.pointY = 0; 
	self.spriteTwoCounter = 0; 
	self.spriteThreeCounter = 0; 
	self.hasLevitate = initPack.hasLevitate;
	self.itemCode = '';
	self.hasSpawn = false; 
	self.itemSpawnActive = false; 
	self.questCode = 0;  


	self.initShowHit = function(){

		self.showHitEndFrame = self.curFrame + 40;
		self.showHitAnim = true;  

		self.pointX = self.x - Player.list[selfId].x + WIDTH / 2;
		self.pointY = self.y - Player.list[selfId].y + HEIGHT / 2;

		self.yOffset = 40; 
		self.xOffset = 0; 

		thisRand = Math.random(); 
		if( thisRand > .75 ){
			self.hitDirection = 1;
		}else if( thisRand > .5 ){
			self.hitDirection = 2; 
		}else if( thisRand > .25 ){
			self.hitDirection = 3; 
		}else{
			self.hitDirection = 0; 
		}

	}


	self.drawHitDamage = function(){

		if( self.showHitEndFrame > self.curFrame ){

			if( self.lastHitAmount != 0 ){
				
				hitDisplay = numberWithCommas( self.lastHitAmount );

				ctx.fillStyle="#000";
				ctx.font="bold 30px Trebuchet MS";
				ctx.textAlign="center";

				subY = ( self.pointY - self.yOffset ) + 3;
				subX = ( self.pointX - self.xOffset ) + 3;

				ctx.fillText(  hitDisplay , subX , subY );

				ctx.fillStyle= self.lastHitColor;
				ctx.font="bold 30px Trebuchet MS";
				ctx.textAlign="center";
				ctx.fillText(  hitDisplay , self.pointX - self.xOffset , self.pointY - self.yOffset );

				if( self.hitDirection == 3 ){
					self.yOffset = self.yOffset + 1.9; 
					self.xOffset = self.xOffset + 2;
				}else if( self.hitDirection == 2 ){
					self.yOffset = self.yOffset + 1.9; 
					self.xOffset = self.xOffset - 1.2;
				}else if( self.hitDirection == 1 ){
					self.yOffset = self.yOffset + 2.4; 
					self.xOffset = self.xOffset - 2;
				}else{
					self.yOffset = self.yOffset + 2.4; 
					self.xOffset = self.xOffset + 1.2;		
				} 

			}
			
		}else{
			self.showHitAnim = false; 
		}

	}


	// zEDraw
	//
	self.draw = function(){

		if( self.lastHitAmount != 0 && self.lastHitAmount != self.prevHitAmount ){
			self.initShowHit(); 
			self.prevHitAmount = self.lastHitAmount; 
		}

		if( self.questCode == 3){
			showCompleteQuest('iceKing'); 
		}

		if( self.questCode == 4 ){
			showCompleteQuest('emperor'); 
			socket.emit('palaceWallEnd', selfId ); 

		}

		if( self.questCode == 5 ){
			showCompleteQuest('willow'); 
		}

		if( self.questCode == 6 ){
			showCompleteQuest('orcKing'); 
		}

		if( self.questCode == 7 ){
			showCompleteQuest('voiceless'); 
		}


		/* 
		if( self.questCode == 8 ){
			showCompleteQuest('voiceless'); 
		}
		if( self.questCode == 9 ){
			showCompleteQuest('voiceless'); 
		}
		if( self.questCode == 10 ){
			showCompleteQuest('voiceless'); 
		}
		if( self.questCode == 11 ){
			showCompleteQuest('voiceless'); 
		}
		*/ 

		/* 
		if( self.itemCode != '' && self.itemSpawnActive == false ){
			console.log("SPAWNING " + self.itemCode );
			if( self.itemCode == 'longSword'){
			}
			self.hasSpawn = true;
			self.itemSpawnActive = true;  
			self.itemSpawnDuration = self.curFrame + 300; 
		}else{
			self.hasSpawn = false; 
		}
		*/ 
		/* 
		if( self.itemSpawnActive ){
			if( self.itemSpawnDuration > self.curFrame ){
				var ix = self.x - Player.list[selfId].x + WIDTH / 2;
				var iy = self.y - Player.list[selfId].y + HEIGHT / 2;
				ctx.drawImage( Img.item['longSword'] , ix - 21 , iy );
			}else{
				self.itemSpawnActive = false; 
			}
		}
		*/ 




		self.spriteTwoCounter = self.spriteTwoCounter + .5; 
		self.spriteThreeCounter = self.spriteThreeCounter + .35; 


		var frameCount = 4; 

		// Only draw if nearby 
		//
		distance = getDistance( Player.list[selfId].x , Player.list[selfId].y , self.x , self.y );


		if( distance < 800 && Player.list[selfId].currentMap == self.currentMap ){

			var width = Img.enemy[self.imageName].width / 2;
			var height = Img.enemy[self.imageName].height / 2;
			
			var x = self.x - Player.list[selfId].x + WIDTH / 2;
			var y = self.y - Player.list[selfId].y + HEIGHT / 2;

			var frameWidth = Img.enemy[self.imageName].width / 4;
			var frameHeight = Img.enemy[self.imageName].height / 4;

			var shadowCode = 1; 
			var sMod = Math.floor( self.spriteThreeCounter ) % 16;


			if( self.hasLevitate ){

				if( sMod == 1 ){
					yMod = 1; 
				}else if( sMod == 2){
					yMod = 2; 
				}else if( sMod == 3 ){
					yMod = 3; 
				}else if( sMod == 4 ){
					yMod = 4; 
				}else if( sMod == 5){
					yMod = 5; 
				}else if( sMod == 6){
					yMod = 6; 
				}else if( sMod == 7){
					yMod = 7;
				}else if( sMod == 8){
					yMod = 8;
				}else if( sMod == 9){
					yMod = 7;
				}else if( sMod == 10){
					yMod = 6;
				}else if( sMod == 11){
					yMod = 5;
				}else if( sMod == 12){
					yMod = 4;
				}else if( sMod == 13){
					yMod = 3;
				}else if( sMod == 14){
					yMod = 2;
				}else if( sMod == 15){
					yMod = 1;  
				}else{
					yMod = 0; 
				}

			}else{
				yMod = 0; 
			}

			var ySOff = ( y + self.hasShadow + yMod ); 


			if( shadowCode == 1 ){
				ctx.drawImage( Img.shadow1 , x - 21 , ySOff );
			}else if( shadowCode == 2 ){
				ctx.drawImage( Img.shadow2 , x - 21 , ySOff );
			}else if( shadowCode == 3 ){
				ctx.drawImage( Img.shadow3 , x - 21 , ySOff );
			}else if( shadowCode == 4 ){
				ctx.drawImage( Img.shadow4 , x - 21 , ySOff );
			}

			var width = self.imageHeight;
			var height = self.imageWidth;

			if( self.pressingRight )	//Right
				self.directionMod = 2;

			else if( self.pressingLeft )	//left
				self.directionMod = 1;

			else if( self.pressingUp )	//up
				self.directionMod = 3;

			else if( self.pressingDown )	//down
				self.directionMod = 0;


			if( self.isAlive == 2 ){ // stop animating on death 
				var walkingMod = 1; 
				yDown = 3; 
			}else{
				var walkingMod = Math.floor( self.spriteAnimCounter ) % 4;
				yDown = 0; 
			}

			//console.log( yMod );
			var EYOff = ( y - height / 2 ) - yDown + yMod; 

			ctx.drawImage( Img.enemy[self.imageName] , walkingMod * frameWidth , self.directionMod * frameHeight , Img.enemy[self.imageName].width / 4 , Img.enemy[self.imageName].height / 4 , x - width / 2 , EYOff , width , height );

			ctx.fillStyle="#FFF";
			ctx.font="13px Verdana";
			ctx.textAlign="center";

			var offYText = self.nameOffY + 5; 


			// Running death animation
			// 
			if( self.isAlive == 2 ){


				popSound.play(); 

				frameCount = 10;

				var frameWidth = Img.poof.width / frameCount;
				var frameHeight = Img.poof.height;
				var imgHeight = Img.poof.height;
				var imgWidth = Img.poof.width; 
				var canvasWidth = window.innerWidth;
				var canvasHeight = window.innerHeight;
				var cX = self.x - Player.list[selfId].x + WIDTH / 2;
				var cY = self.y - Player.list[selfId].y + HEIGHT / 2;
				var spriteMod = Math.floor( self.spriteTwoCounter ) % 10;

				ctx.drawImage( Img.poof , spriteMod * frameWidth , 0 , frameWidth , frameHeight , cX - ( frameWidth / 2 ) + 75 , cY - ( frameHeight / 2 ) + 28 , 210 , 200
				);

			}

			if( self.healthPercent == 0 ){
				ctx.fillText( self.mobName + "'s corpse" , x , y - offYText );
			}else if( self.healthPercent > 99){
				ctx.fillText( self.mobName , x , y - offYText );
			}else{
				ctx.fillText( self.mobName + " - " + self.healthPercent + "%" , x , y - offYText );
			}


			if( self.isStunned ){

				animWidth = 400; 
				animHeight = 300;
				animFrames = 18; 
				offX = 12; 
				offY = 15;

				var frameWidth = Img.effect['mez'].width / animFrames;
				var frameHeight = Img.effect['mez'].height;
				var imgHeight = Img.effect['mez'].height;
				var imgWidth = Img.effect['mez'].width; 
				var canvasWidth = window.innerWidth;
				var canvasHeight = window.innerHeight;
				var cX = self.x - Player.list[selfId].x + WIDTH / 2;
				var cY = self.y - Player.list[selfId].y + HEIGHT / 2;
				var spriteMod = Math.floor( self.curFrame ) % animFrames; //1,2
	
				ctx.globalAlpha = 1;
				ctx.drawImage( Img.effect['mez'] , spriteMod * frameWidth , 0 , frameWidth , frameHeight , cX - ( frameWidth / 2 ) + offX , cY - ( frameHeight / 2 ) + offY , animWidth , animHeight );

			}


			if( self.showHitAnim ){

				self.drawHitDamage(); 

			}



		}


	}
	
	Enemy.list[self.id] = self;

	return self;

}


Enemy.list = {};



var selfId = null;


socket.on('init',function(data){

	if(data.selfId)
		selfId = data.selfId;

	for(var i = 0 ; i < data.player.length; i++){
		new Player( data.player[i] );
	}

	/* 
	for(var i = 0 ; i < data.bullet.length; i++){
		new Bullet( data.bullet[i] );
	}
	*/ 

	for(var i = 0 ; i < data.enemy.length; i++){
		new Enemy( data.enemy[i] );
	}

});



socket.on('update',function(data){

	for(var i = 0 ; i < data.player.length; i++){

		var pack = data.player[i];

		var p = Player.list[pack.id];


		if(p){

			if(pack.x !== undefined)
				p.x = pack.x;

			if(pack.y !== undefined)
				p.y = pack.y;

			if(pack.hp !== undefined)
				p.hp = pack.hp;

			if(pack.hpMax !== undefined)
				p.hpMax = pack.hpMax;

			if( pack.drawTrigger1 !== undefined )
				p.drawTrigger1 = pack.drawTrigger1;

			if( pack.drawTrigger2 !== undefined )
				p.drawTrigger2 = pack.drawTrigger2;

			if( pack.drawTrigger3 !== undefined )
				p.drawTrigger3 = pack.drawTrigger3;

			if( pack.drawTrigger4 !== undefined )
				p.drawTrigger4 = pack.drawTrigger4;

			if( pack.drawTrigger5 !== undefined )
				p.drawTrigger5 = pack.drawTrigger5;

			if( pack.drawTrigger6 !== undefined )
				p.drawTrigger6 = pack.drawTrigger6;

			if( pack.drawTrigger7 !== undefined )
				p.drawTrigger7 = pack.drawTrigger7;

			if( pack.playerLevel !== undefined )
				p.playerLevel = pack.playerLevel; 

			if( pack.totalXp !== undefined )
				p.totalXp = pack.totalXp; 

			if( pack.nextLevelXp !== undefined )
				p.nextLevelXp = pack.nextLevelXp; 

			if( pack.prevLevelXp !== undefined )
				p.prevLevelXp = pack.prevLevelXp; 

			if( pack.attackActive !== undefined )
				p.attackActive = pack.attackActive; 

			if( pack.currentMap !== undefined )
				p.currentMap = pack.currentMap; 

			if(pack.className !== undefined )
				p.className = pack.className;

			if(pack.spriteAnimCounter !== undefined )
				p.spriteAnimCounter = pack.spriteAnimCounter;

			if(pack.currentTargetName !== undefined )
				p.currentTargetName = pack.currentTargetName;

			if(pack.currentTargetHpPercent !== undefined )
				p.currentTargetHpPercent = pack.currentTargetHpPercent;

			if( pack.pressing1 !== undefined )
				p.pressing1 = pack.pressing1;

			if( pack.pressing2 !== undefined )
				p.pressing2 = pack.pressing2; 

			if( pack.pressing3 !== undefined )
				p.pressing3 = pack.pressing3; 

			if( pack.pressing4 !== undefined )
				p.pressing4 = pack.pressing4; 

			if( pack.pressing5 !== undefined )
				p.pressing5 = pack.pressing5;

			if( pack.pressing6 !== undefined )
				p.pressing6 = pack.pressing6;

			if( pack.pressingUp !== undefined )
				p.pressingUp = pack.pressingUp; 

			if( pack.energy !== undefined )
				p.energy = pack.energy; 

			if( pack.totalEnergy !== undefined )
				p.totalEnergy = pack.totalEnergy; 

			if( pack.pressingDown !== undefined )
				p.pressingDown = pack.pressingDown; 

			if( pack.pressingAttack !== undefined )
				p.pressingAttack = pack.pressingAttack;

			if( pack.playerStrength !== undefined )
				p.playerStrength = pack.playerStrength;

			if( pack.playerStamina !== undefined )
				p.playerStamina = pack.playerStamina;

			if( pack.playerDexterity !== undefined )
				p.playerDexterity = pack.playerDexterity;

			if( pack.playerIntelligence !== undefined )
				p.playerIntelligence = pack.playerIntelligence;

			if( pack.pressingSecondaryAttack !== undefined )
				p.pressingSecondaryAttack = pack.pressingSecondaryAttack;

			if( pack.pressingLeft !== undefined )
				p.pressingLeft = pack.pressingLeft;

			if( pack.pressingRight !== undefined )
				p.pressingRight = pack.pressingRight; 

			if( pack.effectAnimCounter1 !== undefined )
				p.effectAnimCounter1 = pack.effectAnimCounter1;

			if( pack.effectAnimCounter2 !== undefined )
				p.effectAnimCounter2 = pack.effectAnimCounter2;

			if( pack.effectAnimCounter3 !== undefined )
				p.effectAnimCounter3 = pack.effectAnimCounter3;

			if( pack.effectAnimCounter4 !== undefined )
				p.effectAnimCounter4 = pack.effectAnimCounter4;

			if( pack.effectAnimCounter5 !== undefined )
				p.effectAnimCounter5 = pack.effectAnimCounter5;

			if( pack.effectAnimCounter6 !== undefined )
				p.effectAnimCounter6 = pack.effectAnimCounter6;

			if( pack.cooldown1Active !== undefined )
				p.cooldown1Active = pack.cooldown1Active;

			if( pack.cooldown2Active !== undefined )
				p.cooldown2Active = pack.cooldown2Active;

			if( pack.cooldown3Active !== undefined )
				p.cooldown3Active = pack.cooldown3Active;

			if( pack.cooldown4Active !== undefined )
				p.cooldown4Active = pack.cooldown4Active;

			if( pack.cooldown5Active !== undefined )
				p.cooldown5Active = pack.cooldown5Active;

			if( pack.cooldown6Active !== undefined )
				p.cooldown6Active = pack.cooldown6Active;

			if( pack.curFrame !== undefined )
				p.curFrame = pack.curFrame;

			if( pack.cooldown1 !== undefined )
				p.cooldown1 = pack.cooldown1;

			if( pack.cooldown2 !== undefined )
				p.cooldown2 = pack.cooldown2;

			if( pack.cooldown3 !== undefined )
				p.cooldown3 = pack.cooldown3;

			if( pack.cooldown4 !== undefined )
				p.cooldown4 = pack.cooldown4;

			if( pack.cooldown5 !== undefined )
				p.cooldown5 = pack.cooldown5;

			if( pack.cooldown6 !== undefined )
				p.cooldown6 = pack.cooldown6; 

			if( pack.moveBackDrawActive !== undefined )
				p.moveBackDrawActive = pack.moveBackDrawActive; 

			if( pack.lastHitAmount !== undefined )
				p.lastHitAmount = pack.lastHitAmount;

			if( pack.goldAmount !== undefined )
				p.goldAmount = pack.goldAmount;  

		}
	}


	/* 
	for(var i = 0 ; i < data.bullet.length; i++){

		var pack = data.bullet[i];
		var b = Bullet.list[data.bullet[i].id];

		if(b){

			if(pack.x !== undefined)
				b.x = pack.x;

			if(pack.y !== undefined)
				b.y = pack.y;

		}

	}
	*/ 


	for(var i = 0 ; i < data.enemy.length; i++){

		var pack = data.enemy[i];
		var e = Enemy.list[data.enemy[i].id];

		if(e){

			if( pack.x !== undefined )
				e.x = pack.x;

			if( pack.y !== undefined )
				e.y = pack.y;

			if( pack.isAlive !== undefined )
				e.isAlive = pack.isAlive;

			if( pack.spriteAnimCounter !== undefined )
				e.spriteAnimCounter = pack.spriteAnimCounter; 

			if( pack.pressingUp !== undefined )
				e.pressingUp = pack.pressingUp;

			if( pack.pressingDown !== undefined )
				e.pressingDown = pack.pressingDown;

			if( pack.pressingLeft !== undefined )
				e.pressingLeft = pack.pressingLeft;

			if( pack.pressingRight !== undefined )
				e.pressingRight = pack.pressingRight;

			if( pack.healthPercent !== undefined )
				e.healthPercent = pack.healthPercent;

			if( pack.curFrame !== undefined )
				e.curFrame = pack.curFrame; 

			if( pack.isStunned !== undefined )
				e.isStunned = pack.isStunned; 

			if( pack.lastHitAmount !== undefined )
				e.lastHitAmount = pack.lastHitAmount; 

			if( pack.lastHitColor !== undefined )
				e.lastHitColor = pack.lastHitColor; 

			if( pack.hasLevitate !== undefined )
				e.hasLevitate = pack.hasLevitate; 

			if( pack.itemCode !== undefined )
				e.itemCode = pack.itemCode; 

			if( pack.questCode !== undefined )
				e.questCode = pack.questCode; 

		}

	}
	


});



socket.on('remove',function(data){

	for(var i = 0 ; i < data.player.length; i++){
		delete Player.list[data.player[i]];
	}

	/* 
	for(var i = 0 ; i < data.bullet.length; i++){
		delete Bullet.list[data.bullet[i]];
	}
	*/ 

	for(var i = 0 ; i < data.enemy.length; i++){
		delete Enemy.list[data.enemy[i]];
	}
	

});


var cooldown1Save = false; 
var cooldown2Save = false; 
var cooldown3Save = false; 
var cooldown4Save = false; 
var cooldown5Save = false; 
var cooldown6Save = false; 

var totalCooldown1 = 0; 
var totalCooldown2 = 0; 
var totalCooldown3 = 0; 
var totalCooldown4 = 0; 
var totalCooldown5 = 0; 
var totalCooldown6 = 0; 


checkCooldowns = function(){

	var player = Player.list[selfId];

	if( player.cooldown1Active ){

		if( cooldown1Save == false ){
			totalCooldown1 = player.cooldown1 - player.curFrame;
			cooldown1Save = true;
		}
		showCooldown( 385 , 20 , player.cooldown1 , totalCooldown1 , player.curFrame ); 	
	}

	if( player.cooldown2Active ){

		if( cooldown2Save == false ){
			totalCooldown2 = player.cooldown2 - player.curFrame;
			cooldown2Save = true;
		}
		showCooldown( 456 , 20 , player.cooldown2 , totalCooldown2 , player.curFrame ); 	
	}

	if( player.cooldown3Active ){

		if( cooldown3Save == false ){
			totalCooldown3 = player.cooldown3 - player.curFrame;
			cooldown3Save = true;
		}
		showCooldown( 529 , 20 , player.cooldown3 , totalCooldown3 , player.curFrame ); 	
	}	

	if( player.cooldown4Active ){

		if( cooldown4Save == false ){
			totalCooldown4 = player.cooldown4 - player.curFrame;
			cooldown4Save = true;
		}
		showCooldown( 601 , 20 , player.cooldown4 , totalCooldown4 , player.curFrame ); 
	}

	if( player.cooldown5Active ){

		if( cooldown5Save == false ){
			totalCooldown5 = player.cooldown5 - player.curFrame;
			cooldown5Save = true;
		}
		showCooldown( 676 , 20 , player.cooldown5 , totalCooldown5 , player.curFrame ); 	
	}

	if( player.cooldown6Active ){


		if( cooldown6Save == false ){
			totalCooldown6 = player.cooldown6 - player.curFrame;
			cooldown6Save = true;
		}
		showCooldown( 750 , 20 , player.cooldown6 , totalCooldown6 , player.curFrame ); 	
	}

}



showCooldown = function( zX , zY , cooldownRemain , totalCooldown , curFrame ){

	barX = 51; 
	barY = 51; 

	timeLeft = cooldownRemain - curFrame;  
	percentLeft = ( timeLeft / totalCooldown ) * 100;

	barWidth = ( barX / 100 ) * percentLeft;
	barDif = barWidth - barX; 

	ctxUi.fillStyle = "rgba(0, 0, 0, 0.5 )";
	ctxUi.fillRect( zX , zY , barX , barWidth );

}


var gameUpdate; 

startGame = function(){

	if(!selfId)
		return;

	document.getElementById("ctx").style.display = "block";

	document.getElementById("ctx").style.backgroundColor = 'rgba( 0, 0, 0, 1 )';

	document.body.style.backgroundColor = "#000";

	document.body.style.background = "0";

	Enemy.list = {};

	gameUpdate = setInterval( update , 40 );



}


changeBGTrack = function( params ){

	if( params.trackLocation !== undefined ){
		trackLocation = params.trackLocation;
	}

	if( params.fadeEffect !== undefined ){
		fadeEffect = params.fadeEffect;
	}

	// pause all tracks 
	pulseSound.pause();
	comebackSound.pause();
	lavaSound.pause();
	whereareyouSound.pause();
	orcSound.pause();
	ninebitSound.pause();
	famazeSound.pause();
	//fiftySound.pause();
	shrineSound.pause();

	//fade in 
	// 
	if( trackLocation == 'forest' ){
		ninebitSound.play();
	}

	if( trackLocation == 'city' ){
		comebackSound.play();
	}

	if( trackLocation == 'sunPalace' ){
		whereareyouSound.play();
	}

	if( trackLocation == 'frostpeak'){
		famazeSound.play();
	}

	if( trackLocation == 'orc'){
		orcSound.play();
	}

	if( trackLocation == 'sunken'){
		lavaSound.play();
	}

	if( trackLocation == 'sunken2'){
		lavaSound.play();
	}

	if( trackLocation == 'sshra'){
		//sshraSound.play();
	}

	if( trackLocation == 'mythicC'){
		//fiftySound.play();
	}

	if( trackLocation == 'hall'){
		shrineSound.play(); 
	}

}


function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}


// zUpdate
var lastLoop = new Date;

update = function(){

	var thisLoop = new Date;

	ctx.clearRect( 0 , 0 , 1200 , 1200 );

	drawMap();

	var fps = 1000 / ( thisLoop - lastLoop );

	lastLoop = thisLoop;

	fps = Math.round( fps );

	renderMenu( fps );

	renderChat();  

	checkCooldowns(); 

	self.frameCount++;

	for(var i in MapEffect.list){
		MapEffect.list[i].draw();
	}

	drawInOrder(); 

	drawTopMap(); 


	if( player.currentTargetName !== "none" && player.currentTargetName !== undefined )
		drawHpBar(); 

	if( setEndGame == true ){
		clearInterval( gameRun ); 
	}


}




var MapEffect = function( params ){

	var self = {}; 


	self.id = Math.random(); 
	self.x = params.x; 
	self.y = params.y; 
	self.effectName = params.effectName; 
	self.imageName = params.imageName;
	self.imageHeight = params.imageHeight;
	self.imageWidth = params.imageWidth; 
	self.spriteAnimCounter = 0;  
	self.nameOffY = 30; 
	self.frameCount = params.frameCount;



	self.draw = function(){


		self.spriteAnimCounter = self.spriteAnimCounter + .5; 


		var width = Img.effect[self.imageName].width / 2;
		var height = Img.effect[self.imageName].height / 2;
		
		var x = self.x - Player.list[selfId].x + WIDTH / 2;
		var y = self.y - Player.list[selfId].y + HEIGHT / 2;

		var frameWidth = Img.effect[self.imageName].width / self.frameCount;
		var frameHeight = Img.effect[self.imageName].height;

		var width = self.imageHeight;
		var height = self.imageWidth;

		self.directionMod = 0;

		var walkingMod = Math.floor( self.spriteAnimCounter ) % self.frameCount;

		ctx.drawImage(  Img.effect[self.imageName] , walkingMod * frameWidth , self.directionMod * frameHeight , Img.effect[self.imageName].width / self.frameCount , Img.effect[self.imageName].height , x - width / 2 , y - height / 2 , width , height );

	}


	MapEffect.list[self.id] = self;


	return self;


}



MapEffect.list = {}; 





drawInOrder = function(){

	var arr = [];

	for(var i in Player.list){
		arr.push( [ Player.list[i].y , i , 1 , 0 , 0 ] );
		Player.list[i].update();
	}


	for(var i in Enemy.list){
		arr.push( [ Enemy.list[i].y , i , 0 , 1 , 0 ] );
	}

	// Draw Mobs 
	//
	if( player.currentRegion == 'mythicCity'){
		for(var i in Mob.list){
			arr.push( [ Mob.list[i].y , i , 0 , 0 , 1 ] );
		}
	}


    arr.sort(function(a,b) {
        return a[0] - b[0];
    });
	

	for( var i in arr ){

		thisId = arr[i][1];

		//if( Player.list[selfId].currentMap =)

		if( arr[i][2] == 1 ){ // draw player
			Player.list[thisId].draw();
		}

		if( arr[i][3] == 1 ){ // draw enemy 
			Enemy.list[thisId].draw();
		}

		if( player.currentMap == 'mythicCity' || player.currentMap == 'hall' || player.currentMap == 'orcEncampment' || player.currentMap == 'sunkenDepths' ){
			if( arr[i][4] == 1 ){
				Mob.list[thisId].update();
			}
		}

		/* 
		if( player.currentMap == 'hall' ){
			if( arr[i][4] == 1 ){
				Mob.list[thisId].update();
			}
		}
		*/ 
	
	}


	for(var i in Player.list){

		Player.list[i].drawEffects();

	}



	/* 
	for(var i in Bullet.list){
		Bullet.list[i].draw();
	}
	*/ 




}

mobNameToLevel = function( mobName ){

	mobLevel = 0; 

	if( mobName == 'Small Bat' || mobName == 'Red Bat'){
		mobLevel = 2; 
	}

	if( mobName == 'Gold Bat' || mobName == 'Pink Bat' || mobName == 'Enraged Wombat' || mobName == 'Swamp Dweller'){
		mobLevel = 4; 
	}

	if( mobName == 'Small Skeleton'){
		mobLevel = 6; 
	}

	if( mobName == 'Ice Skeleton'){
		mobLevel = 7; 
	}

	if( mobName == 'Ice Ghost'){
		mobLevel = 9; 
	}

	if( mobName == 'Scorpion'){
		mobLevel = 8; 
	}

	if( mobName == 'Frost Walker'){
		mobLevel = 9; 
	}

	if( mobName == 'A Frost Rider' || mobName == 'Frost Bat'){
		mobLevel = 12; 
	}

	if( mobName == 'Frost Dweller'){
		mobLevel = 12; 
	}

	if( mobName == 'Small Ice Dragon'){
		mobLevel = 18; 
	}

	if( mobLevel == 0 ){
		mobLevel = "??";
	}

	if( mobName == 'Orc King'){
		mobLevel = 30; 
	}

	if( mobName == 'A Orc Slavemaster'){
		mobLevel = 27; 
	}

	if( mobName == 'Dark Bug'){
		mobLevel = 25; 
	}

	if( mobName == 'Dark Hornet'){
		mobLevel = 26; 
	}

	if( mobName == 'A Orc Warrior'){
		mobLevel = 26; 
	}

	if( mobName == 'A Orc Druid'){
		mobLevel = 25; 
	}

	if( mobName == 'A Orc Pup'){
		mobLevel = 24; 
	}

	if( mobName == 'Wild Ghost'){
		mobLevel = 19; 
	}

	if( mobName == 'Corrupt Samurai'){
		mobLevel = 20; 
	}

	if( mobName == 'Titan'){
		mobLevel = 24; 
	}

	if( mobName == 'Palace Guard'){
		mobLevel = 24; 
	}

	if( mobName == 'Scorpion'){
		mobLevel = 24; 
	}

	if( mobName == 'Enraged Phoenix'){
		mobLevel = 26; 
	}

	if( mobName == 'Fire Phoenix'){
		mobLevel = 31; 
	}

	if( mobName == 'Fire Eye'){
		mobLevel = 26; 
	}

	if( mobName == 'Flame Apparition'){
		mobLevel = 26; 
	}

	if( mobName == 'Skeleton Warrior'){
		mobLevel = 27; 
	}

	if( mobName == 'Colossus'){
		mobLevel = 30; 
	}

	if( mobName == 'Scorpion Man'){
		mobLevel = 30; 
	}

	return mobLevel; 

}



getQuestInfo = function( questName ){

	quest = {};

	if( questName == 'villager'){
		quest.name = "Talk to 12 Villagers";
		quest.text = "Introduce yourself to people around Mythic City."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 20;  
	}

	if( questName == 'iceKing'){
		quest.name = "Slay the Ice King";
		quest.text = "Travel to lower frostpeak and defeat the Evil Ice King."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 250;  
	}

	if( questName == 'emperor'){
		quest.name = "Slay the Corrupt Emperor";
		quest.text = "Travel to the Sun Palace and put an end to the Corrupt Emperor's reign of terror."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 1000;  
	}

	if( questName == 'willow'){
		quest.name = "Capture a willow wisp";
		quest.text = "Find and capture a ultra rare willow wisp."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 5000;  
	}

	if( questName == 'orcKing'){
		quest.name = "Slay the Orc King";
		quest.text = "Travel to the Orc Encampment and slay the Orc King."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 2000;  
	}

	if( questName == 'tibet'){
		quest.name = "Digital Zen";
		quest.text = "Walk around the shrine of protection seven times."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 2000;  
	}


	if( questName == 'voiceless'){
		quest.name = "Slay the Ovrenen, the Voiceless.";
		quest.text = "Defeat the might behemoth, Ovrenen."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 25000;  
	}

	if( questName == 'gatekeepers'){
		quest.name = "Slay the Four Gatekeepers.";
		quest.text = "Take down the gatekeepers to gain access to Tiv's Lair."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 5000;  
	}

	if( questName == 'gatekeepers'){
		quest.name = "Slay Tiv the Devastator.";
		quest.text = "Take down the all mighty Tiv."; 
		quest.xp_reward = 0; 
		quest.cash_reward = 101500;  
	}

	return quest; 

}


showCompleteQuest = function( questName ){


	setTimeout(function(){ 


	document.getElementById("front_effect_two").style.background = "url('/client/img/effects/confettismall.gif')";
	document.getElementById("front_effect_two").style.display = "block";
	document.getElementById("quest_hold").style.display = "block";

	questInfo = getQuestInfo( questName );

	document.getElementById("questHeader").innerHTML = questInfo.name;
	document.getElementById("questDesc").innerHTML = questInfo.text;	
	document.getElementById("questReward").innerHTML = questInfo.cash_reward;	

		if( questName == 'villager'){
			document.getElementById("queenQuest").style.display = "block";
			document.getElementById("queenQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconQueen").style.display = "block";
		}

		if( questName == 'tibet'){
			document.getElementById("tibetQuest").style.display = "block";
			document.getElementById("tibetQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconTibet").style.display = "block";
		}

		if( questName == 'emperor'){
			document.getElementById("emperorQuest").style.display = "block";
			document.getElementById("emperorQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconEmperor").style.display = "block";
		}


		if( questName == 'orcKing'){
			document.getElementById("orcQuest").style.display = "block";
			document.getElementById("orcQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconOrc").style.display = "block";
		}

		if( questName == 'iceKing'){
			document.getElementById("iceQuest").style.display = "block";
			document.getElementById("iceQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconIce").style.display = "block";

		}

		if( questName == 'willow'){
			document.getElementById("willowQuest").style.display = "block";
			document.getElementById("willowQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconWillow").style.display = "block";
		}

		if( questName == 'fish'){
			document.getElementById("fishQuest").style.display = "block";
			document.getElementById("fishQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconFish").style.display = "block";
		}

		if( questName == 'voiceless'){
			document.getElementById("voicelessQuest").style.display = "block";
			document.getElementById("voicelessQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconVoiceless").style.display = "block";
		}

		/* 
		if( questName == 'tiv'){
			document.getElementById("voicelessQuest").style.display = "block";
			document.getElementById("voicelessQuest").style.backgroundColor = "#bbb";
			document.getElementById("completeIconVoiceless").style.display = "block";
		}
		*/ 


	}, 1000);


	yaySound.play(); 

	//console.log( questInfo ); 

}

finishQuest = function( questName ){

	document.getElementById("front_effect_two").style.background = "none";
	document.getElementById("front_effect_two").style.display = "none";
	document.getElementById("quest_hold").style.display = "none";

}


closeJournal = function(){

	document.getElementById("journal_hold").style.display = "none";

}

closeInventory = function(){

	document.getElementById("inventory_hold").style.display = "none";

}


drawHpBar = function(){

	var player = Player.list[selfId];
	ctx.drawImage( Img.hpBar , 0 , 0 , 370 , 55 , 430 , 30 , 370 , 55 );

	//energyPercent = ( player.energy / player.totalEnergy ) * 100; 
	curWidth = 350;
	hpBarWidth = player.currentTargetHpPercent * ( curWidth / 100 ); 

	var my_gradient=ctx.createLinearGradient( 0 , 0 , 180 , 135 );
	my_gradient.addColorStop(0,"#ff8b8b");
	my_gradient.addColorStop(1,"#ff0202");
	ctx.fillStyle=my_gradient;

	ctx.fillRect( 441 , 60 , hpBarWidth , 20 );

	ctx.fillStyle="#FFF";
	ctx.font="17px Verdana";
	ctx.textAlign="left"; 
	ctx.fillText( player.currentTargetName , 455 , 51 );

	levelNumber = mobNameToLevel( player.currentTargetName ); 

	ctx.fillStyle="#FFF";
	ctx.font="12px Verdana";
	ctx.textAlign="left"; 
	ctx.fillText( "Level " + levelNumber , 733 , 51 );

	ctx.fillStyle="#FFF";
	ctx.font="14px Verdana";
	ctx.fillText( player.currentTargetHpPercent + "%" , 595 , 75 );

}


// switches 
var playSunkenAudio = true;
var playSshraAudio = true;
var playSunAudio = true; 
var playHomeAudio = true;  
var playFrostpeakAudio = true; 
var playOrcAudio = true;  
var zoneTwo = 0; 
var zoneOne = 0; 
var zoneThree = 0;
var zoneFour = 0; 

var reDraw = false;


drawTopMap = function(){ 

	var x = WIDTH / 2 - player.x;
	var y = HEIGHT / 2 - player.y;

	console.log( player.currentMap );
	console.log( 'hi' );

	if( player.currentMap == 'mythicCity'){
		// floor layer 
		//
		ctx.drawImage( Img.map['mythos_top'] , x , y );
	}

	if( player.currentMap == 'mythicForest'){
		// floor layer 
		//
		ctx.drawImage( Img.map['mythicforest_top'] , x , y );
	}


	if( player.currentMap == 'frostpeak' ){
		// floor layer 
		//
		ctx.drawImage( Img.map['frostpeak_top'] , x , y );
	}


	if( player.currentMap == 'orcEncampment' ){
		// floor layer 
		//
		ctx.drawImage( Img.map['orc_top'] , x , y );
	}


	if( player.currentMap == 'sunPalace' ){
		// floor layer 
		//
		ctx.drawImage( Img.map['sunPalace_top'] , x , y );
	}

	if( player.currentMap == 'hall' ){
		// floor layer 
		//
		ctx.drawImage( Img.map['hall_top'] , x , y );
	}

	if( player.currentMap == 'sunkenDepths' ){
		// floor layer 
		//
		ctx.drawImage( Img.map['sunken_top'] , x , y );
	}

}


initForest = false; 
initCity = false; 
initFrostpeak = false;
initFrostpeakb = false; 
initHall = false; 
initOrcEncampment = false; 
initSunken = false;
initSunkenTwo = false; 
initSunPalace = false; 


resetCamps = function(){

	initForest = false;
	initCity = false; 
	initFrostpeak = false; 
	initFrostpeakb = false;
	initSunPalace = false;
	initHall = false;
	initSunken = false; 
	initValley = false;
	initRa = false; 
	initTemple = false;
	initTOL = false;
	initOrcEncampment = false;

}


var mapCount = 0;
var eventCode = 0;
var initZoneOne = false;
var initZoneTwo = false;
var initZoneThree = false; 
var initZoneFour = false;
var fireZoneOne = false;
var fireCountOne = 0; 
var fireZoneTwo = false;
var fireCountTwo = 0; 
var fireZoneThree = false;
var fireCountThree = 0; 
var fireZoneFour = false;
var fireCountFour = 0; 

var drawMap = function(){


	var player = Player.list[selfId];

	// DRAW MYTHIC CITY 
	// 
	if( player.currentMap == 'mythicCity'){

		// Zone break points where we stop following 
		//	
		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;


		reDraw = false;

		if( initCity == false ){

			MapEffect.list = {}; 
			Mob.list = {};
			//Enemy.list = {}; 

			document.getElementById("ctx-fx").style.display = "none";
			document.getElementById("ctx-ui").style.display = "block";
			document.getElementById("ctx").style.display = "block";
			document.body.style.backgroundImage = 'none';
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			if( allowAudio ){
				changeBGTrack({
					"trackLocation":"city",
					"fadeEffect":true,
				});
			}

			showWelcomeText("Mythic City"); 

			startMapEffects( "mythicCity" ); 

			startMobGroup('mythicCity'); 

			resetCamps(); 

			initCity = true; 

		}


		// floor layer 
		//
		ctx.drawImage( Img.map['mythicCity'] , x , y );



	// DRAW MYTHIC FOREST 
	// 
	}else if( player.currentMap == 'mythicForest'){

		reDraw = false;

		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;


		// Initialize map for the first time on client 
		//
		if( initForest == false ){

			MapEffect.list = {}; 
			Mob.list = {};
			//Enemy.list = {}; 

			if( allowAudio ){
				changeBGTrack({
					'trackLocation':'forest',
					'fadeEffect':false ,
				});
			}

			document.getElementById("front_effect_two").style.background = "none";
			document.getElementById("front_effect_two").style.display = "none";	
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			showWelcomeText("Mythic Forest"); 

			startMapEffects( "mythicForest" ); 

			self.currentRegion = "mythicA";

			resetCamps(); 

			initForest = true;


		}


		// floor layer 
		ctx.drawImage( Img.map['mythicForest'] , x , y );


	}else if( player.currentMap == 'frostpeak'){

		reDraw = false;

		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;


		// Initialize map for the first time on client 
		//
		if( initFrostpeak == false ){

			MapEffect.list = {}; 
			Mob.list = {};

			if(allowAudio){
				changeBGTrack({
					'trackLocation':'frostpeak',
					'fadeEffect':false ,
				});
			}

			//document.getElementById("front_effect_two").style.background = "none";
			//document.getElementById("front_effect_two").style.display = "none";	

			document.getElementById("front_effect_two").style.background = "url('/client/img/effects/snow.gif')";
  			document.getElementById("front_effect_two").style.display = "block";
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			showWelcomeText("Frostpeak"); 

			startMapEffects( "frostpeak" ); 

			self.currentRegion = "frostpeak";

			resetCamps(); 

			initFrostpeak = true; 
  

		}


		// floor layer 
		ctx.drawImage( Img.map['frostpeak'] , x , y );




	}else if( player.currentMap == 'frostpeakb'){

		
		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;


		// Initialize map for the first time on client 
		//
		if( initFrostpeakb == false ){

			MapEffect.list = {}; 
			Mob.list = {};

			if(allowAudio){
				changeBGTrack({
					'trackLocation':'frostpeak',
					'fadeEffect':false ,
				});
			}


			//document.getElementById("front_effect_two").style.background = "none";
			//document.getElementById("front_effect_two").style.display = "none";	

			document.getElementById("front_effect_two").style.background = "url('/client/img/effects/snow.gif')";
  			document.getElementById("front_effect_two").style.display = "block";
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			showWelcomeText("Frostpeak Valley"); 

			startMapEffects( "frostpeakb" ); 

			self.currentRegion = "frostpeakb";

			resetCamps(); 

			initFrostpeakb = true;


		}


		// floor layer 
		ctx.drawImage( Img.map['frostpeakb'] , x , y );



	// DRAW ORC ENCAMPMENT
	// 
	}else if( player.currentMap == 'orcEncampment'){

		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;

		// Initialize map for the first time on client 
		//
		if( initOrcEncampment == false ){

			MapEffect.list = {}; 
			Mob.list = {};
			//Enemy.list = {}; 

			if( allowAudio ){
			changeBGTrack({
				'trackLocation':'orc',
				'fadeEffect':false ,
			});
			}

			document.getElementById("front_effect_two").style.background = "none";
			document.getElementById("front_effect_two").style.display = "none";	
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			showWelcomeText("Orc Encampment"); 

			startMapEffects( "orcEncampment" ); 

			self.currentRegion = "orcEncampment";

			startMobGroup('orcEncampment'); 

			resetCamps(); 

			initOrcEncampment = true; 

		}


		// floor layer 
		ctx.drawImage( Img.map['orcEncampment'] , x , y );


	}else if( player.currentMap == 'hall'){

		reDraw = false;

		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;

		// Initialize map for the first time on client 
		//
		if( initHall == false ){

			MapEffect.list = {}; 
			Mob.list = {};
			//Enemy.list = {}; 

			if(allowAudio){
			changeBGTrack({
				'trackLocation':'hall',
				'fadeEffect':false ,
			});
			}

			document.getElementById("front_effect_two").style.background = "none";
			document.getElementById("front_effect_two").style.display = "none";	
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			showWelcomeText("Shrine of Protection"); 

			startMapEffects( "hall" ); 

			startMobGroup('hall'); 

			self.currentRegion = "hall";

			resetCamps(); 
			initHall = true;  

		}

		// floor layer 
		ctx.drawImage( Img.map['hall'] , x , y );




	}else if( player.currentMap == 'sunPalace'){

		reDraw = false;

		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;

		// Initialize map for the first time on client 
		//
		if( initSunPalace == false ){

			MapEffect.list = {}; 
			Mob.list = {};

			if( allowAudio ){
			changeBGTrack({
				'trackLocation':'sunPalace',
				'fadeEffect':false ,
			});
			}

			document.getElementById("front_effect_two").style.background = "none";
			document.getElementById("front_effect_two").style.display = "none";	

			document.getElementById("ctx-fx").style.display = "none";
			document.getElementById("ctx-ui").style.display = "block";
			document.getElementById("ctx").style.display = "block";
			document.body.style.backgroundImage = 'none';
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			document.getElementById("welcometext").style.display = "block";
			document.getElementById("welcometext").innerHTML = "Emperor's Sun Palace";
			setInterval(function(){
				document.getElementById("welcometext").style.display = "none";
			}, 6000);

			startMapEffects( "sunPalace" ); 

			self.currentRegion = "sunpalace";

			resetCamps(); 

			initSunPalace = true; 



		}



		// floor layer 
		ctx.drawImage( Img.map['sunPalace'] , x , y );


		mapCount++;



		if( mapCount % 70 == 1 ){
			eventCode++; 
			eventMod = eventCode % 4;
			if( eventMod == 0 ){
				if( initZoneOne == false ){
					zoneOne = mapCount + 70; 
					initZoneOne = true; 
				}
			}else if( eventMod == 1 ){
				if( initZoneTwo == false ){
					zoneTwo = mapCount + 70; 
					initZoneTwo = true; 
				}
			}else if( eventMod == 2 ){
				if( initZoneThree == false ){
					zoneThree = mapCount + 70; 
					initZoneThree = true; 
				}
			}else if( eventMod == 3 ){
				if( initZoneFour == false ){
					zoneFour = mapCount + 70; 
					initZoneFour = true; 
				}
			}

		}



		if( initZoneOne == true ){
			if( zoneOne > mapCount ){
				ctx.drawImage( Img.warnzone , x + 1800  , y + 1050  );
			}else{
				initZoneOne = false; 
				fireZoneOne = true; 
				fireCountOne = mapCount + 70;
			}
		}

		if( initZoneTwo == true ){
			if( zoneTwo > mapCount ){
				ctx.drawImage( Img.warnzone , x + 2200  , y + 1050  );
			}else{
				initZoneTwo = false; 
				fireZoneTwo = true; 
				fireCountTwo = mapCount + 70;
			}
		}

		if( initZoneThree == true ){
			if( zoneThree > mapCount ){
				ctx.drawImage( Img.warnzone , x + 1800  , y + 1430  );
			}else{
				initZoneThree = false; 
				fireZoneThree = true; 
				fireCountThree = mapCount + 70;
			}
		}

		if( initZoneFour == true ){
			if( zoneFour > mapCount ){
				ctx.drawImage( Img.warnzone , x + 2200  , y + 1430  );
			}else{
				initZoneFour = false; 
				fireZoneFour = true; 
				fireCountFour = mapCount + 70;
			}
		}

		if( fireZoneOne == true ){
			if( fireCountOne > mapCount ){
				ctx.drawImage( Img.firezone , x + 1800  , y + 1050  );
				if( player.x > 1800 && player.x < 2200 && player.y > 1050 && player.y < 1430 ){
					socket.emit('takeDamage', player.id ); 
				}
			}
		}

		if( fireZoneTwo == true ){
			if( fireCountTwo > mapCount ){
				ctx.drawImage( Img.firezone , x + 2200  , y + 1050  );
				if( player.x > 2200 && player.x < 2600 && player.y > 1050 && player.y < 1430 ){
					socket.emit('takeDamage', player.id ); 
				}
			}
		}

		if( fireZoneThree == true ){
			if( fireCountThree > mapCount ){
				ctx.drawImage( Img.firezone , x + 1800  , y + 1430  );
				if( player.x > 1800 && player.x < 2200 && player.y > 1430 && player.y < 1830 ){
					socket.emit('takeDamage', player.id ); 
				}
			}
		}

		if( fireZoneFour == true ){
			if( fireCountFour > mapCount ){
				ctx.drawImage( Img.firezone , x + 2200  , y + 1430  );
				if( player.x > 2200 && player.x < 2600 && player.y > 1430 && player.y < 1830 ){
					socket.emit('takeDamage', player.id ); 
				}
			}
		}

	}else if( player.currentMap == 'sunkenDepths'){

		reDraw = false;

		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;

		// Initialize map for the first time on client 
		//
		if( initSunken == false ){

			MapEffect.list = {}; 
			Mob.list = {};

			if( allowAudio ){
			changeBGTrack({
				'trackLocation':'sunken',
				'fadeEffect':false ,
			});}

			document.getElementById("front_effect_two").style.background = "none";
			document.getElementById("front_effect_two").style.display = "none";	

			document.getElementById("ctx-fx").style.display = "none";
			document.getElementById("ctx-ui").style.display = "block";
			document.getElementById("ctx").style.display = "block";
			document.body.style.backgroundImage = 'none';

			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";

			showWelcomeText("Sunken Depths"); 

			startMapEffects( "sunkenDepths" ); 

			self.currentRegion = "sunkenDepths";

			startMobGroup('sunkenDepths'); 

			initForest = false;
			initCity = false; 
			initFrostpeak = false;
			initHall = false;
			initSunken = true; 
			initSunkenTwo = false;  

		}

		// floor layer 
		ctx.drawImage( Img.map['sunkenDepths'] , x , y );


	}else if( player.currentMap == 'sunken2'){

		reDraw = false;

		var x = WIDTH / 2 - player.x;
		var y = HEIGHT / 2 - player.y;


		// Initialize map for the first time on client 
		//
		if( initSunkenTwo == false ){

			MapEffect.list = {}; 
			Mob.list = {};

			if( allowAudio ){
			changeBGTrack({
				'trackLocation':'hall',
				'fadeEffect':false ,
			});
			}

			document.getElementById("front_effect_two").style.background = "none";
			document.getElementById("front_effect_two").style.display = "none";	

			document.getElementById("ctx-fx").style.display = "none";
			document.getElementById("ctx-ui").style.display = "block";
			document.getElementById("ctx").style.display = "block";
			document.getElementById("moneyHold").style.display = "block";
			document.getElementById("xpHold").style.display = "block";
			document.getElementById("journalIconHold").style.display = "block";
			document.getElementById("chat-text").style.display = "block";
			document.body.style.backgroundImage = 'none';

			showWelcomeText("Tiv's Lair"); 

			startMapEffects( "sunken2" ); 

			self.currentRegion = "sunken2";

			initForest = false;
			initCity = false; 
			initFrostpeak = false;
			initHall = false;
			initSunken = false;
			initSunkenTwo = true;   

		}

		// floor layer 
		ctx.drawImage( Img.map['sunken2'] , x , y );

	}else if( player.currentMap == 'galaxy'){


		if( reDraw == false ){

			if( allowAudio ){

				changeBGTrack({
					"trackLocation":"galaxy",
					"fadeEffect":true, 
				}); 

				galaxySound.play();
				pulseSound.pause();
				comebackSound.pause();
				lavaSound.pause();
				whereareyouSound.pause();
				shrineSound.pause();

				//reset audios to comeback on reteleport
				playSunkenAudio = true;
				playSshraAudio = true;
				playSunAudio = true; 

			}

			MapEffect.list = {}; 

			document.getElementById("ctx-fx").style.display = "block";

			document.getElementById("front_effect_two").style.background = "none";
			document.getElementById("front_effect_two").style.display = "none";	

			//document.body.style.backgroundImage = "url(/client/img/background/light.gif)";
			document.body.style.backgroundImage = "url(/client/img/assets/lighttunnel.gif)";

			document.getElementById("moneyHold").style.display = "none";
			document.getElementById("xpHold").style.display = "none";
			document.getElementById("journalIconHold").style.display = "none";
			document.getElementById("chat-text").style.display = "none";

			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundRepeat = "repeat";
			document.getElementById("ctx").style.display = "none";
			document.getElementById("ctx-ui").style.display = "none";
			reDraw = true;

		}

	}

}



spawnItem = function( itemCode , eX , eY ){
	/* 
	console.log("SPAWNING " + itemCode );

	console.log( "eX: " + eX + "eY: " + eY );

	if( itemCode == 'longSword'){

	}
	*/ 

}



initMapZone = function( zoneCode , mapCount ){

	if( zoneCode == 'warn1' ){
		ctx.drawImage( Img.warnzone , x + 1800  , y + 1050  );
	}

	if( zoneCode == 'warn2' ){
		ctx.drawImage( Img.warnzone , x + 2200  , y + 1050  );
	}

	if( zoneCode == 'warn3' ){
		ctx.drawImage( Img.warnzone , x + 2200  , y + 1430  );
	}

	if( zoneCode == 'warn4' ){
		ctx.drawImage( Img.warnzone , x + 1800  , y + 1430  );
	}



}



var lastScore = null;
var journalToggle = false; 
var inventoryToggle = false; 

document.onkeydown = function(event){

		if(event.keyCode === 68)	//d
			socket.emit('keyPress',{inputId:'right',state:true});
		
		else if(event.keyCode === 83 )	//s
			socket.emit('keyPress',{inputId:'down',state:true});

		else if(event.keyCode === 65 ) //a
			socket.emit('keyPress',{inputId:'left',state:true});

		else if(event.keyCode === 87 ) // w
			socket.emit('keyPress',{inputId:'up',state:true});

		else if(event.keyCode === 49 ) // w
			socket.emit('keyPress',{inputId:'1',state:true});

		else if(event.keyCode === 50 ) // w
			socket.emit('keyPress',{inputId:'2',state:true});

		else if(event.keyCode === 51 ) // w
			socket.emit('keyPress',{inputId:'3',state:true});

		else if(event.keyCode === 52 ) // w
			socket.emit('keyPress',{inputId:'4',state:true});

		else if(event.keyCode === 69 ) // w
			socket.emit('keyPress',{inputId:'5',state:true});

		else if(event.keyCode === 70 ) // w
			socket.emit('keyPress',{inputId:'6',state:true});
			
		else if( event.keyCode === 74 && gameActive ){

			if( journalToggle == false ){

				document.getElementById("journal_hold").style.display = 'block';
				journalToggle = true;
				document.getElementById("journalIconHold").style.display = "none";

				bookSound.volume = 1;
				bookSound.play();

			}else{
				document.getElementById("journal_hold").style.display = 'none';
				journalToggle = false;

				document.getElementById("newIconQueen").style.display = 'none';
				document.getElementById("newIconWillow").style.display = "none";
				document.getElementById("newIconOrc").style.display = "none";
				document.getElementById("newIconIce").style.display = "none";
				document.getElementById("newIconEmperor").style.display = "none";
				document.getElementById("newIconFish").style.display = "none";
				document.getElementById("newIconTibet").style.display = "none";

			}

		}else if( event.keyCode === 73 && gameActive ){


			if( inventoryToggle == false ){

				document.getElementById("inventory_hold").style.display = 'block';
				inventoryToggle = true;
				bookSound.volume = 1;
				bookSound.play();
			}else{
				document.getElementById("inventory_hold").style.display = 'none';
				inventoryToggle = false;
			}



		}

				
	}


	document.onkeyup = function(event){

		if( event.keyCode === 68 )
			socket.emit('keyPress',{inputId:'right',state:false});	

		else if( event.keyCode === 83 )	//s
			socket.emit('keyPress',{inputId:'down',state:false});

		else if( event.keyCode === 65 ) //a
			socket.emit('keyPress',{inputId:'left',state:false});

		else if( event.keyCode === 87 ) // w
			socket.emit('keyPress',{inputId:'up',state:false});

		else if( event.keyCode === 49 )
			socket.emit('keyPress',{inputId:'1',state:false});

		else if( event.keyCode === 50 ) // w
			socket.emit('keyPress',{inputId:'2',state:false});

		else if( event.keyCode === 51 ) // w
			socket.emit('keyPress',{inputId:'3',state:false});

		else if( event.keyCode === 52 ) // w
			socket.emit('keyPress',{inputId:'4',state:false});

		else if( event.keyCode === 69 ) // w
			socket.emit('keyPress',{inputId:'5',state:false});

		else if( event.keyCode === 70 ) // w
			socket.emit('keyPress',{inputId:'6',state:false});

	}
	

document.onmousedown = function(event){

	if ( event.which === 1 ) {
       	socket.emit('keyPress',{inputId:'attack',state:true});
    }else{
		socket.emit('keyPress',{inputId:'secondary',state:true});
    }

}

document.onmouseup = function(event){

	//if ( event.which === 1 ) {
       	socket.emit('keyPress',{inputId:'attack',state:false});
    //}else{
		socket.emit('keyPress',{inputId:'secondary',state:false});
   // }

}

document.onmousemove = function(event){

	var x = - 250 + event.clientX - 8;
	var y = - 250 + event.clientY - 8;
	var angle = Math.atan2(y,x) / Math.PI * 180;
	socket.emit('keyPress',{inputId:'mouseAngle',state:angle});

}

document.oncontextmenu = function(event){
	event.preventDefault();
}


updateIntroMenu = function(){

	cloudOneX++; 
	cloudTwoX++; 

	starOneY = starOneY - .5; 
	starTwoY = starTwoY - .5; 

	ctxIntro.canvas.width  = window.innerWidth;
 	ctxIntro.canvas.height = window.innerHeight;

	ctxIntro.clearRect(0, 0, WIDTH, HEIGHT);

  	ctxIntro.drawImage( Img.starFall , 0 , starOneY );
  	ctxIntro.drawImage( Img.starFall2 , 0 , starTwoY );

	ctxIntro.drawImage( Img.cloudOne , cloudOneX , 0 );
  	ctxIntro.drawImage( Img.cloudTwo , cloudTwoX , 0 );

 	if( cloudOneX > 1500 ){
    	cloudOneX = -1500; 
  	}

  	if( cloudTwoX > 1500 ){
   	    cloudTwoX = -1500;
  	}

  	if( starOneY < -2000 ){
    	starOneY = 1200; 
  	}

  	if( starTwoY < -2000 ){
   	    starTwoY = 1200;
  	}
  	
}


drawIntroMenu = function(){

  Img.cloudOne.onload = function(){
    ctxIntro.drawImage( Img.cloudOne, 0, 0);
  }

  Img.cloudTwo.onload = function(){
    ctxIntro.drawImage( Img.cloudTwo, -1500, 0);
  }


}



showSelectClassMenu = function(){

	if( allowAudio ){
		legendSound.pause();
		pulseSound.play();
	}

	document.getElementById("glogo").style.display = 'none';

	document.body.style.backgroundImage = "url(/client/img/background/light.gif)";

	document.body.style.backgroundSize = "auto";

	document.body.style.backgroundRepeat = "repeat";

	document.getElementById("sign_div").style.display = 'none';

	document.getElementById("ctx-intro").style.display = "none";

	document.getElementById("ctx").style.background = "url(/client/img/background/light.gif)";

	document.getElementById("select-class").style.display = 'block';

}


var gameActive = false; 

playerSelectClass = function( className ){

	if( className == 'mage'){

		Img.menu.src = '/client/img/menu/menum.png';

	}else if( className == 'healer' ){

		Img.menu.src = '/client/img/menu/menuh.png';

	}else if( className == 'ranger' ){

		Img.menu.src = '/client/img/menu/menur.png';

	}else if( className == 'enchanter' ){

		Img.menu.src = '/client/img/menu/menue.png';

	}else if( className == 'warrior' ){

		Img.menu.src = '/client/img/menu/menuw.png';

		player = Player.list[selfId];
		player.hasPrimaryAttack = true; 

	}else if( className == 'monk'){

		Img.menu.src = '/client/img/menu/menumo.png';

	}

	// Notify the server of the class change 
	//
	socket.emit('updateClass', className );

	document.getElementById("ctx").style.background = "none"; 

	document.getElementById("select-class").style.display = "none";

	document.getElementById("moneyHold").style.display = "block";
	document.getElementById("xpHold").style.display = "block";

	document.getElementById("journalIconHold").style.display = "block";

	gameActive = true; 

	console.log('class selected, starting game');

	// Load non playable characters 
	// 
	startMobGroup('mythicCity'); 

	startMapEffects('mythicCity'); 

	startGame();

}




renderChat = function(){

	ctx.fillStyle="#000";
	var levelWidth = 400;
	ctx.globalAlpha = 0.5;
	ctx.fillRect( 0 , 840 , 490 , 220 );
	ctx.globalAlpha = 1;

}



renderMenu = function( fps ){

	player = Player.list[selfId];

	//ctx.drawImage( Img.moneytop , 0 , 0 , 1200 , 45 , 1030 , 17 , 1200 , 45 );


	ctxUi.drawImage( Img.menu , 0 , 0 , 1200 , 92 , 0 , 0 , 1200 , 92 );

	// Level stats
	ctxUi.fillStyle="#FFF";
	ctxUi.font="12px Verdana";
	ctxUi.fillText( "Level " + player.playerLevel + " " + player.className , 840 , 16 );
	
	ctxUi.fillText( "Strength " + player.playerStrength , 840 , 32 );
	ctxUi.fillText( "Stamina " + player.playerStamina , 840 , 48 );
	ctxUi.fillText( "Dexterity " + player.playerDexterity , 840 , 64 );
	ctxUi.fillText( "Intelligence " + player.playerIntelligence  , 840 , 80 );


	/* 
	totalXP = player.totalXp - player.prevLevelXp; 
	var nextLevelPercent = ( totalXP / player.nextLevelXp ) * 100; 
	var curLevelWidth = 1200; 
	levelWidth = nextLevelPercent * ( curLevelWidth / 100 ); 
	ctxUi.fillStyle="#1a63d0";
	ctxUi.fillRect( 0 , 0 , levelWidth , 6 );
	ctxUi.font="11px Verdana";
	ctxUi.lineWidth = 1;
    ctxUi.fillStyle="#FFF";
	ctxUi.fillText( "XP " + player.totalXp + " / " + player.nextLevelXp , 550 , 8 );
	*/ 

	// Health bar 
	//
	healthPercent = ( player.hp / player.hpMax ) * 100; 
	curHPWidth = 368;
	healthWidth = healthPercent * ( curHPWidth / 100 );   
	

	var my_gradient=ctxUi.createLinearGradient( 0 , 0 , 180 , 65 );
	my_gradient.addColorStop(0,"#921e04");
	my_gradient.addColorStop(1,"#f21919");


	ctxUi.fillStyle=my_gradient;
	ctxUi.fillRect( 0 , 22 , healthWidth , 15 );
	ctxUi.fillStyle="#FFF";
	ctxUi.font="14px Verdana";
	hpCur = numberWithCommas( player.hp ); 
	hpMaxDisplay = numberWithCommas( player.hpMax ); 

	//num.toFixed(2);

	ctxUi.fillText( hpCur + " / " + hpMaxDisplay , 220 , 35 );




	energyPercent = ( player.energy / player.totalEnergy ) * 100; 
	curHPWidth = 363;
	energyWidth = energyPercent * ( curHPWidth / 100 ); 

	
	var my_gradient=ctxUi.createLinearGradient( 0 , 0 , 180 , 135 );
	my_gradient.addColorStop(0,"#200559");
	my_gradient.addColorStop(1,"#8717de");
	ctxUi.fillStyle=my_gradient;

	// Energy bar 
	energyCur = numberWithCommas( player.energy );  
	totalEnergy = numberWithCommas( player.totalEnergy ); 

	ctxUi.fillRect(0,53,energyWidth,15);
	ctxUi.fillStyle="#FFF";
	ctxUi.font="14px Verdana";
	ctxUi.fillText( energyCur + " / " + totalEnergy , 220 , 65 );


	if( player.playerLevel < 10 ){
		ctxUi.fillStyle="#000";
		ctxUi.globalAlpha = 0.5;
		ctxUi.fillRect( 602 , 21 , 50 , 50 );
		ctxUi.globalAlpha = 1;

		ctxUi.fillStyle="#bbb";
		ctxUi.font="10px Verdana";
		ctxUi.fillText( "Level 10" , 608 , 48 , 50 );

	}


	if( player.playerLevel < 5 ){
		ctxUi.fillStyle="#000";
		ctxUi.globalAlpha = 0.5;
		ctxUi.fillRect( 532 , 21 , 50 , 50 );
		ctxUi.globalAlpha = 1;
		ctxUi.fillStyle="#bbb";
		ctxUi.fillText( "Level 5" , 538 , 48 , 50 );
	}


}	



drawIntroMenu();

var menuRun = setInterval( function( ){

  updateIntroMenu();  

},30);


