$('.login_back').on('tap',function(){
	window.history.go(-1);
})
$('.demand_on').on('tap',function(){
	if($('.demand_off').hasClass('active')){
		$('.demand_off').removeClass('active');
	}else{
		$('.demand_off').addClass('active');
	}
	
})
$('.demand_about').on('tap',function(){
	window.location.href = './myself_about.html';
})	

$('.exit').on('tap',function(){
	$(this).addClass('active');
	if(confirm('确认退出吗')){
		window.location.href = '../Home_page/Home_page.html';
	};
})

