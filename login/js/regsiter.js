var regsiter=(function(){
    var psw=document.querySelector("#passwordMobile");
    return{
        init(){
            this.event();
        },
        event(){
            var _this=this;
            psw.onblur = function () {
                var p = this.nextElementSibling
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
                var reg =/^[0-9a-zA-Z]{6,20}$/;
                if (reg.test(this.value)) {
                    p.innerHTML = '验证成功'; 
                }
                else {
                    p.innerHTML = "密码格式错误！";
                }
            }
            document.addEventListener('DOMContentLoaded', function() {
                var username = document.querySelector('#mobile');
                var usninf = document.querySelector('.icon-id');
                var isok = false;
                var btn = document.querySelector('#regButton'); //name top 不能用作id名

                //验证用户名是否存在：不存在才能注册
                username.onblur = function() {
                    var val = username.value.trim(); //失去焦点的时候拿到表单数据
                    //发送请求
                    var url = '../php/checkname.php';
                    var data = `username=${val}&time=${new Date()}`;
                    ajax('POST', url, data, function(str) { //这个形参会接收成功得到的数据
                        console.log(str); //
                        if(str == '0') { //已存在
                            usninf.innerHTML = '该用户名太受欢迎啦，请换一个';
                            usninf.style.color = 'red';
                        } else {
                            //不存在
                            usninf.innerHTML = '用户名可用';
                            usninf.style.color = 'red';
                            isok = true;
                        }
                    });
                }

                //注册功能
                btn.onclick = function() {
                    if(isok) {
                        //可以注册的用户名
                        var val1 = username.value.trim();
                        var val2 = psw.value.trim();
                        //发送请求
                        var url = '../php/regsiter.php';
                        var data = `username=${val1}&psw=${val2}&time=${new Date()}`;
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


