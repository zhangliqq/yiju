/**
 * Created by Administrator on 2016/10/11.
 */


/*

$('.agree').click(function(){
    $('').toggleClass('agree2')

});




$('.nc').click(function(){
    $('.conner').show();
    $('.sc').hide()
});

*/

$('.bj').click(function(){
    $('.conner').toggle();
    $('.sc').toggle()
});



$('.agree').click(function(){
    $('.agree span').toggleClass('agree2')

});







/*------------------------------------------------------------------------------------*/





var off={};  //创建一个空对象，用来存储每个需要提交时验证是否通过，
             //当每个input失去焦点的时候获取这个input的类，
             // 当然这个类可以是其他的标识，他只起到的作用是用来甄别这个输入框正确的完成了输入，
             // 然后把这个名字当对象的属性存储到off里面，值为true或false



$('form input[name=lname]').on({
    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
    },
    blur:function () {
        var val=$(this).val();
        isinput(/[\w]{6,20}/.test(val),this);
    }
});


$('form input[name=lpassword]').on({
    focus: function () {
         console.log($(this).tagName);


        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur:function () {
        var val=$(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val),this);

    }
});
$('form .in3').on({
    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(val==''?false:val === $('form input[name=lpassword]').val(), this);
    }
});


$('form input[name=lemail]').on({
    focus: function () {

        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur:function () {
        var val=$(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val),this);

    }
});

$('form input[name=lphone]').on({
    focus: function () {

        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur:function () {
        var val=$(this).val();
        isinput(/^1[0-9]{10}$/.test(val),this);
    }
});

function isinput(put,_this){
    if(put){
        $(_this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
        // console.log(_this.className);
        off[_this.className]=true
    }else {

        $(_this).css({
            'border-color': '#981616'
        });
        off[_this.className]=false;
        //console.log($(_this).name());
    }

}




/*

$('form .landing').click(function () {
    var isform=true;
    for (var i in off){
        if(!off[i]){
            isform=false;
        }
    }

    if($('.agree2').attr('class')==''){
        isform=false;

    }

    if(isform){
        console.log($('form').serialize());
        $.ajax({
            type:'post',
            url:'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType:'jsonp',
            data:$('form').serialize(),
            success: function (data) {
                alert(data.resultCode);
                if(data.resultCode=='0000'){
                    location.href='http://192.168.0.181/yiju/html/land.html'
                }

            }
        })
    }

});

*/






$('form .landing').click(function () {

    /*------------------------------------第一种-------------------------------------------*/
    //多项选择，一次全部判断，
    var isform = true;
    if (isform) {
        $('form input').blur();
 /*       if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
            $('form input[name=lname]').blur();
        }
        if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
            $('form input[name=lpassword]').blur();
        }
        if (!($('form .in3').val() === $('form input[name=lpassword]').val()) || $('form .in3').val()=='' ) {
            $('form .in3').blur();
        }
        if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
            $('form input[name=lemail]').blur();
        }
        if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
            $('form input[name=lphone]').blur();
        }*/
        if (!($('.agree span').attr('class') == '')) {
            isform=false;
            alert('请选择');
           // console.log('选我选我啊');
        }
    }


   for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
   // console.log(isform);






    if (isform) {
        // alert('成功');
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                //alert(data.resultCode);
                if (data.resultCode == '0000') {

                    $('.mask').show();
                    $('.bingo').show();

                    $('.shut').click(function () {
                        $('.mask').hide();
                        $('.bingo').hide();
                    });


                    $('.login').click(function(){
                        $.ajax({
                            type: 'post',
                            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
                            dataType: 'jsonp',
                            data: {
                                lname:$('form input[name=lname]').val(),
                                lpassword:$('form input[name=lpassword]').val()
                            },
                            success: function (data) {
                                if (data.resultCode == 0000) {

                                    location.href ='http://192.168.0.181/yiju/html/land.html';

                                } else {
                                    alert('失败')
                                }
                            }
                        })
                    });
                }
            }
        })
    }

    /*------------------------------------第一种结束-------------------------------------------*/




    /*------------------------------------第二种起始-------------------------------------------*/

    /*
     //第二种写法---单项选择每次只会判断一个
     if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
     $('form input[name=lname]').blur();
     } else if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
     $('form input[name=lpassword]').blur();
     } else if (!($('form .input-3').val() === $('form input[name=lpassword]').val())) {
     $('form .input-3').blur();
     } else if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
     $('form input[name=lemail]').blur();
     } else if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
     $('form input[name=lphone]').blur();
     } else if (!$('.xieyi b').attr('class') == '') {
     alert('请选择');
     } else {
     $.ajax({
     type: 'post',
     url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
     dataType: 'jsonp',
     data: $('form').serialize(),
     success: function (data) {
     alert(data.resultCode);
     if (data.resultCode == '0000') {
     location.href = 'http://192.168.0.175/yiju/01/login.html'
     }

     }
     })
     }*/

    /*------------------------------------第二种结束-------------------------------------------*/

});

















