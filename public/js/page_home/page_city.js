$('.city_close').on('tap',function(){
	window.location.href = './Home_page.html';
})	

$('.city_options li').on('tap',function(){
	$(this).css('background','#ccc')
	window.location.href = './Home_page.html';
	$('.page_city_text').innerHTML=$(this).innerHTML();
})	

               