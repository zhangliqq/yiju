/**
 * Created by Administrator on 2016/10/9.
 */

$('.add-li').on('click',function(){
    $('.add0').text($(this).text());
    $('.add').hide();
});

$('.add-san').on('click',function(){
    $('.add').show();
});

$('.rectangle').on('click',function(){
    $('.add').show();
});

$('.add').mouseleave(function(){
    $('.add').hide();
});



$('.do1').click(function(){
    $('.head-sangler,.rectangler').show();
    $('.zl').hide();
});

$('.do2').click(function(){

    $('.zl').show();
    $('.head-sangler,.rectangler').hide();
});



/**
 * 使用此函数，需要传递三个参数，
 * 第一个参数为对象，第二个，第三个参数为是否生成左右按钮和，下边圆点，可选参数
 *
 *
 * 第一个参数为对象，
 * {
 * element：$('.banner')为轮播图ul的父级元素，必选参数
 * time：轮播图的时间间隔,默认为3000  ，可选参数
 * left：为自定义的左边按钮元素，  若设置的话需将原始的左右按钮不要生成
 * right：为自定义的右边按钮元素
 * oli：显示区域内也就是element内，显示的li的个数,可选参数，默认为1，最小为1
 *
 * }
 * 第二个参数为是否生成左右控制，默认为true  ，可选为false
 * 第三个参数为是否生成下边圆点，默认为true  ，可选为false
 *
 * */
jQuery.fn.carousel =function (sett,off,dot) {

    if(off == undefined|| off == true ){
        off=true;//默认左右控制
    }else {
        off=false;//默认左右控制
    }
    if(dot == undefined|| dot == true ){
        dot=true;//默认圆点
    }else {
        dot=false;//默认圆点
    }

    var btn='<a href="###" style="display: inline-block;margin: 0 5px;width: 14px;height: 14px;background-color: #7a7a7a;border-radius: 50%;"></a>';
    var len=sett.element.children('ul').children('li').length-1;
    var width=sett.element.children('ul').children('li').outerWidth(true);
    for (var i=0;i<len;i++){
        btn +='<a href="###" style="display: inline-block;margin: 0 5px;width: 14px;height: 14px;background-color: #7a7a7a;border-radius: 50%;"></a>';
    }
    sett.element.children('ul').css('width',width*(len+1));
    //  sett.element.css('width',width);
    if(off){
        sett.element.append(' <div class="banner-off" style="display: none;"> <a href="###"  style="background-color: rgba(0, 0, 0, 0.3);color: #fff;font-size: 30px;font-family: simsun;width: 26px;line-height: 60px;text-align: center;position: absolute;top: 50%;margin-top: -30px;"><</a> <a href="###"   style="right:0;background-color: rgba(0, 0, 0, 0.3);color: #fff;font-size: 30px;font-family: simsun;width: 26px;line-height: 60px;text-align: center;position: absolute;top: 50%;margin-top: -30px;">></a> </div>')
    }
    if(dot){
        $('<div class="banner-dot"  style="width: 100%;text-align: center;position: absolute;bottom: 8px;"></div>').append(btn).appendTo(sett.element);
        sett.element.children('div.banner-dot').last().children('a').eq(0).css('background-color','#ff4b3f');
    }
    var defaultset={
        time:3000,//时间间隔
        left:sett.element.children('div.banner-off').eq(0).children('a').eq(0),
        right:sett.element.children('div.banner-off').eq(0).children('a').eq(1),
        oli:1//
    };
    sett = $.extend({},defaultset,sett);
    console.log(sett);
    var index = 0, timer;
    sett.element.hover(function () {
        $(this).children('div.banner-off').first().show();
        clearInterval(timer)
    }, function () {
        $(this).children('div.banner-off').first().hide();
        timers()
    }).mouseleave();
    sett.left.hover(function () {
        if(!off){
            clearInterval(timer)
        }
    },function(){
        if(!off){
            timers()
        }

    });
    sett.right.hover(function () {
        if(!off){
            clearInterval(timer)
        }

    },function(){
        if(!off){
            timers()
        }
    });

    sett.element.children('div.banner-dot').last().children('a').mouseover(function () {
        $(this).css('background-color','#ff4b3f').siblings().css('background-color','#7a7a7a');
        index = $(this).index();
        animate()
    });

    sett.left.click(function () {
        index--;
        if (index == -1) index = len-(sett.oli-1);
        animate()
    });
    sett.right.click(function () {
        index++;
        if (index+(sett.oli-1) == (len+1)) index = 0;
        animate()
    });

    function animate() {
        sett.element.children('ul').stop(true).animate({left: -(width * index)});
        sett.element.children('div.banner-dot').last().children('a').css('background-color','#7a7a7a').eq(index).css('background-color','#ff4b3f')
    }

    function timers(){
        timer = setInterval(function () {
            index++;
            if (index+(sett.oli-1) == (len+1)) index = 0;
            console.log(width);
            animate()
        },sett.time)
    }
};










$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/loginSession.action',
    dataType: 'jsonp',
    success: function (data) {

        console.log(data.success);

        if(data.success){

            $('.wel-c').html('欢迎 '+data.data[0].lname).attr('href','http://192.168.0.181/yiju/html/个人中心.html');
            $('.reg-to').html('退出').attr({
                'onclick':'quitLogin()',
                'href':'###'
            });
        }

    }
});



function quitLogin(){
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            if(data.resultCode=='0000'){

                $('.wel-c').eq(0).html('登录');
                $('.reg-to').eq(2).html('注册').removeAttr('onclick');

            }

        }
    });

}

$('.wel-c').eq(0).click(function(){

    location.href='http://192.168.0.181/yiju/html/land.html';

});



$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/queryHousesTop.action',
    dataType: 'jsonp',
    success: function (data) {
        if (data.success) {
            //console.log(data.data.length);
            console.log(data.data);
            var item = '';
            for(var i in data.data ){
                item+='<li class="recommend-img">' +
                    '<a href=""><img class="head-img3" src="http://www.zhijunxing.com/yiju/upload/'+
                    data.data[i].photo.split(',')[0]+'"/></a><h3 class="head-img2t0">'+data.data[i].villageName+'</h3><span class="head-img2t1">'+data.data[i].room+'</span><span class="head-img2t2">'+data.data[i].price+'</span><span class="head-img2t1" style="font-size: 12px"> 元/月</span></li>'
            }
            //console.log(item);

            $('.lbo').append(item);


            $('.lbo').carousel({
                element: $('.content-lbo'),
                time: 2000,
                left: $('.arrow-springl'),
                right: $('.arrow-springr'),
                oli: 4
            }, false, false);
        }

    }
});













