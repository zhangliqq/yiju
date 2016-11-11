/**
 * Created by Administrator on 2016/10/10.
 */

$('.agree').click(function(){
    $('.agree span').toggleClass('agree2')

});




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
    blur:function () {
        var val=$(this).val();
        isinput(val===$('form input[name=lpassword]').val(),this);
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



$('form .landing').click(function () {

    /*------------------------------------第一种-------------------------------------------*/
    //多项选择，一次全部判断，
    var isform = true;

    if (isform) {
        $('form input').blur();

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



    if (isform) {

        //alert('成功');
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                //alert(data.resultCode);
                console.log(data);
                if (data.resultCode == '0000') {
                    location.href='http://192.168.0.181/yiju/html/易居首页.html';
                }
            }
        })
    }

});