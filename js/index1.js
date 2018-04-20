$(function() {
	/*使用jqzoom*/
	//放大镜
	$('.jqzoom').jqzoom({
		zoomType: 'standard',
		lens: true,
		preloadImages: false,
		alwaysOn: false,
		zoomWidth: 340,
		zoomHeight: 340,
		xOffset: 10,
		yOffset: 0,
		position: 'right'
	});
	//  放大镜end

	$(".goodslist .ul1 a").click(function() {
		var obj2 = eval("(" + $(this).attr("rel") + ")");
		//	    alert(obj2.largeimage); 
		$(".goodslist .span1 a").attr("href", obj2.largeimage)
	})
	$(".goodslist .ul1 li").addClass("hide")
	$(".goodsinfo .box ul .color ul li").click(function() {
		$(".goodsinfo .box ul .color strong").html($(this).find("img").attr("alt"))
		var Class = $(this).attr("class");
		$(this).addClass("selected").siblings().removeClass("selected");
		//		console.log($(".goodslist .ul1 li"));
		$(".goodslist .ul1 ." + Class).show().eq(0).find("a").click();
		$(".goodslist .ul1 ." + Class).siblings(":not(." + Class + ")").hide();

	}).eq(0).click();
	$(".goodslist .tab li").click(function() {
		var index = $(this).index();
		$(this).addClass('selectedli').siblings().removeClass("selectedli")
			.parent().parent().find("div").eq(index).addClass("selected").siblings().removeClass("selected");
	});
	//尺寸选择
	$(".goodsinfo .box ul .li3 .ul2 li").click(function(){
		txt = $(this).html();
		$(this).addClass("cur").siblings().removeClass("cur")
		.parent().parent().find("strong").html(txt)
	}).eq(0).click()
	//总价
	var price =parseFloat($(".goodsinfo .box ul .strong").find("strong").html()).toFixed(2);
	var num =1
	$("#num_sort").change(function(){
		num = parseInt($(this).val());
		$(".goodsinfo .box ul .pro_price strong").html(num*price);
	})
	
	//模态框
	$(".goodsinfo .cart a").click(function(e){
		$("#basic-dialog-ok").modal();
		$("#basic-dialog-ok .tips .tips-content").html("您购买的商品为："+$(".goodsinfo h4").eq(0).text()+'；尺寸是：'
		+$(".goodsinfo .box ul .li3 strong").html()+"；颜色是："+$(".goodsinfo .box ul .color strong").html()+"；数量是："+num+"；总价是："+$(".goodsinfo .box ul .pro_price strong").html()+"元。")
		return false;
		
	})
//	$(".goodsinfo .box .score ul li").mouseover(function(){
//		var list = $(this).index()+1;
//		var posi =list*$(this).height()+80
//		console.log(posi)
//		$(".score ul").eq(0).css("background-position","0px -"+posi+"px");
//	})
//	.click(function(){
//		var list = $(this).index()+1;
//		console.log(list)
//		var posi =list*$(this).height();
//		$(".score ul").eq(0).css("background-position","0px -"+posi+"px");
//	})
//	.mouseleave(function(){
//		$(".score ul").eq(0).css("background-position","0px 0px");
//	})
//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
});