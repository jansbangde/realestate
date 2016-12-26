$('.title span').on('tap',function(){
	var index=$(this).index();
	$('.title span').removeClass('active');
	$(this).addClass('active');
	$('.right_navigation_cot').hide().eq(index).show();
})
