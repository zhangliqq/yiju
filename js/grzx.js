/**
 * Created by Administrator on 2016/10/13.
 */


/**************************我的收藏******************************/

$('.sc').click(function () {

    $('.sc').addClass("wz-self");
    $('.bj').removeClass("wz-self");
    $('.SC').show();
    $('.BJ').hide();

    var pageNo = 1;

    Collect(pageNo);

    $('.page0').on('click', 'a', function () {

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


    //  pageNo=$('.page0 .page-checked').html();
    // Collect(pageNo);

});


$('#all0').click(function () {

    $('#all0').addClass('Color');
    $('#all1').removeClass('Color');
    $('#all2').removeClass('Color');
});


$('#all1').click(function () {

    $('#all1').addClass('Color');
    $('#all0').removeClass('Color');
    $('#all2').removeClass('Color');
});


$('#all2').click(function () {

    $('#all2').addClass('Color');
    $('#all0').removeClass('Color');
    $('#all1').removeClass('Color');
});




/*
//添加收藏

for (var i = 400; i < 600; i++) {
    $.ajax({
        type: 'POST',
        url: 'http://www.zhijunxing.com/yiju/addCollect.action',
        dataType: 'jsonp',
        data: {
            hid: 479//火男
        },
        success: function (data) {
            console.log(data);
        }
    });
}



//取消收藏

for (var i = 400; i < 600; i++) {
    $.ajax({
        type: 'get',
        url: 'http://www.zhijunxing.com/yiju/delCollect.action',
        dataType: 'jsonp',
        data: {
            hid: 479
        },
        success: function (data) {
            console.log(data);
        }
    });
}
*/




function Collect(pageNo) {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/queryCollectHouses.action',
        dataType: 'jsonp',
        data: {
            pageNo: pageNo
        },
        success: function (data) {
            console.log(data.rowCount);
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
                        '<ul class="money f-clear"><li class="option">删除×</li><li class="price">' + data.data[i].price + '<span class="price1">/月</span></li>' +
                        '<li class="date">' + data.data[i].addtime + '</li></ul></div></div>';

                }

                $('.wdsc').html(item);


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


                $('.option').click(function () {
                    //alert('000');
                    $('.mask').show();
                    $('.tk').show();
                    $('.tk1-inp1').click(function () {
                        //alert('000');
                    var inpid = $(this).attr("id");
                    //alert(inpid);
                    //alert(typeof (inpid));
                    if (inpid == "11") {
                           // alert('000');
                            var DEL = parseInt($(".line1").attr("id"));

                            //console.log($(".line1").attr("id"));

                            $.ajax({
                                type: 'get',
                                url: 'http://www.zhijunxing.com/yiju/delCollect.action',
                                dataType: 'jsonp',
                                data: {
                                    hid: DEL
                                },
                                success: function (data) {
                                    //if (data.resultCode == '0000') { }
                                        alert("222");
                                        console.log(data);
                                        $("div").remove('#' + DEL);

                                }

                            });
                         }
                    });


                    $('.tk1-inp2').click(function () {

                        var inpid1 = $(this).attr("id");
                        if (inpid1 == "22") {
                            //alert('000');
                            $('.mask').hide();
                            $('.tk').hide();
                        }
                    });


                    $('.X').click(function () {
                        $('.mask').hide();
                        $('.tk').hide();
                    });

                });

            }
            else{

                alert('您没有收藏房源！');

             }

        }
    });
}

/**************************我的发布******************************/

































/**************************浏览历史******************************/


/**************************编辑资料******************************/


$('.bj').click(function () {
    //$('.bj').css({ color: "#fff", background: "#75a749" });
    //$(this).addClass('bj').siblings().removeClass('bj');
    $('.bj').addClass("wz-self");
    $('.sc').removeClass("wz-self");
    $('.BJ').show();
    $('.SC').hide();
});


$('.bjsay-box li').eq(0).click(function () {

    $('.name-t').hide();
    $('.name-t1').hide();
    $('.phof').show();
    $('.bjsay-box li').eq(0).addClass('Color');
    $('.bjsay-box li').eq(1).removeClass('Color');
    $('.bjsay-box li').eq(2).removeClass('Color');
//$('.phof').toggle();
//$('.agree span').toggleClass('agree2');
});


$('.bjsay-box li').eq(1).click(function () {

    $('.phof').hide();
    $('.name-t1').hide();
    $('.name-t').show();
    $('.bjsay-box li').eq(1).addClass('Color');
    $('.bjsay-box li').eq(0).removeClass('Color');
    $('.bjsay-box li').eq(2).removeClass('Color');

});


$('.bjsay-box li').eq(2).click(function () {

    $('.phof,.name-t').hide();
    $('.name-t1').show();
    $('.bjsay-box li').eq(2).addClass('Color');
    $('.bjsay-box li').eq(0).removeClass('Color');
    $('.bjsay-box li').eq(1).removeClass('Color');

});


/**************************修改密码******************************/

var pass;
$('.name-t1 input').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    }
});

$('.name-t1 input').eq(0).blur(function () {
    var val = $(this).val();
    console.log(val == pass);

    if (!(val == pass)) {
        $(this).css({
            'border-color': '#981616'
        });
    }
});
$('.name-t1 input').eq(1).blur(function () {
    var val = $(this).val();
    if (!(/^[a-zA-Z0-9][\w]{5,19}/.test(val))) {
        $(this).css({
            'border-color': '#981616'
        });
    }

});
$('.name-t1 input').eq(2).blur(function () {
    var val = $(this).val();
    if (!(val == '' ? false : val === $('.name-t1 input').eq(1).val())) {
        $(this).css({
            'border-color': '#981616'
        });
    }

});


$('.name-t1 button').click(function () {
    if (
        $('.name-t1 input').eq(0).val() == pass &&
        /^[a-zA-Z0-9][\w]{5,19}/.test($('.name-t1 input').eq(1).val()) &&
        $('.name-t1 input').eq(2).val() === $('.name-t1 input').eq(1).val()
    ) {
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
            dataType: 'jsonp',
            data: {
                lpassword: $('.name-t1 input').eq(2).val()
            },
            success: function (data) {
                console.log(data);
                if (data.resultCode == '0000') {
                    login();
                }
            }
        })
    }
});


/**************************修改昵称******************************/

$('.name-t input').on({

    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur: function () {
        var val = $(this).val();
        if (/[\w]{6,20}$/.test(val)) {
            $('.name-t button').click(function () {
                $.ajax({
                    type: 'post',
                    url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
                    dataType: 'jsonp',
                    data: {
                        lname: val
                    },
                    success: function (data) {
                        console.log(data);
                        if (data.resultCode == '0000') {
                            login();
                        }
                    }
                })
            })
        }
    }
});


/**************************整体动作、Ajax（&上传头像）******************************/

//获取登录信息

login();
function login() {
    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/loginSession.action',
        dataType: 'jsonp',
        success: function (data) {

            console.log(data);

            if (data.success) {

                pass = data.data[0].lpassword;
                console.log(pass);

                var a = '<a href="###">' + data.data[0].lname + '</a>' +
                    '<a href="###" onclick="quitLogin()">退出</a>';

                $('.register').html(a);

                $('.about-self p').html(data.data[0].lname);

                if (data.data[0].lphoto) {

                    $('.about-self img').attr('src', 'http://www.zhijunxing.com/yiju/upload/' + data.data[0].lphoto)

                } else {

                    alert('没有图片');
                }

            } else {

                location.href = 'http://192.168.0.181/yiju/html/land.html';

            }

        }
    });
}


//上传图片按钮

$('.phof').on('change', 'input', function () {

    if (typeof FileReader == 'undefined') {

        alert("检测到您的浏览器不支持FileReader对象！");
    }
    var reader = new FileReader(),
        val = this.files[0];
    reader.readAsDataURL(val);
    reader.onload = function () {

        $('.phof img').attr('src', reader.result);

    }
});


//点击保存，开始上传图片文件

$('.phof .save').click(function () {

    $.ajaxFileUpload({

        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
        secureuri: false,
        fileElementId: 'uploadPhoto',
        async: true,
        cache: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
        /*  success: function(data){
         console.log(data);
         alert(111);

         }  */

    });

    setTimeout(function () {

        login();

    }, 1000);


    //setTimeout(login, 1000);//一秒后在从新获取一次登录信息
});


//退出

function quitLogin() {

    $.ajax({
        type: 'post',
        url: 'http://www.zhijunxing.com/yiju/quitLogin.action',
        dataType: 'jsonp',
        success: function (data) {

            console.log(data);

            if (data.resultCode == '0000') {

                location.href = 'http://192.168.0.181/yiju/html/易居首页.html';
            }

        }
    });

}


/*



 $('.sc').css({ color: "#fff", background: "#75a749" });
 $(this).addClass('bj').siblings().removeClass('bj');
 $('.right').show();
 $('.explain').hide();

 $.ajax({
 type: 'post',
 url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
 dataType: 'jsonp',
 data: {
 lname:'hhhcccl',
 lpassword:'aaa111222'
 },
 success: function (data) {
 console.log(data.resultCode);

 }
 });



 $('#files').change(function () {

 if (typeof FileReader == 'undefined') {
 alert("检测到您的浏览器不支持FileReader对象！");
 }
 var reader = new FileReader();
 reader.readAsDataURL($('input').get(0).files[0]);
 console.log(typeof reader);
 reader.onload = function () {
 $('#box').append('<img src="' + reader.result + '"/>');
 $.ajax({
 type: 'post',
 url: 'http://www.zhijunxing.com/yiju/uqdateLandlord.action',
 dataType: 'jsonp',
 fileElementId:'files',
 success: function (data) {
 console.log(data);
 }
 })
 }
 });







 $('.name-t1 button').click(function () {
 var off=true;


 //  for (var i=0; i<$('.name-t1 input').length;i++){
 //  }


 console.log($('.name-t1 input').eq(0).css('border-top-color'));


 });

 */






















