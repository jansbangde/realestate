$('.login_back').on('tap',function(){
	window.history.go(-1);
})

$('.zhuce').on('tap',function(){
	window.location.href = './zhuce.html';
})

$('.forget').on('tap',function(){
	window.location.href = './forgetpassword.html';
})

$('.password').on('blur',function(){
	if($('.password').val()!='' && $('.name').val()!=''){
		$('.login_log').addClass('active');
		$('.login_log').removeClass('disabled');
		$('.login_log').one('tap',function(){
			window.location.href = './info/myself.html';
			
		})
	}else{
		$('.login_log').removeClass('active');
		$('.login_log').addClass('disabled');
	}
	
	
})