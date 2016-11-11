/**
 * Created by Administrator on 2016/10/7.
 */
$('.add-li').on('click',function(){
    $('.add0').text($(this).text());
    $('.add').hide();
});


$('.add-san').on('click',function(){
    $('.add').show();
});


$('.add0').on('click',function(){
    $('.add').show();
});




var SHI,TING,WEI,TYPE,PRICE,ADDRESS,VILL,AREA,ROOM,
    FEAT,FUNI,PAY,FLOOR,CTFOOR,RENT,LINKMAN,DIRECTION,LEVEL,
    TITLE,LINKPHONE,CONDITION;


$('.class .bb').click(function (){

    $(this).children().addClass('cc');
    $(this).siblings().children().removeClass('cc');
    //RENT=$(this).next().html();
    //alert($(this).next().html());
    //console.log($('.class .bb').length);
 /*   RENT=decodeURI(aa());
    console.log(RENT);*/
});


function aa() {

    for (var i = 0; i < $('.class .bb').length; i++) {
        if ($('.class .bb').eq(i).children().hasClass("cc")) {
            RENT = $('.class .bb').eq(i).next().text();
            //console.log(RENT);
        }

    }
    return RENT;
}


$('.person .bb').click(function (){

    $(this).children().addClass('cc');
    $(this).siblings().children().removeClass('cc');
    //TYPE=$(this).next().html();
    console.log(bb());
    //TYPE=decodeURI(bb());
    //console.log(TYPE);
    //alert($(this).next().html());
});


function bb() {


    for (var i = 0; i < $('.person .bb').length; i++) {
        if ($('.person .bb').eq(i).children().hasClass("cc")) {
            TYPE = $('.person .bb').eq(i).next().text();
            //console.log(TYPE);
        }
    }
    return TYPE;
}




$('.addf-box .select').on({
    click:function(){
        $('.add-f').toggle();
    }
});

$('.add-f').on({
     mouseleave:function () {
     $('.add-f').hide();
     }
});

$('.add-li-f').on('click',function () {

    $('.select-f').text($(this).text());
  //  DIRECTION=$('.select-f').text();
    //alert(DIRECTION);
});

/*function cc() {


    for (var i = 0; i < $('.person .bb').length; i++) {
        if ($('.person .bb').eq(i).children().hasClass("cc")) {
            TYPE = $('.person .bb').eq(i).next().text();
            //console.log(TYPE);
        }
    }
    return TYPE;
}*/


$('.addx-box .select').on('click',function(){
    $('.add-x').toggle();
});

$('.add-li-x').on('click',function(){
    $('.select-x').text($(this).text());
    //LEVEL=$('.select-x').text($(this).text());
    LEVEL=$('.select-x').text();

});

$('.add-x').on({
    mouseleave:function () {
        $('.add-x').hide();
    }
});


$('.addp-box .select').on('click',function(){

    $('.add-p').toggle();
});

$('.add-li-p').on('click',function(){


    $('.select-p').text($(this).text());
    PAY=$('.select-p').text($(this).text());

});

$('.add-p').on({
    mouseleave:function () {
        $('.add-p').hide();
    }
});



$('.woof').click(function (){

    $(this).children().toggle();
    $(this).toggleClass('woof-b');
    FUNI=$(this).text().slice(0,-1);
    //alert(FUNI);


});


/****************************上传图片****************************/
var fileIds = [], num = 1;
$('#dv').on('change', 'input[type=file]', function () {
    var reader = new FileReader(), val = $(this).get(0).files[0];
    reader.readAsDataURL(val);
    console.log(typeof reader);
    reader.onload = function () {
        fileIds.push('file' + num);
        $('#' + fileIds[num - 1]).hide();
        num += 1;
        $('.pictures').append('<img style="width:200px;height:200px;" src="' + reader.result + '"/>');
        $('#dv').append('<input class="file" type="file" name="file" id="file' + num + '">');
    }
});

$('#sub').click(function () {
    $.ajaxFileUpload({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/addHouses.action',
        secureuri: false,
        fileElementId: fileIds,
        data:data,
        async: true,
        cache: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        success: function (data) {
            console.log(data);
        }
    })
});




$('form input').serialize();
console.log($('form input').serialize());

//console.log($('form').serialize().split('&'));

//console.log($('form').serialize().split('&').length);
var attr=$('form input').serialize().split('&');
//console.log(attr);
//console.log(attr[0]);
//console.log(attr[0].split('='));
var attr0=attr[0].split('=');
//console.log(attr0[1]);

console.log(decodeURI(attr0[1]));

VILL=decodeURI(attr[0].split('=')[1]);
//alert(VILL);

SHI=attr[1].split('=')[1];
console.log(SHI);

TING=attr[2].split('=')[1];
console.log(TING);

WEI=attr[3].split('=')[1];
console.log(WEI);

AREA=attr[4].split('=')[1];
console.log(AREA);

FLOOR=attr[5].split('=')[1];
console.log(FLOOR);

CTFOOR=attr[6].split('=')[1];


PRICE=attr[7].split('=')[1];


TITLE=decodeURI(attr[8].split('=')[1]);
console.log(TITLE);

FEAT=decodeURI(attr[9].split('=')[1]);
console.log(FEAT);

ADDRESS=decodeURI(attr[10].split('=')[1]);
console.log(ADDRESS);

LINKMAN=decodeURI(attr[11].split('=')[1]);
console.log(LINKMAN);

LINKPHONE=attr[12].split('=')[1];
console.log(LINKPHONE);

ROOM=SHI+'室'+TING+'厅'+WEI+'卫';
console.log(ROOM);

CONDITION=VILL+ROOM;
console.log(CONDITION);




$.ajax({
    type: 'post',
    url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
    dataType: 'jsonp',
    data: {
        lname: 'ggggggg',
        lpassword: '1111111'
    },
    success: function (data) {
        //  console.log(data.resultCode);

    }
});






/***************************添加函数**************************/

function addHouses(){

    RENT=decodeURI(aa());
    TYPE=decodeURI(bb());
    PAY=$('.select-p').html();


    DIRECTION=$('.select-f').text();
    LEVEL=$('.select-x').html();
    FUNI=$('.woof-b').text().slice(0,-1);

/*
    if($('.class .bb').children().hasClass("cc")){
        //alert("ccc");
        console.log($('.class .bb').sibling().text());
    }
*/





   //alert(LEVEL);


    $.ajaxFileUpload({
        url: 'http://www.zhijunxing.com/yiju/addHouses.action',
        type: 'post',
        data: {
            shi: SHI,
            ting: TING,
            wei: WEI,
            type: TYPE,
            price: PRICE,
            address: ADDRESS,
            villageName: VILL,
            area: AREA,
            room: ROOM,
            features: FEAT,
            furniture: FUNI,
            paymethod: PAY,
            floor: FLOOR,
            countfloor: CTFOOR,
            rentway: RENT,
            linkman: LINKMAN,
            direction: DIRECTION,
            hlevel: LEVEL,
            tittle:  TITLE,
            linkphone: LINKPHONE,
            condition:CONDITION
        },

        dataType: 'jsonp',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
        success: function(data){
            alert("aaaa");
            console.log(data);
        },
        error: function(){
            alert("error");
        }
    });

}











$.ajax({
 type: 'post',
 url: 'http://www.zhijunxing.com/yiju/queryHousesBylid.action',
 dataType: 'jsonp',
 data: {
 pageNo: '7'
 },
 success: function (data) {
 // console.log(data.resultCode);

 }
 });





/*


////多选框数据的接收处理
var checkboxStr=function(){
    var str="";
    var cm=document.getElementsByName("configure");
    for(var i=0;i<cm.length;i++){
        if(cm[i].checked==true){
            str +=cm[i].value + ",";
        }
    }
    if (str.length > 0) {
        str = str.substr(0, str.length - 1);
    }
    return str;
};

/!* ------------------------------------------------------------*!/
/!*全局变量*!/
var num=2;
var fileIds=[];
fileIds.push('file1');
function addFile(obj){
    var file = obj.files[0];
    var imgUrl = window.URL.createObjectURL(file);
    $(".pictures").append('<img src="'+imgUrl+'" style="width:200px;height:200px;float:left;" </img>');
    $("input[type=file]").hide();
    var item='<input type="file"  name="file" id="file'+num+'" onchange="addFile(this);"/>';
    $("#addbq").append(item);
    fileIds.push('file'+num);
    num=num+1;
}


//获取file地址
var getImgURL=function (node) {
 var imgURL = "";

 var file = null;
 if( node.files && node.files.item(0)){
 file = node.files.item(0);
 }else if(node.files && node.files[0]) {
 file = node.files[0];
 }
 //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径
 try{
 //Firefox7.0
 imgURL =  file.getAsDataURL();
 //alert("//Firefox7.0"+imgRUL);
 }

catch(e){
    //Firefox8.0以上
    imgRUL = window.URL.createObjectURL(file);
    //alert("//Firefox8.0以上"+imgRUL);
}
//catch(e)({
//    //这里不知道怎么处理了，如果是遨游的话会报这个异常
//    //支持html5的浏览器,比如高版本的firefox、chrome、ie10
//    if (node.files && node.files[0]) {
//        var reader = new FileReader();
//        reader.onload = function (e) {
//            imgURL = e.target.result;
//        };
//        reader.readAsDataURL(node.files[0]);
//    }
//}
return imgURL;
};

*/




















/*
 var attr1=attr[1].split('=');
 console.log(attr1[1]);
 //alert(typeof (attr1[1]));

 var attr2=attr[2].split('=');
 console.log(attr2[1]);
 var attr3=attr[3].split('=');
 console.log(attr3[1]);
 var attr4=attr[4].split('=');
 console.log(attr4[1]);
 */

//var str = (href.substr(href.indexOf("?")+1)).split("&");






/*        data: {
 shi: SHI,
 ting: TING,
 wei: WEI,
 type: TYPE,
 price: PRICE,
 address: ADDRESS,
 villageName: VILL,
 area: AREA,
 room: ROOM,
 features: FEAT,
 furniture: FUNI,
 paymethod: PAY,
 floor: FLOOR,
 countfloor: CTFOOR,
 rentway: PRENT,
 linkman: LINKMAN,
 direction: DIRECTION,
 level: LEVEL,
 tittle:  TITLE,
 linkphone: LINKPHONE,
 condition:CONDITION
 },

 data: {
 shi: '4',
 ting: '2',
 wei: '2',
 type: '个人',
 price: '1200',
 address: '小店',
 villageName: '小店小区',
 area: '120',
 room: '4室2厅2卫',
 features: '没有特色',
 furniture: '床',
 paymethod: '押一付三',
 floor: '4',
 countfloor: '12',
 rentway: '整租',
 linkman: '小高',
 direction: '南',
 level: '精装修',
 tittle: '没有标题',
 linkphone: '12345678998',
 condition: '小店小区4室2厅2卫'
 },
 */