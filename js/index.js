$(function() {
//	$("a").click(function(){
//		return false;
//	})
	//-------------------------------------------------------------------------------
	//	----------------------------------------------
	//广告轮播
	$(".Carousel .as a").css("opacity", "0.7");
	var newhref;
	var index = 1;
	var len = $(".Carousel a img").length;
	var timer = null;

	function showImg(index) {
		var as_a = $(".Carousel .as a");
		newhref = as_a.eq(index).attr("href");
		as_a.eq(index).addClass("selected")
			.css("opacity", "1")
			.siblings().removeClass("selected").css("opacity", "0.7");
		$("#a_href").attr("href", newhref).find("img").eq(index).stop(true, true).fadeIn().siblings().fadeOut();
	}
	showImg(0);
	$('.Carousel').hover(function() {
		if(timer) {
			clearInterval(timer);
		}
	}, function() {
		timer = setInterval(function() {
			if(index == len) {
				index = 0;
			}
			showImg(index);
			index++;
		}, 5000);
	}).trigger("mouseleave");
	$(".Carousel .as a").mouseover(function() {
		index = $(this).index();
		showImg(index);
		index++;
	});
	//轮播end
	//	----------------------------------------------
	//	活动链接提示
	var x = 10;
	var y = 20;
	$('a.tooltip')
		.mouseover(function(e) {
			this.mytitle = this.title;
			console.log(this.mytitle);
			this.title = '';
			var tooltip = "<div id='tooltip'>" + this.mytitle + "</div>";
			$('body').append(tooltip);
			$('#tooltip')
				.css({
					"top": (e.pageY + y) + "px",
					"left": (e.pageX + x) + "px"
				}).show("fast");
		}).mouseout(function() {
			$('#tooltip').remove();
			this.title = this.mytitle;
		}).mousemove(function(e) {
			//			console.log(e.pageY + ',' + e.pageX);
			$('#tooltip')
				.css({
					"top": (e.pageY + y) + "px",
					"left": (e.pageX + x) + "px"
				})
		});
	//	活动链接提示end
	//		---------------------------------------------------------------------

	//	滚动图
	$(".div_bottom .box1 a").click(function() {
		var idx = $(".div_bottom .box1 li a").index(this);
		console.log(idx);
		var width = $(".div_bottom .box2 li").outerWidth();
		console.log(width);
		$(this).addClass("bg").parent().siblings().find("a").removeClass("bg");
		$(".div_bottom .box2 .inbox2").eq(0).stop(true, false).animate({
			left: -width * idx * 4
		}, 1000)
	});
	$(".div_bottom .box2 .inbox2 li").each(function(index) {
		var $img = $(this).find("img");
		var img_w = $img.outerWidth();
		console.log(img_w);
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:' + img_w + 'px;height:' + img_h + 'px;" class="imageMask"></span>';
		$(spanHtml).appendTo(this);
	})
	$(".div_bottom .box2 .inbox2").delegate(".imageMask", "hover", function() {
		$(this).toggleClass("span1");
	});
	//end
})