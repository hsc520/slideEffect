$(function(){
    var decH=document.documentElement.clientHeight;
    var decW=document.documentElement.clientWidth;
    $(".pop_con").css({"top": (decH-100)/2+"px","left": "50%"});
    $(".main").css({"height":decH+"px","width":decW+"px"});
    $(".ul_img li").css({"height":decH+"px","width":decW+"px"});
    $(".popup").css({"height":decH+"px","width":decW+"px"});
    $(".button").css({"height":decH+"px"});
    $(".ul_img li p img").attr("ondragstart","return false");
    var btn_i=0;
    pageNum();
    $(".button_down").click(function () {
        if (btn_i>=$(".ul_img li").size()-1){
            btn_i=$(".ul_img li").size()-1;
            first("已是第最后一页!");
        }else {
            btn_i++;
        }
        moveM();
        scaleSmall();
        pageNum();
    });
    $(".button_up").click(function () {
        if (btn_i<=0){
            btn_i=0;
            first("已是第一页!");
        }else{
            btn_i--;
        }
        moveM();
        scaleSmall();
        pageNum();
    });
    $(".pop_title span").click(function () {
        hide()
    });
    $(".pop_foot button").click(function () {
        hide()
    });
    
    $(".cursor").click(function () {
        scaleBig()
    });

    $(".cursor01").click(function () {
        scaleSmall()
    });
    
    //  视频无法正常播放  
//  falseMv("视频无法正常播放")
	
	//  当前页码
	function pageNum(){
		$(".page").html(btn_i+1+"/"+$(".ul_img li").size());
	}
	//  视频无法正常播放  
	function falseMv(falseHtml){
		first(falseHtml);
	}
    // 弹窗提示
    function first(selHtml) {
        $(".popup").show();
        $(".pop_body").html(selHtml);
        $(".pop_con").animate({
            width:"300px",
            height:"150px",
            top:(decH-250)/2+"px",
            left:(decW-300)/2+"px"
        },200);
        setTimeout(function () {
            $(".pop_main").fadeIn()
        },100)
    }
    // 弹窗关闭
    function hide() {
        $(".popup").hide();
        $(".pop_con").animate({
            width:"0px",
            height:"0px",
            top:(decH-100)/2+"px",
            left:"50%"
        },0);
        $(".pop_main").hide();
    }
    // 上下滚动
    function  moveM() {
        $(".ul_img").animate({
            marginTop:-document.documentElement.clientHeight*btn_i+"px"
        });
    }
    // 放大
    function scaleBig() {
        $(".cursor").hide();
        $(".cursor01").show();
        $(".ul_img li").eq(btn_i).find('p').css({
            "width":document.documentElement.clientWidth+"px",
            "margin":"0"
        });
    }
    // 缩小
    function scaleSmall() {
        $(".cursor01").hide();
        $(".cursor").show();
        $(".ul_img li").eq(btn_i).find('p').css({
            "width":80+"%",
            "margin":"50px auto"
        });
    }
    // 视频、音频
    $(".ul_img li").each(function () {
        $(this).find("p .mv").css({
            "marginTop":(document.documentElement.clientHeight-$(this).find("p .mv").height())/2-50+"px"
        });
    })
 



});

