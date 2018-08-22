
//sign
var signDiv = document.getElementById('signDiv');
var signDivUsername = document.getElementById('signDiv-username');
var signDivSignIn = document.getElementById('signDiv-signIn');
var signDivSignUp = document.getElementById('signDiv-signUp');
var signDivPassword = document.getElementById('signDiv-password');

signDivSignIn.onclick = function(){

	socket.emit('signIn',{ username:signDivUsername.value , password:"password" });

}

signDivSignUp.onclick = function(){

	socket.emit('signUp',{ username:signDivUsername.value,password:signDivPassword.value});

}

socket.on('signInResponse',function(data){
	if(data.success){

		// Stop menu from running 
		clearInterval( menuRun );

		ctx.clearRect(0,0,1200,1000);

 		showSelectClassMenu(); 

		//signDiv.style.display = 'none';
		//gameDiv.style.display = 'inline-block';

	} else
		alert("Sign in unsuccessul.");
});

socket.on('signUpResponse',function(data){
	if(data.success){
		alert("Sign up successul.");
	} else
		alert("Sign up unsuccessul.");
});
