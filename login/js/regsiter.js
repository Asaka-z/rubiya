var regsiter=(function(){
    var phone=document.querySelector("#mobile");
    var password=document.querySelector("#passwordMobile");
    var number=document.querySelector('.number');
    var yz=document.querySelector('#mobile_captcha')
    var phoneCode=document.querySelector('#mobileValidateCode');
    var btCode=document.querySelector('#btn-code-mobile');
    return{
        init(){
            this.event();
        },
        event(){
            var _this=this;
              phone.onblur = function () {
                var p = this.nextElementSibling;
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
                else {
                    p.innerHTML = "手机号码格式错误";
                }
            }
            password.onblur = function () {
                var p = this.nextElementSibling
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
                var reg=/^(\w){6,20}$/;
                if(reg.test(this.value)){
                    p.innerHTML='验证成功'
                }
            }
            number.onclick = function () {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
                let str = '';
                while (str.length < 4) {
                    var iNum = parseInt(Math.random() * 100)
                    while (iNum > 36) {
                        iNum = parseInt(Math.random() * 100)
                    }
                    str += arr[iNum];
                }
                var p = number.childNodes[1];
                p.value = str;
            }
            yz.onblur = function () {
                console.log(1);
                var span = number.nextElementSibling;
                if (this.value == '') {
                    span.innerHTML = '请填写信息!';
                    return;
                }
                if (this.value == number.childNodes[1].value) {
                    span.innerHTML = '验证成功';
                }
                if (this.value != number.childNodes[1].value) {
                    span.innerHTML = '验证失败';
                }
            }
            var timer=null;
            btCode.onclick = function () {   
                var time=60;
                 timer=setInterval(function(){
                     console.log(time );
                    if(time <= 1) {
                        btCode.value="获取验证码";
                        btCode.disabled=false;
                        clearInterval(timer);
                    }else {
                        btCode.disabled=true;
                        time --;
                        btCode.value=time+'s';
                    }
                },100);
                
            }
            phoneCode.onblur = function () {
                var p = btCode.nextElementSibling
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
                if(this.value != ''){
                    p.innerHTML = '验证成功';
                }
            }
            document.addEventListener('DOMContentLoaded', function() {
                var usninf = document.querySelector('.icon-id');
                var isok = false;
                var btn = document.querySelector('#regButton'); //name top 不能用作id名

                //验证用户名是否存在：不存在才能注册
                phone.onblur = function() {
                    var val = phone.value.trim(); //失去焦点的时候拿到表单数据
                    //发送请求
                    var url = '../php/checkname.php';
                    var data = `username=${val}&time=${new Date()}`;
                    ajax('POST', url, data, function(str) { //这个形参会接收成功得到的数据
                        console.log(str); //
                        if(str == '0') { //已存在
                            usninf.innerHTML = '用户名不可用';
                        } else {
                            //不存在
                            usninf.innerHTML = '用户名可用';
                            isok = true;
                        }
                    });
                }

                //注册功能
                btn.onclick = function() {
                    if(isok) {
                        //可以注册的用户名
                        var val1 = phone.value.trim();
                        var val2 = password.value.trim();
                        //发送请求
                        var url = '../php/regsiter.php';
                        var data = `phone=${val1}&psw=${val2}&time=${new Date()}`;
                        ajax('POST', url, data, function(str) {
                            console.log(str);
                            if(str == 'yes') { //成功注册跳转到登陆页面
                                location.href = 'login.html';
                            } else {
                                alert('注册失败');
                            }
                        });
                    }
                }
            }); 
                 
        }
    }
}())
