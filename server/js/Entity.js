
var initPack = { player:[] , bullet:[] , enemy:[] };
var removePack = { player:[] , bullet:[] , enemy:[] };

var isOnDeath = true; 
var stunID = 0;




//zEntity
// 
Entity = function(param){

	var self = {
		x:250,
		y:250,
		spdX:0,
		spdY:0,
		id:"",
	}

	self.pressingDown = false;
	self.pressingUp = false;
	self.pressingLeft = false;
	self.pressingRight = false;
	self.teleportOut = 0; 


	if(param){
		if(param.x)
			self.x = param.x;
		if(param.y)
			self.y = param.y;
		if(param.id)
			self.id = param.id;		
	}
	

	self.update = function(){

		self.updatePosition();

	}






	self.innerWallCheck = function( xMin , xMax , yMin , yMax ){

		if( self.x < xMin ){
			self.pressingLeft = false; 
		}

		if( self.x > xMax ){
			self.pressingRight = false;
		}

		if( self.y < yMin ){
			self.pressingUp  = false; 
		}

		if( self.y > yMax ){
			self.pressingDown = false; 
		}

	}



	self.wallCheck = function( xMin , xMax , yMin , yMax ){

		
		if( self.x > xMin - 10 && self.x < xMax && self.y > yMin && self.y < yMax ){
			self.pressingRight = false; 
			//console.log("RIGHT WALL");

			rightWall = true; 
		}else{
			rightWall = false; 
		}

		if( self.x < xMax + 10 && self.x > xMin && self.y > yMin && self.y < yMax ){
			self.pressingLeft = false; 
			//console.log("LEFT WALL");

			leftWall = true; 
		}else{
			leftWall = false;
		}

		if( self.x > xMin && self.x < xMax && self.y > yMin && self.y < yMax + 10 ){
			self.pressingUp = false; 
			//console.log("BOTTOM WALL");
			bottomWall = true; 
		}else{
			bottomWall = false; 
		}

		if( self.x > xMin && self.x < xMax && self.y > yMin - 10 && self.y < yMax ){
			self.pressingDown = false; 
			//console.log("TOP WALL");
			topWall = true; 
		}else{
			topWall = false; 
		}

		if( topWall == true && bottomWall == true && leftWall == true && rightWall == true ){
			self.x = self.x + 5; 
			self.y = self.y + 5; 

			self.teleportOut = self.teleportOut + 1; 

			if( self.teleportOut > 60 ){
				self.x = 1000;
				self.y = 1000;

				self.teleportOut = 0; 
			}
		}

	

	}


	//zWallCheck
	//
	self.checkForWalls = function(){ 

		// Collison zones for mythic city 
		// 
		if( self.currentMap == 'mythicCity'){

			if( self.y > 500 && self.y < 2000 ){
				self.wallCheck( 2170 , 2310 , 1530 , 1670 );
				self.wallCheck( 2010 , 2280 , 745 , 805 );
				self.wallCheck( 2410 , 2510 , 330 , 600 );
				self.wallCheck( 2920 , 3030 , 510 , 620 );
				self.wallCheck( 2500 , 2580 , 675 , 775 );
				self.wallCheck( 2200 , 2465 , 585 , 805 );
		 		self.wallCheck( 1440 , 1520 , 1450 , 1500 ); 
	 			self.wallCheck( 1180 , 1300 , 1220 , 1360 ); 
	 			self.wallCheck( 1230 , 1330 , 1150 , 1200 ); 
	 			self.wallCheck( 1135 , 1200 , 1120 , 1200 );
	 			self.wallCheck( 1125 , 1180 , 940 , 1000 );
	 			self.wallCheck( 1400 , 1780 , 700 , 770 );
	 			self.wallCheck( 1240 , 1325 , 1150, 1210 );
	 			self.wallCheck( 1550 , 1960 , 760 , 830 ); 
	 			self.wallCheck( 1100 , 1490 , 350 , 750 ); 
	 			self.wallCheck( 1500 , 1780 , 600 , 750 ); 
	 			self.wallCheck( 1900 , 2120 , 450 , 760 ); 
	 			self.wallCheck( 1980 , 2050 , 970 , 1065 ); 
	 			self.wallCheck( 1980 , 2050 , 1290 , 1375 ); 
	 			self.wallCheck( 2080 , 2170 , 1320 , 1390 ); 
	 			self.wallCheck( 1740 , 1800 , 1380 , 1425 ); 
	 			self.wallCheck( 1120 , 1390 , 790 , 830 ); 
	 			self.wallCheck( 360 , 1250 , 600 , 825 ); 
	 			self.wallCheck( 350 , 615 , 825 , 1000 ); 
	 			self.wallCheck( 460 , 1105 , 950 , 1920 ); 
	 			self.wallCheck( 2250 , 2900 , 1130 , 1645 ); 
			}


			if( self.y > 1750 && self.y < 3000 ){

				self.wallCheck( 2870 , 3400 , 675 , 2260 );
				self.wallCheck( 2610 , 2650 , 2165 , 2980 );
				self.wallCheck( 1180 , 1250 , 1860 , 1960 );
				self.wallCheck( 1460 , 1510 , 1860 , 1960 );
				self.wallCheck( 2630 , 2310 , 1530 , 1890 );
				self.wallCheck( 2520 , 2610 , 2380 , 2490 );
				self.wallCheck( 2200 , 2260 , 2610 , 2800 );
				self.wallCheck( 1550 , 1750 , 2140 , 2220 );
				self.wallCheck( 1475 , 1530 , 2085 , 2200 );
				self.wallCheck( 1220 , 1260 , 2105 , 2220 );
				self.wallCheck( 1470 , 1550 , 2115 , 2210 );

				self.wallCheck( 1110 , 1195 , 2210 , 2260 );
				self.wallCheck( 2200 , 2250 , 2720 , 2790 );
				self.wallCheck( 2250 , 2565 , 1830 , 1860 );
				//self.wallCheck( 1700 , 1760 , 1790 , 2030 );
	 			self.wallCheck( 2130 , 2370 , 1980 , 2000 ); 
	 			self.wallCheck( 1515 , 1740 , 1790 , 2140 ); 
				self.wallCheck( 1075 , 1965 , 2440 , 2670 ); 
				self.wallCheck( 780 , 880 , 2920 , 2990 ); 
				self.wallCheck( 700 , 775 , 2420 , 2460 ); 
	 			self.wallCheck( 1000 , 1190 , 1880 , 2210 ); 
	 			self.wallCheck( 1470 , 1560 , 2165 , 2220 ); 
	 			self.wallCheck( 1725 , 1780 , 2150 , 2200 ); 
	 			self.wallCheck( 1780 , 2215 , 1900 , 2180 ); 
	 			self.wallCheck( 2290 , 2650 , 1890 , 2165 ); 
	 			self.wallCheck( 2250 , 2435 , 2605 , 2900 ); 
	 			self.wallCheck( 2440 , 2610 , 2425 , 2950 ); 
	 			self.wallCheck( 740 , 930 , 1900 , 2260 ); 
	 			self.wallCheck( 735 , 790 , 2270 , 2320 );
	 			self.wallCheck( 600 , 740 , 2260 , 2335 ); 
 	 			self.wallCheck( 600 , 740 , 2335 , 2400 ); 
 	 			self.wallCheck( 200 , 625 , 2400 , 2980 ); 

			}


			self.wallCheck( 200 , 690 , 2980 , 4880 ); 


			if( self.y > 2880 && self.y < 4000 ){

				self.wallCheck( 1015 , 1125 , 3535 , 3625 );
				self.wallCheck( 1625 , 1750 , 3535 , 3610 );
				self.wallCheck( 1785 , 1865 , 3485 , 3600 );
				self.wallCheck( 2610 , 2680 , 2900 , 3810 );

				self.wallCheck( 2560 , 2600 , 3780 , 3820 );
				self.wallCheck( 1530 , 2000 , 3455 , 3485 );
	 			self.wallCheck( 935 , 1270 , 3455 , 3485 ); 
	 			self.wallCheck( 400 , 940 , 3420 , 3780 ); 
	 			self.wallCheck( 730 , 1050 , 3110 , 3300 ); 
	 			self.wallCheck( 1670 , 1730 , 3260 , 3310 ); 
	 			self.wallCheck( 1760 , 1980 , 3180 , 3280 ); 
	 			self.wallCheck( 1990 , 2240 , 3200 , 3650 ); 
	 			self.wallCheck( 2350 , 2590 , 3260 , 3650 ); 
	 			self.wallCheck( 1900 , 2005 , 3070 , 3140 ); 
	 			self.wallCheck( 1520 , 1605 , 3450 , 3560 ); 
	 			self.wallCheck( 1170 , 1260 , 3480 , 3570 );
	 			self.wallCheck( 1880 , 1955 , 3550 , 3600 ); 
	 			self.wallCheck( 1960 , 2000 , 3615 , 3685 ); 
	 			self.wallCheck( 1120 , 1190 , 3210 , 3300 ); 

				self.wallCheck( 2115 , 2235 , 4125 , 4185 );
				self.wallCheck( 1875 , 1955 , 4300 , 4350 );
				self.wallCheck( 1170 , 1210 , 4090 , 4190 );
				self.wallCheck( 1875 , 1955 , 4300 , 4350 );

				self.wallCheck( 2880 , 2950 , 585 , 1220 );


			}


			//self.wallCheck( 2605 , 2660 , 100 , 3810 ); 

			if( self.y > 4000 && self.y < 5000 ){
				self.wallCheck( 2610 , 2660 , 4065 , 4665 ); 
	 			self.wallCheck( 800 , 1185 , 4010 , 4180 ); 
	 			self.wallCheck( 1620 , 1800 , 4100 , 4220 ); 
	 			self.wallCheck( 1980 , 2140 , 4250 , 4350 ); 
	 			self.wallCheck( 2100 , 2250 , 4040 , 4120 ); 
	 			self.wallCheck( 2410 , 2520 , 4260 , 4345 ); 
	 			self.wallCheck( 100 , 2700 , 4420 , 4480 ); 
	 			self.wallCheck( 1000 , 1100 , 4270 , 4365 ); 
			}

		}



		// Collison zones for mythic forest 
		//
		if( self.currentMap == 'mythicForest'){


			if( self.y > 0 && self.y < 1200 ){

				self.wallCheck( 600 , 2100 , 300 , 435 );
				self.wallCheck( 1355 , 1445 , 600 , 650 ); 
	 			self.wallCheck( 1000 , 1160 , 300 , 1180 ); 
	 			self.wallCheck( 1965 , 2670 , 780 , 1000 ); 
				self.wallCheck( 1665 , 1960 , 810 , 1080 ); 
				self.wallCheck( 2000 , 2685 , 700 , 1015 ); 
				self.wallCheck( 2610 , 3010 , 530 , 865 ); 
				self.wallCheck( 2980 , 3380 , 730 , 990 ); 

			}


			if( self.y > 900 && self.y < 2150 ){

				self.wallCheck( 3320 , 3610 , 990 , 1400 ); 
				self.wallCheck( 1955 , 2050 , 990 , 1070 ); 
				self.wallCheck( 630 , 1060 , 1160 , 1300 ); 
				self.wallCheck( 1665 , 1985 , 1055 , 1215 ); 
				self.wallCheck( 845 , 955 , 1380 , 1440 ); 
				self.wallCheck( 1975 , 2055 , 1270 , 1340 ); 
				self.wallCheck( 2220 , 2320 , 1230 , 1300 ); 
				self.wallCheck( 2710 , 2790 , 1300 , 1340 ); 
				self.wallCheck( 3160 , 3240 , 1390 , 1435 ); 
				self.wallCheck( 3340 , 3430 , 1390 , 1655 ); 
				self.wallCheck( 1455 , 1535 , 1470 , 1530 ); 
				self.wallCheck( 1200 , 1280 , 1570 , 1640 ); 
				self.wallCheck( 985 , 1130 , 1490 , 1620 ); 
				self.wallCheck( 2770 , 2850 , 1845 , 1920 ); 
				self.wallCheck( 2760 , 2850 , 1845 , 1915 ); 
				self.wallCheck( 2100 , 2180 , 1855 , 1915 ); 
				self.wallCheck( 3430 , 3800 , 1400 , 2120 ); 
				self.wallCheck( 1400 , 2300 , 2080 , 2140 ); 
				self.wallCheck( 2340 , 2560 , 1920 , 2140 ); 

			}


			if( self.y > 2000 && self.y < 3250 ){

				self.wallCheck( 2240 , 3160 , 2035 , 2400 ); 
				self.wallCheck( 815 , 915 , 2020 , 2080 ); 
				self.wallCheck( 690 , 770 , 2220 , 2280 ); 
				self.wallCheck( 1180 , 1270 , 2730 , 2785 ); 
				self.wallCheck( 1480 , 1590 , 2855 , 2916 ); 
				self.wallCheck( 2160 , 2160 , 2800 , 2855 ); 
				self.wallCheck( 2170 , 2260 , 2780 , 2860 ); 
				self.wallCheck( 720 , 810 , 2860 , 2930 ); 
				self.wallCheck( 780 , 915 , 2560 , 2630 ); 
				self.wallCheck( 640 , 1630 , 3000 , 3080 ); 
				self.wallCheck( 1260 , 1360 , 3120 , 3170 ); 

			}


			if( self.y > 2800 && self.y < 4850 ){

				self.wallCheck( 2170 , 2280 , 2945 , 3025 ); 
				self.wallCheck( 2200 , 2280 , 3135 , 3225 ); 
				self.wallCheck( 2060 , 2150 , 3345 , 3405 ); 
				self.wallCheck( 1570 , 1690 , 3890 , 3970 ); 
				self.wallCheck( 1420 , 1520 , 3890 , 3970 ); 
				self.wallCheck( 1210 , 1340 , 3790 , 3860 ); 
				self.wallCheck( 750 , 900 , 3660 , 3760 );
				self.wallCheck( 815 , 915 , 3140 , 3210 ); 
				self.wallCheck( 2130 , 2230 , 3840 , 3970 ); 
				self.wallCheck( 2140 , 2265 , 3650 , 3730 ); 
				self.wallCheck( 2160 , 2260 , 3530 , 3590 );
				self.wallCheck( 1810 , 1890 , 2360 , 2430 ); 
				self.wallCheck( 630 , 710 , 3270 , 3350 ); 
				self.wallCheck( 590 , 1160 , 3720 , 4400  ); 
				self.wallCheck( 1130 , 2400 , 4060 , 4400 );  
				self.wallCheck( 2280 , 2400 , 2280 , 4060 );  
				self.wallCheck( 590 , 630 , 3600 , 4465 ); 

			}
			
			self.wallCheck( 600 , 630 , 100 ,  3370 ); 
			self.wallCheck( 645 , 1090 , 1305 ,  1625 );
			self.wallCheck( 600 , 1100 , 1600 ,  1685 ); 
			self.wallCheck( 800 , 1255 , 665 ,  895 ); 
			self.wallCheck( 1215 , 1290 , 635 ,  715 ); 
			self.wallCheck( 1160 , 1240 , 440 ,  650 ); 
			self.wallCheck( 1650 , 1800 , 440 ,  570 ); 


		}



		if( self.currentMap == 'frostpeakb'){

			self.wallCheck( 1455 , 1670 , 500 , 2300 );
			self.wallCheck( 140 , 2000 , 1990 , 3000 );
			self.wallCheck( 70 , 560 , 590 , 3000 );
			self.wallCheck( 540 , 1000 , 250 , 770 );
			self.wallCheck( 1290 , 1700 , 250 , 770 );
			self.wallCheck( 566 , 660 , 770 , 860 );
			self.wallCheck( 570 , 660 , 1830 , 1950 );
			self.wallCheck( 1370 , 1450 , 1830 , 1950 );
			self.wallCheck( 1370 , 1450 , 780 , 860 );

		}



		if( self.currentMap == 'hall'){

			self.wallCheck( 2200 , 2280 , 2560 , 2605 );
			self.wallCheck( 2490 , 2570 , 2600 , 2670 );
			self.wallCheck( 3000 , 3060 , 2590 , 2660 );
			self.wallCheck( 3360 , 3410 , 2620 , 2660 );
			self.wallCheck( 3260 , 3500 , 2320 , 2440 );
			self.wallCheck( 3140 , 3320 , 2160 , 2270 );
			self.wallCheck( 3030 , 3240 , 2030 , 2130 );
			self.wallCheck( 2200 , 2370 , 2020 , 2150 );
			self.wallCheck( 2230 , 2390 , 2160 , 2280 );
			self.wallCheck( 2080 , 2160 , 2690 , 2770 );
			self.wallCheck( 2080 , 2150 , 2490 , 2560 );

			self.wallCheck( 1920 , 1980 , 2720 , 2760 );
			self.wallCheck( 1940 , 2010 , 2420 , 2470 );


			
			self.wallCheck( 220 , 2380 , 4850 , 5700 );
			self.wallCheck( 2820 , 5000 , 4255 , 6000 );
			self.wallCheck( 2290 , 2400 , 4300 , 4770 );
			self.wallCheck( 2800 , 2900 , 4265 , 4800 );
			self.wallCheck( 2640 , 2740 , 3835 , 3915 );
			self.wallCheck( 2960 , 3040 , 4125 , 4175 );
			self.wallCheck( 2460 , 2550 , 3485 , 3555 );
			self.wallCheck( 2100 , 2190 , 3500 , 3645 );
			self.wallCheck( 2140 , 2230 , 3735 , 3810 );
			self.wallCheck( 1560 , 1640 , 4100 , 4165 );
			self.wallCheck( 1430 , 1520 , 3775 , 3845 );
			self.wallCheck( 1080 , 1430 , 3665 , 3855 );
			self.wallCheck( 1120 , 1410 , 3855 , 3900 );
			self.wallCheck( 0 , 605 , 1800 , 5500 );
			self.wallCheck( 640 , 1490 , 3350 , 3410 );
			self.wallCheck( 1540 , 2120 , 3450 , 3540 );
			self.wallCheck( 2960 , 4000 , 3485 , 3520 );
			self.wallCheck( 2550 , 3000 , 2355 , 2660 );
			self.wallCheck( 3490 , 3540 , 1665 , 3615 );
			self.wallCheck( 1870 , 1950 , 4540 , 4580 );
			self.wallCheck( 1280 , 2200 , 4770 , 4900 );
			self.wallCheck( 1080 , 1470 , 4790 , 4900 );
			self.wallCheck( 1080 , 1160 , 4630 , 4690 );
			self.wallCheck( 720 , 820 , 4290 , 4360 );
			self.wallCheck( 1170 , 1340 , 3900 , 3940 );
			self.wallCheck( 2690 , 2820 , 3480 , 3550 );
			self.wallCheck( 2960 , 3060 , 3440 , 3600 );
			self.wallCheck( 2220 , 2420 , 3030 , 3140 );
			self.wallCheck( 610 , 690 , 2080 , 2540 );
			self.wallCheck( 610 , 690 , 2680 , 3020 );
			self.wallCheck( 535 , 1225 , 1250 , 1730 );
			self.wallCheck( 835 , 1135 , 1730 , 1930 );

			self.wallCheck( 2150 , 2280 , 4310 , 4410 );
			self.wallCheck( 2170 , 2300 , 4700 , 4800 );
			self.wallCheck( 1270 , 1360 , 4610 , 4680 );
			self.wallCheck( 660 , 750 , 3860 , 3940 );
			self.wallCheck( 2150 , 2280 , 4310 , 4410 );

			self.wallCheck( 980 , 1070 , 3780 , 3850 );
			self.wallCheck( 690 , 790 , 3460 , 3530 );
			self.wallCheck( 890 , 960 , 3440 , 3500 );

			self.wallCheck( 1550 , 1630 , 3610 , 3660 );
			self.wallCheck( 1760 , 1840 , 3540 , 3620 );
			self.wallCheck( 2000 , 2070 , 3000 , 3050 );
			self.wallCheck( 2260 , 2340 , 2840 , 2890 );
			self.wallCheck( 2500 , 2260 , 2600 , 2670 );
			self.wallCheck( 2740 , 2830 , 2810 , 2880 );
			self.wallCheck( 3150 , 3230 , 2870 , 2930 );

			self.wallCheck( 3340 , 3430 , 3090 , 3150 );
			self.wallCheck( 2270 , 3490 , 1745 , 2025 );


			self.wallCheck( 1820 , 1870 , 1875 , 2755 );

			self.wallCheck( 1850 , 2570 , 1905 , 1955 );
			self.wallCheck( 1950 , 2500 , 1800 , 1965 );

			self.wallCheck( 1400 , 1580 , 1105 , 1725 );

			self.wallCheck( 740 , 760 , 525 , 1250 );
			self.wallCheck( 900 , 920 , 525 , 1106 );
			self.wallCheck( 900 , 1410 , 1075 , 1106 );
			self.wallCheck( 2550 , 2620 , 3070 , 3150 );
			self.wallCheck( 2810 , 2900 , 3090 , 3180 );
			self.wallCheck( 2920 , 3000 , 3070 , 3150 );
			self.wallCheck( 3020 , 3210 , 3020 , 3130 );
			self.wallCheck( 2800 , 3960 , 1680 , 1720 );
			self.wallCheck( 2060 , 2730 , 740 , 1030 );

			self.wallCheck( 2720 , 3240 , 740 , 800 );
			self.wallCheck( 3470 , 3700 , 640 , 710 );
			self.wallCheck( 1550 , 1610 , 620 , 1450 );
			self.wallCheck( 1550 , 2080 , 760 , 800 );

			self.wallCheck( 2230 , 2330 , 1110 , 1190 );
			self.wallCheck( 2450 , 2540 , 1110 , 1200 );
			self.wallCheck( 590 , 615 , 1880 , 2020 );
			self.wallCheck( 1425 , 1535 , 2230 , 2370 );

			self.wallCheck( 3540 , 4400 , 3555 , 3625 );

			self.wallCheck( 3360 , 3440 , 3745 , 3815 );
			self.wallCheck( 3250 , 3340 , 3745 , 3815 );

		}


		if( self.currentMap == 'frostpeak'){

			self.wallCheck( 1440 , 1520 , 3740 , 3825 );
			self.wallCheck( 1775 , 1850 , 3630 , 3685 );
			self.wallCheck( 1955 , 2050 , 3260 , 3330 );
			self.wallCheck( 1915 , 2040 , 2980 , 3050 );
			self.wallCheck( 2125 , 2205 , 2660 , 2730 );
			self.wallCheck( 1730 , 1790 , 2480 , 2540 );
			self.wallCheck( 1100 , 1180 , 2815 , 2880 );
			self.wallCheck( 780 , 870 , 2700 , 2750 );
			self.wallCheck( 990 , 1100 , 3130 , 3220 );
			self.wallCheck( 1100 , 1210 , 3400 , 3480 );
			self.wallCheck( 0 , 620 , 100 , 3000 );

			self.wallCheck( 570 , 585 , 1890 , 1990 );
			self.wallCheck( 1100 , 1200 , 3380 , 3460 );
			self.wallCheck( 1190 , 1280 , 3060 , 3120 );

			self.wallCheck( 2970 , 3800 , 1590 , 1660 );
			self.wallCheck( 2800 , 2900 , 1450 , 1520 );
			self.wallCheck( 1790 , 2380 , 700 , 1880 );
			self.wallCheck( 2300 , 2580 , 1910 , 2020 );
			self.wallCheck( 2580 , 2720 , 1950 , 2040 );
			self.wallCheck( 2950 , 3090 , 1970 , 2040 );
			self.wallCheck( 2040 , 3250 , 2030 , 2330 );

			self.wallCheck( 3085 , 3160 , 3730 , 3790 );
			self.wallCheck( 3245 , 3315 , 3495 , 3565 );
			self.wallCheck( 3400 , 3500 , 3445 , 3535 );
			self.wallCheck( 3700 , 3780 , 3015 , 3080 );
			self.wallCheck( 3670 , 3760 , 2000 , 2560 );
			self.wallCheck( 3250 , 3340 , 2040 , 2610 );
			self.wallCheck( 2730 , 2870 , 2330 , 2555 );
			self.wallCheck( 2470 , 2740 , 2510 , 2640 );
			self.wallCheck( 2350 , 2530 , 2320 , 2580 );
			self.wallCheck( 1950 , 2110 , 2340 , 2470 );
			self.wallCheck( 1760 , 1920 , 2320 , 2420 );
			self.wallCheck( 2040 , 3250 , 2030 , 2330 );
			self.wallCheck( 1770 , 2030 , 1535 , 2330 );
			self.wallCheck( 1185 , 1345 , 2345 , 2465 );

			self.wallCheck( 580 , 705 , 2400 , 2760 );
			self.wallCheck( 710 , 920 , 2400 , 2475 );
			self.wallCheck( 680 , 730 , 2740 , 2790 );
			self.wallCheck( 610 , 760 , 2780 , 3070 );
			self.wallCheck( 570 , 680 , 3030 , 3280 );
			self.wallCheck( 450 , 630 , 3280 , 4210 );
			self.wallCheck( 560 , 940 , 3890 , 4000 );


			self.wallCheck( 1415 , 1505 , 2345 , 2420 );
			self.wallCheck( 1115 , 1490 , 2025 , 2355 );
			self.wallCheck( 595 , 1430 , 1985 , 2340 );
			self.wallCheck( 730 , 810 , 1670 , 1740 );
			self.wallCheck( 1050 , 1500 , 1360 , 1450 );
			self.wallCheck( 1460 , 1550 , 1340 , 1420 );
			self.wallCheck( 1520 , 1620 , 1240 , 1320 );
			self.wallCheck( 1080 , 1170 , 1020 , 1100 );
			self.wallCheck( 890 , 1060 , 700 , 830 );
			self.wallCheck( 1120 , 1220 , 710 , 790 );
			self.wallCheck( 1480 , 1620 , 700 , 790 );
			self.wallCheck( 1670 , 1780 , 1200 , 1580 );
			self.wallCheck( 1630 , 1800 , 700 , 1340 );

			self.wallCheck( 1660 , 1800 , 680 , 850 );

			self.wallCheck( 890 , 2250 , 3880 , 4470 );
			self.wallCheck( 2590 , 4505 , 3885 , 4445 );
			self.wallCheck( 3810 , 4480 , 520 , 4000 );

			self.wallCheck( 670 , 1120 , 1990 , 2400 );
			self.wallCheck( 550 , 690 , 1990 , 2200 );

			self.wallCheck( 580 , 1230 , 395 , 705 );


		}


		if( self.currentMap == 'sunPalace' ){

			self.wallCheck( 1050 , 1300 , 4895 , 5060 );
			self.wallCheck( 520 , 575 , 4135 , 4185 );
			self.wallCheck( 1090 , 1253 , 3110 , 3190 );
			self.wallCheck( 795 , 1045 , 3050 , 3230 );
			self.wallCheck( 1365 , 1520 , 4910 , 5020 );
			self.wallCheck( 810 , 1010 , 4900 , 5020 );
			self.wallCheck( 2220 , 2510 , 3050 , 3260 );
			self.wallCheck( 75 , 3600 , 5260 , 5800 );
			self.wallCheck( 3200 , 4000 , 1730 , 5800 );
			self.wallCheck( 2965 , 3030 , 4620 , 4860 );
			self.wallCheck( 2965 , 3255 , 4740 , 4860 );
			self.wallCheck( 3075 , 3155 , 4590 , 4650 );
			self.wallCheck( 2965 , 3045 , 4470 , 4510 );
			self.wallCheck( 2500 , 2610 , 4460 , 4550 );
			self.wallCheck( 2125 , 2310 , 4370 , 4670 );
			self.wallCheck( 1935 , 2665 , 4740 , 4865 );
			self.wallCheck(  1430 , 4370 , 4365 , 4645 );
			self.wallCheck( 470 , 910 , 4360 , 4650 );
			self.wallCheck( 0 , 525 , 550 , 5500 );
			self.wallCheck( 475 , 1555 , 3790 , 4125 );
			self.wallCheck( 1510 , 2255 , 3790 , 4060 );
			self.wallCheck( 2220 , 2380 , 3860 , 3940 );
			self.wallCheck( 2770 , 2910 , 3850 , 3940 );
			self.wallCheck( 2870 , 3240 , 3450 , 4400 );
			self.wallCheck( 2670 , 3230 , 1710 , 3555 );
			self.wallCheck( 2135 , 2725 , 3375 , 3485 );
			self.wallCheck( 460 , 1780 , 3380 , 3490 );
			self.wallCheck( 465 , 1075 , 2765 , 2885 );
			self.wallCheck( 1595 , 2785 , 2765 , 2885 );
			self.wallCheck( 2195 , 2775 , 2315 , 2435 );
			self.wallCheck( 385 , 2040 , 2315 , 2435 );
			self.wallCheck( 1690 , 2020 , 1765 , 2345 );
			self.wallCheck( 2200 , 2710 , 1735 , 2435 );
			self.wallCheck(  2640 , 3000 , 1415 , 1675 );
			self.wallCheck( 1365 , 1715 , 1370 , 1670 );
			self.wallCheck( 1740 , 2510 , 270 , 990 );
			self.wallCheck( 2420 , 2520 , 990 , 1050 );
			self.wallCheck( 1775 , 1875 , 990 , 1050 );
			self.wallCheck( 1930 , 1990 , 4620 , 4870 );
			self.wallCheck( 800 , 910 , 3360 , 3470 );
			self.wallCheck( 840 , 1230 , 3470 , 3800 );
			self.wallCheck( 3030 , 3290 , 265 , 1750 );
			self.wallCheck( 2380 , 3120 , 110 , 320 );
			self.wallCheck( 1700 , 1770 , 960 , 1010 );
			self.wallCheck( 1020 , 1320 , 70 , 1740 );
			self.wallCheck( 1280 , 2030 , 1740 , 2310 );

		}


		if( self.currentMap == 'orcEncampment' ){

			self.wallCheck( 1610 , 2300 , 4080 , 4400 );
			self.wallCheck( 1720 , 2450 , 4000 , 4500 );
			self.wallCheck( 1860 , 2010 , 3810 , 3900 );
			self.wallCheck( 1920 , 2050 , 3790 , 3850 );
			self.wallCheck( 2070 , 2290 , 3460 , 3600 );
			self.wallCheck( 1910 , 2080 , 3240 , 3380 );
			self.wallCheck( 2410 , 2680 , 3480 , 3940 );
			self.wallCheck( 2310 , 2420 , 3250 , 3670 );
			self.wallCheck( 2120 , 2280 , 2850 , 3400 );
			self.wallCheck( 1190 , 1290 , 3880 , 3940 );
			self.wallCheck(  700 , 1160 , 3700 , 4220 );
			self.wallCheck( 960 , 1090 , 3510 , 3590 );
			self.wallCheck( 1090 , 1160 , 3460 , 3520 );
			self.wallCheck( 1150 , 1290 , 3250 , 3330 );
			self.wallCheck( 1050 , 1190 , 3160 , 3240 );
			self.wallCheck( 840 , 1070 , 3210 , 3340 );
			self.wallCheck( 800 , 910 , 3360 , 3470 );
			self.wallCheck( 850 , 940 , 2950 , 3010 );
			self.wallCheck( 780 , 880 , 2800 , 2885 );
			self.wallCheck( 1330 , 1490 , 2470 , 2685 );
			self.wallCheck( 1470 , 1590 , 2540 , 2690 );
			self.wallCheck( 1550 , 1770 , 2510 , 2760 );
			self.wallCheck( 100 , 500 , 1495 , 4000 );
			self.wallCheck( 675 , 900 , 1760 , 1890 );
			self.wallCheck( 1030 , 1260 , 1650 , 1780 );
			self.wallCheck( 1385 , 1615 , 1720 , 1860 );
			self.wallCheck( 1586 , 1665 , 1890 , 1955 );
			self.wallCheck( 1725 , 1870 , 1870 , 1980 );

			self.wallCheck( 920 , 1530 , 4560 , 4700 );
			self.wallCheck( 1130 , 1700 , 4420 , 4650 );
			self.wallCheck( 1480 , 1610 , 4270 , 4470 );
			self.wallCheck( 2210 , 2450 , 3880 , 4200 );
			self.wallCheck( 2330 , 2410 , 3650 , 3705 );
			self.wallCheck( 1750 , 1910 , 3050 , 3185 );
			self.wallCheck( 1970 , 2120 , 3100 , 3260 );
			self.wallCheck( 1940 , 2080 , 2860 , 3030 );
			self.wallCheck( 1740 , 2000 , 2740 , 2960 );
			self.wallCheck( 1600 , 1740 , 2830 , 2920 );
			self.wallCheck( 1620 , 1780 , 2760 , 2850 );
			self.wallCheck( 500 , 750 , 3070 , 3530 );
			self.wallCheck( 500 , 700 , 2790 , 3070 );
			self.wallCheck( 500 , 680 , 2500 , 2790 );
			self.wallCheck( 630 , 730 , 2310 , 2490 );
			self.wallCheck( 670 , 810 , 2190 , 2270 );
			self.wallCheck( 400 , 1630 , 1390 , 1540  );
			self.wallCheck( 1770 , 1960 , 2540 , 2740 );
			self.wallCheck( 2310 , 2450 , 2890 , 2960 );
			self.wallCheck( 2420 , 2500 , 3030 , 3100 );
			self.wallCheck( 3110 , 3240 , 2890 , 3040 );
			self.wallCheck( 3270 , 3510 , 3000 , 3150 );
			self.wallCheck( 3530 , 3850 , 2770 , 3070 );
			self.wallCheck( 3350 , 3560 , 2580 , 2900 );
			self.wallCheck( 3120 , 3360 , 2380 , 2690 );
			self.wallCheck( 2900 , 3120 , 2260 , 2550 );
			self.wallCheck( 2670 , 2890 , 2130 , 2420 );
			self.wallCheck( 2450 , 2680 , 2000 , 2300 );
			self.wallCheck( 2230 , 2450 , 1870 , 2180 );
			self.wallCheck( 2000 , 2250 , 1670 , 1980 );
			self.wallCheck( 1780 ,  2050 , 1470 , 1790 );
			self.wallCheck( 1580 , 1820 , 1320 , 1670 );
			self.wallCheck( 1370 , 1630 , 1230 , 1530 );
			self.wallCheck( 1660 , 1800 , 1600 , 1660 );
			self.wallCheck( 500 , 650 , 1570 , 1720 );
			self.wallCheck( 510 , 590 , 1820 , 1890 );
			self.wallCheck( 720 , 960 , 3520 , 3700 );
			self.wallCheck( 1490 , 1580 , 2820 , 2880 );
			self.wallCheck( 3180 , 3270 , 2755 , 2825 );
			self.wallCheck( 3160 , 3310 , 2865 , 2975 );
			self.wallCheck( 3600 , 3710 , 3135 , 3265 );
			self.wallCheck( 2780 , 2860 , 3400 , 3680 );
			self.wallCheck( 2800 , 3030 , 3740 , 3880 );
			self.wallCheck( 3150 , 3440 , 3970 , 4100 );
			self.wallCheck( 2980 , 4830 , 4270 , 4770 );
			self.wallCheck( 4240 , 4740 , 4080 , 4330 );
			self.wallCheck( 4360 , 4790 , 3760 , 4180 );
			self.wallCheck( 3960 , 4070 , 4150 , 4210 );
			self.wallCheck( 4120 , 4180 , 3920 , 3960 );
			self.wallCheck( 3740 , 3890 , 3920 , 4000 );
			self.wallCheck( 4275 , 4365 , 3700 , 3780 );
			self.wallCheck( 4265 , 4365 , 3410 , 3510 );
			self.wallCheck( 4275 , 4365 , 3120 , 3220 );
			self.wallCheck( 4275 , 4275 , 2870 , 2950 );
			self.wallCheck( 4275 , 4355 , 2610 , 2700 );
			self.wallCheck( 1990 , 4080 , 60 , 730 );
			self.wallCheck( 2960 , 3270 , 370 , 1050 );
			self.wallCheck( 2480 , 2800 , 510 , 1060 );
			self.wallCheck( 4300 , 4655 , 1730 , 2400 );
			self.wallCheck( 4400 , 4800 , 2370 , 4620 );
			self.wallCheck( 1160 , 210 , 4160 , 4210 );
			self.wallCheck( 2300 , 2380 , 3740 , 3820 );
			self.wallCheck( 4210 , 4555 , 1750 , 2040 );
			self.wallCheck( 4010 , 4240 , 1620 , 1920 );
			self.wallCheck( 3980 , 4130 , 2020 , 2120 );
			self.wallCheck( 3770 , 3850 , 1910 , 1970 );
			self.wallCheck( 3540 , 3680 , 1790 , 1890 );
			self.wallCheck( 3550 , 3770 , 1490 , 1790 );
			self.wallCheck( 3410 , 3500 , 1720 , 1780 );
			self.wallCheck( 3310 , 3460 , 1570 , 1670 );
			self.wallCheck( 3320 , 3460 , 1310 , 1420 );
			self.wallCheck( 3320 , 3450 , 1090 , 1190 );
			self.wallCheck( 3460 , 3600 , 730 , 1670 );
			self.wallCheck( 4190 , 4350 , 2430 , 2530 );
			self.wallCheck( 2010 , 2110 , 1320 , 1400 );
			self.wallCheck( 2170 , 2250 , 1490 , 1560 );
			self.wallCheck( 2300 , 2380 , 1740 , 1810 );
			self.wallCheck( 2460 , 2550 , 1920 , 1980 );
			self.wallCheck( 3350 , 3510 , 2330 , 2430 );
			self.wallCheck( 3140 , 3210 , 2300 , 2350 );
			self.wallCheck( 2900 , 3050 , 2080 , 2170 );
			self.wallCheck( 2680 , 2860 , 1930 , 2040 );
			self.wallCheck( 2520 , 2700 , 1700 , 1840 );
			self.wallCheck( 2330 , 2470 , 1560 , 1670 );
			self.wallCheck( 2320 , 2510 , 1290 , 1430 );
			self.wallCheck( 1350 , 2100 , 455 , 615 );

		}



		if( self.currentMap == 'sunkenDepths'){

			self.wallCheck( 1245 , 1785 , 2900 , 3120 );
			self.wallCheck( 515 , 755 , 2940 , 3090 );
			self.wallCheck( 635 , 785 , 2450 , 2650 );

			self.wallCheck( 3500 , 3600 , 2430 , 3300 );
			self.wallCheck( 2100 , 2880 , 2910 , 3170 );
			self.wallCheck( 3300 , 3540 , 3110 , 3300 );

			self.wallCheck( 630 , 1080 , 4420 , 4570 );
			self.wallCheck( 1070 , 2090 , 4820 , 4920 );
			self.wallCheck( 430 , 690 , 4580 , 4930 );


			self.wallCheck( 3420 , 3600 , 455 , 900 );
			self.wallCheck( 3510 , 2100 , 890 , 1500 );
			self.wallCheck( 3450 , 3500 , 915 , 1100 );
			self.wallCheck( 3100 , 3150 , 500 , 900 );
			self.wallCheck( 3160 , 3180 , 905 , 1265 );
			self.wallCheck( 2510 , 3170 , 815 , 1265 );
			self.wallCheck( 2240 , 3610 , 1425 , 1580 );
			self.wallCheck( 2030 , 2280 , 875 , 2605 );
			self.wallCheck( 1330 , 1820 , 1300 , 2615 );
			self.wallCheck( 780 , 1820 , 2455 , 2510 );
			self.wallCheck( 2030 , 3560 , 2460 , 2520 );
			//self.wallCheck( 3170 , 3200 , 2515 , 3015 );
			self.wallCheck( 2100 , 3270 , 3155 , 3200 );
			self.wallCheck( 670 , 1800 , 3080 , 3315 );
			self.wallCheck( 1700 , 1890 , 3315 , 3595 );
			self.wallCheck( 1850 , 1940 , 3595 , 3815 );
			self.wallCheck( 1980 , 2000 , 3815 , 4035 );
			self.wallCheck( 1950 , 2080 , 4035 , 4425 );
			self.wallCheck( 1050 , 2130 , 4425 , 4655 );
			self.wallCheck( 600 , 2095 , 4920 , 5275 );
			self.wallCheck( 1400 , 2100 , 5285 , 6065 );
			self.wallCheck( 2430 , 2480 , 5225 , 6245 );
			self.wallCheck( 2370 , 2490 , 5960 , 6260 );
			self.wallCheck( 3500 , 3560 , 1055 , 1430 );
			self.wallCheck( 2500 , 2570 , 595 , 965 );
			self.wallCheck( 1290 , 2590 , 595 , 660 );
			self.wallCheck( 1600 , 2050 , 885 , 1175 );
			self.wallCheck( 1300 , 1400 , 605 , 1305 );
			self.wallCheck( 570 , 780 , 2575 , 2935 );
			self.wallCheck( 2115 , 2255 , 3085 , 3345 );
			self.wallCheck( 2200 , 2355 , 3345 , 3585 );
			self.wallCheck( 2300 , 2380 , 3585 , 3935 );
			self.wallCheck( 2400 , 2460 , 3935 , 4455 );
			self.wallCheck( 2445 , 2565 , 4415 , 4655 );
			self.wallCheck( 2465 , 3155 , 4465 , 4655 );
			self.wallCheck( 3045 , 3500 , 4425 , 4535 );
			self.wallCheck( 3560 , 3600 , 4385 , 5055 );
			self.wallCheck( 2470 , 2580 , 4815 , 5240 );
			self.wallCheck( 2470 , 3190 , 4825 , 5005 );
			self.wallCheck( 3110 , 3485 , 4895 , 4975 );
			self.wallCheck( 1400 , 2500 , 6240 , 6375 );
			self.wallCheck( 1380 , 1560 , 6065 , 6375 );


		}


	}
		


	self.updatePosition = function(){

		self.x += self.spdX;

		self.y += self.spdY;

	}


	self.getDistance = function( pt ){

		return Math.sqrt(Math.pow( self.x - pt.x , 2 ) + Math.pow( self.y - pt.y , 2 ));

	}

	return self;

}


Entity.getFrameUpdateData = function(){

	var pack = {

		initPack:{
			player:initPack.player,
			enemy:initPack.enemy,
		},

		removePack:{
			player:removePack.player,
			enemy:removePack.enemy,
		},

		updatePack:{
			player:Player.update(),
			enemy:Enemy.update(),
		}

	};

	initPack.player = [];
	initPack.bullet = [];
	initPack.enemy = []; 

	removePack.player = [];
	removePack.bullet = [];
	removePack.enemy = []; 

	return pack;

}


// Encampment checks 
// 
mythicForestActive = false;
sunPalaceActive = false; 
orcEncampmentActive = false; 
hallActive = false; 
sunkenDepthsActive = false; 
sunkenDepthsTwoActive = false; 
frostpeakActive = false; 
frostpeakBActive = false; 



//zPlayer
//
Player = function( param ){

	var self = Entity(param);

	self.number = "" + Math.floor(10 * Math.random());

	self.username = param.username;

	self.pressingRight = false;
	self.pressingLeft = false;
	self.pressingUp = false;
	self.pressingDown = false;
	self.lastHitAmount = 0;  

	self.nextLevelXp = 320; 
	self.prevLevelXp = 1; 
	self.hpRegenRate = 60;
	self.soundEffect = 'none'; 

	self.critRatio = .91;
	self.goldAmount = 0; 
	self.stack1Count = 0; 

	self.pressing1 = false; 
	self.pressing2 = false; 
	self.pressing3 = false; 
	self.pressing4 = false; 
	self.pressing5 = false; 
	self.pressing6 = false; 


	self.regenRate = 20; 

	self.damageHere1 = 0; 
	self.damageHere2 = 0; 
	self.damageHere3 = 0; 
	self.damageHere4 = 0; 
	self.damageHere5 = 0; 
	self.damageHere6 = 0; 
	self.damageHere7 = 0; 

	self.hpRegenPlus = 1; 
	self.hpPlusRegen = 1; 

	self.ability1Active = false; 
	self.ability2Active = false; 
	self.ability3Active = false;
	self.ability4Active = false; 
	self.ability5Active = false;
	self.ability6Active = false; 

	self.cooldown1Active = false;
	self.cooldown2Active = false;
	self.cooldown3Active = false;
	self.cooldown4Active = false;
	self.cooldown5Active = false;
	self.cooldown6Active = false;

	self.effectAnimCounter1 = 0;
	self.effectAnimCounter2 = 0;
	self.effectAnimCounter3 = 0;
	self.effectAnimCounter4 = 0;
	self.effectAnimCounter5 = 0;
	self.effectAnimCounter6 = 0;
	self.teleCooldown = false; 

	self.energyRegenCount = 0; 
	self.hpRegenCount = 0; 

	self.pressingAttack = false;
	self.pressingSecondaryAttack = false; 
	self.mouseAngle = 0;
	self.maxSpd = 10;
	self.hp = 150; 
	self.hpMax = 150;
	self.score = 0;
	self.energy = 1080; 
	self.totalEnergy = 1080;

	self.currentTargetName = "none"; 
	self.currentTargetHpPercent = 0; 

	self.attackActive = false;

	self.playerLevel = 1; 
	self.currentMap = 'mythicCity';

	self.totalXp = 0; 

	// Core stats 
	self.attackDamage = 0; 
	self.attackDistance = 0; 

	self.playerStrength = 20; 
	self.playerStamina = 20; 
	self.playerIntelligence = 20; 
	self.playerDexterity = 20; 

	self.attackDamage = 0; 
	self.attackDamageComma = "";
	self.magicDamage = 0; 
	self.magicRating = 0; 
	self.attackRating = 50;
	self.attackSpeed = 0; 
	self.armorRating = 0;


	self.sunkenDepthsTPActive = false;
	self.mythicCityTPActive = false;
	self.kingRaTPActive = false;
	self.frostpeakTPActive = false;
	self.sshraTempleTPActive = false; 
	self.sunPalaceTPActive = false; 
	self.trainingTPActive = false;

	self.moveBackActive = false;  
	self.moveBackDrawActive = false; 

	self.className = 'mage'; 

	//self.inventory = new Inventory( param.socket , true );
	self.message = new Message( param.socket );
	self.sMessage = new sMessage( param.socket );
	self.socket = param.socket; 

	self.spriteAnimCounter = 0; 
	self.curFrame = 0; 
	self.isAlive = 1; 

	var super_update = self.update;


	// zUpdate
	//
	self.update = function(){

		if( self.pressingRight || self.pressingUp || self.pressingDown || self.pressingLeft )
			self.spriteAnimCounter = self.spriteAnimCounter + .2; 
		
		self.curFrame++; 

		self.effectAnimCounter1 += 0.7;	
		self.effectAnimCounter2 += 0.7;
		self.effectAnimCounter3 += 0.7;
		self.effectAnimCounter4 += 0.7;
		self.effectAnimCounter5 += 0.7;
		self.effectAnimCounter6 += 0.7;

		if( self.palaceWall ){
			if( self.y > 1750){
				self.pressingDown = false; 
			}
			if( self.x < 1830){
				self.pressingLeft = false; 
			}
			if( self.x > 2590 ){
				self.pressingRight = false; 
			}
			if( self.y < 1050 ){
				self.pressingUp = false; 
			}
		}

		if( self.personalEffect ){
			// Handles logic for personal animations etc 
			self.checkForPersonalEffect(); 
		}

		self.checkForWalls();

		if( self.moveBackActive ){

			knockRand = Math.random(); 
			if( knockRand > .7 ){
				self.performKnockback();
			}

		}

		if( self.moveBackDrawActive ){

			if(self.moveBackDrawEnd > self.curFrame ){

			}else{

				self.moveBackDrawActive = false; 

			}

		}


		self.checkForTeleport();

		self.updateSpd();

		super_update();

		if(self.setToDeath )
			self.onDeath(); 

		if(self.pressingAttack && self.attackActive == false && self.isAlive == 1 )
			self.initAttack();

		if( self.attackActive )
			self.performAttack(); 

		if( self.pressingSecondaryAttack )
			self.performSecondaryAttack();  
		
		if( self.effectActive ) 
			self.initEffect(); 

		// Trigger abilities 
		// 
		if(self.pressing1 && self.cooldown1Active == false )
			self.initAbility1();

		if(self.pressing2 && self.cooldown2Active == false )
			self.initAbility2();


		if( self.playerLevel >= 5 ){
			if(self.pressing3 && self.cooldown3Active == false )
				self.initAbility3();
		}

		if( self.playerLevel >= 10 ){
			if(self.pressing4 && self.cooldown4Active == false )
				self.initAbility4();
		}

		if(self.pressing5 && self.cooldown5Active == false )
			self.initAbility5();

		if(self.pressing6 && self.cooldown6Active == false )
			self.initAbility6();

		// Handle animations, and damage 
		//
		if( self.ability1Active == true )
			self.performAbility1();

		if( self.ability2Active == true )
			self.performAbility2(); 

		if( self.ability3Active == true )
			self.performAbility3(); 

		if( self.ability4Active == true )
			self.performAbility4(); 

		if( self.ability5Active == true )
			self.performAbility5();

		if( self.ability6Active == true )
			self.performAbility6(); 

		// Handle ability cooldowns & render menu cooldown  
		//
		if( self.cooldown1 > self.curFrame && self.cooldown1Active == true ){
		}else{
			self.cooldown1Active = false; 
		}

		if( self.cooldown2 > self.curFrame && self.cooldown2Active == true ){
		}else{
			self.cooldown2Active = false; 
		}

		if( self.cooldown3 > self.curFrame && self.cooldown3Active == true ){
		}else{
			self.cooldown3Active = false; 
		}

		if( self.cooldown4 > self.curFrame && self.cooldown4Active == true ){
		}else{
			self.cooldown4Active = false; 
		}

		if( self.cooldown5 > self.curFrame && self.cooldown5Active == true ){
		}else{
			self.cooldown5Active = false; 
		}

		if( self.cooldown6 > self.curFrame && self.cooldown6Active == true ){
		}else{
			self.cooldown6Active = false; 
		}

		self.energyRegen();

		//self.hpRegen();
		
	}







	self.shootBullet = function(angle){

		/* 
		//if(Math.random() < 0.1)
		//	self.inventory.addItem("potion",1);
		Bullet({
			parent:self.id,
			angle:angle,
			x:self.x,
			y:self.y,
		});

		*/ 
	}


	self.checkForPersonalEffect = function(){

		if(self.personalCooldownTime > self.curFrame){
		}else{
			self.drawTrigger7 = "";
			self.personalEffect = false;
		}

	}



	self.initMoveBack = function( amount , angle ){

		self.moveBackActive = true;

		self.moveBackFrameEnd = self.curFrame; 

		self.moveBackDrawEnd = self.curFrame + 7; 

		self.moveBackDrawActive = true; 

		self.moveAngle = angle; 

	}


	self.performKnockback = function(){

		moveAmount = 2; 

		if( self.moveAngle > 95 && self.moveAngle < 130 ){
			self.y = self.y + moveAmount; 
			self.x = self.x - moveAmount; 
		}else if( self.moveAngle > 65 && self.moveAngle < 95 ){
			self.y = self.y + moveAmount; 
		}else if ( self.moveAngle >= 30 && self.moveAngle <= 65){
			self.y = self.y + moveAmount; 
			self.x = self.x + moveAmount;
		}else if ( self.moveAngle >= -30 && self.moveAngle <= 30){
			self.x = self.x + moveAmount; 
		}else if ( self.moveAngle >= -75 && self.moveAngle <= -30){
			self.y = self.y - moveAmount; 
			self.x = self.x + moveAmount;
		}else if ( self.moveAngle >= -120 && self.moveAngle <= -75){
			self.y = self.y - moveAmount; 
		}else if( self.moveAngle >= -120 ){
			self.x = self.x - 9; 
		}else{
			self.x = self.x - moveAmount;
			self.y = self.y - moveAmount; 
		}


		if( self.moveBackFrameEnd < self.curFrame ){
			self.moveBackActive = false; 
			self.waitActive = true; 
			self.waitEndFrame = self.curFrame + 6; //frames to wait before aggroing again 
		}


		if( self.moveBackDrawEnd < self.curFrame ){
			self.moveBackDrawActive = false; 
			self.waitActive = true; 
			self.waitEndFrame = self.curFrame + 6; //frames to wait before aggroing again
		}

		
		stunRand = Math.random();
		if( stunRand > .7 ){
			self.pressingRight = 0;
			self.pressingLeft = 0;
			self.pressingUp = 0;
			self.pressingDown = 0;
		}


	}




	self.initAttack = function(){

		if( self.className == 'mage'){
			self.shootBullet(self.mouseAngle);
		}

		if( self.className == 'warrior'){

			self.attackActive = true; 
			self.animFrame = 8; 
			self.stopFrame = self.curFrame + self.animFrame; 

			var enemy = {};
			self.attackDistance = 100; 

			for(var key in Enemy.list){

				distance = getDistance( self.x , self.y , Enemy.list[key].x , Enemy.list[key].y );

				if( distance < self.attackDistance  && self.currentMap == Enemy.list[key].currentMap ){

					self.isCrit = false; 
					self.attackDamage = self.getAttackDamage();
					self.attackDamageComma = numberWithCommas( self.attackDamage );  

					if( self.isCrit ){
						var attackText = "landed a critical hit for ";
						var attackColor = "#daa6fe";
					}else{
						var attackText = "attacked for ";
						var attackColor = "#f99b9b"; 
					}

					self.updateCurrentTarget( key );  


					randCheck = Math.random();

					if( randCheck > .40 ){

					Enemy.list[key].hp = Enemy.list[key].hp - self.attackDamage;

					if( Enemy.list[key].allowKnockback ){

						var p1 = {
							x: self.x,
							y: self.y,
						};

						var p2 = {
							x: Enemy.list[key].x,
							y: Enemy.list[key].y,
						};

						// angle in degrees
						var angleDeg = Math.atan2( p2.y - p1.y , p2.x - p1.x ) * 180 / Math.PI;
						moveback = true; 

						Enemy.list[key].initMoveBack( 180 , angleDeg );

					}

					}

					Enemy.list[key].lastHitAmount = self.attackDamage;

					if( self.isCrit ){
						Enemy.list[key].lastHitColor = "#ea94ff";
					}else{
						Enemy.list[key].lastHitColor = "#ffee91";
					}

					self.sMessage.newMessage( attackText + self.attackDamageComma + " damage" , attackColor , self.username ); 


				}else{
				}
			}



		}




		if( self.className == 'monk'){

			self.attackActive = true; 
			self.animFrame = 12; 
			self.stopFrame = self.curFrame + self.animFrame; 

		}

	}




	self.initEffect = function (){

		// Init effects 
		// 
		if( self.className == 'monk'){


			if( self.effectDelay2 > self.curFrame ){
				self.countBlessActive = true;
			}else{
				self.countBlessActive = false; 	 
			}

			if( self.effectDelay4 > self.curFrame ){
				self.eagleActive = true;
			}else{
				self.eagleActive = false; 	 
			}


			if( self.effectDelay1 > self.curFrame ){
				self.wolfSpiritActive = true;
				self.warcryActive = true; 
			}else{
				self.wolfSpiritActive = false; 
				self.playerStrength = self.getPlayerStrength();
				self.effect1Active = false;  
			}

		}




		// Count your blessings is active do tick by tick here otherwise go in init 
		// 
		if( self.countBlessActive ){
			self.hpRegenRate = 4; 
			self.hpPlusRegen = 9;
		}else{
			self.hpRegenRate = 20; 
			self.hpPlusRegen = 1; 	
		}
		

		if( self.warcryActive ){
		}else{
		}



		if( self.wolfSpiritActive ){
		}else{

		}

		// Sprit of Eagle is active 
		// 
		if( self.eagleActive ){

			self.hpRegenRate = 10; 
			self.hpPlusRegen = 21; 
			self.eagleReset = true;

		}else if(self.eagleReset == true ){

			self.hpMax = self.getPlayerHp(); 
			self.hp = self.getPlayerHp(); 
			self.playerStrength = self.getPlayerStrength(); 

			self.hpRegenRate = 20; 
			self.hpPlusRegen = 1; 
			self.eagleReset = false;

		}else{

		}

	}



	self.performAttack = function(){


		if( self.stopFrame > self.curFrame ){

			if( self.className == 'monk'){

				if ( self.curFrame % 10 == 0){

					self.attackDistance = 80; 

					self.currentTargetName = "none"; 

					for(var key in Enemy.list){

						self.isCrit = false; 

						self.attackDamage = self.getAttackDamage(); 
						self.attackDamageComma = numberWithCommas( self.attackDamage );  


						if( self.isCrit ){
							var attackText = "landed a critical hit for ";
							var attackColor = "#f04fff";
						}else{
							var attackText = "attacked for ";
							var attackColor = "#f99b9b"; 
						}




						distance = getDistance( self.x , self.y , Enemy.list[key].x , Enemy.list[key].y );

						if( distance < self.attackDistance ){

							self.updateCurrentTarget( key ); 

							Enemy.list[key].hp = Enemy.list[key].hp - self.attackDamage;

							Enemy.list[key].lastHitAmount = self.attackDamage;

							randCheck = Math.random();

							if( randCheck > .45 ){

								if( Enemy.list[key].allowKnockback ){

									var p1 = {
										x: self.x,
										y: self.y,
									};

									var p2 = {
										x: Enemy.list[key].x,
										y: Enemy.list[key].y,
									};

									// angle in degrees
									var angleDeg = Math.atan2( p2.y - p1.y , p2.x - p1.x ) * 180 / Math.PI;
									moveback = true; 

									Enemy.list[key].initMoveBack( 180 , angleDeg );

								}

							}

							if( self.isCrit ){
								Enemy.list[key].lastHitColor = "#ea94ff";
							}else{
								Enemy.list[key].lastHitColor = "#ffee91";
							}

							self.sMessage.newMessage( attackText + self.attackDamageComma + " damage" , attackColor , self.username ); 

						}else{

						}


					}

				}


			} 



		}else{




			self.attackActive = false; 

		}

	}




	self.performSecondaryAttack = function(){

		self.initAbility2(); 

	}



	self.teleportHero = function( destMap , startX , startY ){

		if( self.travelFXEndFrame > self.curFrame ){

			self.drawTrigger7 = "teleport";

		}else if( self.travelEndFrame > self.curFrame ){

			self.currentMap = "galaxy";

		}else{

			self.sunkenDepthsTPActive = false;
			self.sshraTempleTPActive = false;
			self.trainingTPActive = false;
			self.sunPalaceTPActive = false;
			self.frostpeakTPActive = false; 
			self.mythicCityTPActive = false; 
			self.kingRaTPActive = false;
			self.sunken2TPActive = false; 
			self.hallTPActive = false; 
			self.changeMap( destMap , startX , startY ); 			
			self.startEncampments( destMap ); 
			self.x = startX; 
			self.y = startY;
			self.teleCooldown = true; 
			self.teleEndFrame = self.curFrame + 40; 
			self.welcomeEndFrame = self.curFrame + 140; 

		}


	}


	self.teleportHeroShort = function( destMap , startX , startY ){

		if( self.travelFXEndFrame > self.curFrame ){
			self.drawTrigger7 = "teleport";
		}else{
			self.sunkenDepthsTPActive = false;
			self.sshraTempleTPActive = false;
			self.trainingTPActive = false;
			self.sunPalaceTPActive = false;
			self.frostpeaksTPActive = false; 
			self.mythicCityTPActive = false; 
			self.kingRaTPActive = false;
			self.sunken2TPActive = false; 
			self.currentMap = destMap;
			self.x = startX; 
			self.y = startY;
			self.teleCooldown = true; 
			self.teleEndFrame = self.curFrame + 40; 
			self.welcomeEndFrame = self.curFrame + 140; 
		}

	}


	self.updateCurrentTarget = function( key ){

		self.currentTargetName = Enemy.list[key].mobName; 

		hpPercent = ( Enemy.list[key].hp / Enemy.list[key].totalHp ) * 100;
		if( hpPercent < 0 ){
			hpPercent = 0; 
		} 

		self.currentTargetHpPercent = Math.round( hpPercent );

	}


	self.changeMap = function( mapName , startX , startY ){

		self.socket.emit( "clearEnemy" , 1 ); 

		mythicForestActive = false; 
		sunPalaceActive = false; 
		sunkenDepthsActive = false; 
		sunkenDepthsTwoActive = false; 
		hallActive = false; 
		orcEncampmentActive = false; 
		frostpeakActive = false; 
		frostpeakBActive = false; 

		self.x = startX;

		self.y = startY;

		Enemy.list = {}; 

		self.currentMap = mapName;

		//console.log("ZONING TO " + mapName );

	}



	self.startEncampments = function( mapName ){


		if( mapName == 'mythicForest'){

			if( mythicForestActive == false ){

				//self.socket.emit('clearEnemy',1);
				//for(var i in Player.list)
				//self.socket.emit( "clearEnemy" , 1 ); 
				for(var i in Enemy.list){
					Enemy.list[i].toRemove = true; 
				}

				mythicForestActive = true; 

				encampment = new Encampment();

				encampment.startEncampment('mythicA'); 

				encampment.startEncampment('mythicB'); 

				encampment.startEncampment('mythicC');


			}

		}



		if( mapName == 'sunkenDepths'){

			if( sunkenDepthsActive == false ){

				for(var i in Enemy.list){
					Enemy.list[i].toRemove = true; 
				} 

				sunkenDepthsActive = true;

				encampment = new Encampment(); 

				encampment.startEncampment('sunken2'); 

				encampment.startEncampment('sunken3');

				encampment.startEncampment('sunken5');

				encampment.startEncampment('sunken6');

				encampment.startEncampment('sunken7'); 

				encampment.startEncampment('sunken8');
				
 
			}

		}



		if( mapName == 'sunPalace'){

			if( sunPalaceActive == false ){

				for(var i in Enemy.list){
					Enemy.list[i].toRemove = true; 
				} 

				sunPalaceActive = true;

				encampment = new Encampment(); 

				encampment.startEncampment('sunPalaceA'); 

				encampment.startEncampment('sunPalaceB'); 

				encampment.startEncampment('sunPalaceC');

			}

		}


		if( mapName == 'frostpeak'){

			if( frostpeakActive == false ){

				for(var i in Enemy.list){
					Enemy.list[i].toRemove = true; 
				}  

				frostpeakActive = true; 

				encampment = new Encampment();

				encampment.startEncampment('frostpeakA'); 

				encampment.startEncampment('frostpeakB');

				encampment.startEncampment('frostpeakC');

				//encampment.startEncampment('sunPalace');


			}

		}


		if( mapName == 'frostpeakb'){

			if( frostpeakBActive == false ){

				for(var i in Enemy.list){
					Enemy.list[i].toRemove = true; 
				}  

				frostpeakBActive = true; 

				encampment = new Encampment();

				encampment.startEncampment('frostpeakD');

				encampment.startEvent('frostpeakb');

			}

		}



		if( mapName == 'orcEncampment'){

			if( orcEncampmentActive == false ){

				for(var i in Enemy.list){
					Enemy.list[i].toRemove = true; 
				}  

				orcEncampmentActive = true; 

				encampment = new Encampment(); 

				encampment.startEncampment('orcA');

				encampment.startEncampment('orcB');

				encampment.startEncampment('orcC');

				encampment.startEncampment('orcD');

				encampment.startEncampment('orcE');

			}

		}


		if( mapName == 'hall' ){ 

			if( hallActive == false ){

				for(var i in Enemy.list){
					Enemy.list[i].toRemove = true; 
				}  

				hallActive = true; 

				encampment = new Encampment();

				encampment.startEncampment('hallA');

				encampment.startEncampment('hallB'); 

				encampment.startEncampment('hallC'); 


			}

		}


	}






	self.checkForTeleport = function(){

		console.log( self.currentMap );

		if( self.currentMap == 'mythicForest'){


			// MAP CHANGES TO MYTHOS  
			if( self.x < 615  ){

				self.changeMap( 'mythicCity' , 2600 , 3950 );
				Enemy.list = {};  

			}


			// MAP CHANGE TO FROSTPEAK 
			if( self.x > 2700 && self.x < 3400 && self.y > 2200 ){

				self.changeMap( 'frostpeak' , 1330 , 720 ); 

				self.startEncampments('frostpeak'); 

			}


			// MAP CHANGE TO orc Encampment  
			//
			if( self.x > 2100 && self.x < 2180 && self.y > 330 && self.y < 800 ){

				self.changeMap( 'orcEncampment' , 820 , 4450 ); 

				self.startEncampments('orcEncampment'); 

			}


		}



		// Mythic city TPs 
		// 
		if( self.currentMap == 'mythicCity'){

			// MAP CHANGES TO MYTHIC FOREST 
			if( self.x > 2700 && self.x < 3000 && self.y > 3500 && self.y < 4300 ){

				self.changeMap( 'mythicForest' , 680 , 3470 ); 

				self.startEncampments('mythicForest'); 

			}


			// MAP CHANGES TO HALL
			if( self.x > 2400 && self.x < 3000 && self.y > 420 && self.y < 510 ){

				self.changeMap( 'hall' , 2600 , 5250 ); 

				self.startEncampments('hall'); 

			}

		}



		if( self.currentMap == 'orcEncampment'){

			
			// MAP CHANGE TO mythic forest  
			//
			if( self.x > 400 && self.x < 510 && self.y > 4180 && self.y < 4620 ){

				self.changeMap( 'mythicForest' , 2050 , 640 );

				self.startEncampments('mythicForest'); 

			}


			// MAP CHANGE TO hall 
			//
			if( self.x > 500 && self.x < 650 && self.y > 500 && self.y < 1300 ){
				self.changeMap( 'hall' , 3830 , 3900 );
				self.startEncampments('hall'); 
			}
			


		}



		if( self.currentMap == 'hall'){


			// MAP CHANGE to mythic forest  
			//
			if( self.x > 3870 && self.x < 4000 && self.y > 3600 && self.y < 4320 ){

				self.changeMap( 'orcEncampment' , 860 , 795 ); 

				self.startEncampments('orcEncampment'); 

			}


			// MAP CHANGE to mythic city  
			//
			if( self.x > 2340 && self.x < 2900 && self.y > 5420 && self.y < 5620 ){

				self.changeMap( 'mythicCity' , 2700 , 560 ); 
				self.startEncampments('mythicCity'); 

			}


			// TELEPORT to sunken depths 
			//
			if( self.x > 755 && self.x < 900 && self.y > 600 && self.y < 660 ){

				if( self.sunkenDepthsTPActive == false ){
					self.travelEndFrame = self.curFrame + 200;
					self.travelFXEndFrame = self.curFrame + 9; 
					self.sunkenDepthsTPActive = true;
					self.initSunken = true;  
				}

			}


		}




		// frostpeak TPs  
		// 
		if( self.currentMap == 'frostpeak'){

			// MAP CHANGE TO orc Encampment  
			//
			if( self.x > 1100 && self.x < 1500 && self.y > 600 && self.y < 700 ){
	
				self.changeMap( 'mythicForest' , 3240 , 2060 ); 
				self.startEncampments('mythicForest'); 

			}


			// MAP CHANGE TO frostpeakB  
			//
			if( self.x > 2240 && self.x < 2650 && self.y > 3910 && self.y < 4000 ){
	
				self.changeMap( 'frostpeakb' , 1170 , 690 ); 
				self.startEncampments('frostpeakb'); 

			}


			// MAP CHANGE TO sun palace  
			//
			if( self.x > 3340 && self.x < 3440 && self.y > 1324 && self.y < 1370 ){

				if( self.sunPalaceTPActive == false ){

					self.travelEndFrame = self.curFrame + 200;
					self.travelFXEndFrame = self.curFrame + 9; 
					self.sunPalaceTPActive = true;
					self.initSunPalace = true;  

				}

			}




		}



		if( self.currentMap == 'sunkenDepths'){


			// TP back to mythic city 
			//
			if( self.x > 3250 && self.x < 3330 && self.y > 595 && self.y < 645 ){
				if( self.hallTPActive == false ){
					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.hallTPActive = true;
					self.hallBackX = 750;
					self.hallBackY = 1580; 	
				}
			}


			// TP to sunken depths 2 
			//
			if( self.x > 1620 && self.x < 1700 && self.y > 6020 && self.y < 6120 ){

				if( self.sunken2TPActive == false ){
					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.sunken2TPActive = true; 
					self.initSunkenTwo = true; 
					self.hallTPActive = false;
				}

			}



		}



		if( self.currentMap == 'sunken2'){

			if( self.initSunkenTwo == true ){

				Enemy.list = {}; 

				var enemyInfo = Enemy.getEnemyInfo( 'tiv' );  
				enemyInfo.x = 1670; 
				enemyInfo.y = 1420;
				enemyInfo.currentMap = 'sunken2';
				enemyInfo.camp = 'center'; 
				Enemy( enemyInfo );

				self.initSunkenTwo = false;

			}


			// TP back to hall 
			if( self.x > 1560 && self.x < 1635 && self.y > 840 && self.y < 880 ){

				if( self.hallTPActive == false ){
					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.hallTPActive = true; 

					self.hallBackX = 1030;
					self.hallBackY = 2010; 

				}

			}

			

		}



		if( self.currentMap == 'training'){
			// TP back to mythos 
			if( self.x > 1107 && self.x < 1157 && self.y > 578 && self.y < 590 ){

				if( self.mythicCityTPActive == false ){

					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.mythicCityTPActive = true; 

				}
			}
		}


		if( self.currentMap == 'kingRa'){
			// TP back to mythos  
			if( self.x > 2180 && self.x < 2225 && self.y > 115 && self.y < 140 ){

				if( self.mythicCityTPActive == false ){

					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.mythicCityTPActive = true; 

				}
			}
		}



		if( self.currentMap == 'sunPalace'){


			// TP back to frostpeak ( upper exit )
			//
			if( self.x > 2780 && self.x < 2880 && self.y > 480 && self.y < 530 ){

				if( self.frostpeakTPActive == false ){

					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.frostpeakTPActive = true; 

					self.frostpeakBackX = 3030;
					self.frostpeakBackY = 1100; 

				}

			}



			// TP back to frostpeak ( lower exit )
			//
			if( self.x > 2780 && self.x < 2885 && self.y > 4640 && self.y < 4700 ){

				if( self.frostpeakTPActive == false ){

					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.frostpeakTPActive = true; 

					self.frostpeakBackX = 3030;
					self.frostpeakBackY = 1100; 

				}

			}

		}



		if( self.currentMap == 'frostpeakb'){

			
			// TP back to frostpeak 
			if( self.x > 990 && self.x < 1300 && self.y > 600 && self.y < 640 ){

				if( self.frostpeakTPActive == false ){

					self.changeMap( 'frostpeak' , 2440, 3900 ); 
					self.startEncampments('frostpeak'); 

				}

			}
			
		}




		if( self.currentMap == 'sshraTemple'){

			// TP back to mythos  
			if( self.x > 2180 && self.x < 2225 && self.y > 115 && self.y < 140 ){
				if( self.mythosTPActive == false ){
					self.travelEndFrame = self.curFrame + 200; 
					self.travelFXEndFrame = self.curFrame + 20; 
					self.mythosTPActive = true; 
				}
			}

		}


		// sealed depths travel process 
		// 
		if( self.sunkenDepthsTPActive )
			self.teleportHero( 'sunkenDepths' , 3300 , 725 ); 
		
		// kingra travel process 
		// 
		if( self.kingRaTPActive )
			self.teleportHero( "kingRa" , 1127 , 650 ); 
		
		// frostpeak travel process 
		// 			
		if( self.frostpeakTPActive )
			self.teleportHero( "frostpeak" , 3030 , 1100 );

		// mythos travel process
		if( self.mythosTPActive ){
			self.teleportHero( "mythos" , self.mythosBackX , self.mythosBackY );
		}

		if( self.hallTPActive ){
			self.teleportHero( "hall" , self.hallBackX , self.hallBackY );
		}

		// kingra travel process 
		// 
		if( self.sunken2TPActive )
			self.teleportHeroShort( "sunken2" , 1527 , 2250 ); 
		
		// sun palace travel process
		if( self.sunPalaceTPActive )
			self.teleportHero( "sunPalace" , 2972 , 5044 );
		
		// training center travel process
		if( self.trainingTPActive )
			self.teleportHero( "training" , 1127 , 650 );
		
		// sshra template travel process
		if( self.sshraTempleTPActive )
			self.teleportHero( "sshraTemple" , 1127 , 650 );



		if( self.teleCooldown ){

			if( self.teleEndFrame > self.curFrame ){
				self.drawTrigger7 = "teleport";
			}else{
				self.drawTrigger7 = "";
				self.teleCooldown = false; 
			}

		}



	}




	self.getAttackDamage = function(){

		levelDmgScale = getLevelScale( self.playerLevel , 10 );

		damagePlus = self.playerLevel * levelDmgScale;  

		var damageRating = ( ( self.playerStrength * .10 ) * self.playerLevel ) *  ( ( self.attackRating * .03 ) ); 

		if( self.className == 'warrior'){
			var classRank = 1.10; 
		}else if( self.className == 'monk'){
			var classRank = 1.22; 
		}

		attackDamage = ( damagePlus + damageRating ) * classRank; 

		attackDamageModify = ( attackDamage * .47 ) * Math.random(); 

		critDamage = ( attackDamage * 5 ) * Math.random(); 

		var attackMod = Math.random(); 

		// plus or minus or crit hit 
		if( attackMod >= self.critRatio ){
			self.isCrit = true; 
			totalAttackDamage = attackDamageModify + attackDamage + critDamage; 
		}else if( attackMod >= .35 ){
			totalAttackDamage = attackDamageModify + attackDamage; 
		}else{
			totalAttackDamage = attackDamage - attackDamageModify;
		} 

		totalAttackDamage = Math.round( totalAttackDamage );

		return totalAttackDamage; 

	}


	self.getTickDamage = function(){

		var damagePlus = self.playerLevel * 10; 
		var damageRating = ( ( self.playerStrength * .5 ) * self.playerLevel ) *  ( ( self.attackRating * .1 ) * self.playerLevel ); 

		classRank = 1; 

		attackDamage = damagePlus + damageRating * classRank; 

		return tickDamage; 

	}



	self.takeDamage = function( attackDamage ){

		self.hp = self.hp - attackDamage;

		if( self.hp < 0 ){

			self.setToDeath = true;

			isOnDeath = true; 

		}


	}


	self.energyRegen = function(){

		// Player Energy Regan 

		if( self.playerLevel > 32){
			regenAmount = 45; 
		}else if( self.playerLevel > 28 ){
			regenAmount = 28; 
		}else if( self.playerLevel > 24 ){
			regenAmount = 21; 
		}else if( self.playerLevel > 19 ){
			regenAmount = 14; 
		}else if( self.playerLevel > 15 ){
			regenAmount = 9; 
		}else if( self.playerLevel > 10 ){
			regenAmount = 6; 
		}else if( self.playerLevel > 5 ){
			regenAmount = 3; 
		}else {
			regenAmount = 1; 
		}


		self.energyRegenCount += 1; 

		if( self.energyRegenCount % 5 == 0 ){

			if( self.energy < self.totalEnergy ){
				self.energy = self.energy + regenAmount;  
			}

			if( self.energy > self.totalEnergy){
				self.energy = self.totalEnergy; 
			}

		}

	}


	self.hpRegen = function(){

		//player HP regen
		self.hpRegenCount += 1; //self.hpRegenPlus; 

		if( self.hpRegenCount % self.hpRegenRate == 0 ){

			if( self.hp < self.hpMax ){

				self.hp = self.hp + self.hpPlusRegen;  

				if( self.hp > self.hpMax ){
					self.hp = self.hpMax; 
				}

			}

		}

	}


	self.onDeath = function(){

		if( isOnDeath == true ){

			self.hp = 0;
			self.isAlive = 0; 

			self.socket.emit( "userDeath" , 1 ); 
			isOnDeath = false; 



		}	

	}


	self.updateMoney = function( mobName , curLevel ){

		var randM = Math.random(); 

		if( curLevel > 29 ){
			baseline = 100; 
		}else if( curLevel > 27 ){
			baseline = 65;
		}else if( curLevel > 25 ){
			baseline = 45;
		}else if( curLevel > 20 ){
			baseline = 30;
		}else if( curLevel > 15 ){
			baseline = 22;
		}else if( curLevel > 13 ){
			baseline = 15;
		}else if( curLevel > 9){
			baseline = 10;
		}else if( curLevel > 7){
			baseline = 8; 
		}else if( curLevel > 5){
			baseline = 6;
		}else if( curLevel > 3){
			baseline = 4; 
		}else{
			baseline = 2;
		}

		var amount = baseline * randM;
		var round = Math.floor( amount );  
		self.goldAmount = self.goldAmount + round;

	}


	self.updateXP = function( worthXP , mobName , eX , eY , eId ){

		worthXpMod = ( worthXP * .25 ) * Math.random();
		worthXpMod = Math.round( worthXpMod ); 

		gainMod = Math.random();

		if( gainMod > .5 ){
			xpPlus = worthXP + worthXpMod; 
		}else{
			xpPlus = worthXP - worthXpMod;
		}

		self.totalXp = self.totalXp + xpPlus;

		xpPlus = numberWithCommas( xpPlus );  

		self.sMessage.newMessage('You have slain a ' + mobName + ' ' + xpPlus + ' experience points gained');  

		self.checkLevelMap(); 

	}


	self.nextLevel = function(){

		var nextLevel = self.playerLevel + 1;

		return nextLevel;

	}


	self.getNextLevelXP = function( XPLevels ){

		nextLevelXP = XPLevels[self.playerLevel - 1];

		return nextLevelXP;

	}

	self.getPrevLevelXP = function( XPLevels ){

		prevLevelXp = XPLevels[self.playerLevel - 2];

		return prevLevelXp;

	}


	self.checkLevelMap = function(  ){

		// FAST LEVEL
		//
		var XPLevels = [
			"120","300","900","2100","4000","8000","18000","28000","45000","65000",
			"85000","120000","150000","187900","210900","260000","324000","410000","520000","625900",
			"745000","895900","979900","1096900","1251000","1521900","1919000","2400000","3400000","4400000",
			"5100000","6819000","8503900","11979000","15019000"
		];


		// DEFAULT
		//
		/*
		var XPLevels = [
			"320","1100","3500","7500","13000","20000","35000","55000","75000","111000",
			"149900","186900","241900","287900","350900","420000","534000","670000","800000","955900",
			"1150000","1359000","1669000","2069000","2519000","3219000","3919000","4919000","6219000","8019000",
			"9419000","11819000","14319000","18719000","23719000"
		];
	*/ 

		//level 35-40
		//
		//,"29719000","36719000","49719000","610719000","85719000"


		// Amount of XP required to reach each level 
		//
		var levels = {
			"nextLevel" : self.nextLevel(), 
			"nextLevelXP" : self.getNextLevelXP( XPLevels ), 
		};

		//console.log( "NELVEXP " + levels.nextLevelXP );
		//console.log( "TOTALXP " + self.totalXp );


		if( self.totalXp >= levels.nextLevelXP ){
			self.levelUp( levels.nextLevel , XPLevels );
		}


	}


	self.getCoreStats = function(){

		stats = {}; 

		stats.energy = self.getPlayerEnergy();
		stats.stamina = self.getPlayerStamina(); 
		stats.intelligence = self.getPlayerIntelligence();
		stats.dexterity = self.getPlayerDexterity(); 
		stats.strength = self.getPlayerStrength();
		stats.hp = self.getPlayerHp(); 

		return stats;

	}



	self.levelUp = function( nextLevel , XPLevels , socket ){

		self.playerLevel = self.playerLevel + 1; 
		self.nextLevelXp = XPLevels[nextLevel - 1];
		self.prevLevelXp = XPLevels[nextLevel - 2];

		var stats = self.getCoreStats(); 
		self.hp = stats.hp;
		self.hpMax = stats.hp;
		self.playerStrength = stats.strength; 
		self.playerIntelligence = stats.intelligence; 
		self.playerDexterity = stats.dexterity; 
		self.playerStamina = stats.stamina;
		self.energy = stats.energy;
		self.totalEnergy = stats.energy; 
		self.stack1Count = 0; 

		self.sMessage.newMessage('Congrats! You have now reached level ' + self.playerLevel ,'yellow');

		self.socket.emit('levelUp', 1 ); 

		self.drawTrigger7 = "starsUp";

		self.personalEffect = true; 

		self.personalCooldownTime = self.curFrame + 120; 

	}



	self.getPlayerHp = function(){

		playerRating = ( self.playerLevel * 14 );
		staminaRating = ( self.playerStamina * 2 ) * ( self.playerLevel * 2.7 );

		playerHp = playerRating + staminaRating; 

		playerHp = Math.round( playerHp ); 

		return playerHp;    
s
	}


	self.getPlayerEnergy = function(){

		playerRating = ( self.playerLevel * .7 );
		intelligenceRating = ( self.playerIntelligence * 3 ) * ( self.playerLevel );

		playerEnergy = playerRating + intelligenceRating; 

		playerEnergy = Math.round( playerEnergy );

		return playerEnergy;    

	}


	self.getPlayerIntelligence = function(){

		playerRating = self.playerLevel * 2 + 10;
		
		if( self.className == 'warrior' ){
			classMod = 35; 
		}else if( self.className == 'healer' ){
			classMod = 70; 
		}else if( self.className == 'mage' ){
			classMod = 150; 
		}else if( self.className == 'monk' ){
			classMod = 50;
		}else if( self.className == 'enchanter' ){
			classMod = 150; 
		}

		classRank = ( classMod * .07 ) * self.playerLevel; 
		intelligence = playerRating + classRank;

		intelligence = Math.round( intelligence ); 

		return intelligence;    

	}


	self.getPlayerDexterity = function(){

		playerRating = self.playerLevel * 2 + 10;
		
		if( self.className == 'warrior' ){
			classMod = 40; 
		}else if( self.className == 'healer' ){
			classMod = 60; 
		}else if( self.className == 'mage' ){
			classMod = 30; 
		}else if( self.className == 'monk' ){
			classMod = 100;
		}else if( self.className == 'enchanter' ){
			classMod = 20; 
		}

		classRank = ( classMod * .07 ) * self.playerLevel; 
		dexterity = playerRating + classRank;

		dexterity = Math.round( dexterity );

		return dexterity;    

	}


	self.getPlayerStrength = function(){

		playerRating = self.playerLevel * 2 + 10;
		
		if( self.className == 'warrior' ){
			classMod = 150; 

			if(self.playerLevel == 1 ){
				return 45; 
			}

		}else if( self.className == 'healer' ){
			classMod = 20; 
		}else if( self.className == 'mage' ){
			classMod = 10; 
		}else if( self.className == 'monk' ){
			classMod = 100;

			if(self.playerLevel == 1 ){
				return 35; 
			}

		}else if( self.className == 'enchanter' ){
			classMod = 10; 
		}

		classRank = ( classMod * .07 ) * self.playerLevel; 
		strength = playerRating + classRank;

		strength = Math.round( strength );

		return strength;   

	}


	self.getPlayerStamina = function(){

		playerRating = self.playerLevel * 2 + 10;
		
		if( self.className == 'warrior' ){
			classMod = 120; 
		}else if( self.className == 'healer' ){
			classMod = 20; 
		}else if( self.className == 'mage' ){
			classMod = 20; 
		}else if( self.className == 'monk' ){
			classMod = 80;
		}else if( self.className == 'enchanter' ){
			classMod = 30; 
		}

		classRank = ( classMod * .07 ) * self.playerLevel; 
		stamina = playerRating + classRank;

		stamina = Math.round( stamina );

		return stamina;    

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
	

	self.getInitPack = function(){

		//console.log( "PLAYER INIT PACK ");

		return {
			id:self.id,
			x:self.x,
			y:self.y,	
			number:self.number,	
			hp:self.hp,
			hpMax:self.hpMax,
			score:self.score,
			playerLevel:self.playerLevel,
			totalXp:self.totalXp, 
			nextLevelXp:self.nextLevelXp, 
			username:self.username, 
			energy:self.energy,
			playerLevel:self.playerLevel, 
			totalEnergy:self.totalEnergy,
			curFrame:self.curFrame,  
			cooldown1Active:self.cooldown1Active,
			cooldown1:self.cooldown1,
			cooldown2Active:self.cooldown2Active,
			cooldown2:self.cooldown2,
			cooldown3Active:self.cooldown3Active,
			cooldown3:self.cooldown3,
			cooldown4Active:self.cooldown4Active,
			cooldown4R:self.cooldown4,
			cooldown5Active:self.cooldown5Active,
			cooldown5:self.cooldown5,
			cooldown6Active:self.cooldown6Active,
			cooldown6:self.cooldown6,
			className:self.className,
			currentMap:self.currentMap, 

			playerStamina:self.playerStamina,
			playerStrength:self.playerStrength,
			playerIntelligence:self.playerIntelligence,
			playerDexterity:self.playerDexterity,

		};		
	}


	self.getUpdatePack = function(){

		return {
			id:self.id,
			x:self.x,
			y:self.y,
			className:self.className,
			hp:self.hp,
			hpMax:self.hpMax,
			energy:self.energy, 
			totalEnergy:self.totalEnergy,
			curFrame:self.curFrame,
			spriteAnimCounter:self.spriteAnimCounter,
			currentTargetName:self.currentTargetName,
			currentTargetHpPercent:self.currentTargetHpPercent, 
			pressingRight:self.pressingRight,
			pressingLeft:self.pressingLeft,
			pressingUp:self.pressingUp,
			pressingDown:self.pressingDown,
			pressingAttack:self.pressingAttack,
			pressingSecondaryAttack:self.pressingSecondaryAttack,
			currentMap:self.currentMap, 
			playerStamina:self.playerStamina,
			playerStrength:self.playerStrength,
			playerIntelligence:self.playerIntelligence,
			playerDexterity:self.playerDexterity,
			playerLevel:self.playerLevel,
			pressing1:self.pressing1,
			pressing2:self.pressing2,
			pressing3:self.pressing3,
			pressing4:self.pressing4,
			pressing5:self.pressing5,
			pressing6:self.pressing6,
			totalXp:self.totalXp, 
			nextLevelXp:self.nextLevelXp, 
			prevLevelXp:self.prevLevelXp, 
			drawTrigger1:self.drawTrigger1,	
			drawTrigger2:self.drawTrigger2,
			drawTrigger3:self.drawTrigger3,
			drawTrigger4:self.drawTrigger4,
			drawTrigger5:self.drawTrigger5,
			drawTrigger6:self.drawTrigger6,
			drawTrigger7:self.drawTrigger7,
			attackActive:self.attackActive,
			effectAnimCounter1:self.effectAnimCounter1,
			effectAnimCounter2:self.effectAnimCounter2,
			effectAnimCounter3:self.effectAnimCounter3,
			effectAnimCounter4:self.effectAnimCounter4,
			effectAnimCounter5:self.effectAnimCounter5,
			effectAnimCounter6:self.effectAnimCounter6,
			cooldown1Active:self.cooldown1Active,  
			cooldown2Active:self.cooldown2Active,
			cooldown3Active:self.cooldown3Active,
			cooldown4Active:self.cooldown4Active,
			cooldown5Active:self.cooldown5Active,
			cooldown6Active:self.cooldown6Active,
			cooldown1:self.cooldown1,  
			cooldown2:self.cooldown2,
			cooldown3:self.cooldown3,
			cooldown4:self.cooldown4,
			cooldown5:self.cooldown5,
			cooldown6:self.cooldown6,
			moveBackDrawActive:self.moveBackDrawActive,
			lastHitAmount:self.lastHitAmount, 
			goldAmount:self.goldAmount,
			itemCode:self.itemCode, 
		}	

	}


	self.reduceEnergy = function( amount ){

		amount = Math.round( amount );
		self.energy = Math.round( self.energy );
		self.energy = self.energy - amount; 

		if( self.energy > self.totalEnergy){
			self.energy = self.totalEnergy; 
		}


	}


	self.initAbility1 = function(){


		var abilityInfo = getAbilityInfo( self.className , 'ability1' , self.playerLevel ); // get base ability info 

		if( self.energy >= abilityInfo.energy && self.cooldown1Active == false ){

			self.effectAnimCounter1 = 0; 
			self.delay1 = self.curFrame + abilityInfo.delay; //Delay between attack responsiveness
			self.cooldown1 = self.curFrame + abilityInfo.cooldown; 	// Cooldown between reusing spell
			self.warmupAnim1 = self.curFrame + abilityInfo.warmup; 
			self.ability1Active = true; // Animation is active
			self.cooldown1Active = true;  // Cooldown is active
			self.damageHere1 = 0; 
			self.reduceEnergy( abilityInfo.energy ); 
			self.sMessage.newMessage( abilityInfo.chatMessage , ability.chatColor , self.username ); 


			if( abilityInfo.duration != 0 ){

				self.effectActive = true; 

				if( self.className == 'monk'){

					//console.log('wolf active');

					self.wolfSpiritActive = true;
					self.effectDelay1 = self.curFrame + abilityInfo.duration;

					self.playerStrength = self.playerStrength + 40; 
					self.critRatio = .89; 

				}

				if( self.className == 'warrior'){

					//console.log('warcry');

					self.warcryActive = true;
					self.effectDelay1 = self.curFrame + abilityInfo.duration;

					if( self.stack1Count < 5 ){
						self.stack1Count = self.stack1Count + 1; 
						self.playerStrength = self.playerStrength + 20; 
						self.critRatio = .94; 
					}

				}

			}




			if( self.className == 'warrior'){

				//console.log('performing taunt'); 
				for(var key in Enemy.list){

					distance = getDistance( self.x , self.y , Enemy.list[key].x , Enemy.list[key].y );

					if( distance < 450 ){  
						Enemy.list[key].aggroTargetID = self.id;
						console.log( Enemy.list[key].mobName + " aggred onto" +	 self.id );
						Enemy.list[key].aggroTargetStart = self.curFrame + 120; 
					}
				}

			}
			


		}
	}



	self.initAbility2 = function(){

		var abilityInfo = getAbilityInfo( self.className , 'ability2' , self.playerLevel ); 

		if( self.energy >= abilityInfo.energy && self.cooldown2Active == false ){	//every 1 sec

			//console.log('init ability 2');

			self.effectAnimCounter2 = 0; // Reset counter so anim plays from start

			self.delay2 = self.curFrame + abilityInfo.delay; //Delay between attack responsiveness
			self.cooldown2 = self.curFrame + abilityInfo.cooldown; 	// Cooldown between reusing spell

			self.ability2Active = true; // Animation is active
			self.cooldown2Active = true;  // Cooldown is active

			self.damageHere2 = 0; 

			if( abilityInfo.duration != 0 ){

				self.effectActive = true; 

				if( self.className == 'monk'){
					self.countBlessActive = true;
					self.effectDelay2 = self.curFrame + abilityInfo.duration;
				}

			}

			//console.log( abilityInfo.duration );

			self.reduceEnergy( abilityInfo.energy );
			self.sMessage.newMessage( abilityInfo.chatMessage , ability.chatColor , self.username ); 

		}

	}



	self.initAbility3	 = function(){

		var abilityInfo = getAbilityInfo( self.className , 'ability3', self.playerLevel );

		// Check for cooldown, current running animation, available EP 
		//
		if( self.energy >= abilityInfo.energy && self.cooldown3Active == false ){	//every 1 sec

			self.effectAnimCounter3 = 0; // Reset counter so anim plays from start

			self.delay3 = self.curFrame + abilityInfo.delay; //Delay between attack responsiveness
			self.cooldown3 = self.curFrame + abilityInfo.cooldown; 	// Cooldown between reusing spell

			self.ability3Active = true; // Animation is active
			self.cooldown3Active = true;  // Cooldown is active

			self.warmupAnim3 = self.curFrame + abilityInfo.warmup; 

			self.damageHere3 = 0; 

			//console.log('init ability 3');

			self.reduceEnergy( abilityInfo.energy );

			self.sMessage.newMessage( abilityInfo.chatMessage , ability.chatColor , self.username ); 



			if( self.className == 'warrior'){

				var enemy = {};

				for(var key in Enemy.list){

					enemy.y = Enemy.list[key].y;
					enemy.x = Enemy.list[key].x;
					distance = self.getDistance( enemy );
					if( distance < 240 ){
						Enemy.list[key].isStunned = true; 
						stunID = key; // save for later  
					}

				}

			}



		}


	}



	self.initAbility4	 = function(){

		
		var abilityInfo = getAbilityInfo( self.className , 'ability4' , self.playerLevel );

		// Make sure button is active, player has energy, and cooldown is off 
		if( self.energy >= abilityInfo.energy && self.cooldown4Active == false  ){	//every 1 sec

			self.effectAnimCounter1 = 0;
			self.effectAnimCounter4 = 0; // Reset counter so anim plays from start

			self.damageHere4 = 0; // Counts total damage done by ability 

			self.delay4 = self.curFrame + abilityInfo.delay; //Delay between attack anim
			self.warmupAnim4 = self.curFrame + abilityInfo.warmup; 
			self.cooldown4 = self.curFrame + abilityInfo.cooldown; 	// Cooldown between reusing spell

			self.ability4Active = true; // Animation is active
			self.cooldown4Active = true;  // Cooldown is active

			self.energy = self.energy - abilityInfo.energy; 	

			//console.log( 'init ability 4');


			if( abilityInfo.duration != 0 ){

				self.effectActive = 1; 

				if( self.className == 'monk'){

					self.countBlessActive = true;
					self.effectDelay4 = self.curFrame + abilityInfo.duration;

					boost = ( self.hpMax * 1.6 ); 
					self.hp = Math.round( self.hpMax + boost );
					self.hpMax = Math.round( self.hpMax + boost ); 

					playerStrength = 1050 * ( self.playerLevel * .1 ); 
					self.playerStrength = Math.round( playerStrength ); 

				}

			}


			self.sMessage.newMessage( abilityInfo.chatMessage , ability.chatColor , self.username ); 


		}

	}



	self.initAbility5	 = function(){

		var abilityInfo = getAbilityInfo( self.className , 'ability5', self.playerLevel );

		if( self.cooldown5Active == false ){	//every 1 sec

			//console.log('ability 5 init');

			if( self.playerLevel > 29 ){
				variant = 3.9; 
			}else if( self.playerLevel > 24 ){
				variant = 3.5; 
			}else if( self.playerLevel > 17 ){
				variant = 3.1;
			}else if( self.playerLevel > 13 ){
				variant = 2.7;
			}else if( self.playerLevel > 9 ){
				variant = 2.4; 
			}else if( self.playerLevel > 6 ){
				variant = 2.2; 
			}else if( self.playerLevel > 3 ){
				variant = 1.9;
			}else{
				variant = 1.6;
			}

			var healAmount = ( ( self.playerLevel * variant ) * self.playerStamina ) + 230; 
			healAmount = Math.round( healAmount ); 
			
			self.hp = self.hp + healAmount;
			if( self.hp > self.hpMax ){
				self.hp = self.hpMax;
			}

			healAmountComma = numberWithCommas( healAmount ); 

			self.effectAnimCounter5 = 0; 

			self.ability5Active = true;
			self.cooldown5 = self.curFrame + abilityInfo.cooldown;
			self.cooldown5Active = true;
			self.delay5 = self.curFrame + 40;

			self.sMessage.newMessage( abilityInfo.chatMessage + " for " + healAmountComma + " health" , ability.chatColor , self.username ); 


		}

	}



	self.initAbility6	 = function(){


		var abilityInfo = getAbilityInfo( self.className , 'ability6' , self.playerLevel );



		if(self.cooldown6Active == false ){	//every 1 sec

			//console.log('ability 6 init');

			self.effectAnimCounter6 = 0; 
			self.cooldown6 = self.curFrame + abilityInfo.cooldown;
			self.ability6Active = true;
			self.cooldown6Active = true;
			self.delay6 = self.curFrame + 75; 

			self.sMessage.newMessage( abilityInfo.chatMessage , ability.chatColor , self.username ); 


 
		}



	}




	self.performAbility1 = function(){

		var abilityInfo = getAbilityInfo( self.className , 'ability1' , self.playerLevel ); 

		if( self.className == 'mage'){
			if( self.delay1 > self.curFrame ){
				if( self.warmupAnim1 > self.curFrame ){
					self.drawTrigger1 = "flash";
				}else{ 
					self.drawTrigger1 = "iceOne"; 
				}
			}else{
				self.drawTrigger1 = ""; 
				// Move to player ? move to entity 
				Enemy.areaDamageAttack({
					hitDistance:80,  
					damage:100, 
					selfX:self.x, 
					selfY:self.y,
				}); 
				self.ability1Active = false; 	 
			}
		}


		// Single target heal 
		if( self.className == 'healer'){
			if( self.delay1 > self.curFrame ){
				self.drawTrigger1 = "flower";
			}else{
				self.drawTrigger1 = "";
				self.ability1Active = false;
			}
		}

		// Taunt 
		if( self.className == 'warrior'){
			if( self.delay1 > self.curFrame ){
				self.drawTrigger1 = "lion";
			}else{
				self.drawTrigger1 = "";
				self.ability1Active = false;
			}
		}


		// Single target heal 
		if( self.className == 'enchanter'){
			if( self.delay1 > self.curFrame ){
				self.drawTrigger1 = "lzap";
			}else{
				self.drawTrigger1 = "";
				self.ability1Active = false;
			}
		}

	
		if( self.className == 'monk'){
			if( self.delay1 > self.curFrame ){
				self.drawTrigger1 = "lion";
			}else{
				self.drawTrigger1 = "";
				self.critRatio = .93; 
				self.ability1Active = false; 	 
			}
		}


	}



	self.performAbility2 = function(){


		if( self.className == 'mage'){
			if( self.delay2 > self.curFrame ){
				self.drawTrigger2 = "fireStorm";
				self.areaDOTAttack( ability.tickDamage , ability.hitDistance ); 
			}else{
				self.ability2Active = false;
				self.drawTrigger2 = ""; 
			}
		}


		if( self.className == 'warrior'){

			if( self.delay2 > self.curFrame ){
				self.drawTrigger2 = "wsplash";
				tickScale = getLevelScale( self.playerLevel , 11 );
				tickDamage = self.playerLevel * tickScale; 
				self.damageHere2 += self.areaDOTAttack( tickDamage , ability.hitDistance ); 
			}else{ // attack is finished 
				self.ability2Active = false;
				self.drawTrigger2 = ""; 

				if( self.damageHere2 == 0 ){
					self.sMessage.newMessage( "did not hit anybody with flame slash" , "#b1b1b1" , self.username );
				}else{
					self.sMessage.newMessage( "landed flame slash for " + self.damageHere2 + " points of damage" , "#ffd38e" , self.username );
				} 
			}		
		}


		if( self.className == 'monk'){


			if( self.delay2 > self.curFrame ){

				self.drawTrigger2 = "plusover";

				healScale = getLevelScale( self.playerLevel , 8 );
				healTick = self.playerLevel * healScale; 
				healTick = Math.round( healTick );
				hpNext = self.hp + healTick; 

				if( hpNext >= self.hpMax ){
					self.hp = self.hpMax; 
				}else{
					self.hp = self.hp + healTick;
				}

			}else{

				self.drawTrigger2 = ""; 
				self.ability2Active = false;

			}

		}


		if( self.className == 'enchanter'){
			if( self.delay2 > self.curFrame ){
				self.drawTrigger2 = "mez";
			}else{
				self.drawTrigger2 = ""; 
				self.ability2Active = false;
			}
		}



	}




	self.performAbility3 = function(){

		//self.damageHere3 = 0; 

		if( self.className == 'mage'){

			if( self.delay3 > self.curFrame ){

				self.drawTrigger3 = "shieldray";
				self.damageHere3 += self.areaDOTAttack( ability.tickDamage , ability.hitDistance );

			}else{
				self.ability3Active = false;
				self.drawTrigger3 = "";
				self.isDOTAttack = true;
			}
		}


		if( self.className == 'warrior'){


			if( self.delay3 > self.curFrame ){
				self.drawTrigger3 = "splash";
				//self.damageHere3 += self.areaDOTAttack( wsability.tickDamage , ability.hitDistance );

			}else{

				self.ability3Active = false;
				self.drawTrigger3 = "";
				self.isDOTAttack = true;
				//self.isStunned = false; 


				for(var key in Enemy.list){

					if( Enemy.list[key].isStunned ){
						Enemy.list[key].isStunned = false;
					};

				}

				console.log( "FINISH STUN");
			}
		}


		if( self.className == 'monk'){
			if( self.delay3 > self.curFrame ){

				self.drawTrigger3 = "boom";
				self.damageHere3 += self.areaDOTAttack( ability.tickDamage , ability.hitDistance );

			}else{

				self.ability3Active = false;
				self.drawTrigger3 = "";
				self.isDOTAttack = true;

				self.damageHere3 = Math.round( self.damageHere3 );

				if( self.damageHere3 == 0 ){
					self.sMessage.newMessage( "did not hit anybody with " + ability.displayName , "#b1b1b1" , self.username );
				}else{
					self.sMessage.newMessage( "landed " + ability.displayName + " for " + self.damageHere3 + " points of damage" , "#ffd38e" , self.username );
				} 
			}
		}



	}




	// zattackR
	//
	self.performAbility4 = function(){


		if( self.className == 'mage'){

			if( self.delay4 > self.curFrame ){
				if( self.warmupAnim4 > self.curFrame ){
					self.drawTrigger4 = "flashBig";
				}else{
					self.drawTrigger4 = "meteor";
					self.areaDOTAttack( ability.tickDamage , ability.hitDistance );
				}
			}else{
				self.ability4Active = false; 
				self.drawTrigger4 = "";
			}

		}


		if( self.className == 'healer'){

			if( self.delay4 > self.curFrame ){
				var framesLeft = self.curFrame - self.ability4Cooldown;
				if( self.hp < self.totalHp){
					self.hp = self.hp + 4;
				}
				var percentLeft = ( self.attackRDelay / framesLeft ) * 100; 
				self.drawTrigger4 = "fullHearts";
			}else{
				self.drawTrigger4 = "fullHeartsEnd";
				self.ability4Active = false;
			}

		}



		if( self.className == 'warrior'){

			if( self.delay4 > self.curFrame ){
				if( self.warmupAnim4 > self.curFrame ){
					self.drawTrigger4 = "flashBig";
				}else{
					self.drawTrigger4 = "meteor";
					self.areaDOTAttack( ability.tickDamage , ability.hitDistance );
				}
			}else{
				self.ability4Active = false; 
				self.drawTrigger4 = "";
			}
		}


		if( self.className == 'monk'){

			if( self.delay4 > self.curFrame ){
				if( self.warmupAnim4 > self.curFrame ){
					self.drawTrigger4 = "flashBig";
					self.effectAnimCounter4 = 0; // When meteor starts ensure its at 0 
				}else{
					self.drawTrigger4 = "spiritofEagle";
				}
			}else{
				self.ability4Active = false; 
				self.drawTrigger4 = "";
			}

		}



		if( self.className == 'enchanter'){
			if( self.delay4 > self.curFrame ){
				if( self.warmupAnim4 > self.curFrame ){
					self.drawTrigger4 = "flashWarmup";
				}else{ 
					self.drawTrigger4 = "lightzap";
					self.areaDOTAttack( ability.tickDamage , ability.hitDistance );
				}
			}else{
				self.ability4Active = false; 
				self.drawTrigger4 = "lightzapEnd";
			}
		}



		if( self.className == 'monk'){


		}


	}


	self.areaDOTAttack = function( tickDamage , hitDistance ){

		var enemy = {};
		var damageHere = 0; 

		for(var key in Enemy.list){

			enemy.y = Enemy.list[key].y;
			enemy.x = Enemy.list[key].x;
			distance = self.getDistance( enemy );

			if( distance < hitDistance ){

				// Reduce tick rate // add modifier later  
				//
				thisRand = Math.random(); 

				if( thisRand > .67 ){

					thisTickDamage = self.getDOTTickDamage( tickDamage ); 

					displayTickDamage = Math.round( thisTickDamage ); 
					
					Enemy.list[key].lastHitAmount = displayTickDamage;

					Enemy.list[key].hp = Enemy.list[key].hp - thisTickDamage;
					damageHere = damageHere + thisTickDamage;

				}

			}

		}

		damageHere = Math.round( damageHere );

		return damageHere; 		

	}



	self.getDOTTickDamage = function( baseDamage ){

		if( self.playerLevel > 29 ){
			levelMod = self.playerLevel * 420;
		}else if( self.playerLevel > 24 ){
			levelMod = self.playerLevel * 310;
		}else if( self.playerLevel > 19 ){
			levelMod = self.playerLevel * 230;
		}else if( self.playerLevel > 15 ){
			levelMod = self.playerLevel * 180;
		}else if( self.playerLevel > 12 ){
			levelMod = self.playerLevel * 130;
		}else if( self.playerLevel > 8 ){
			levelMod = self.playerLevel * 90;
		}else if( self.playerLevel > 5 ){
			levelMod = self.playerLevel * 70;
		}else if( self.playerLevel > 2 ){
			levelMod = self.playerLevel * 50;
		}else{
			levelMod = self.playerLevel * 25;
		}

		intMod = ( self.playerIntelligence * .2 ) + 3;  

		tickDamage = baseDamage + intMod + levelMod ; 

		thisRand = Math.random(); 

		randDamage = tickDamage * thisRand * .5; 


		if( thisRand > .65 ){
			tickDamage = tickDamage + randDamage;
		}else{
			tickDamage = tickDamage - randDamage; 
		}

		tickDamage = tickDamage * .1;

		return tickDamage; 

	}



	self.performAbility5 = function(){

		if( self.delay5 > self.curFrame ){
			self.drawTrigger5 = "healOne";
		}else{
			self.drawTrigger5 = "";
			self.ability5Active = false;
		}

	}



	self.performAbility6 = function(){

		if( self.delay6 > self.curFrame ){

			//self.maxSpd = 29;
			self.drawTrigger6 = "runBoost";

			if( self.className == 'monk'){
				self.maxSpd = 22; 
			}else{
				self.maxSpd = 16; 
			}

		}else{

			self.drawTrigger6 = "";
			self.maxSpd = 10; 
			self.ability6Active = false;

		}

	}



	self.checkForClip = function( region ){


		if( region == 'mythicCity'){

		// Mythic City 
		// 
		if( self.x > 1090 && self.x < 1130 && self.y > 5620 && self.y < 5846 ){
			self.pressingRight = false;
		}

		if( self.x > 1940 && self.x < 1970 && self.y > 5620 && self.y < 5846 ){
			self.pressingLeft = false;
		}

		if( self.x > 1090 && self.x < 1970 && self.y > 5620 && self.y < 5650 ){
			self.pressingDown = false;
		}

		if( self.x > 1090 && self.x < 1970 && self.y > 5830 && self.y < 5850 ){
			self.pressingUp = false;
		}

		if( self.x > 1486 && self.x < 1530 && self.y > 7180 && self.y < 7225 ){
			self.pressingRight = false;
		}

		if( self.x > 1555 && self.x < 3640 && self.y < 6670 && self.y > 6662 ){
			self.pressingUp = false; 
		}

		if( self.x > 2620 && self.x < 3175 && self.y > 7365 && self.y < 7555 ){
			self.pressingRight = false; 
		}

		if( self.x > 2620 && self.x < 3175 && self.y > 7350 && self.y < 7360){
			self.pressingDown = false; 
		}

		if( self.x > 4300 && self.x < 4310 && self.y < 7555 && self.y > 5690 ){
			self.pressingRight = false; 
		}

		if( self.x > 3440 && self.x < 4320 && self.y < 5720 && self.y > 5705 ){
			self.pressingUp = false; 
			self.pressingDown = false; 
		}



		// world border 
		if( self.y > 7545 ){
			self.pressingDown = false;
		}

		}


	}


	
	Player.list[self.id] = self;
	
	initPack.player.push( self.getInitPack() );
	return self;
}

Player.list = {};


// zonConnect
//

//var myId = 0; 

Player.onConnect = function( socket , username ){

	var className = ''; 

	spawnCoords = getCoords('start'); 

	var player = Player({
		username:username,
		id:socket.id,
		className:className, 
		socket:socket,
		x:spawnCoords.x,
		y:spawnCoords.y, 
	});

	socket.on('keyPress',function(data){

		if(data.inputId === 'left')
			player.pressingLeft = data.state;

		else if(data.inputId === 'right')
			player.pressingRight = data.state;

		else if(data.inputId === 'up')
			player.pressingUp = data.state;

		else if(data.inputId === 'down')
			player.pressingDown = data.state;

		else if(data.inputId === 'attack')
			player.pressingAttack = data.state;

		else if( data.inputId == 'secondary')
			player.pressingSecondaryAttack = data.state; 

		else if(data.inputId === 'mouseAngle')
			player.mouseAngle = data.state;

		else if(data.inputId === '1')
			player.pressing1 = data.state;

		else if(data.inputId === '2')
			player.pressing2 = data.state;

		else if(data.inputId === '3')
			player.pressing3 = data.state;

		else if(data.inputId === '4')
			player.pressing4 = data.state;

		else if(data.inputId === '5')
			player.pressing5 = data.state;

		else if(data.inputId === '6')
			player.pressing6 = data.state;

	});
	

	socket.on('updateClass',function( className ){

		player.className = className; 

		var stats = player.getCoreStats(); 
		player.playerStamina = stats.stamina;
		player.hp = stats.hp;
		player.hpMax = stats.hp;
		player.playerStrength = stats.strength; 
		player.playerIntelligence = stats.intelligence; 
		player.playerDexterity = stats.dexterity; 
		player.energy = stats.energy;
		player.totalEnergy = stats.energy; 

		var stats = player.getCoreStats(); 
		player.playerStamina = stats.stamina;
		player.hp = stats.hp;
		player.hpMax = stats.hp;
		player.playerStrength = stats.strength; 
		player.playerIntelligence = stats.intelligence; 
		player.playerDexterity = stats.dexterity; 
		player.energy = stats.energy;
		player.totalEnergy = stats.energy; 

		zMessage = new sMessage(); 
		zMessage.newMessage("Welcome to mythos, there are currenty 10 players online","#ff0000");

	});
	


	socket.on('sendPmToServer',function(data){ //data:{username,message}
		var recipientSocket = null;
		for(var i in Player.list)
			if(Player.list[i].username === data.username)
				recipientSocket = SOCKET_LIST[i];
		if(recipientSocket === null){
			socket.emit('addToChat','The player ' + data.username + ' is not online.');
		} else {
			recipientSocket.emit('addToChat','From ' + player.username + ':' + data.message);
			socket.emit('addToChat','To ' + data.username + ':' + data.message);
		}
	});
	

	socket.emit('init',{

		selfId:socket.id,
		player:Player.getAllInitPack(),
		enemy:Enemy.getAllInitPack(),

	});


	socket.on('takeDamage',function( selfId ){

		Player.list[selfId].hp = Player.list[selfId].hp - 350; 

	}); 

	socket.on('palaceWall',function( selfId ){

		Player.list[selfId].palaceWall = true;

	}); 

	socket.on('palaceWallEnd',function( selfId ){

		Player.list[selfId].palaceWall = false;

	}); 


	socket.on('respawn',function( selfId ){

		Player.list[selfId].x = 736;
		Player.list[selfId].y = 2756;
		Player.list[selfId].hp = Player.list[selfId].hpMax;
		Player.list[selfId].currentTargetName = "none";
		Player.list[selfId].currentMap = "mythicCity";
		Player.list[selfId].isAlive = 1;

		//Enemy.list = {}; 

		mythicForestActive = false;
		sunPalaceActive = false; 
		orcEncampmentActive = false; 
		hallActive = false; 
		sunkenDepthsActive = false; 
		sunkenDepthsTwoActive = false; 
		frostpeakActive = false; 
		frostpeakBActive = false; 

	
	});


}


Player.getAllInitPack = function(){

	var players = [];

	for(var i in Player.list)
		players.push( Player.list[i].getInitPack() );
	return players;

}


Player.onDisconnect = function(socket){

	delete Player.list[socket.id];
	removePack.player.push(socket.id);

}


Player.update = function(){

	var pack = [];

	for(var i in Player.list){
		var player = Player.list[i];
		player.update();
		pack.push(player.getUpdatePack());
	}

	return pack;

}


getLevelScale = function( playerLevel , scale ){

	var levelScale = 1; 



	if( scale == 11 ){

		if( playerLevel >= 45 ){
			levelScale = 11500; 
		}else if( playerLevel >= 40 ){
			levelScale = 7100; 
		}else if( playerLevel >= 37 ){
			levelScale = 5700; 
		}else if( playerLevel >= 34 ){
			levelScale = 3900; 
		}else if( playerLevel > 31 ){
			levelScale = 2560; 
		}else if( playerLevel > 27 ){
			levelScale = 1520; 
		}else if( playerLevel > 23 ){
			levelScale = 1020; 
		}else if( playerLevel > 19 ){
			levelScale = 800; 
		}else if( playerLevel > 16 ){
			levelScale = 400; 
		}else if( playerLevel > 13 ){
			levelScale = 270; 
		}else if( playerLevel > 9 ){
			levelScale = 150; 
		}else if( playerLevel > 7 ){
			levelScale = 90; 
		}else if( playerLevel > 5 ){
			levelScale = 30; 	
		}else if( playerLevel > 3 ){
			levelScale = 12; 
		}else{
			levelScale = 4; 
		}

	}



	if( scale == 10 ){

		if( playerLevel >= 45 ){
			levelScale = 3500; 
		}else if( playerLevel >= 40 ){
			levelScale = 2100; 
		}else if( playerLevel >= 37 ){
			levelScale = 1700; 
		}else if( playerLevel >= 34 ){
			levelScale = 900; 
		}else if( playerLevel > 31 ){
			levelScale = 560; 
		}else if( playerLevel > 27 ){
			levelScale = 320; 
		}else if( playerLevel > 23 ){
			levelScale = 150; 
		}else if( playerLevel > 19 ){
			levelScale = 100; 
		}else if( playerLevel > 16 ){
			levelScale = 60; 
		}else if( playerLevel > 13 ){
			levelScale = 35; 
		}else if( playerLevel > 9 ){
			levelScale = 22; 
		}else if( playerLevel > 7 ){
			levelScale = 14; 
		}else if( playerLevel > 5 ){
			levelScale = 8; 	
		}else if( playerLevel > 3 ){
			levelScale = 4; 
		}else{
			levelScale = 1; 
		}

	}



	if( scale == 8 ){

		if( playerLevel >= 40 ){
			levelScale = 13; 
		}else if( playerLevel > 35 ){
			levelScale = 8.4; 
		}else if( playerLevel > 30 ){
			levelScale = 6.2; 
		}else if( playerLevel > 25 ){
			levelScale = 3.8; 
		}else if( playerLevel > 20 ){
			levelScale = 2.2; 
		}else if( playerLevel > 15 ){
			levelScale = 1.2; 
		}else if( playerLevel > 10 ){
			levelScale = .6; 
		}else if( playerLevel > 5 ){
			levelScale = .3; 
		}else{
			levelScale = .15; 
		}

	}


	if( scale == 5 ){

		if( playerLevel >= 40 ){
			levelScale  = 46;	
		}else if( playerLevel > 35 ){
			levelScale  = 36;	
		}else if( playerLevel > 30 ){
			levelScale  = 24;	
		}else if( playerLevel > 25 ){
			levelScale  = 14;	
		}else if( playerLevel > 20 ){
			levelScale  = 8;	
		}else if( playerLevel > 15 ){
			levelScale * 5.2;
		}else if( playerLevel > 10 ){
			levelScale = 3.2;
		}else if( playerLevel > 5 ){
			levelScale = 2.2;
		}else{
			levelScale = 1.2;
		}

	}


	return levelScale; 

}












/* 
Bullet = function(param){

	var self = Entity(param);

	self.id = Math.random();
	self.angle = param.angle;
	self.spdX = Math.cos(param.angle/180*Math.PI) * 10;
	self.spdY = Math.sin(param.angle/180*Math.PI) * 10;
	self.parent = param.parent;
	
	self.timer = 0;
	self.toRemove = false;
	var super_update = self.update;

	self.update = function(){

		if(self.timer++ > 100)
			self.toRemove = true;


		//super_update();
		
		/* 
		for(var i in Player.list){
			var p = Player.list[i];


			if(self.getDistance(p) < 32 && self.parent !== p.id){
				p.hp -= 1;
								
				if(p.hp <= 0){
					var shooter = Player.list[self.parent];

					p.hp = p.hpMax;
					p.x = Math.random() * 500;
					p.y = Math.random() * 500;					
				}

				self.toRemove = true;
			}
		}
		


	}


	self.getInitPack = function(){
		return {
			id:self.id,
			x:self.x,
			y:self.y,
		};
	}


	self.getUpdatePack = function(){
		return {
			id:self.id,
			x:self.x,
			y:self.y,		
		};
	}
	

	Bullet.list[self.id] = self;
	initPack.bullet.push(self.getInitPack());
	return self;


}

Bullet.list = {};

Bullet.update = function(){
	var pack = [];
	for(var i in Bullet.list){
		var bullet = Bullet.list[i];
		bullet.update();
		if(bullet.toRemove){
			delete Bullet.list[i];
			removePack.bullet.push(bullet.id);
		} else
			pack.push(bullet.getUpdatePack());		
	}
	return pack;
}


Bullet.getAllInitPack = function(){
	var bullets = [];
	for(var i in Bullet.list)
		bullets.push(Bullet.list[i].getInitPack());
	return bullets;
}
*/ 






getCoords = function( locationName ){

	var location = {};

	if( locationName == 'sunPalaceEntrance' ){
		location.x = 3135;
		location.y = 1370;
	}

	if( locationName == 'shrine' ){
		location.x = 3457;
		location.y = 2090;
	}	

	if( locationName == 'iceentrance' ){
		location.x = 2450;
		location.y = 3730;
	}

	if( locationName == 'mythicA'){
		location.x = 2388;
		location.y = 7096;
	}

	if( locationName == 'mythicB'){
		location.x = 3723;
		location.y = 6142;
	}

	if( locationName == 'mythicC'){
		location.x = 4491;
		location.y = 4660;
	}

	if( locationName == 'sunkenEntrance'){
		location.x = 750; 
		location.y = 1580; 
	}

	if( locationName == 'frostpeak'){
		location.x = 6558; 
		location.y = 7000;
	}

	if( locationName == 'valley1'){
		location.x = 0;
		location.y = 0;
	}

	if( locationName == 'hallStart'){
		location.x = 1270;
		location.y = 860;
	}

	if( locationName == 'valley2'){
		location.x = 0;
		location.y = 0;
	}

	if(locationName == 'sshraEntrance'){
		location.x = 6573;
		location.y = 3505;
	}


	if( locationName == 'mythicCity'){
		location.x = 1248; 
		location.y = 6967; 
	}

	if( locationName == 'kingRaEntrance'){
		location.x = 7125;
		location.y = 1711;
	}

	if( locationName == 'start'){
		location.x = 736;
		location.y = 2606; 
	}

	return location; 

}



Ability = function( params ){

	// default values 
	self = {
		warmup : 0, 
		delay : 0,
		cooldown : 0, 
		energy : 30, 
		tickDamage : 0, 
		hitDistance : 0, 
		chatColor : "#f67272",
	};

	if( params.warmup !== undefined )
		self.warmup = params.warmup; 

	if( params.delay !== undefined )
		self.delay = params.delay; 

	if( params.cooldown !== undefined )
		self.cooldown = params.cooldown; 

	if( params.energy !== undefined )
		self.energy = params.energy; 

	if( params.tickDamage !== undefined )
		self.tickDamage = params.tickDamage; 

	if( params.hitDistance !== undefined )
		self.hitDistance = params.hitDistance;

	if( params.chatColor !== undefined )
		self.chatColor = params.chatColor;  

	return self; 

}





// zgetAbilityInfo
//
getAbilityInfo = function( className , abilityName , playerLevel ){

	ability = {};
	params = {}; 

	zAbility = new Ability( params );

	// Defaults
	ability.warmup = 0; // Casting time warmup
	ability.delay = 55; 
	ability.cooldown = 85;
	ability.energy = 30; 
	ability.tickDamage = 10; 
	ability.hitDistance = 110; 
	ability.chatColor = "#f67272";
	ability.duration = 0; 


	if( abilityName == 'ability1'){


		// Ice bolt
		//
		if( className == 'mage'){
			ability.warmup = 35; // Casting time warmup
			ability.delay = 65; 
			ability.cooldown = 85;
			ability.energy = 30; 
			ability.chatMessage = "casted ice bolt";
			ability.displayName = ""; 
		}


		// Laser blast - Full AoE Lightning Attack
		//
		if( className == 'enchanter'){
			ability.chatMessage = "casted lightning wisk";
			ability.delay = 65; 
			ability.cooldown = 85;
			ability.energy = 30; 
			ability.displayName = ""; 

		}


		// Single player heal  
		//
		if( className == 'healer'){
			ability.chatMessage = "casted heal";
			ability.displayName = ""; 
		}


		// Taunt 
		//
		if( className == 'warrior'){
			ability.delay = 18; 
			ability.cooldown = 325;
			ability.energy = 18; 
			ability.chatMessage = "casted taunt";
			ability.displayName = ""; 
			ability.duration = 60;
		}


		// Wolf Spirit  
		//
		if( className == 'monk'){

			ability.delay = 24; 
			ability.cooldown = 185;
			ability.energy = 10; 
			ability.chatMessage = "casted inner fury";
			ability.displayName = "";
			ability.duration = 100;
			ability.displayName = "wolfSpirit";
			ability.effectImage = "wolfSpirit"; 

		}

	}




	if( abilityName == 'ability2'){ 

		if( className == 'mage'){
			ability.chatMessage = "casted radiant shock";
			ability.delay = 25; 
			ability.cooldown = 125;
			ability.energy = 40; 
			ability.displayName = ""; 
		}

		// Universal Flash - Full AoE Lightning Attack
		if( className == 'enchanter'){
			ability.chatMessage = "casted mez";
		}

		// Resurrect  - Revive a fallin team member 
		if( className == 'healer'){
			ability.chatMessage = "casted revive";
		}


		// Light Overdrive - Large sword swipe
		if( className == 'warrior'){
			ability.delay = 15; 
			ability.cooldown = 480;
			ability.energy = 26; 
			ability.hitDistance = 170;
			ability.tickDamage = 85;  
			ability.chatMessage = "casted sword swipe";
		}


		// Buddha Palm ( single high damage attack ) 
		if( className == 'monk'){
			ability.chatMessage = "casted healing grace";
			ability.duration = 545; 
			ability.displayName = "skyPalm"; 
			ability.cooldown = 1585;
			ability.delay = 325; 

		}

	}


	if( abilityName == 'ability3'){


		// Radiant - Shoot several light disks 
		if( className == 'mage'){
			ability.delay = 140; 
			ability.warmup = 18; // 2 part animation
			ability.cooldown = 40; 
			ability.chatMessage = "casted dire explosion";
			ability.hasAudio = true;
			ability.energy = 30; 
			ability.audioSrc = 'firewoosh.wav';
		}


		// Clarity - Full team HP + Mana boost / regen
		if( className == 'enchanter'){
			ability.delay = 60; 
			ability.warmup = 18; 
			ability.chatMessage = "casted clarity";
		}

		// Resurrect  - Revive a fallin team member 
		if( className == 'healer'){
			ability.chatMessage = "casted resurrect";
		}

		// Light Overdrive - Stun
		if( className == 'warrior'){

			ability.delay = 45; 
			ability.cooldown = 405;
			ability.energy = 35; 

			//ability.tickDamage = 700; 
			ability.hitDistance = 150; 

			ability.chatMessage = "casted light overdrive";


		}

		// Bless - AoE Team heal  
		if( className == 'monk'){

			ability.chatMessage = "casted Mind Explosion";
			ability.delay = 32; 
			ability.cooldown = 475;
			ability.energy = 50; 

			//ability.tickDamage = 10; 
			ability.hitDistance = 250; 
			ability.displayName = "Mind Explosion";

		}

	}


	if( abilityName == 'ability4'){

		// Set class specific setup vars 

		// Firefury - Full AoE FIRESTORM
		if( className == 'mage'){
			ability.delay = 155; 
			ability.warmup = 32; // 2 part animation
			ability.cooldown = 350;
			ability.energy = 30; 
			ability.chatMessage = "casted firefury";
			ability.tickDamage = 500;
			ability.hitDistance = 700; 
		}

		// Universal Flash - Full AoE Lightning Attack
		if( className == 'enchanter'){
			ability.delay = 60; 
			ability.warmup = 18; 
			ability.chatMessage = "casted stasis rage";
		}

		// Compassionate Heart - Full AoE Healing 
		if( className == 'healer'){
			ability.chatMessage = "casted compassionate heart";
		}

		// Warcry - Taunt All + Multi damage attack
		if( className == 'warrior'){

			//ability.chatMessage = "casted warcry";
			//ability.warmup = 32;

			ability.delay = 185; 
			ability.warmup = 32; // 2 part animation
			ability.cooldown = 3850;
			ability.energy = 50; 
			ability.chatMessage = "casted firefury";
			ability.tickDamage = 500;
			ability.hitDistance = 700; 
		}

		// Mystic Mind - Team shield & haste & heal 
		if( className == 'monk'){

			ability.delay = 285; 
			ability.warmup = 32; // 2 part animation
			ability.cooldown = 3400;
			ability.energy = 120; 
			ability.chatMessage = "casted dragons advantage";
			ability.duration = 285;

		}

	}


	if( abilityName == 'ability5'){

		ability.delay = 240; 
		ability.cooldown = 580;

		if( className == 'warrior'){
			ability.delay = 210; 
			ability.cooldown = 360; 
		}

		ability.chatMessage = "used a healing potion";
		ability.chatColor = "#bcffad"; 

	}


	if( abilityName == 'ability6'){

		if( className == 'monk'){
			ability.cooldown = 180;
			ability.delay = 60;
		}else{
			ability.cooldown = 1450;
			ability.delay = 45;	 
		}

		ability.audioSrc = 'windgust.wav';
		ability.chatMessage = "casted speed boost";

	}

	var cDmod = 1; 

	if( playerLevel > 38 ){
		cDmod = .18; 
	}else if( playerLevel > 34 ){
		cDmod = .25; 
	}else if( playerLevel > 29 ){
		cDmod = .4;
	}else if( playerLevel > 24 ){
		cDmod = .51;
	}else if( playerLevel > 19 ){
		cDmod = .6;
	}else if( playerLevel > 14 ){
		cDmod = .72;
	}else if( playerLevel > 9 ){
		cDmod = .8;
	}else if( playerLevel > 5 ){
		cDmod = .93;
	}

	ability.energy = ( ability.energy * ( playerLevel * .8 )); 
	ability.energy = Math.round(ability.energy);

	ability.cooldown = ability.cooldown * cDmod; 

	return ability;

}



getDistance = function( selfX , selfY , thisX , thisY ){

	return Math.sqrt(Math.pow( thisX - selfX , 2 ) + Math.pow( thisY - selfY , 2 ));

}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// zEnemy 
//
Enemy = function( param ){

	var self = Entity( param );

	self.id = Math.random(); 
	self.worthXP = param.xp; 

	self.toRemove = false;
	self.walkActive = true; 
	self.frameCount = 0; 
	self.moveLeft = 0;
	self.moveRight = 0; 
	self.curFrame = 0; 
	self.maxSpd = 1; 

	self.isAggro = false; 
	self.aggroTargetID = 0;
	self.currentTargetHpPercent = 100; 
	self.currentTargetName = param.mobName;
	self.isAlive = 1;
	self.allowKnockback = param.allowKnockback; 

	self.currentMap = param.currentMap;
	self.aggroRange = param.aggroRange;  
	self.aggroPad = param.aggroPad; 
	self.healthPercent = 100; 
	self.totalHp = param.hp; 
	self.hp = param.hp; 
	self.campName = param.camp; 

	self.mobName = param.mobName; 
	self.imageName = param.imageName; 
	self.imageWidth = param.width; 
	self.imageHeight = param.height 
	self.isStationary = param.isStationary;
	self.hasShadow = param.hasShadow; 
	self.waitRemove = false; 
	self.hasLevitate = param.hasLevitate; 
	self.attackResetDuration = 0; 

	self.curLevel = param.curLevel; 
	self.energy = 0; 
	self.spriteAnimCounter = 0;

	self.isStunned = false; 

	self.nameOffY = param.nameOffY; // Y offset for displaying enemy name 
	self.thisImg = param.thisImg; 

	self.startCounter = 0; 

	self.attackSpeed = param.attackSpeed; // rate of melee attacks 
	self.attackRange = param.attackRange; // distance of melee attack 
	self.attackDamage = param.attackDamage;
	self.lastHitAmount = 0;  

	self.initRemove = true; 
	self.iceSpawnA = false; 
	self.iceSpawnB = false; 
	self.iceSpawnC = false; 
	self.iceSpawnD = false; 
	self.questCode = 0; 
	self.initWillowEvent = false; 
	self.initEmperorEvent = false; 
	self.initOrcEvent = false; 

	//self.socket = param.socket; 

	self.sMessage = new sMessage( param.socket ); 

	var super_update = self.update; 


	self.update = function(){

		//if( self.currentMap !== undefined && self.currentMap == Player.list[myId].currentMap ){

			var rand = Math.random(); 

			if( self.isStationary == false ){
				self.walk(); 
			}

			// major walls skip if levitate is on 
			// 
			if( self.hasLevitate == false){
				self.checkForWalls();
			}
			

			allowKnockback = 0; 
			if( allowKnockback ){
				if( self.isStunned == false ){
					//self.performKnockback(); 
				}
			}



			// IceKing Event code 
			//
			if( self.initIceEvent ){

				frostpeakActive = true; 

				if( self.hp < 70000 ){
					if( self.iceSpawnA == false ){
						encampment = new Encampment();
						encampment.startEncampment('frostpeakE');
						self.iceSpawnA = true; 
					}
				}


				if( self.hp < 45000 ){
					if( self.iceSpawnB == false ){
						encampment = new Encampment();
						encampment.startEncampment('frostpeakE');
						self.iceSpawnB = true; 
					}
				}


				if( self.hp < 20000 ){
					if( self.iceSpawnD == false ){
						encampment = new Encampment();
						encampment.startEncampment('frostpeakE');
						self.iceSpawnD = true; 
					}
				}

				if( self.hp < 1 ){
					if(self.questCode == 3 ){
						self.questCode = 0; 
					}
					self.questCode = 3; 
				}


			}



			// Corrupt Emperor event code 
			//
			if( self.gate1Event ){
				if( self.hp < 1 ){
					if( self.questCode == 8 ){
						self.questCode = 0; 
					}
					self.questCode = 8; 
				}
			}

			// Corrupt Emperor event code 
			//
			if( self.gate2Event ){
				if( self.hp < 1 ){
					if( self.questCode == 9 ){
						self.questCode = 0; 
					}
					self.questCode = 9; 
				}
			}

			// Corrupt Emperor event code 
			//
			if( self.gate3Event ){
				if( self.hp < 1 ){
					if( self.questCode == 10 ){
						self.questCode = 0; 
					}
					self.questCode = 10; 
				}
			}

			// Corrupt Emperor event code 
			//
			if( self.gate4Event ){
				if( self.hp < 1 ){
					if( self.questCode == 11 ){
						self.questCode = 0; 
					}
					self.questCode = 11; 
				}
			}



			// Corrupt Emperor event code 
			//
			if( self.initEmperorEvent ){
				if( self.hp < 1 ){
					if( self.questCode == 4 ){
						self.questCode = 0; 
					}
					self.questCode = 4; 
				}
			}

			if( self.initWillowEvent ){

				if( self.hp < 1 ){
					if( self.questCode == 5 ){
						self.questCode = 0; 
					}
					self.questCode = 5;
				}

			}


			// Corrupt Emperor event code 
			//
			if( self.initOrcEvent ){
				if( self.hp < 1 ){
					if( self.questCode == 6 ){
						self.questCode = 0; 
					}
					self.questCode = 6; 
				}
			}


			// Overnen event code 
			//
			if( self.initVoicelessEvent ){
				if( self.hp < 1 ){
					if( self.questCode == 7 ){
						self.questCode = 0; 
					}
					self.questCode = 7; 
				}
			}




			if( self.waitActive ){

				if( self.waitEndFrame < self.curFrame ){

					self.pressingRight = 0;
					self.pressingLeft = 0;
					self.pressingUp = 0;
					self.pressingDown = 0;
					self.waitActive = false; 

				}

			}else if( self.attackAnimationActive ){

				moveAmount = 7; 

				self.moveAngle = self.angleDeg; 

				if( self.attackMidEndFrame > self.curFrame ){

					if( self.moveAngle > 95 && self.moveAngle < 130 ){
						self.y = self.y + moveAmount; 
						self.x = self.x - moveAmount; 
					}else if( self.moveAngle > 65 && self.moveAngle < 95 ){
						self.y = self.y + moveAmount; 
					}else if ( self.moveAngle >= 30 && self.moveAngle <= 65){
						self.y = self.y + moveAmount; 
						self.x = self.x + moveAmount;
					}else if ( self.moveAngle >= -30 && self.moveAngle <= 30){
						self.x = self.x + moveAmount; 
					}else if ( self.moveAngle >= -75 && self.moveAngle <= -30){
						self.y = self.y - moveAmount; 
						self.x = self.x + moveAmount;
					}else if ( self.moveAngle >= -120 && self.moveAngle <= -75){
						self.y = self.y - moveAmount; 
					}else if( self.moveAngle >= -120 ){
						self.x = self.x - moveAmount; 
					}else{
						self.x = self.x - moveAmount;
						self.y = self.y - moveAmount; 
					}

				}else if( self.attackEndFrame > self.curFrame ){

					if( self.moveAngle > 95 && self.moveAngle < 130 ){
						self.y = self.y - moveAmount; 
						self.x = self.x + moveAmount; 
					}else if( self.moveAngle > 65 && self.moveAngle < 95 ){
						self.y = self.y - moveAmount; 
					}else if ( self.moveAngle >= 30 && self.moveAngle <= 65){
						self.y = self.y - moveAmount; 
						self.x = self.x - moveAmount;
					}else if ( self.moveAngle >= -30 && self.moveAngle <= 30){
						self.x = self.x - moveAmount; 
					}else if ( self.moveAngle >= -75 && self.moveAngle <= -30){
						self.y = self.y + moveAmount; 
						self.x = self.x - moveAmount;
					}else if ( self.moveAngle >= -120 && self.moveAngle <= -75){
						self.y = self.y + moveAmount; 
					}else if( self.moveAngle >= -120 ){
						self.x = self.x + moveAmount; 
					}else{
						self.x = self.x + moveAmount;
						self.y = self.y + moveAmount; 
					}

				}else{

					self.attackAnimationActive = false; 

				}

			}

			if( self.waitActive != true ){
				self.updateSpd();
			}

			super_update();

			self.spriteAnimCounter += 0.2;


			if( self.hp <= 0){
				self.healthPercent = 0; 
				self.hp = 0; 

			}else{
				self.healthPercent = Math.round( ( self.hp / self.totalHp ) * 100 ); 
			}

			//self.updateAim();

			self.hp = Math.round( self.hp ); 

			if( self.isStunned || self.isAlive == 2 ){

				self.pressingRight = 0;
				self.pressingLeft = 0;
				self.pressingUp = 0;
				self.pressingDown = 0;

			}else{

				self.performAttack();
				self.updateKeyPress();

			}

			self.frameCount++; 
			self.curFrame++; 


			if( self.campName !== undefined ){
				if( self.isAggro == false ){
					self.checkCampLimits( );
				} 
			}




			// Handle the death transition process 
			//
			if( self.waitRemove ){

				if( self.initRemove == true ){
					self.initRemove = false; 
					var addto = "'s corpse"; 
					if( self.mobName !== undefined ){
						self.mobName = self.mobName.concat( addto );
					}
					self.endCounter = self.spriteAnimCounter + 3;
				}

				for(var i in Player.list){
					Player.list[i].currentTargetName = "none";
				}

				self.healthPercent = 0; 
				self.hp = 0;
				self.waitRemove = true; 
				self.isAlive = 2;

				if( self.spriteAnimCounter > self.endCounter){
					self.waitRemove = false; 
					self.isAlive = 0;
					self.toRemove = true;
				}else{
					self.isAlive = 2; 
					 // 2 signifies removing process 
				}


			}else if(self.hp <= 0 && self.waitRemove == false ){

				self.onDeath();	

			}else if(self.hp > 0 ){

			}else{

				self.onDeath();	

			}



	}


	self.getInitPack = function(){

		return {
			id:self.id,
			x:self.x,
			y:self.y,
			curFrame:self.curFrame,
			imageName:self.imageName,
			currentMap:self.currentMap,
			imageWidth:self.imageWidth,
			imageHeight:self.imageHeight,
			mobName:self.mobName, 
			nameOffY:self.nameOffY, 
			hasShadow:self.hasShadow, 
			hasLevitate:self.hasLevitate,
		};

	}


	self.getUpdatePack = function(){

		return {
			id:self.id,
			x:self.x,
			y:self.y,	
			curFrame:self.curFrame, 	
			currentMap:self.currentMap, 
			pressingRight:self.pressingRight,
			pressingLeft:self.pressingLeft,
			pressingUp:self.pressingUp,
			pressingDown:self.pressingDown,
			spriteAnimCounter:self.spriteAnimCounter,
			healthPercent:self.healthPercent,
			isStunned:self.isStunned, 
			isAlive:self.isAlive, 
			lastHitAmount:self.lastHitAmount, 
			lastHitColor:self.lastHitColor, 
			itemCode:self.itemCode,
			questCode:self.questCode,  
		};

	}




	self.initMoveBack = function( amount , angle ){

		self.moveBackActive = true;

		self.moveBackFrameEnd = self.curFrame; 

		self.moveBackDrawEnd = self.curFrame + 20; 

		self.moveBackDrawActive = true; 

		self.moveAngle = angle; 

	}


	self.performKnockback = function(){


		moveAmount = 1; 

		if( self.moveAngle > 95 && self.moveAngle < 130 ){
			self.y = self.y + moveAmount; 
			self.x = self.x - moveAmount; 
		}else if( self.moveAngle > 65 && self.moveAngle < 95 ){
			self.y = self.y + moveAmount; 
		}else if ( self.moveAngle >= 30 && self.moveAngle <= 65){
			self.y = self.y + moveAmount; 
			self.x = self.x + moveAmount;
		}else if ( self.moveAngle >= -30 && self.moveAngle <= 30){
			self.x = self.x + moveAmount; 
		}else if ( self.moveAngle >= -75 && self.moveAngle <= -30){
			self.y = self.y - moveAmount; 
			self.x = self.x + moveAmount;
		}else if ( self.moveAngle >= -120 && self.moveAngle <= -75){
			self.y = self.y - moveAmount; 
		}else if( self.moveAngle >= -120 ){
			self.x = self.x - 9; 
		}else{
			self.x = self.x - moveAmount;
			self.y = self.y - moveAmount; 
		}


		if( self.moveBackFrameEnd < self.curFrame ){
			self.moveBackActive = false; 
			self.waitActive = true; 
			self.waitEndFrame = self.curFrame + 6; //frames to wait before aggroing again 
		}



		if( self.moveBackDrawEnd > self.curFrame ){

			self.moveBackDrawActive = false; 
			self.waitActive = true; 
			self.waitEndFrame = self.curFrame + 6; //frames to wait before aggroing again 
		}

		self.pressingRight = 0;
		self.pressingLeft = 0;
		self.pressingUp = 0;
		self.pressingDown = 0;


	}




	self.checkCampLimits = function(){

			/* 
			if( self.campName == 'mythicA'){
				self.innerWallCheck( 600 , 1970 , 3080 , 3830 ); 
			}

			if( self.campName == 'mythicB'){
				self.innerWallCheck( 600 , 1910 , 2000 , 2830 ); 
			}

			if( self.campName == 'mythicC'){
				//self.innerWallCheck( 4000 , 5040 , 4000 , 5190 ); 
			}

			if( self.campName == 'orcA'){
				//self.innerWallCheck( 3150 , 4700 , 2750 , 3650 ); 
			}

			if( self.campName == 'orcB'){
				//self.innerWallCheck( 3150 , 4700 , 1750 , 2700 ); 
			}

			if( self.campName == 'frostpeakA'){
				//self.innerWallCheck( 4500 , 6480 , 6200 , 7470 ); 
			}

			if( self.campName == 'frostpeakB'){
				//self.innerWallCheck( 6100 , 7540 , 6200 , 7470 ); 
			}

			if( self.campName == 'frostpeakC'){
				//self.innerWallCheck( 6100 , 7540 , 6200 , 7470 ); 
			}

			if( self.campName == 'valley1'){
				//self.innerWallCheck( 4950 , 5610 , 590 , 2000 ); 
			}

			if( self.campName == 'valley2'){
				//self.innerWallCheck( 4950 , 5610 , 1700 , 3200 ); 
			}

			if( self.campName == 'sunPalace'){
				//self.innerWallCheck( 6200 , 7550 , 4500 , 5520 ); 
			}

			if( self.campName == 'shrine'){
				//self.innerWallCheck( 700 , 1300 , 2000 , 3000 ); 
			}

			if( self.campName == 'sunken1'){
				//self.innerWallCheck( 700 , 1450 , 550 , 1500 ); 
			}

			if( self.campName == 'sunken2'){
				//self.innerWallCheck( 1300 , 2100 , 1250 , 3300 ); 
			}

			if( self.campName == 'sunken3'){
				//self.innerWallCheck( 1300 , 2100 , 2600 , 6200 ); 
			}

			if( self.campName == 'sunPalaceA'){
				//self.innerWallCheck( 700 , 2300 , 4000 , 5150 ); 
			}

			if( self.campName == 'sunPalaceB'){
				//self.innerWallCheck( 1200 , 2850 , 2200 , 3700 ); 
			}
			*/ 


	}
	

	self.walk = function(){

		if( self.walkActive = true ){

			if( self.frameCount % 50 == 1 ){

				var directionRand = Math.random(); 

				if( directionRand >= .75 ){

					self.moveRight = true;
					self.moveLeft = false;
					self.moveUp = false;
					self.moveDown = false;

				}else if( directionRand >= .5 ){

					self.moveRight = false;
					self.moveLeft = true;
					self.moveUp = false;
					self.moveDown = false;

				}else if( directionRand >= .25 ){

					self.moveRight = false;
					self.moveLeft = false;
					self.moveUp = true;
					self.moveDown = false;

				}else{

					self.moveRight = false;
					self.moveLeft = false;
					self.moveUp = false;
					self.moveDown = true;

				}

			}

		}


	}



	self.checkCampLimit = function(){

		if( self.x < 670 ){
			self.moveLeft = false; 
		}
		if( self.y > 3800 ){
			self.moveDown = false; 
		}
		if( self.x > 1620 ){
			self.moveRight = false;
		}
		if( self.y < 622 ){
			self.moveUp = false; 
		}

	}



	self.performAttack = function(){


		if( self.frameCount % self.attackSpeed == 1 ){

			for( var key2 in Player.list ){

				var player = {}; 
				var distance = 0; 

				player.y = Player.list[key2].y;
				player.x = Player.list[key2].x;
				playerName = Player.list[key2].username;

				enemy = {}; 

				enemy.x = self.x; 
				enemy.y = self.y;

				distance = getDistance( player.x , player.y , enemy.x , enemy.y );						

				if( distance < self.attackRange && Player.list[key2].isAlive == 1 && Player.list[key2].currentMap == self.currentMap ){


					if( self.mobName == 'Ice King'){
						self.initIceEvent = true; 
					}

					if( self.mobName == 'The Corrupted Emperor'){
						self.initEmperorEvent = true; 
					}

					if( self.mobName == 'Willow Wisp'){
						self.initWillowEvent = true; 
					}

					if( self.mobName == 'The Orc King'){
						self.initOrcEvent = true; 
					}

					if( self.mobName == 'Ovrenen, The Voiceless'){
						self.initVoicelessEvent = true; 
					}


					attackVariant  = ( self.attackDamage * .3 ) * Math.random(); 

					if( Math.random() > .5 ){
						attackAmount = self.attackDamage + attackVariant; 
					}else{
						attackAmount = self.attackDamage - attackVariant; 
					}

					attackAmount = Math.round( attackAmount );

					Player.list[key2].takeDamage( attackAmount ); 

					var p1 = {
						x: self.x,
						y: self.y,
					};

					var p2 = {
						x: Player.list[key2].x,
						y: Player.list[key2].y,
					};

					// angle in degrees
					//
					var angleDeg = Math.atan2( p2.y - p1.y , p2.x - p1.x ) * 180 / Math.PI;
					moveback = true; 

					Player.list[key2].initMoveBack( 180 , angleDeg );

					if( self.attackResetDuration < self.curFrame ){
						self.initAttackMove( angleDeg );
					}

					Player.list[key2].lastHitAmount = attackAmount;  

					self.sMessage.newMessage( self.mobName + ' attacked ' + playerName + ' for ' + attackAmount + " damage" , '#fedf9b'); 

				}else{

				}



			}

		}

	}



	self.initAttackMove = function( angleDeg ){

		self.attackEndFrame = self.curFrame + 12; 
		self.attackMidEndFrame = self.curFrame + 6; 
		self.attackAnimationActive = true; 
		self.angleDeg = angleDeg; 

		self.attackResetDuration = self.curFrame + 26; 


	}



	// For enemies who have a distance attack 
	//
	self.updateAim = function(){

		/* 
		var diffX = 400;
		var diffY = 300;

		self.aimAngle = Math.atan2(diffY,diffX) / Math.PI * 180\
		*/

	}



	self.updateKeyPress = function(){


		if( self.isAggro == false ){

			if( self.moveRight ){

				self.pressingRight = 1;
				self.pressingLeft = 0;
				self.pressingUp = 0;
				self.pressingDown = 0;

			}else if( self.moveLeft ){

				self.pressingRight = 0;
				self.pressingLeft = 1;
				self.pressingUp = 0;
				self.pressingDown = 0;

			}else if( self.moveUp ){

				self.pressingRight = 0;
				self.pressingLeft = 0;
				self.pressingUp = 1;
				self.pressingDown = 0;

			}else if( self.moveDown ){

				self.pressingRight = 0;
				self.pressingLeft = 0;
				self.pressingUp = 0;
				self.pressingDown = 1;

			}

		} 



		for(var i in Player.list){

			var player = Player.list[i];
			var diffX = player.x - self.x;
			var diffY = player.y - self.y;
			var distTo = Math.sqrt( diffX * diffX + diffY * diffY );

			if( distTo < self.aggroRange  ){

				self.moveLeft = 0;
				self.moveRight = 0; 
				self.maxSpd = 11; // Engage speed 

				self.pressingRight = diffX > self.aggroPad;
				self.pressingLeft = diffX < -self.aggroPad;
				self.pressingDown = diffY > self.aggroPad;
				self.pressingUp = diffY < -self.aggroPad;	
				self.isAggro = true;

				self.aggroStart = self.curFrame + 100; 

			}else if( self.aggroStart < self.curFrame ){

				self.maxSpd = 2; 
				self.isAggro = false; 

			}
	
		}




		if( self.aggroTargetID != 0 ){

			if( Player.list[self.aggroTargetID] !== undefined ){
				var player = Player.list[self.aggroTargetID];

				var diffX = player.x - self.x;
				var diffY = player.y - self.y;
				var distTo = Math.sqrt( diffX * diffX + diffY * diffY );

				self.moveLeft = 0;
				self.moveRight = 0; 
				self.maxSpd = 11; // Engage speed 

				self.pressingRight = diffX > self.aggroPad;
				self.pressingLeft = diffX < -self.aggroPad;
				self.pressingDown = diffY > self.aggroPad;
				self.pressingUp = diffY < -self.aggroPad;	
				self.isAggro = true;

				if( self.aggroTargetStart > self.curFrame ){

				}else{

					self.maxSpd = 2; 
					self.aggroTargetID = 0; 
					self.isAggro = false; 

				}
			}

	
		}





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


	
	self.onDeath = function(){

		if( self.initRemove == true ){

			self.isAlive = 2; 


			// Only give XP if in distance 

			for(var i in Player.list){

				distance = getDistance( Player.list[i].x , Player.list[i].y , self.x , self.y );

				//console.log( Player.list[i].username + "ok" + distance );

				if( distance < 600 && Player.list[i].currentMap == self.currentMap ){

					Player.list[i].updateXP( self.worthXP , self.mobName , self.x , self.y , self.id );
					Player.list[i].currentTargetName = "none";
					Player.list[i].soundEffect = 'cash';
					Player.list[i].updateMoney( self.mobName , self.curLevel );

				} 


			}

			/* 
			self.itemCode = 'longSword';
			if( self.imageName == 'iceking'){
				//self.socket.emit( "completeQuest" , 1 ); 
			}
			*/ 

		}

		self.waitRemove = true; 

	}


	
	Enemy.list[self.id] = self;

	initPack.enemy.push( self.getInitPack() );

	return self;


}



Enemy.list = {};



Enemy.areaDamageAttack = function( params ){		// Anim finished 

	var enemy = {};

	for(var key in Enemy.list){

		enemy.y = Enemy.list[key].y;
		enemy.x = Enemy.list[key].x;

		distance = getDistance( params.selfX , params.selfY , enemy.x , enemy.y );

		if( distance < params.hitDistance ){
			Enemy.list[key].hp = Enemy.list[key].hp - params.damage;
		}else{

		}

	}

}

var globalKillCount = 0; 




spawnEntities = function(){


}



checkWave = function(){


	//if( self.currentMap == 'lavapit'){

		/* 

		if( globalKillCount == 5 ){
			Enemy.startWave( 2 , 'lavapit' ); 
		}

		if( globalKillCount == 10 ){
			Enemy.startWave( 3 , 'lavapit' ); 
		}

		if( globalKillCount == 17 ){
			Enemy.startWave( 4 , 'lavapit' ); 
		}

		if( globalKillCount == 23 ){
			Enemy.startWave( 5 , 'lavapit' ); 
		}

		if( globalKillCount == 27 ){
			Enemy.startWave( 6 , 'lavapit' ); 
		}

		if( globalKillCount == 31 ){
			Enemy.startWave( 7 , 'lavapit' ); 
		}

		if( globalKillCount == 33 ){
			Enemy.startWave( 8 , 'lavapit' ); 
		}

		*/ 

	//}

}




var Encampment = function( params ){

	var self = {};

	self.mythicASpawnAmount = 5; 
	self.mythicBSpawnAmount = 7; 
	self.mythicCSpawnAmount = 8; 
	self.frostpeakASpawnAmount = 6; 
	self.frostpeakBSpawnAmount = 5; 
	self.frostpeakCSpawnAmount = 9; 
	self.frostpeakDSpawnAmount = 1; 
	self.orcASpawnAmount = 6; 
	self.orcBSpawnAmount = 6; 
	self.orcCSpawnAmount = 1; 
	self.orcDSpawnAmount = 6; 
	self.orcESpawnAmount = 1; 
	self.sshraASpawnAmount = 1; 
	self.sshraBSpawnAmount = 1;
	self.sunPalaceSpawnAmount = 1; 
	self.sunPalaceASpawnAmount = 6; 
	self.sunPalaceBSpawnAmount = 9; 
	self.sunPalaceCSpawnAmount = 1;

	self.hallASpawnAmount = 5; 
	self.hallBSpawnAmount = 6; 
	self.hallCSpawnAmount = 5; 

	self.valley1SpawnAmount = 1; 
	self.valley2SpawnAmount = 1;  

	self.sunken1SpawnAmount = 4; 
	self.sunken2SpawnAmount = 8; 
	self.sunken3SpawnAmount = 1; 

	self.sunken4SpawnAmount = 1; 
	self.sunken5SpawnAmount = 1; 
	self.sunken6SpawnAmount = 1; 
	self.sunken7SpawnAmount = 1; 
	self.sunken8SpawnAmount = 1; 


	self.locations = [
		'mythicA','mythicB','mythicC','frostpeakA','frostpeakB','frostpeakC','orcA','orcB','orcC','orcD','orcE','sshraA','sshraB','sunPalace','sunPalaceA','sunPalaceB','sunPalaceC','hallA','hallB','hallC','valley1','valley2','sunken1','sunken2','sunken3'
	]


	self.startEvent = function( eventName ){

		if( eventName == 'frostpeakb'){
			self.frostpeakbEventActive = true; 
		}


	}


	self.checkCamp = function( campName ){


		if( campName == 'mythicA'){

			if( self.mythicASpawnAmount < 6 && mythicForestActive ){
				var spawnDelay = Math.random() * 17000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'mythicA' ); 
				 	console.log('spawn Myth A' + self.mythicASpawnAmount );
				}, thisSpawnDelay );
			}

		}


		if( campName == 'mythicB'){
			if( self.mythicBSpawnAmount < 8 && mythicForestActive ){
				var spawnDelay = Math.random() * 17000;
				thisSpawnDelay = spawnDelay + 12000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'mythicB' ); 
				 	console.log('spawn Myth B ' + self.mythicBSpawnAmount );
				}, thisSpawnDelay );
			}
		}


		if( campName == 'mythicC'){
			if( self.mythicCSpawnAmount < 8 && mythicForestActive ){
				var spawnDelay = Math.random() * 70000;
				thisSpawnDelay = spawnDelay + 15000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'mythicC' ); 
				 	console.log('spawn Myth C ' + self.mythicCSpawnAmount );
				}, thisSpawnDelay );
			}
		}


		if( campName == 'frostpeakA' && frostpeakActive ){

			if( self.frostpeakASpawnAmount < 6 && frostpeakActive ){
				var spawnDelay = Math.random() * 30000;
				thisSpawnDelay = spawnDelay + 25000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'frostpeakA' ); 
				 	console.log('spawn Frostpeak A');
				}, thisSpawnDelay );
			}

		}


		if( campName == 'frostpeakB' && frostpeakActive ){

			if( self.frostpeakBSpawnAmount < 5 && frostpeakActive ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 25000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'frostpeakB' ); 
				 	console.log('spawn Frostpeak B');
				}, thisSpawnDelay );
			}

		}


		if( campName == 'frostpeakC' && frostpeakActive ){

			if( self.frostpeakCSpawnAmount < 9 && frostpeakActive ){
				var spawnDelay = Math.random() * 20000;
				thisSpawnDelay = spawnDelay + 25000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'frostpeakC' ); 
				 	console.log('spawn Frostpeak C');
				}, thisSpawnDelay );
			}

		}


		if( campName == 'frostpeakD' && frostpeakBActive ){

			if( self.frostpeakDSpawnAmount < 1 && frostpeakBActive ){
				var spawnDelay = Math.random() * 120000;
				thisSpawnDelay = spawnDelay + 25000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'frostpeak D' ); 
				 	console.log('spawn Frostpeak D');
				}, thisSpawnDelay );
			}

		}


		if( campName == 'orcA' && orcEncampmentActive ){
			if( self.orcASpawnAmount < 6 && orcEncampmentActive ){
				var spawnDelay = Math.random() * 130000;
				thisSpawnDelay = spawnDelay + 50000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'orcA'  ); 
				 	console.log('spawn OrcA');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'orcB' && orcEncampmentActive ){
			if( self.orcBSpawnAmount < 6 && orcEncampmentActive ){
				var spawnDelay = Math.random() * 130000;
				thisSpawnDelay = spawnDelay + 50000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'orcB' ); 
				 	console.log('spawn OrcB');
				}, thisSpawnDelay );
			}
		}	


		if( campName == 'orcC' && orcEncampmentActive ){
			if( self.orcCSpawnAmount < 1 && orcEncampmentActive ){

				var spawnDelay = Math.random() * 500000;
				thisSpawnDelay = spawnDelay + 50000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'orcC'  ); 
				 	console.log('spawn orcC');
				}, thisSpawnDelay );

			}
		}


		if( campName == 'orcD' && orcEncampmentActive ){
			if( self.orcDSpawnAmount < 5 && orcEncampmentActive ){

				var spawnDelay = Math.random() * 130000;
				thisSpawnDelay = spawnDelay + 50000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'orcD'  ); 
				 	console.log('spawn orcD');
				}, thisSpawnDelay );

			}
		}


		if( campName == 'orcE' && orcEncampmentActive ){
			if( self.orcESpawnAmount < 1 && orcEncampmentActive ){

				var spawnDelay = Math.random() * 1100000;
				thisSpawnDelay = spawnDelay + 50000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'orcE'  ); 
				 	console.log('spawn orcE');
				}, thisSpawnDelay );

			}
		}


		if( campName == 'sunken2' && sunkenDepthsActive ){
			if( self.sunken2SpawnAmount < 8 && sunkenDepthsActive ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunken2'  ); 
				 	console.log('sunken 2 spawn');
				}, thisSpawnDelay );
			}
		}

		if( campName == 'sunken3' && sunkenDepthsActive ){
			if( self.sunken3SpawnAmount < 4 && sunkenDepthsActive ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunken3'  ); 
				 	console.log('sunken 3 spawn');
				}, thisSpawnDelay );
			}
		}


		// Tiv 
		if( campName == 'sunken4' && sunkenDepthsActive ){
			if( self.sunken4SpawnAmount < 4 && sunkenDepthsActive ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunken4'  ); 
				 	console.log('sunken 4 spawn');
				}, thisSpawnDelay );
			}
		}


		// 4 gatekeepers 
		if( campName == 'sunken5' && sunkenDepthsActive ){
			if( self.sunken5SpawnAmount < 1 && sunkenDepthsActive ){
				var spawnDelay = Math.random() * 150000;
				thisSpawnDelay = spawnDelay + 105000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunken5'  ); 
				 	console.log('sunken 5 spawn');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'sunken6' && sunkenDepthsActive ){
			if( self.sunken6SpawnAmount < 1 && sunkenDepthsActive ){
				var spawnDelay = Math.random() * 150000;
				thisSpawnDelay = spawnDelay + 105000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunken6'  ); 
				 	console.log('sunken 6 spawn');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'sunken7' && sunkenDepthsActive ){
			if( self.sunken7SpawnAmount < 1 && sunkenDepthsActive ){
				var spawnDelay = Math.random() * 150000;
				thisSpawnDelay = spawnDelay + 105000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunken7'  ); 
				 	console.log('sunken 7 spawn');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'sunken8' && sunkenDepthsActive ){
			if( self.sunken8SpawnAmount < 1 && sunkenDepthsActive ){
				var spawnDelay = Math.random() * 150000;
				thisSpawnDelay = spawnDelay + 105000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunken8' ); 
				 	console.log('sunken 8 spawn');
				}, thisSpawnDelay );
			}
		}




		if( campName == 'sshraA'){
			if( self.sshraASpawnAmount < 1 ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sshraA' ); 
				 	console.log('spawn sshraA');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'sshraB'){
			if( self.sshraBSpawnAmount < 1 ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sshraB'  ); 
				 	console.log('spawn sshraB');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'valley'){
			if( self.valleySpawnAmount < 4 ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'valley' ); 
				 	console.log('spawn valley');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'valley1'){
			if( self.valley1SpawnAmount < 4 ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'valley1' ); 
				 	console.log('spawn valley1');
				}, thisSpawnDelay );
			}
		}

		if( campName == 'valley2'){
			if( self.valley2SpawnAmount < 4 ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 5000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'valley2' ); 
				 	console.log('spawn valley2');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'hallA'){
			if( self.hallASpawnAmount < 5 ){
				var spawnDelay = Math.random() * 60000;
				thisSpawnDelay = spawnDelay + 15000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'hallA' ); 
				 	console.log('spawn hallA');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'hallB'){
			if( self.hallBSpawnAmount < 6 ){
				var spawnDelay = Math.random() * 80000;
				thisSpawnDelay = spawnDelay + 25000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'hallB' ); 
				 	console.log('spawn hallB');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'hallC'){
			if( self.hallCSpawnAmount < 5 ){
				var spawnDelay = Math.random() * 70000;
				thisSpawnDelay = spawnDelay + 25000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'hallC' ); 
				 	console.log('spawn hallC');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'sunPalace'){

			if( self.sunPalaceSpawnAmount < 4 ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 45000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunPalace' ); 
				 	console.log('spawn sun palace');
				}, thisSpawnDelay );
			}

		}

		if( campName == 'sunPalaceA'){
			if( self.sunPalaceASpawnAmount < 7 ){
				var spawnDelay = Math.random() * 35000;
				thisSpawnDelay = spawnDelay + 45000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunPalaceA' ); 
				 	console.log('spawn sun palace a ');
				}, thisSpawnDelay );
			}

		}

		if( campName == 'sunPalaceB'){
			if( self.sunPalaceBSpawnAmount < 9 ){
				var spawnDelay = Math.random() * 60000;
				thisSpawnDelay = spawnDelay + 45000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunPalaceB' ); 
				 	console.log('spawn sun palace b ');
				}, thisSpawnDelay );
			}
		}


		if( campName == 'sunPalaceC'){
			if( self.sunPalaceCSpawnAmount < 4 ){
				var spawnDelay = Math.random() * 50000;
				thisSpawnDelay = spawnDelay + 45000;  
				setTimeout(function() {
				 	self.initCampSpawn( 'sunPalaceC' ); 
				 	console.log('spawn sun palace c ');
				}, thisSpawnDelay );
			}
		}



	}

	self.initCampSpawn = function( campName ){
		self.campSpawn( campName , true ); 

	}


	self.campSpawn = function( campName , addToCount = true ){


		if( campName == 'mythicA'){

			// ensure spawn is still active 
			//
			if( mythicForestActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .7 ){

					var enemyInfo = Enemy.getEnemyInfo( 'redbat' );

					randX = Math.random() * 1000;
					randY = Math.random() * 1105; 

					enemyInfo.x = 1120 + randX; 
					enemyInfo.y = 2915 + randY;

					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					var enemyInfo = Enemy.getEnemyInfo( 'smallBat' );

					randX = Math.random() * 1000;
					randY = Math.random() * 1105; 

					enemyInfo.x = 1120 + randX; 
					enemyInfo.y = 2915 + randY;

					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}

				if( addToCount ){
					self.mythicASpawnAmount = self.mythicASpawnAmount + 1; 
				}

			}

		}




		if( campName == 'mythicB'){

			if( mythicForestActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .8 ){

					var enemyInfo = Enemy.getEnemyInfo( 'pinkBat' );
					randX = Math.random() * 1500;
					randY = Math.random() * 1250;    
					enemyInfo.x = 550 + randX; 
					enemyInfo.y = 1565 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else if( enemyRand > .6 ){

					var enemyInfo = Enemy.getEnemyInfo( 'goldBat' );
					randX = Math.random() * 1500;
					randY = Math.random() * 1250;    
					enemyInfo.x = 550 + randX; 
					enemyInfo.y = 1565 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else if( enemyRand > .3 ){

					var enemyInfo = Enemy.getEnemyInfo( 'wombat' );
					randX = Math.random() * 1500;
					randY = Math.random() * 1250;    
					enemyInfo.x = 550 + randX 
					enemyInfo.y = 1565 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					var enemyInfo = Enemy.getEnemyInfo( 'swampDweller' );
					randX = Math.random() * 1650;
					randY = Math.random() * 1250;    
					enemyInfo.x = 550 + randX; 
					enemyInfo.y = 1565 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}

				if( addToCount ){
					self.mythicBSpawnAmount = self.mythicBSpawnAmount + 1;
				} 

			}

		}




		if( campName == 'mythicC'){

			if( mythicForestActive ){

				enemyRand = Math.random(); 


				if( enemyRand > .999 ){

					var enemyInfo = Enemy.getEnemyInfo( 'willow' );
					randX = Math.random() * 1350;
					randY = Math.random() * 1250;    
					enemyInfo.x = 1800 + randX; 
					enemyInfo.y = 840 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else if( enemyRand > .66 ){

					var enemyInfo = Enemy.getEnemyInfo( 'skeleton' );
					randX = Math.random() * 1350;
					randY = Math.random() * 1250;    
					enemyInfo.x = 1800 + randX; 
					enemyInfo.y = 840 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else if( enemyRand > .45 ){

					var enemyInfo = Enemy.getEnemyInfo( 'scropion' );
					randX = Math.random() * 1350;
					randY = Math.random() * 1250;    
					enemyInfo.x = 1800 + randX; 
					enemyInfo.y = 840 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{ 

					var enemyInfo = Enemy.getEnemyInfo( 'iceskeleton' );
					randX = Math.random() * 1350;
					randY = Math.random() * 1250;    
					enemyInfo.x = 1800 + randX; 
					enemyInfo.y = 840 + randY;
					enemyInfo.currentMap = 'mythicForest';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}

				if( addToCount ){
					self.mythicCSpawnAmount = self.mythicCSpawnAmount + 1;
				} 

			}

		}




		if( campName == 'frostpeakA'){

			if( frostpeakActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .5 ){

					var enemyInfo = Enemy.getEnemyInfo( 'frostRider' );
					randX = Math.random() * 1900;
					randY = Math.random() * 1400;    
					enemyInfo.x = 750 + randX; 
					enemyInfo.y = 2350 + randY;
					enemyInfo.currentMap = 'frostpeak';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					var enemyInfo = Enemy.getEnemyInfo( 'frostskele' );
					randX = Math.random() * 1900;
					randY = Math.random() * 1400;    
					enemyInfo.x = 750 + randX; 
					enemyInfo.y = 2350 + randY;
					enemyInfo.currentMap = 'frostpeak';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}

				if( addToCount ){
					self.frostpeakASpawnAmount = self.frostpeakASpawnAmount + 1; 
				}

			}


		}



		if( campName == 'frostpeakB'){

			if( frostpeakActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .85 ){

					var enemyInfo = Enemy.getEnemyInfo( 'dragonSmallIce' );
					randX = Math.random() * 1000;
					randY = Math.random() * 1300;    
					enemyInfo.x = 2200 + randX; 
					enemyInfo.y = 2500 + randY;
					enemyInfo.currentMap = 'frostpeak';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else if( enemyRand > .5 ){

					var enemyInfo = Enemy.getEnemyInfo( 'frostBat' );
					randX = Math.random() * 1000;
					randY = Math.random() * 1300;    
					enemyInfo.x = 2200 + randX; 
					enemyInfo.y = 2500 + randY;
					enemyInfo.currentMap = 'frostpeak';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					var enemyInfo = Enemy.getEnemyInfo( 'frostDweller' );
					randX = Math.random() * 1000;
					randY = Math.random() * 1300;    
					enemyInfo.x = 2200 + randX; 
					enemyInfo.y = 2500 + randY;
					enemyInfo.currentMap = 'frostpeak';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}


				if( addToCount ){
					self.frostpeakBSpawnAmount = self.frostpeakBSpawnAmount + 1; 
				}

			}

		}




		if( campName == 'frostpeakC'){

			if( frostpeakActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .5 ){

					var enemyInfo = Enemy.getEnemyInfo( 'iceghost' );
					randX = Math.random() * 1000;
					randY = Math.random() * 2100;    
					enemyInfo.x = 650 + randX; 
					enemyInfo.y = 1080 + randY;
					enemyInfo.currentMap = 'frostpeak';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					var enemyInfo = Enemy.getEnemyInfo( 'iceghost' );
					randX = Math.random() * 1000;
					randY = Math.random() * 2100;    
					enemyInfo.x = 650 + randX; 
					enemyInfo.y = 1080 + randY;
					enemyInfo.currentMap = 'frostpeak';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}


				if( addToCount ){
					self.frostpeakCSpawnAmount = self.frostpeakCSpawnAmount + 1; 
				}

			}

		}




		if( campName == 'frostpeakD'){

			//if( frostpeakBActive ){

				var enemyInfo = Enemy.getEnemyInfo( 'iceking' );
			
				enemyInfo.x = 1040; 
				enemyInfo.y = 1840;
				enemyInfo.currentMap = 'frostpeakb';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

				if( addToCount ){
					self.frostpeakDSpawnAmount = self.frostpeakDSpawnAmount + 1; 
				}

			//}

		}



		if( campName == 'frostpeakE'){

			var enemyInfo = Enemy.getEnemyInfo( 'iceghostb' ); 
			enemyInfo.x = 770; 
			enemyInfo.y = 1250;
			enemyInfo.currentMap = 'frostpeakb';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );

			var enemyInfo = Enemy.getEnemyInfo( 'iceghostb' ); 
			enemyInfo.x = 1380; 
			enemyInfo.y = 1250;
			enemyInfo.currentMap = 'frostpeakb';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );

			var enemyInfo = Enemy.getEnemyInfo( 'iceghostb' ); 
			enemyInfo.x = 1380; 
			enemyInfo.y = 1650;
			enemyInfo.currentMap = 'frostpeakb';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );

			var enemyInfo = Enemy.getEnemyInfo( 'iceghostb' ); 
			enemyInfo.x = 770; 
			enemyInfo.y = 1650;
			enemyInfo.currentMap = 'frostpeakb';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );

		}



		if( campName == 'orcA'){

			if( orcEncampmentActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .67 ){

					var enemyInfo = Enemy.getEnemyInfo( 'orcPup' );
					randX = Math.random() * 1050;
					randY = Math.random() * 800;    
					enemyInfo.x = 750 + randX; 
					enemyInfo.y = 2800 + randY;
					enemyInfo.currentMap = 'orcEncampment';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else if( enemyRand > .33 ){

					var enemyInfo = Enemy.getEnemyInfo( 'darkBug' );
					randX = Math.random() * 1050;
					randY = Math.random() * 800;    
					enemyInfo.x = 750 + randX; 
					enemyInfo.y = 2800 + randY;
					enemyInfo.currentMap = 'orcEncampment';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					var enemyInfo = Enemy.getEnemyInfo( 'orcDruid' );
					randX = Math.random() * 1050;
					randY = Math.random() * 800;    
					enemyInfo.x = 750 + randX; 
					enemyInfo.y = 2800 + randY;
					enemyInfo.currentMap = 'orcEncampment';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );
					
				} 

				if( addToCount ){
					self.orcASpawnAmount = self.orcASpawnAmount + 1;
				}

			}

		}



		if( campName == 'orcB'){

			if( orcEncampmentActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .68 ){

					var enemyInfo = Enemy.getEnemyInfo( 'fireHorse' );

					randX = Math.random() * 1150;
					randY = Math.random() * 900;    
					enemyInfo.x = 700 + randX; 
					enemyInfo.y = 1800 + randY;
					enemyInfo.currentMap = 'orcEncampment';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else if( enemyRand > .38 ){

					var enemyInfo = Enemy.getEnemyInfo( 'orcSlaveMaster' );

					randX = Math.random() * 1150;
					randY = Math.random() * 900;    
					enemyInfo.x = 700 + randX; 
					enemyInfo.y = 1800 + randY;
					enemyInfo.currentMap = 'orcEncampment';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );	

				} else{

					var enemyInfo = Enemy.getEnemyInfo( 'bee' );
					randX = Math.random() * 1150;
					randY = Math.random() * 900;    
					enemyInfo.x = 700 + randX; 
					enemyInfo.y = 1800 + randY;
					enemyInfo.currentMap = 'orcEncampment';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );
					

				}

				if( addToCount ){
					self.orcBSpawnAmount = self.orcBSpawnAmount + 1;
				}

			}

		}


		if( campName == 'orcC'){

			if( orcEncampmentActive ){

				var enemyInfo = Enemy.getEnemyInfo( 'orcKing' );
	   
				enemyInfo.x = 3650; 
				enemyInfo.y = 3266;
				enemyInfo.currentMap = 'orcEncampment';
				enemyInfo.camp = campName;
				enemyInfo.isStationary = true; 
				Enemy( enemyInfo );

				if( addToCount ){
					self.orcCSpawnAmount = self.orcCSpawnAmount + 1;
				}

			}

		}



		if( campName == 'orcD'){

				if( orcEncampmentActive ){

					enemyRand = Math.random(); 

					if( enemyRand > .67 ){

						var enemyInfo = Enemy.getEnemyInfo( 'orcSlaveMaster' );
						randX = Math.random() * 1150;
						randY = Math.random() * 900;    
						enemyInfo.x = 2200 + randX; 
						enemyInfo.y = 1700 + randY;
						enemyInfo.currentMap = 'orcEncampment';
						enemyInfo.camp = campName; 
						Enemy( enemyInfo );

					}else if( enemyRand > .33 ){

						var enemyInfo = Enemy.getEnemyInfo( 'dino' );
						randX = Math.random() * 1150;
						randY = Math.random() * 900;    
						enemyInfo.x = 2200 + randX; 
						enemyInfo.y = 1900 + randY;
						enemyInfo.currentMap = 'orcEncampment';
						enemyInfo.camp = campName; 
						Enemy( enemyInfo );
					
					}else{

						var enemyInfo = Enemy.getEnemyInfo( 'orcWarrior' );
						randX = Math.random() * 1150;
						randY = Math.random() * 900;    
						enemyInfo.x = 700 + randX; 
						enemyInfo.y = 1800 + randY;
						enemyInfo.currentMap = 'orcEncampment';
						enemyInfo.camp = campName; 
						Enemy( enemyInfo );

					}

					if( addToCount ){
						self.orcDSpawnAmount = self.orcDSpawnAmount + 1;
					}

				}

			}


			if( campName == 'orcE'){

				if( orcEncampmentActive ){

					var enemyInfo = Enemy.getEnemyInfo( 'wallman' );  
					enemyInfo.x = 2880; 
					enemyInfo.y = 1050;
					enemyInfo.currentMap = 'orcEncampment';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

					if( addToCount ){
						self.orcDSpawnAmount = self.orcDSpawnAmount + 1;
					}

				}

			}



		if( campName == 'sunken2'){

			if( sunkenDepthsActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .68 ){

					enemyRand = Math.random(); 
					var enemyInfo = Enemy.getEnemyInfo( 'blightpod' );
					randX = Math.random() * 1100;
					randY = Math.random() * 800;   
					enemyInfo.x = 1400 + randX; 
					enemyInfo.y = 670 + randY;
					enemyInfo.currentMap = 'sunkenDepths';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );
					
				}else if( enemyRand > .3 ){

					enemyRand = Math.random(); 
					var enemyInfo = Enemy.getEnemyInfo( 'fireeye' );
					randX = Math.random() * 1100;
					randY = Math.random() * 800;   
					enemyInfo.x = 1400 + randX; 
					enemyInfo.y = 670 + randY;
					enemyInfo.currentMap = 'sunkenDepths';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					enemyRand = Math.random(); 
					var enemyInfo = Enemy.getEnemyInfo( 'fireeye' );
					randX = Math.random() * 1100;
					randY = Math.random() * 800;   
					enemyInfo.x = 1400 + randX; 
					enemyInfo.y = 670 + randY;
					enemyInfo.currentMap = 'sunkenDepths';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}

				if( addToCount ){
					self.sunken2SpawnAmount = self.sunken2SpawnAmount + 1;
				}

			}

		}



		if( campName == 'sunken3'){
			if( sunkenDepthsActive ){

				enemyRand = Math.random(); 
				if( enemyRand > .5 ){
					enemyRand = Math.random(); 
					var enemyInfo = Enemy.getEnemyInfo( 'ragebird' );
					randX = Math.random() * 380;
					randY = Math.random() * 1500;   
					enemyInfo.x = 1800 + randX; 
					enemyInfo.y = 2600 + randY;
					enemyInfo.currentMap = 'sunkenDepths';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );	

				}else {

					enemyRand = Math.random(); 
					var enemyInfo = Enemy.getEnemyInfo( 'banepod' );
					randX = Math.random() * 380;
					randY = Math.random() * 1500;      
					enemyInfo.x = 1800 + randX; 
					enemyInfo.y = 2600 + randY;
					enemyInfo.currentMap = 'sunkenDepths';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}


				if( addToCount ){
					self.sunken3SpawnAmount = self.sunken3SpawnAmount + 1;
				}
			}

		}



		if( campName == 'sunken4'){
			enemyRand = Math.random(); 
			var enemyInfo = Enemy.getEnemyInfo( 'tiv' );   
			enemyInfo.x = 1100; 
			enemyInfo.y = 1200;
			enemyInfo.currentMap = 'sunken2';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );
			if( addToCount ){
				self.sunken4SpawnAmount = self.sunken4SpawnAmount + 1;
			}
		}



		if( campName == 'sunken5'){
			enemyRand = Math.random(); 
			var enemyInfo = Enemy.getEnemyInfo( 'gate1' );   
			enemyInfo.x = 3285; 
			enemyInfo.y = 2555;
			enemyInfo.currentMap = 'sunkenDepths';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );
			if( addToCount ){
				self.sunken5SpawnAmount = self.sunken5SpawnAmount + 1;
			}
		}


		if( campName == 'sunken6'){
			enemyRand = Math.random(); 
			var enemyInfo = Enemy.getEnemyInfo( 'gate2' );   
			enemyInfo.x = 1005; 
			enemyInfo.y = 2540;
			enemyInfo.currentMap = 'sunkenDepths';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );
			if( addToCount ){
				self.sunken6SpawnAmount = self.sunken6SpawnAmount + 1;
			}
		}


		if( campName == 'sunken7'){
			enemyRand = Math.random(); 
			var enemyInfo = Enemy.getEnemyInfo( 'gate3' );   
			enemyInfo.x = 3385; 
			enemyInfo.y = 4535;
			enemyInfo.currentMap = 'sunkenDepths';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );
			if( addToCount ){
				self.sunken7SpawnAmount = self.sunken7SpawnAmount + 1;
			}
		}


		if( campName == 'sunken8'){
			enemyRand = Math.random(); 
			var enemyInfo = Enemy.getEnemyInfo( 'gate4' );   
			enemyInfo.x = 860; 
			enemyInfo.y = 4565;
			enemyInfo.currentMap = 'sunkenDepths';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );
			if( addToCount ){
				self.sunken8SpawnAmount = self.sunken8SpawnAmount + 1;
			}
		}





		/* 
		if( campName == 'sshraA'){
			var enemyInfo = Enemy.getEnemyInfo( 'sshraGuard' );
			enemyInfo.x = 6490; 
			enemyInfo.y = 3075;
			enemyInfo.currentMap = 'mythicCity';
			enemyInfo.camp = campName; 
			enemyInfo.isStationary = true; 
			Enemy( enemyInfo );
			if( addToCount ){
				self.sshraASpawnAmount = self.sshraASpawnAmount + 1;
			}
		}
		if( campName == 'sshraB'){
			var enemyInfo = Enemy.getEnemyInfo( 'sshraGuard' );
			enemyInfo.x = 6690; 
			enemyInfo.y = 3075;
			enemyInfo.currentMap = 'mythicCity';
			enemyInfo.camp = campName; 
			enemyInfo.isStationary = true; 
			Enemy( enemyInfo );
			if( addToCount ){
				self.sshraBSpawnAmount = self.sshraBSpawnAmount + 1;
			}
		}
		*/ 



		if( campName == 'hallA'){

			if( hallActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .7 ){

					var enemyInfo = Enemy.getEnemyInfo( 'colossus' );
					randX = Math.random() * 1340;
					randY = Math.random() * 1200;    
					enemyInfo.x = 680 + randX; 
					enemyInfo.y = 3560 + randY;
					enemyInfo.currentMap = 'hall';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else {

					var enemyInfo = Enemy.getEnemyInfo( 'scorpionman' );
					randX = Math.random() * 1340;
					randY = Math.random() * 1200;    
					enemyInfo.x = 680 + randX; 
					enemyInfo.y = 3560 + randY;
					enemyInfo.currentMap = 'hall';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}

				if( addToCount ){
					self.hallASpawnAmount = self.hallASpawnAmount + 1;
				}

			}

		}



		if( campName == 'hallB'){

			if( hallActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .62 ){

					var enemyInfo = Enemy.getEnemyInfo( 'firebug' );
					randX = Math.random() * 850;
					randY = Math.random() * 1100;    
					enemyInfo.x = 690 + randX; 
					enemyInfo.y = 1940 + randY;
					enemyInfo.currentMap = 'hall';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else{

					var enemyInfo = Enemy.getEnemyInfo( 'firebird' );
					randX = Math.random() * 850;
					randY = Math.random() * 1100;    
					enemyInfo.x = 690 + randX; 
					enemyInfo.y = 1940 + randY;
					enemyInfo.currentMap = 'hall';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}

				if( addToCount ){
					self.hallBSpawnAmount = self.hallBSpawnAmount + 1;
				}

			}

		}



		if( campName == 'hallC'){

			if( hallActive ){

				enemyRand = Math.random(); 

				if( enemyRand > .6 ){

					var enemyInfo = Enemy.getEnemyInfo( 'firebird' );
					randX = Math.random() * 700;
					randY = Math.random() * 950;    
					enemyInfo.x = 400 + randX; 
					enemyInfo.y = 400 + randY;
					enemyInfo.currentMap = 'hall';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );

				}else {

					var enemyInfo = Enemy.getEnemyInfo( 'fireeye' );
					randX = Math.random() * 700;
					randY = Math.random() * 950;    
					enemyInfo.x = 900 + randX; 
					enemyInfo.y = 300 + randY;
					enemyInfo.currentMap = 'hall';
					enemyInfo.camp = campName; 
					Enemy( enemyInfo );
					
				} 

				if( addToCount ){
					self.sunken1SpawnAmount = self.sunken1SpawnAmount + 1;
				}

			}

		}






		/* 
		if( campName == 'valley1'){

			enemyRand = Math.random(); 

			if( enemyRand > .4 ){

				var enemyInfo = Enemy.getEnemyInfo( 'sshraDesert' );
				randX = Math.random() * 550;
				randY = Math.random() * 1550;    
				enemyInfo.x = 4950 + randX; 
				enemyInfo.y = 590 + randY;
				enemyInfo.currentMap = 'mythicCity';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}else {

				var enemyInfo = Enemy.getEnemyInfo( 'desertScorpion' );
				randX = Math.random() * 550;
				randY = Math.random() * 1550;    
				enemyInfo.x = 4950 + randX; 
				enemyInfo.y = 590 + randY;
				enemyInfo.currentMap = 'mythicCity';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

				
			} 

			if( addToCount ){
				self.valley1SpawnAmount = self.valley1SpawnAmount + 1;
			}

		}


		if( campName == 'valley2'){

			enemyRand = Math.random(); 

			if( enemyRand > .4 ){

				var enemyInfo = Enemy.getEnemyInfo( 'darkmatter' );
				randX = Math.random() * 650;
				randY = Math.random() * 3200;    
				enemyInfo.x = 4950 + randX; 
				enemyInfo.y = 1700 + randY;
				enemyInfo.currentMap = 'mythicCity';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}else {

				
				var enemyInfo = Enemy.getEnemyInfo( 'scorpionman' );
				randX = Math.random() * 650;
				randY = Math.random() * 3200;    
				enemyInfo.x = 4950 + randX; 
				enemyInfo.y = 1700 + randY;
				enemyInfo.currentMap = 'mythicCity';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );
				
				
			} 

			if( addToCount ){
				self.valley2SpawnAmount = self.valley2SpawnAmount + 1;
			}

		}
		*/ 



		if( campName == 'sunPalace'){

			enemyRand = Math.random(); 

			if( enemyRand > .4 ){

				var enemyInfo = Enemy.getEnemyInfo( 'whitetiger' );
				randX = Math.random() * 1350;
				randY = Math.random() * 1050;    
				enemyInfo.x = 6200 + randX; 
				enemyInfo.y = 4500 + randY;
				enemyInfo.currentMap = 'mythicCity';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}else {

				var enemyInfo = Enemy.getEnemyInfo( 'yellowWolf' );
				randX = Math.random() * 1350;
				randY = Math.random() * 1050;    
				enemyInfo.x = 6200 + randX; 
				enemyInfo.y = 4500 + randY;
				enemyInfo.currentMap = 'mythicCity';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			} 


			if( addToCount ){
				self.sunPalaceSpawnAmount = self.sunPalaceSpawnAmount + 1;
			}

		}




		if( campName == 'sunPalaceA'){

			enemyRand = Math.random(); 

			//console.log("SPAWN SUN A");

			if( enemyRand > .6){

				var enemyInfo = Enemy.getEnemyInfo( 'ghost' );
				randX = Math.random() * 1350; 
				randY = Math.random() * 1100;   
				enemyInfo.x = 550 + randX; 
				enemyInfo.y = 4100 + randY;
				enemyInfo.currentMap = 'sunPalace';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}else{

				var enemyInfo = Enemy.getEnemyInfo( 'samurai' ); 
				randX = Math.random() * 1350; 
				randY = Math.random() * 1100;  
				enemyInfo.x = 550 + randX; 
				enemyInfo.y = 4100 + randY;
				enemyInfo.currentMap = 'sunPalace';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}

			if( addToCount ){
				self.sunPalaceASpawnAmount = self.sunPalaceASpawnAmount + 1;
			}

		}


		if( campName == 'sunPalaceB'){

			enemyRand = Math.random(); 

			if( enemyRand > .65){

				var enemyInfo = Enemy.getEnemyInfo( 'guardsamurai' );  
				randX = Math.random() * 1700; 
				randY = Math.random() * 1210;  
				enemyInfo.x = 930 + randX; 
				enemyInfo.y = 2460 + randY;
				enemyInfo.currentMap = 'sunPalace';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}else if( enemyRand > .35 ){

				var enemyInfo = Enemy.getEnemyInfo( 'titan' );  
				randX = Math.random() * 1700; 
				randY = Math.random() * 1210;  
				enemyInfo.x = 930 + randX; 
				enemyInfo.y = 2460 + randY;
				enemyInfo.currentMap = 'sunPalace';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}else{

				var enemyInfo = Enemy.getEnemyInfo( 'yellowdragon' );  

				randX = Math.random() * 1700; 
				randY = Math.random() * 1210;  
				enemyInfo.x = 930 + randX; 
				enemyInfo.y = 2460 + randY;

				enemyInfo.currentMap = 'sunPalace';
				enemyInfo.camp = campName; 
				Enemy( enemyInfo );

			}


			if( addToCount ){
				self.sunPalaceBSpawnAmount = self.sunPalaceBSpawnAmount + 1;
			}

		}
	 


		if( campName == 'sunPalaceC'){

			var enemyInfo = Enemy.getEnemyInfo( 'emperor' );  
			enemyInfo.x = 2138; 
			enemyInfo.y = 990;
			enemyInfo.currentMap = 'sunPalace';
			enemyInfo.camp = campName; 
			Enemy( enemyInfo );

		}






	}


	self.despawn = function( campName ){

		if( campName == 'mythicA'){
			self.mythicASpawnAmount = self.mythicASpawnAmount - 1; 
		}

		if( campName == 'mythicB'){
			self.mythicBSpawnAmount = self.mythicBSpawnAmount - 1; 
		}

		if( campName == 'mythicC'){
			self.mythicCSpawnAmount = self.mythicCSpawnAmount - 1; 
		}

		if( campName == 'frostpeakA'){
			self.frostpeakASpawnAmount = self.frostpeakASpawnAmount - 1; 
		}

		if( campName == 'frostpeakB'){
			self.frostpeakBSpawnAmount = self.frostpeakBSpawnAmount - 1; 
		}

		if( campName == 'frostpeakC'){
			self.frostpeakCSpawnAmount = self.frostpeakCSpawnAmount - 1; 
		}

		if( campName == 'frostpeakD'){
			self.frostpeakDSpawnAmount = self.frostpeakDSpawnAmount - 1; 
		}

		if( campName == 'orcA'){
			self.orcASpawnAmount = self.orcASpawnAmount - 1; 
		}

		if( campName == 'orcB'){
			self.orcBSpawnAmount = self.orcBSpawnAmount - 1; 
		}

		if( campName == 'orcC'){
			self.orcCSpawnAmount = self.orcCSpawnAmount - 1; 
		}

		if( campName == 'orcD'){
			self.orcDSpawnAmount = self.orcDSpawnAmount - 1; 
		}

		if( campName == 'orcE'){
			self.orcESpawnAmount = self.orcESpawnAmount - 1; 
		}

		if( campName == 'sshraA'){
			self.sshraASpawnAmount = self.sshraASpawnAmount - 1; 
		}

		if( campName == 'sshraB'){
			self.sshraBSpawnAmount = self.sshraBSpawnAmount - 1; 
		}

		if( campName == 'valley1'){
			self.valley1SpawnAmount = self.valley1SpawnAmount - 1; 
		}

		if( campName == 'valley2'){
			self.valley2SpawnAmount = self.valley2SpawnAmount - 1; 
		}

		if( campName == 'hallA'){
			self.hallASpawnAmount = self.hallASpawnAmount - 1; 
		}

		if( campName == 'hallB'){
			self.hallBSpawnAmount = self.hallBSpawnAmount - 1; 
		}

		if( campName == 'hallC'){
			self.hallCSpawnAmount = self.hallCSpawnAmount - 1; 
		}


		if( campName == 'sunPalace'){
			self.sunPalaceSpawnAmount = self.sunPalaceSpawnAmount - 1; 
		}

		if( campName == 'sunPalaceA'){
			self.sunPalaceASpawnAmount = self.sunPalaceASpawnAmount - 1; 
		}


		if( campName == 'sunPalaceB'){
			self.sunPalaceBSpawnAmount = self.sunPalaceBSpawnAmount - 1; 
		}


		if( campName == 'sunPalaceC'){
			self.sunPalaceCSpawnAmount = self.sunPalaceCSpawnAmount - 1; 
		}


		if( campName == 'sunken1'){
			self.sunken1SpawnAmount = self.sunken1SpawnAmount - 1; 
		}

		if( campName == 'sunken2'){
			self.sunken2SpawnAmount = self.sunken2SpawnAmount - 1; 
		}

		if( campName == 'sunken3'){
			self.sunken3SpawnAmount = self.sunken3SpawnAmount - 1; 
		}

		if( campName == 'sunken4'){
			self.sunken4SpawnAmount = self.sunken4SpawnAmount - 1; 
		}

		if( campName == 'sunken5'){
			self.sunken5SpawnAmount = self.sunken5SpawnAmount - 1; 
		}

		if( campName == 'sunken6'){
			self.sunken6SpawnAmount = self.sunken6SpawnAmount - 1; 
		}

		if( campName == 'sunken7'){
			self.sunken7SpawnAmount = self.sunken7SpawnAmount - 1; 
		}

		if( campName == 'sunken8'){
			self.sunken8SpawnAmount = self.sunken8SpawnAmount - 1; 
		}


	}


	self.startEncampment = function ( campName ){


		if( campName == 'mythicA'){
			for (i = 0; i < 5; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'mythicB'){
			for (i = 0; i < 7; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'mythicC'){
			for (i = 0; i < 8; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'frostpeakA'){
			for (i = 0; i < 8; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'frostpeakB'){
			for (i = 0; i < 6; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'frostpeakC'){
			for (i = 0; i < 9; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'frostpeakD'){
			for (i = 0; i < 1; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'frostpeakE'){
			for (i = 0; i < 1; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'orcA'){
			for (i = 0; i < 6; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'orcB'){
			for (i = 0; i < 7; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'orcC'){
			self.campSpawn( campName , false ); 
		}

		if( campName == 'orcD'){
			for (i = 0; i < 6; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'orcE'){
			self.campSpawn( campName , false ); 
		}

		if( campName == 'sshraA'){
			self.campSpawn( campName , false ); 
		}

		if( campName == 'hallA'){
			for (i = 0; i < 5; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'hallB'){
			for (i = 0; i < 6; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'hallC'){
			for (i = 0; i < 5; i++) { 
				self.campSpawn( campName , false ); 
			}
		}


		if( campName == 'valley'){
			for (i = 0; i < 4; i++) { 
				self.campSpawn( campName , false ); 
			}
		}


		/* 
		if( campName == 'valley1'){
			for (i = 0; i < 4; i++) { 
				self.campSpawn( campName , false ); 
			}
		}
		if( campName == 'valley2'){

			for (i = 0; i < 4; i++) { 
				self.campSpawn( campName , false ); 
			}
		}
		*/ 

		if( campName == 'sunPalace'){

			for (i = 0; i < 3; i++) { 
				self.campSpawn( campName , false ); 
			}	
		}


		if( campName == 'sunken1'){
			for (i = 0; i < 3; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunken2'){
			for (i = 0; i < 7; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunken3'){
			for (i = 0; i < 4; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunken4'){
			for (i = 0; i < 1; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunken5'){
			for (i = 0; i < 1; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunken6'){
			for (i = 0; i < 1; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunken7'){
			for (i = 0; i < 1; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunken8'){
			for (i = 0; i < 1; i++) { 
				self.campSpawn( campName , false ); 
			}
		}

		if( campName == 'sunPalaceA'){
			for (i = 0; i < 7; i++) { 
				self.campSpawn( campName , false ); 
			}
		}	

		if( campName == 'sunPalaceB'){
			for (i = 0; i < 9; i++) { 
				self.campSpawn( campName , false ); 
			}
		}	

		if( campName == 'sunPalaceC'){
			self.campSpawn( campName , false ); 
		}	


	}


	return self; 

}




Enemy.update = function(){

	var pack = [];

	for(var i in Enemy.list){

		var enemy = Enemy.list[i];

		//distance = getDistance( Player.list[myId].x , Player.list[myId].y , self.x , self.y );
		//if( distance < 800 ){
		//console.log( enemy );
		
		enemy.update();

		if(enemy.toRemove){

			globalKillCount++; 

			encampment.despawn( Enemy.list[i].campName )

			encampment.checkCamp( Enemy.list[i].campName ); 

			delete Enemy.list[i];

			removePack.enemy.push(enemy.id);

			enemy.toRemove = false; 

		} else {

			pack.push( enemy.getUpdatePack() );		

		}


		//}


	}


	return pack;


}



Enemy.getAllInitPack = function(){

	var enemies = [];

	for(var i in Enemy.list)
		enemies.push( Enemy.list[i].getInitPack() );

	return enemies;

}





/* 
Enemy.spawnEnemies = function( enemyName , spawnCount , currentMap ){

	for( i = 0; i < spawnCount; i++ ){
		var enemyInfo = Enemy.getEnemyInfo( enemyName ); 

		randX = Math.random() * 700;
		randY = Math.random() * 2000;  

		enemyInfo.x = 700 + randX; 
		enemyInfo.y = 600 + randY;
		enemyInfo.currentMap = currentMap; 

		Enemy( enemyInfo );

	}

}


var wave1running = false;
var wave2running = false;
var wave3running = false;
var wave4running = false;
var wave5running = false; 


Enemy.startWave = function( wave , map ){


	if( map == 'lavapit'){

		if( wave == 1 ){
			Enemy.spawnEnemies( 'bat' , 6 , map ); 
		} 

		if( wave == 2 ){
			Enemy.spawnEnemies( 'bat' , 4 , map ); 
			Enemy.spawnEnemies( 'pinkbat' , 3 , map ); 
			Enemy.spawnEnemies( 'goldbat' , 3 , map ); 
			Enemy.spawnEnemies( 'wombat' , 3 , map ); 

		} 

		if( wave == 3 ){
			Enemy.spawnEnemies( 'tonberry' , 3 , map ); 
			Enemy.spawnEnemies( 'bat' , 2 , map );  
			Enemy.spawnEnemies( 'pinkbat' , 2 , map ); 
			Enemy.spawnEnemies( 'goldbat' , 2 , map ); 
		} 

		if( wave == 4 ){
			Enemy.spawnEnemies( 'leviblue' , 5 , map ); 
		} 



		if( wave == 5 ){
			Enemy.spawnEnemies( 'levibig' , 1 , map ); 
			Enemy.spawnEnemies( 'levi' , 3 , map ); 
			Enemy.spawnEnemies( 'levigreen' , 3 , map );  
			Enemy.spawnEnemies( 'leviblue' , 3 , map ); 
		}

		if( wave == 6 ){
			Enemy.spawnEnemies( 'zemus' , 1 , map );
			Enemy.spawnEnemies( 'silverfish' , 3 , map );

		} 

		if( wave == 7 ){
			Enemy.spawnEnemies( 'phoenix' , 5 , map );   
		} 

		if( wave == 8 ){
			Enemy.spawnEnemies( 'bahamut' , 1 , map ); 
		} 

	}


}
*/ 



Enemy.getEnemyInfo = function( enemyName ){

	enemyInfo = {}


	// LEVEL 1 - 8 ( MYTHIC FOREST )
	//

	// width, height, hp, xp, energy, curLevel, mobName, imageName, nameOffY, aggroRange
	// aggroPad, attackDamage, attackRange, attackSpeed, isStationary, allowKnockback,
	// shadowType , shadowYOffset , hasLevitate  
	//
	if( enemyName == 'smallBat'){
		enemyInfo = Enemy.initEnemy( 42 , 42 , 88 , 140 , 80 , 3 , "Small Bat", enemyName , 
		15 , 300 , 70 , 9 , 100 , 30 , false , 
		1 , 40  , true ); 
	}


	if( enemyName == 'redbat'){
		enemyInfo = Enemy.initEnemy( 48 , 48 , 106 , 220 , 80 , 3 , "Red Bat"
		, enemyName , 15 , 300 , 70 , 12 , 100 , 30 , false ,
		1 , 40 , true ); 
	}


	if( enemyName == 'pinkBat'){
		enemyInfo = Enemy.initEnemy( 58 , 58 , 280 , 470 , 100 , 4 , "Fruit Bat"
		, enemyName , 15 , 300 , 70 , 22 , 100 , 15 , false  ,
		1 , 40 , true ); 
	}


	if( enemyName == 'wombat'){
		enemyInfo = Enemy.initEnemy( 44 , 44 , 320 , 770 , 100 , 5 , "Enraged Wombat"
		, enemyName , 15 , 200 , 70 , 24 , 100 , 15 , false ,
		1 , 30 , true ); 
	}


	if( enemyName == 'goldBat'){
		enemyInfo = Enemy.initEnemy( 54 , 54 , 240 , 650 , 100 , 6 , "Gold Bat"
		, enemyName , 15 , 250 , 70 , 24 , 100 , 20 , false ,
		1 , 55 , true ); 
	}


	if( enemyName == 'swampDweller'){
		enemyInfo = Enemy.initEnemy( 80 , 68 , 450 , 800 , 100 , 8 , "Swamp Dweller"
		, enemyName , 30 , 300 , 50 , 45 , 100 , 45 , false ,
		1 , 15 , false ); 
	}


	if( enemyName == 'skeleton'){
		enemyInfo = Enemy.initEnemy( 90 , 38 , 1180 , 2400 , 1000 , 8 , "Small Skeleton"
		, enemyName , 30 , 260 , 60 , 190 , 100 , 30 , false ,
		0 , 35 , false ); 
	}


	if( enemyName == 'willow'){
		enemyInfo = Enemy.initEnemy( 50 , 50 , 1180 , 2400 , 1000 , 8 , "Willow Wisp"
		, enemyName , 30 , 260 , 60 , 190 , 100 , 30 , false ,
		0 , 35 , false ); 
	}

	if( enemyName == 'scropion'){
		enemyInfo = Enemy.initEnemy( 78 , 70 , 1200 , 2400 , 1000 , 8 , "Scorpion"
		, enemyName , 10 , 200 , 50 , 195 , 120 , 35 , false , 1 , 30 ); 
	}

	if( enemyName == 'iceskeleton'){
		enemyInfo = Enemy.initEnemy( 120 , 50 , 1390 , 3100 , 1000 , 8 , "Ice Skeleton"
		, enemyName , 30 , 280 , 60 , 310 , 100 , 40 , false ,
		0 , 42 , false ); 
	}



	// LEVEL 8 - 18 ( FROST PEAK UPPER & LOWER )
	//
	// width, height, hp, xp, energy, curLevel, mobName, 
	// imageName, nameOffY, aggroRange , aggroPad, attackDamage, attackRange, attackSpeed, isStationary, allowKnockback,
	// shadowType , shadowYOffset , hasLevitate  
	//
	if( enemyName == 'iceghost'){
		enemyInfo = Enemy.initEnemy( 70 , 50 , 3400 , 4700 , 100 , 10 , "Ice Ghost"
		, enemyName , 26 , 390 , 60 , 440 , 150 , 20 , false ,
		 1 , 37 , true ); 
	}


	if( enemyName == 'iceghostb'){
		enemyInfo = Enemy.initEnemy( 80 , 58 , 5400 , 5100 , 100 , 15 , "Frost Guard"
		, 'iceghostb' , 26 , 590 , 60 , 560 , 150 , 25 , false ,
		1 , 37 , true ); 
	}


	if( enemyName == 'iceking'){
		enemyInfo = Enemy.initEnemy( 210 , 150 , 125800 , 56000 , 100 , 10 , "Ice King"
		, enemyName , 13 , 310 , 60 , 1050 , 150 , 27 , true ,
		1 , 37 , false ); 
	}


	if( enemyName == 'frostRider'){
		enemyInfo = Enemy.initEnemy( 140 , 140 , 8800 , 7800 , 100 , 12 , "A Frost Rider"
		, enemyName , 80 , 440 , 110 , 780 , 130 , 35 , false  ,
		0 , 0 , false ); 
	}


	if( enemyName == 'frostskele'){
		enemyInfo = Enemy.initEnemy( 100 , 70 , 6700 , 7800 , 100 , 12 , "Frost Walker"
		, enemyName , 80 , 370 , 90 , 660 , 90 , 28 , false ,
		1 , 38 , false ); 
	}


	if( enemyName == 'frostBat'){
		enemyInfo = Enemy.initEnemy( 54 , 54 , 6500 , 8650 , 100 , 13 , "Frost Bat"
		, enemyName , 15 , 430 , 70 , 790 , 90 , 20 , false ,
		1 , 30 , true ); 
	}


	if( enemyName == 'dragonSmallIce'){
		enemyInfo = Enemy.initEnemy( 120 , 120 , 40000 , 19000 , 100 , 24 , "Small Ice Dragon"
		, enemyName , 50 , 460 , 90 , 1600 , 200 , 30 , false ,
		0 , 80 , true ); 
	}


	if( enemyName == 'frostDweller'){
		enemyInfo = Enemy.initEnemy( 70 , 60 , 9600 , 11200 , 100 , 15 , "Frost Dweller"
		, enemyName , 30 , 270 , 50 , 390 , 120 , 15 , false ,
		1 , 0 , false ); 
	}






	// LEVEL 18 - 24 ( SUN PALACE )
	// 
	// width, height, hp, xp, energy, curLevel, mobName, imageName, nameOffY, aggroRange
	// aggroPad, attackDamage, attackRange, attackSpeed, isStationary, allowKnockback,
	// shadowType , shadowYOffset , hasLevitate  
	//
	if( enemyName == 'ghost'){
		enemyInfo = Enemy.initEnemy( 100 , 64 , 38000 , 21000 , 100 , 22 , "Temple Ghost"
		, enemyName , 26 , 350 , 60 , 3100 , 110 , 50 , false ,
		 1 , 37 , true ); 
	}

	if( enemyName == 'samurai'){
		enemyInfo = Enemy.initEnemy( 112 , 112 , 42000 , 22000 , 100 , 20 , "Corrupt Samurai"
		, enemyName , 26 , 420 , 60 , 1390 , 110 , 9 , false ,
		 1 , 42 , false ); 
	}

	if( enemyName == 'yellowdragon'){
		enemyInfo = Enemy.initEnemy( 190 , 190 , 70000 , 34000 , 100 , 23 , "Corrupt Sun Dragon"
		, enemyName , 30 , 400 , 90 , 3480 , 250 , 22 , false ,
		 1 , 115 , true ); 
	}

	if( enemyName == 'titan'){
		enemyInfo = Enemy.initEnemy( 200 , 130 , 105000 , 39000 , 100 , 23 , "Titan"
		, enemyName , 80 , 320 , 90 , 4160 , 150 , 46 , false ,
		 0 , 85 , false ); 
	}

	if( enemyName == 'guardsamurai'){
		enemyInfo = Enemy.initEnemy( 120 , 120 , 80000 , 38000 , 100 , 24 , "Palace Guard"
		, enemyName , 26 , 350 , 60 , 1690 , 110 , 12 , false ,
		 0 , 50 , false ); 
	}

	if( enemyName == 'emperor'){
		enemyInfo = Enemy.initEnemy( 220 , 220 , 445000 , 168000 , 8000 , 26 , "The Corrupted Emperor"
		, enemyName , 0 , 380 , 60 , 4200 , 200 , 20 , true ,
		 0 , 55 , false ); 
	}



	// LEVELS 23 - 30 ( ORC ENCAMPMENT ) 
	// 
	// width, height, hp, xp, energy, curLevel, mobName, imageName, nameOffY, aggroRange
	// aggroPad, attackDamage, attackRange, attackSpeed, isStationary, allowKnockback,
	// shadowType , shadowYOffset , hasLevitate  
	//
	if( enemyName == 'orcPup'){
		enemyInfo = Enemy.initEnemy( 85 , 70 , 71200 , 58200 , 1000 , 23 , "A Orc Pup"
		, enemyName , 30 , 300 , 50 , 3440 , 150 , 30 , false  ,
		 0 , 18 , false ); 
	}


	if( enemyName == 'orcDruid'){
		enemyInfo = Enemy.initEnemy( 120 , 102 , 76800 , 69500 , 100 , 24 , "A Orc Druid"
		, enemyName , 30 , 300 , 50 , 3780 , 120 , 30 , false ,
		 1 , 30 , false ); 
	}

	if( enemyName == 'darkBug'){
		enemyInfo = Enemy.initEnemy( 72 , 62 , 81800 , 71500 , 100 , 23 , "Dark Bug"
		, enemyName , 30 , 300 , 50 , 4880 , 120 , 40 , false ,
		 1 , 30 , true ); 
	}

	if( enemyName == 'bee'){
		enemyInfo = Enemy.initEnemy( 78 , 68 , 95800 , 78500 , 100 , 24 , "Dark Hornet"
		, enemyName , 30 , 300 , 50 , 5380 , 120 , 30 , false ,
		 1 , 30 , true ); 
	}

	if( enemyName == 'orcSlaveMaster'){
		enemyInfo = Enemy.initEnemy( 140 , 120 , 137500 , 78000 , 100 , 25 , "A Orc Slavemaster"
		, enemyName , 30 , 450 , 50 , 4860 , 120 , 60 , false ,
		 1 , 0 , false ); 
	}


	if( enemyName == 'dino'){
		enemyInfo = Enemy.initEnemy( 230 , 195 , 175800 , 105500 , 100 , 26 , "Raging Dino"
		, 'dinonew' , 30 , 400 , 50 , 7180 , 200 , 40 , false ,
		 1 , 30 , false ); 
	}

	if( enemyName == 'orcWarrior'){
		enemyInfo = Enemy.initEnemy( 150 , 132 , 111500 , 108500 , 100 , 26 , "A Orc Warrior"
		, enemyName , 30 , 400 , 50 , 6600 , 160 , 25 , false ,
		 1 , 50 , false ); 
	}

	if( enemyName == 'orcKing'){
		enemyInfo = Enemy.initEnemy( 240 , 210 , 511200 , 682100 , 21000 , 28 , "The Orc King"
		, enemyName , 68 , 360 , 100 , 5430 , 120 , 16 , false ,
		 0 , 56 , false ); 
	}



	// LEVEL 25 - 30 ( HALL + SUNKEN ENTRANCE )
	//
	// width, height, hp, xp, energy, curLevel, mobName, imageName, nameOffY, aggroRange
	// aggroPad, attackDamage, attackRange, attackSpeed, isStationary, allowKnockback,
	// shadowType , shadowYOffset , hasLevitate  
	//

	if( enemyName == 'firebug'){
		enemyInfo = Enemy.initEnemy( 105 , 90 , 140000 , 165000 , 100 , 26 , "Giant Fire Wasp"
		, enemyName , 70 , 420 , 90 , 6450 , 180 , 25 , false , 0 ,
		 1 , 1 , true ); 
	}

	if( enemyName == 'colossus'){
		enemyInfo = Enemy.initEnemy( 250 , 163 , 345000 , 227000 , 100 , 27 , "Colossus"
		, 'titan' , 130 , 320 , 90 , 5560 , 150 , 46 , false ,
		 0 , 85 , false ); 
	}

	if( enemyName == 'scorpionman'){
		enemyInfo = Enemy.initEnemy( 140 , 140 , 220000 , 170000 , 8000 , 27 , "Scorpion Man"
		, enemyName , 25 , 380 , 50 , 11000 , 120 , 105 , false , 1 ,
		 0 , 0 , false ); 
	}

	if( enemyName == 'firebird'){
		enemyInfo = Enemy.initEnemy( 170 , 170 , 270000 , 245000 , 100 , 27 , "Fire Phoenix"
		, enemyName , 70 , 420 , 90 , 7350 , 180 , 25 , false , 0 ,
		 1 , 40 , true ); 
	}

	if( enemyName == 'fireeye'){
		enemyInfo = Enemy.initEnemy( 76 , 76 , 240000 , 265000 , 100 , 28 , "Fire Eye"
		, enemyName , 22 , 480 , 50 , 5200 , 100 , 30 ,  false , 1 ,
		 1 , 40 , true ); 
	}

	if( enemyName == 'blightpod'){
		enemyInfo = Enemy.initEnemy( 190 , 190 , 260000 , 175000 , 100 , 27 , "Blight Pod"
		, 'floateyetwo' , 70 , 420 , 90 , 5450 , 180 , 22 , false , 0 ,
		 1 , 1 , true ); 
	}

	if( enemyName == 'firehead'){
		enemyInfo = Enemy.initEnemy( 120 , 60 , 110000 , 340000 , 100 , 28 , "Flame Apparition"
		, enemyName , 55 , 460 , 100 , 7550 , 100 , 25 , false , 0 ,
		 1 , 30 , false ); 
	}

	if( enemyName == 'ragebird'){
		enemyInfo = Enemy.initEnemy( 240 , 240 , 320000 , 255000 , 100 , 27 , "Raging Phoenix"
		, 'firebird' , 70 , 420 , 90 , 5450 , 180 , 25 , false , 0 ,
		 1 , 40 , true ); 
	}

	if( enemyName == 'banepod'){
		enemyInfo = Enemy.initEnemy( 280 , 280 , 340000 , 255000 , 100 , 27 , "Bane Pod"
		, 'floateye' , 70 , 420 , 90 , 6450 , 180 , 25 , false , 0 ,
		 1 , 1 , true ); 
	}


	// width, height, hp, xp, energy, curLevel, mobName, imageName, nameOffY, aggroRange
	// aggroPad, attackDamage, attackRange, attackSpeed, isStationary, allowKnockback,
	// shadowType , shadowYOffset , hasLevitate  
	//


	// LEVEL 30+ 
	//
	if( enemyName == 'tiv'){
		enemyInfo = Enemy.initEnemy( 520 , 520 , 5900000 , 3000000 , 100 , 38 , "Tiv the Devastator"
		, enemyName , 100 , 400 , 190 , 9500 , 300 , 18 , false , 0 ,
		 0 , 0 , false ); 
	}

	if( enemyName == 'gate1'){
		enemyInfo = Enemy.initEnemy( 270 , 270 , 2000000 , 1400000 , 100 , 38 , "Dirvesda the Gatekeeper"
		, enemyName , 100 , 400 , 190 , 6700 , 300 , 25 , true , 0 ,
		 0 , 0 , false ); 
	}

	if( enemyName == 'gate2'){
		enemyInfo = Enemy.initEnemy( 290 , 290 , 2300000 , 1400000 , 100 , 38 , "Eolur the Gatekeeper"
		, enemyName , 100 , 400 , 190 , 10700 , 300 , 45 , true , 0 ,
		 0 , 0 , false ); 
	}

	if( enemyName == 'gate3'){
		enemyInfo = Enemy.initEnemy( 340 , 340 , 2700000 , 1800000 , 100 , 38 , "Ymrassynth the Gatekeeper"
		, enemyName , 100 , 400 , 190 , 7100 , 300 , 35 , true , 0 ,
		 0 , 0 , false ); 
	}

	if( enemyName == 'gate4'){
		enemyInfo = Enemy.initEnemy( 350 , 350 , 3300000 , 1800000 , 100 , 38 , "Onas the Gatekeeper"
		, enemyName , 100 , 400 , 190 , 6700 , 300 , 14 , true , 0 ,
		 0 , 0 , false ); 
	}



	if( enemyName == 'wallman'){
		enemyInfo = Enemy.initEnemy( 400 , 400 , 1700000 , 300000 , 100 , 34 , "Ovrenen, The Voiceless"
		, enemyName , 100 , 400 , 190 , 4400 , 300 , 12 , true , 0 ,
		 0 , 0 , false ); 
	}



	/* 
	
	if( enemyName == 'fireHorse'){
		enemyInfo = Enemy.initEnemy( 115 , 150 , 128200 , 77500 , 100 , 14 , "Corrupted Fire Horse"
		, 'fireHorse' , 30 , 300 , 50 , 4080 , 120 , 35 , false ,
		 1 , 30 , false ); 
	} 

	if( enemyName == 'darkmatter'){
		enemyInfo = Enemy.initEnemy( 180 , 180 , 100000 , 100000 , 100 , 36 , "Dark Matter"
		, enemyName , 73 , 300 , 90 , 5350 , 160 , 50 , false , 1 ,
		 0 , 0 ); 
	}

	if( enemyName == 'desertScorpion'){
		enemyInfo = Enemy.initEnemy( 90 , 80 , 50000 , 30000 , 8000 , 34 , "Desert Scorpion"
		, enemyName , 10 , 200 , 50 , 4800 , 120 , 50 , false , 1 ,
		 0 , 0 , false ); 
	}
	if( enemyName == 'sshraGuard'){
		enemyInfo = Enemy.initEnemy( 150 , 150 , 30000 , 30000 , 100 , 37 , "A Temple Guard"
		, enemyName , 30 , 300 , 70 , 3000 , 180 , 50 , false , 1 ,
		 0 , 0 ); 
	}


	if( enemyName == 'fireHorse'){
		enemyInfo = Enemy.initEnemy( 115 , 150 , 128200 , 77500 , 100 ,  , "Corrupted Fire Horse"
		, 'fireHorse' , 30 , 300 , 50 , 4080 , 120 , 35 , false ,
		 1 , 30 , false ); 
	}

		if( enemyName == 'sshraDesert'){
		enemyInfo = Enemy.initEnemy( 130 , 130 , 125000 , 13000 , 100 , 35 , "Sshra Crawler"
		, enemyName , 30 , 300 , 70 , 5000 , 220 , 15 , false , 1 ,
		 0 , 0 , false ); 
	}
	*/ 

	/* 
	if( enemyName == 'phoenix'){
		enemyInfo = Enemy.initEnemy( 170 , 170 , 180000 , 255000 , 100 , 26 , "Enraged Phoenix"
		, enemyName , 70 , 420 , 90 , 3450 , 180 , 25 , false , 0 ,
		 1 , 1 , true ); 
	}
	*/ 

	// width, height, hp, xp, energy, curLevel, mobName, imageName, nameOffY, aggroRange
	// aggroPad, attackDamage, attackRange, attackSpeed, isStationary, allowKnockback, hasShadow 


/* 

	if( enemyName == 'largeSwampDweller'){
		enemyInfo = Enemy.initEnemy( 70 , 60 , 200 , 1000 , 100 , 8 , "Large Swamp Dweller"
		, enemyName , 30 , 300 , 50 , 30 , 100 , 50 , false , 1 , 0  ); 
	}


	if( enemyName == 'skeletonwarrior'){
		enemyInfo = Enemy.initEnemy( 90 , 60 , 150000 , 295000 , 100 , 28 , "Skeleton Warrior"
		, enemyName , 22 , 490 , 50 , 6500 , 100 , 30 ,  false , 1 ,
		 0 , 0 , false ); 
	}
	if( enemyName == 'ghostsnake'){
		enemyInfo = Enemy.initEnemy( 160 , 160 , 85000 , 20000 , 100 , 20 , "Ghost Walker"
		, enemyName , 26 , 200 , 60 , 4500 , 110 , 40 , false , 1 , 40 ); 
	}
	*/ 

/* 
	if( enemyName == 'whitetiger'){
		enemyInfo = Enemy.initEnemy( 80 , 80 , 18000 , 27000 , 100 , 17 , "White Tiger"
		, enemyName , 22 , 300 , 60 , 1200 , 150 , 50 , false , 1 , 0  ); 
	}

	if( enemyName == 'yellowWolf'){
		enemyInfo = Enemy.initEnemy( 90 , 90 , 12000 , 23000 , 8000 , 18 , "Yellow Wolf"
		, enemyName , 0 , 200 , 50 , 600 , 120 , 30 , false , 1 , 0 ); 
	}
*/ 
	/*
	if( enemyName == 'depthskele'){
		enemyInfo = Enemy.initEnemy( 70 , 70 , 1000000 , 1000000 , 100 , 34 , "Skeleton of the depths"
		, enemyName , 35 , 400 , 200 , 350 , 100 , false ); 
	}
	*/ 

	/* 
	if( enemyName == 'sshraWisk'){
		enemyInfo = Enemy.initEnemy( 180 , 180 , 5000 , 3500 , 100 , 36 , "A Wisk Sshra"
		, enemyName , 15 , 300 , 100 , 300 , 200 , 100 , false ); 
	}
	*/ 

	/*
	if( enemyName == 'sshraMarrow'){
		enemyInfo = Enemy.initEnemy( 150 , 150 , 3000 , 3000 , 100 , 30 , "A Marrow Sshra"
		, enemyName , 30 , 300 , 70 , 100 , 180 , 50 , false ); 
	}
	*/

	/*
	if( enemyName == 'darkRider'){
		enemyInfo = Enemy.initEnemy( 230 , 230 , 8000 , 5000 , 100 , 36 , "A Dark Rider"
		, enemyName , 100 , 300 , 180 , 160 , 150 , 100 , false ); 
	}
	*/

	// width , height , hp , xp , energy , curLevel , mobName , 
	// imageName , nameOffY , aggroRange , aggroPad , attackDamage , attackRange , attackSpeed , isStationary 

	/* 

	*/ 
	/* 
	if( enemyName == 'orcScout'){
		enemyInfo = Enemy.initEnemy( 100 , 90 , 12800 , 17500 , 100 , 22 , "A Orc Scout"
		, enemyName , 30 , 300 , 50 , 1080 , 120 , 40 , false , 1 , 30 ); 
	}
	*/ 




	// UNUSED 
	//
	/* 
	if( enemyName == 'orcServant'){
		enemyInfo = Enemy.initEnemy( 70 , 60 , 200 , 1000 , 100 , 10 , "An Orc Servant"
		, enemyName , 30 , 300 , 50 , 30 , 120 , 50 , 45 , false ); 
	}

	if( enemyName == 'largePhoenix'){
		enemyInfo = Enemy.initEnemy( 170 , 230 , 8000 , 5000 , 100 , 10 , "A Large Phoenix"
		, enemyName , 100 , 300 , 180 , 160 , 150 , 100 , 43 , false ); 
	}

	if( enemyName == 'sshraQueen'){
		enemyInfo = Enemy.initEnemy( 400 , 400 , 10000 , 3000 , 100 , 48 , "Sshra Queen"
		, enemyName , 30 , 300 , 70 , 300 , 280 , 15 , false ); 
	}

	if( enemyName == 'sshraScaled'){
		enemyInfo = Enemy.initEnemy( 130 , 130 , 2000 , 2000 , 100 , 45 , "Scaled Sshra"
		, enemyName , 30 , 300 , 70 , 210 , 150 , 50 , false ); 
	}

	// width , height , hp , xp , energy , curLevel , mobName , 
	// imageName , nameOffY , aggroRange , aggroPad , attackDamage , attackRange , attackSpeed 


	if( enemyName == 'sshraLord'){
		enemyInfo = Enemy.initEnemy( 130 , 130 , 2000 , 2000 , 100 , 52 , "Lord Sshra Taz The III"
		, enemyName , 30 , 300 , 70 , 210 , 150 , 50 , false ); 
	}

	if( enemyName == 'frostSshra'){
		enemyInfo = Enemy.initEnemy( 140 , 140 , 12000 , 17500 , 100 , 18 , "A Frost Sshra"
		, enemyName , 15 , 300 , 100 , 550 , 150 , 15 , false ); 
	}

	if( enemyName == 'blackDragon'){
		enemyInfo = Enemy.initEnemy( 160 , 160 , 1000000 , 1000000 , 100 , 45 , "Black Dragon"
		, enemyName , 45 , 400 , 200 , 350 , 100 , false ); 
	}

	if( enemyName == 'darkDragon'){
		enemyInfo = Enemy.initEnemy( 200 , 200 , 1000000 , 1000000 , 100 , 45 , "Dark Dragon"
		, enemyName , 80 , 400 , 200 , 350 , 100 , false ); 
	}

	if( enemyName == 'dragonSmall'){
		enemyInfo = Enemy.initEnemy( 240 , 240 , 1000000 , 1000000 , 100 , 45 , "Small Dragon"
		, enemyName , 50 , 400 , 200 , 350 , 100 , false ); 
	}

	// width , height , hp , xp , energy , curLevel , mobName , 
	// imageName , nameOffY , aggroRange , aggroPad , attackDamage , attackRange , attackSpeed , isStation 

	if( enemyName == 'flameHead'){
		enemyInfo = Enemy.initEnemy( 70 , 140 , 1000000 , 1000000 , 100 , 45 , "Fire Apparition"
		, enemyName , 0 , 400 , 200 , 350 , 100 , false ); 
	}

	if( enemyName == 'kingRa'){
		enemyInfo = Enemy.initEnemy( 125 , 125 , 1000000 , 1000000 , 100 , 45 , "King Ra"
		, enemyName , 76 , 400 , 200 , 350 , 100 , false ); 
	}

	if( enemyName == 'poisonSnake'){
		enemyInfo = Enemy.initEnemy( 200 , 200 , 1000000 , 1000000 , 100 , 45 , "Poisonous Snake"
		, enemyName , 60 , 200 , 200 , 350 , 100 , false ); 
	}

	// width , height , hp , xp , energy , curLevel , mobName , 
	// imageName , nameOffY , aggroRange , aggroPad , attackDamage , attackRange , attackSpeed , isStation


	if( enemyName == 'yellowdragon'){
		enemyInfo = Enemy.initEnemy( 220 , 220 , 500000 , 500000 , 100 , 45 , "Yellow Dragon"
		, enemyName , 30 , 300 , 80 , 150 , 100 , false ); 
	}

	if( enemyName == 'undeadrock'){
		enemyInfo = Enemy.initEnemy( 90 , 90 , 12000 , 23000 , 8000 , 18 , "Undead Rock"
		, enemyName , 0 , 200 , 50 , 600 , 120 , 30 , false ); 
	}

	if( enemyName == 'zemus'){
		enemyInfo = Enemy.initEnemy( 100 , 55 , 10000 , 1000 , 100 , 10 , "Zemus"
		, enemyName , 36 , 300 , 70 , 800 , 100 , 5 ); 
	}

	if( enemyName == 'siren'){
		enemyInfo = Enemy.initEnemy( 184 , 184 , 140 , 80 , 100 , 10 , "Pink Bat"
		, enemyName , 15 , 300 , 70 , 0 , 100 , 15 ); 
	}

	if( enemyName == 'angel'){
		enemyInfo = Enemy.initEnemy( 204 , 204 , 140 , 80 , 100 , 10 , "A light diety"
		, enemyName , 15 , 300 , 70 , 0 , 0 , 0 ); 
	}

	if( enemyName == 'silverfish'){
		enemyInfo = Enemy.initEnemy( 100 , 100 , 1000 , 1000 , 100 , 10 , "Silverfish"
		, enemyName , 0 , 600 , 200 , 350 , 100 , 15 ); 
	}
	*/

	return enemyInfo; 

}


Enemy.initEnemy = function( width , height , hp , xp , energy , curLevel , 
	mobName , imageName , nameOffY , aggroRange , aggroPad , 
	attackDamage , attackRange , attackSpeed , isStationary , allowKnockback , hasShadow , hasLevitate ){

	enemy = {}; 

	enemy.width = width;
	enemy.height = height; 
	enemy.hp = hp;
	enemy.xp = xp;
	enemy.energy = energy;
	enemy.curLevel = curLevel;
	enemy.mobName = mobName; 
	enemy.imageName = imageName; 
	enemy.nameOffY = nameOffY; 
	enemy.aggroRange = aggroRange;
	enemy.aggroPad = aggroPad; 
	enemy.attackDamage = attackDamage; 
	enemy.attackRange = attackRange; 
	enemy.attackSpeed = attackSpeed;
	enemy.isStationary = isStationary; 
	enemy.allowKnockback = allowKnockback; 
	enemy.hasShadow = hasShadow; 
	enemy.hasLevitate = hasLevitate; 

	return enemy; 

}



//MapEffect = function



sMessage = function( socket ){

	var self = {
		message : {},
	}

	self.newMessage = function( text , color , username ){

		self.message.text = text;
		self.message.color = color;
		self.message.username = username;

		// Store the messages on the server array 
		//
		for(var i in SOCKET_LIST){

			SOCKET_LIST[i].emit( 'newMessage' , self.message , self.username );

		}

	}

	return self;

}









Effect = function(param){

	self.id = Math.random();
	self.angle = param.angle;
	self.spdX = Math.cos(param.angle/180*Math.PI) * 10;
	self.spdY = Math.sin(param.angle/180*Math.PI) * 10;
	self.parent = param.parent;
	
	self.timer = 0;
	self.toRemove = false;

	var super_update = self.update;

	self.update = function(){

		if(self.timer++ > 100)
			self.toRemove = true;
		
		super_update();


		/* 
		for(var i in Player.list){
			var p = Player.list[i];
			if(self.getDistance(p) < 32 && self.parent !== p.id){
				p.hp -= 1;				
				if(p.hp <= 0){
					var shooter = Player.list[self.parent];
					p.hp = p.hpMax;
					p.x = Math.random() * 500;
					p.y = Math.random() * 500;					
				}
				self.toRemove = true;
			}
		}
		*/ 
		

	}


	self.getInitPack = function(){

		return {
			id:self.id,
			x:self.x,
			y:self.y,
		};

	}


	self.getUpdatePack = function(){

		return {
			id:self.id,
			x:self.x,
			y:self.y,		
		};

	}
	

	Effect.list[self.id] = self;
	initPack.effect.push( self.getInitPack() );
	return self;


}



Effect.list = {};


Effect.update = function(){

	var pack = [];

	for(var i in Effect.list){

		var effect = Effect.list[i];

		effect.update();

		if(effect.toRemove){
			delete Effect.list[i];
			removePack.effect.push(effect.id);
		} else
			pack.push(effect.getUpdatePack());		
	}

	return pack;

}


Effect.getAllInitPack = function(){
	var effects = [];
	for(var i in Effect.list)
		effects.push(Effect.list[i].getInitPack());
	return effects;
}


