var btn=document.getElementsByClassName('yuyue_info_btn');
$('.yuyue_info_btn').on('tap',function(){
	//$(this).innerText='已接单，待反馈';
	//$k=$(this).index;
	//console.log($k);
	//btn[index].innerText='已接单，待反馈';
	$(this).addClass('active');	
	
})

for(var i=0;i<btn.length;i++){
	btn[i].onclick=function(){
		this.innerText='已接单，待反馈';
	}
}
$('.yuyue_info_btn').on('swipeLeft',function(){
	
	$(this).parent().css('margin-left','-100px').css('transition','0.3s');
})

$('.yuyue_info_btn').on('swipeRight',function(){
	
	$(this).parent().css('margin-left','0px').css('transition','0.3s');
})

$('.delete').on('tap',function(){
	
	if(confirm('确认删除？')){
		$(this).parent().css('display','none');
	}
	
})


$('.yuyue_info_box').on('tap',function(){
	window.location.href = './indent.html';
})	







