$(".title span").on("tap",function(){var t=$(this).index();$(".title span").removeClass("active"),$(this).addClass("active"),$(".right_navigation_cot").hide().eq(t).show()});