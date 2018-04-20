$(document).ready(function() {
	//tab切换
	$(".toggle").mouseover(function() {
		var a = $(this).next()[0];
		$(this).next().show()
			.parent().mouseleave(function() {
				$(this).find(a).hide();
			});
	});
	//结束
	//-------------------------------------------------------------------------------
	//更换皮肤
	function bg(id){
			$("#"+id).addClass("selected").siblings().removeClass("selected")
			$("#css").attr("href","css/"+id+".css")
			$.cookie("COOKIE_NAME", id , { path: '/', expires: 10 });
	}
	$(".bg_color li").click(function(){
		bg(this.id);
		console.log(this.id);
	})
//	var Cookie = $.cookie("COOKIE_NAME")
	if ($.cookie("COOKIE_NAME")) {
		bg($.cookie("COOKIE_NAME"));
	}else{
		bg("bg0");
	}
	//更换皮肤end
	
});