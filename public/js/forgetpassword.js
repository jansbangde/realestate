var check=document.getElementsByClassName('check')[0];
check.onclick=function(){
	var i=60;
	check.innerText=60;
	var timer=setInterval(function(){
		console.log(i);		
		check.innerText=--i;
		if(i==0){
		clearInterval(timer);
		check.innerText='获取验证码';
		}
		
	},1000)
		
}



$('.login_back').on('tap',function(){
	window.history.go(-1);
})
