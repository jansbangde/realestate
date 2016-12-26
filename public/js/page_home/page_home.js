var i=0;
var slideTime=0;
var slideTime;
	$('.page_bg').on('swipeLeft',function(){
		clearTimeout(slideTime);
		i++;
		$(this).css('background',"green").css('transition','1s');
		
		if(i>3){i=3;}
		$('.shuffling li').removeClass('active').eq(i).addClass('active');
		autoSwipe();
	})
	
	$('.page_bg').on('swipeRight',function(){
		clearTimeout(slideTime);
		i--;
		$(this).css('background',"url(../../img/home_page/banner_img@2x.png) no-repeat center").css('transition','1s');
		
		if(i<0){i=0;}
		$('.shuffling li').removeClass('active').eq(i).addClass('active');
		autoSwipe();
	})

function autoSwipe(){
  slideTime = setTimeout(function(){
       	
		$('.page_bg').css('background',"green").css('transition','1s');
		i++;
		if(i>3){i=3;}
		$('.shuffling li').removeClass('active').eq(i).addClass('active');
		autoSwipe();
	
    },2000);
}
autoSwipe();

var $queyrBlock = $('.query_block');
$queyrBlock.on('tap', function(){
    var $self = $(this);
    var index = $self.index();
    console.log(index);
    $('.page_bg').addClass('active').css('transition','0.5s');
    $('body').addClass('active');
    $('.page_bg_t').addClass('active');
    $('.page_live').addClass('active');
    $('.search').addClass('active');
    if($self.hasClass('active')){
        $self.removeClass('active');
        $('.down-box').eq(index).hide();
    }else{
        $queyrBlock.removeClass('active');
        $self.addClass('active');
        $('.down-box').hide().eq(index).show();
    }
});

$('.query_price').on('tap', function(){
    var $self = $(this);
    if($self.hasClass('active-down')){
        console.log('up');
        $self.removeClass('active-down').addClass('active-up');
    }else if($self.hasClass('active-up')){
        console.log('normal');
        $self.removeClass('active-up');
    }else{
        console.log('down');
        $self.addClass('active-down');
    }
})

$('.price li').on('tap',function(){
	$('.price li').css('background','#F0F0F0');
	$(this).css('background','#fff')
})

$('.left_navigation li').on('tap',function(){
	var index=$(this).index();
	$('.left_navigation li').css('background','#F0F0F0');
	$(this).css('background','#fff');
	$('.right_navigation_cot').hide().eq(index).show();
})

$('.left_navigation2 li').on('tap',function(){
	var index=$(this).index();
	$('.left_navigation2 li').css('background','#F0F0F0');
	$(this).css('background','#fff');
	$('.right_navigation_cot2').hide().eq(index).show();
})





console.log($(window).scrollTop());
if($(window).scrollTop()>30){
	$('.back_top').show()
}

$('.back_top').on('tap',function(){
	var $top=$(window).scrollTop();
	console.log($top);
	if($top>30){
		$(window).scrollTop(0);
		
	}
})			
				
				
$('.search').on('tap',function(){
	window.location.href = './Recent_search.html';
})						
			
				
$('.page_city_chose').on('tap',function(){
	window.location.href = './page_city.html';
})						
			
	
	










