/**
 * Created by Administrator on 2016/10/19.
 */


/*
js放在上面

$(function () {


    $('.vv').click(function (){
        console.log("000");

        alert('000');
        $('.vv').css({'background':'#75a749'});
    });

});

*/

//var mm={price:k,shi:room};
//var arr=[1];

var AREA;
$('.box1 .classify0').click(function (){

    //console.log("000");
    $(this).addClass('color').siblings().removeClass('color');
    $('.box1 span').removeClass('color');
    AREA=$(this).html();
    Collect(1,AREA);
    //alert(AREA);
});

var PRICE;
$('.box2 .classify0').click(function (){

    //console.log("000");
    $(this).addClass('color').siblings().removeClass('color');
    $('.box2 span').removeClass('color');
    if($(this).html()=='500以下'||$(this).html()=='2000以上'){
        PRICE=$(this).html().slice(0,-2);
    }
    else{
        PRICE=$(this).html().slice(0,-1);
    }
    Collect(1,AREA,PRICE);
    //arr[1]=$(this).html().slice(0,-1);
    //Collect(1,arr[1])
});
var SHI;
$('.box3 .classify0').click(function (){

    //console.log("000");
    $(this).addClass('color').siblings().removeClass('color');
    $('.box3 span').removeClass('color');
    SHI=$(this).attr('id');
    Collect(1,AREA,PRICE,SHI);
});


$('.classify-sx .a').click(function () {

    $('.classify-sx .a ul').toggle();
});

var ROOM;
$('.a ul li').click(function () {

    $('.a span').text($(this).text());
    ROOM=$(this).attr('id');
    Collect(1,AREA,PRICE,SHI,ROOM);
});


$('.classify-sx .b').click(function () {

    $('.classify-sx .b ul').toggle();
});

var LEVEL;
$('.b ul li').click(function () {

    $('.b span').text($(this).text());
    LEVEL=$('.b span').html();
    //alert(LEVEL);
    Collect(1,AREA,PRICE,SHI,ROOM,LEVEL);
});


$('.c').click(function () {

    $('.c').toggleClass('e');
});


$('.d').click(function () {

    $('.d').toggleClass('e');
});


$('.g').click(function (){

    //alert("000");
    $(this).addClass('c-bg').siblings().removeClass('c-bg');
});


$('.s').click(function (){

    //alert("000");
    $(this).addClass('s-font').siblings().removeClass('s-font');
    $('.sangle1').addClass('s-bg');
});






var pageNo = 1;

Collect(pageNo);

$('.page0').on('click', 'a', function () {
    //alert('000');

    // console.log($('.page0 a').last().prev().html());

    if ($(this).html() == '上一页') {
        if (!(pageNo == 1)) {
            pageNo -= 1;
            Collect(pageNo);
        }
    } else if ($(this).html() == '下一页') {
        if (!(pageNo == $('.page0 a').last().prev().html())) {
            pageNo += 1;
            Collect(pageNo);
        }
    } else {
        pageNo = parseInt($(this).html());
        Collect(pageNo);
    }

});

function Collect(pageNo,AREA,PRICE,SHI,ROOM,LEVEL) {

    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryHousesBySql.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo,
            region:AREA,
            price: PRICE,
            shi:SHI,
            room:ROOM,
            level:LEVEL
        },
        success: function (data) {
            console.log(data);


    /*        console.log(data.data[0]);
            console.log(data.data[1]);*/
            console.log(data.success);


            if (data.success) {

//插入图片数据

                var item = '';
                for (var i = 0; i < data.data.length; i++) {

                    item += '<div class="line1" id="' + data.data[i].id + '"><div class="exp-box f-clear">' +
                        '<a href=""><img src="http://www.zhijunxing.com/yiju/upload/' + data.data[i].photo.split(',')[0] + '" alt="" class="exp-img"></a>' +
                        '<ul class="explain00"><li class="explain1"><strong class="explain2">' + data.data[i].tittle + ' ' + data.data[i].room + '<b> ' + data.data[i].type + '</b></strong>' +
                        ' <i class="spring man"></i> <i class="spring cc"></i></li>' +
                        '<li class="explain1"><span class="ask">' + data.data[i].room + ' | ' + data.data[i].rentway + ' | ' + data.data[i].hlevel + ' | ' + data.data[i].floor + '/' + data.data[i].countfloor + '层</span></li>' +
                        '<li class="explain1"><i class="spring map"></i><span class="ask">' + data.data[i].address + '</span></li>' +
                        '<li class="explain1"><span class="tag tag1">' + data.data[i].hlevel + '</span><span class="tag tag2">' + data.data[i].paymethod + '</span></li></ul>' +
                        '<ul class="money f-clear"><li class="price">' + data.data[i].price + '<span class="price1">/月</span></li>' +
                        '<li class="date">' + data.data[i].addtime + '</li></ul></div></div>';

                }

                $('.house').html(item);




//分页

                 var a;
                 if (Math.ceil(data.rowCount / 2) <= 5) {

                 a = '<a href="###" class="page">上一页</a>';
                 for (var i = 1; i <= Math.ceil(data.rowCount / 2); i++) {
                 if (i == pageNo) {
                 a += '<a href="###" class="page page-checked">' + i + '</a>'
                 } else {
                 a += '<a href="###" class="page">' + i + '</a>'
                 }
                 }
                 a += '<a href="###" class="page">下一页</a>';

                 } else if (pageNo <= 3) {

                 a = '<a href="###" class="page">上一页</a>';
                 for (var i = 1; i <= 4; i++) {
                 if (i == pageNo) {
                 a += '<a href="###" class="page page-checked">' + i + '</a>'
                 } else {
                 a += '<a href="###" class="page">' + i + '</a>'
                 }
                 }
                 a += '<b> ··· </b><a href="###" class="page">' + Math.ceil(data.rowCount / 2) + '</a><a href="###" class="page">下一页</a>';

                 } else if (pageNo + 2 >= Math.ceil(data.rowCount / 2)) {
                 a = '<a href="###" class="page">上一页</a>' +
                 '<a href="###" class="page">1</a>' +
                 '<b> ··· </b>';
                 for (var i = 3; i >= 0; i--) {
                 if (Math.ceil(data.rowCount / 2) - i == pageNo) {
                 a += '<a href="###" class="page page-checked">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                 } else {
                 a += '<a href="###" class="page">' + (Math.ceil(data.rowCount / 2) - i) + '</a>'
                 }
                 }
                 a += '<a href="###" class="page">下一页</a>';

                 } else if (pageNo + 2 < Math.ceil(data.rowCount / 2)) {
                 a = '<a href="###" class="page">上一页</a>' +
                 '<a href="###" class="page">1</a>' +
                 '<b> ··· </b>' +
                 '<a href="###" class="page">' + (parseInt(pageNo) - 1) + '</a>' +
                 '<a href="###" class="page page-checked">' + pageNo + '</a>' +
                 '<a href="###" class="page">' + (parseInt(pageNo) + 1) + '</a>' +
                 '<b> ··· </b>' +
                 '<a href="###" class="page">' + Math.ceil(data.rowCount / 2) + '</a>' +
                 '<a href="###" class="page">下一页</a>';
                 }


                 $('.page0').html(a);



            }
            else {

                alert('找不到哦找不到~');

            }

        }
    });

}







