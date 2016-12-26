$('.login_back').on('tap',function(){
	window.history.go(-1);
})



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


$('.login_input .name5').on('focus',function(){
	$('.login_input .shenfen').show();

})
$('.login_input .name').on('blur',function(){
	$('.login_input .shenfen').hide();
	$('.login_input li').css('background','#888')
})
$('.login_input li').on('tap',function(){
	$(this).css('background','#333333');
	
	//$('.login_input .shenfen').hide();
	$(this).parent().hide();
	//$('.name5').val()=$(this).innerText();
})

