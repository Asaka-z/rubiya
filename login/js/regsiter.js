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
                console.log(p);
                if (this.value == '') {
                    p.innerHTML = '请填写信息!';
                    return;
                }
                var reg = /^1[35789]\d{9}$/
                if (reg.test(this.value)) {
                    sendAjax('../php/regsiter.php',{
                        data:{
                            username:this.value,
                        },
                        success(res){
                            console.log(res);  
                            res = JSON.parse(res);
                            if(res.code == 0){
                                //用户不存
                                $p[0].innerHTML = '';
                            }else{
                                //用户名已经存在
                                $p[0].innerHTML = '手机号码已注册';
                          }  
                        }
                    });
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
        }
}
}())


