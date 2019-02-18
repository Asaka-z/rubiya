var login = (function () {
    var navTab = document.querySelector(".navTab")
    var tabmobile = document.querySelector("#tab-mobile");
    var tabemail = document.querySelector("#tab-email");
    var regId = document.querySelector(".reg-id");
    var regPhone = document.querySelector(".reg-phone");
    var mobile = navTab.querySelector("#tab");
    var email = navTab.querySelector("#email");
    var username = document.querySelector("#username");
    var phone = document.querySelector("#moblie");
    var yz = document.querySelector("#mobile_captcha");
    var number = document.querySelector('.number');
    var phoneCode = document.querySelector('#mobileValidateCode');
    var btCode = document.querySelector('#btn-code-mobile');
    return {
        init() {
            this.event();
            // this.time();
        },
        event() {
            var _this = this;
            tabemail.addEventListener("click", function () {
                regPhone.style.display = "block";
                regId.style.display = "none";
                regPhone.checked = "checked";
                mobile.className = "tab-btn";
                email.className = "tab-btn cur";
            }, false);

            tabmobile.addEventListener("click", function () {
                regId.style.display = "block";
                regPhone.style.display = "none";
                regId.checked = "checked";
                mobile.className = "tab-btn cur";
                email.className = "tab-btn ";
            }, false);

            username.onblur = function () {
                var p = this.nextElementSibling;
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
                var reg = /^[A-Za-z_]{6,10}$/
                if (reg.test(this.value)) {
                    p.innerHTML = '验证成功';
                }
                else {
                    p.innerHTML = "邮箱/手机号码/用户名错误";
                }
            }
            phone.onblur = function () {
                var p = this.nextElementSibling
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
                var reg = /^1[35789]\d{9}$/
                if (reg.test(this.value)) {
                    p.innerHTML = '验证成功';
                }
                else {
                    p.innerHTML = "手机号码格式错误";
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
            btCode.onclick = function () {
                 btCode.value=60;
                 
                 var timer=setInterval(function(){
                    if(btCode.value == 1) {
                       clearInterval(timer);
                    }
                    btCode.value--;
                    if(btCode.value == 0){
                        btCode.value="获取验证码"
                      }
                },1000);
                
            }
            phoneCode.onblur = function () {
                var p = btCode.nextElementSibling
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
            }
               //DOMContentLoaded就是dom内容加载完毕。
            document.addEventListener('DOMContentLoaded', function() {
                //1.找节点
                var username = document.querySelector('#username');
                // var isok = false;
                var btn = document.querySelector('#login_btn_id'); //name top 不能用作id名
                var psw = document.querySelector('#password');
    
                btn.onclick = function() {
                    var val1 = username.value.trim();
                    var val2 = psw.value.trim();
                    if(val1 && val2) {
                        //非空
                        var url = '../php/login.php';
                        var data = `username=${val1}&psw=${val2}&time=${new Date()}`;
                        ajax('POST', url, data, function(str) {
                            console.log(data);
                            if(str=='yes'){
                                location.href='../../home/html/index.html';
                            }else{
                                alert("账户/密码不正确");
                            }
                        });
                    } else {
                        alert('信息不完整');
                    }
                }
            });
        } 
    }
}())


