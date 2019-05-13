$(function(){//PC端轮播图
	var i = 0;
	function src(){
		i++;
		if(i>=$("#banners").children("[id^=page]").length){
			i=0;
		}
		for(var i1 = 0;i1<$("#banners").children("[id^=page]").length;i1++){
			$("#banners").children("[id^=page]").eq(i1).css("left",(i1-i)*100+"%");
		}
	}
	var timer = setInterval(src,5000);
	$("#nextPage").click(function(){
		src();
		clearInterval(timer);
		timer = setInterval(src,5000);
	})
	//菜单栏（更多）
	$("#hamburger").click(function(){
		$("#menu_d").css("display","flex");
	})
	$("#t_more").click(function(){
		$("#menu_d").css("display","flex");
	})
	$("#cross").click(function(){
		$("#menu_d").hide();
	})
})
$(function(){//手机端轮播图
	var im = 0;
	function srcm(){
		im++;
		if(im>=$("#banners_m").children("[id^=pagem]").length){
			im=0;
		}
		for(var im1 = 0;im1<$("#banners_m").children("[id^=pagem]").length;im1++){
			$("#banners_m").children("[id^=pagem]").eq(im1).css("left",(im1-im)*100+"%");
		}
	}
	var timerm = setInterval(srcm,5000);
	$("#nextPage_m").click(function(){
		srcm();
		clearInterval(timerm);
		timerm = setInterval(srcm,5000);
	})
})
$(function(){//咖啡文化轮播图
	resWidth = $("#cultures_p").width()-$("#cultures").width();
	k = 0;
	if(resWidth<=0){
		$("#c_right").hide(0);
	}
	else{
		$("#c_right").css("display","flex");
	}
	$(window).resize(function(){
		resWidth = $("#cultures_p").width()-$("#cultures").width();
		if(resWidth<=0){
			$("#c_right").hide(0);
		}
		else{
			$("#c_right").css("display","flex");
		}
	})
	$("#c_right").click(function(){
		k++;
		$("#cultures_p").css("left",k*(-306)+"px");
		if((k*306)>=resWidth){
			$(this).hide(0);
		}
		if(k>0){
			$("#c_left").css("display","flex");
		}
	})
	$("#c_left").click(function(){
		k--;
		$("#cultures_p").css("left",k*(-306)+"px");
		if((k*306)<=resWidth){
			$("#c_right").css("display","flex");
		}
		if(k<=0){
			$(this).hide(0);
		}
	})
})