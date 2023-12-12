$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var date=document.getElementById("date").value;
    if(userName=="贾月林" &&  date=="冬月初二"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},2000);
	}
	else{
		alert("Wrong Password");
	}
});
