//var mongojs = require("mongojs");

var db = null;//mongojs('localhost:27017/myGame', ['account','progress']);

require('./server/js/Entity');
//require('./client/js/Inventory');
require('./client/js/Message');

var express = require('express');

var app = express();

var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

serv.listen( process.env.PORT || 2045 );

console.log("Server started.");

SOCKET_LIST = {};

var DEBUG = true;

var isValidPassword = function(data,cb){
	return cb(true);

	/*db.account.find({username:data.username,password:data.password},function(err,res){
		if(res.length > 0)
			cb(true);
		else
			cb(false);
	});*/

}

var isUsernameTaken = function(data,cb){
	return cb(false);

	/*db.account.find({username:data.username},function(err,res){
		if(res.length > 0)
			cb(true);
		else
			cb(false);
	});*/

}

var addUser = function(data,cb){
	return cb();
	
	/*db.account.insert({username:data.username,password:data.password},function(err){
		cb();
	});*/
}




var io = require('socket.io')(serv,{});

io.sockets.on('connection', function(socket){

	socket.id = Math.random();
	SOCKET_LIST[socket.id] = socket;
	
	socket.on('signIn',function(data){ //{username,password}

		isValidPassword(data,function(res){

			if( res ){

				Player.onConnect( socket , data.username );

				socket.emit('signInResponse',{success:true});

				//chat = new Chat(); 

			} else {

				socket.emit('signInResponse',{success:false});

			}

		});

	});


	socket.on('signUp',function(data){

		isUsernameTaken(data,function(res){

			if(res){
				socket.emit('signUpResponse',{success:false});		
			} else {
				addUser(data,function(){
					socket.emit('signUpResponse',{success:true});					
				});
			}

		});	

	});
	
	socket.on('disconnect',function(){

		delete SOCKET_LIST[socket.id];

		Player.onDisconnect(socket);

	});
	
	
});



setInterval(function(){

	var packs = Entity.getFrameUpdateData();

	for(var i in SOCKET_LIST){

		//var thisLoop = new Date;
		
		var socket = SOCKET_LIST[i];

		socket.emit( 'init' , packs.initPack );
		socket.emit( 'update' , packs.updatePack );
		socket.emit( 'remove' , packs.removePack );

		//var fps = 1000 / ( thisLoop - lastLoop );
		//lastLoop = thisLoop;

	}
	
},40);


/*
var profiler = require('v8-profiler');
var fs = require('fs');
var startProfiling = function(duration){
	profiler.startProfiling('1', true);
	setTimeout(function(){
		var profile1 = profiler.stopProfiling('1');
		
		profile1.export(function(error, result) {
			fs.writeFile('./profile.cpuprofile', result);
			profile1.delete();
			console.log("Profile saved.");
		});
	},duration);	
}
startProfiling(10000);
*/
