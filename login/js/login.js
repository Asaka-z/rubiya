var login=(function(){
    var navTab=document.querySelector(".navTab")
    var tabmobile=document.querySelector("#tab-mobile");
    var tabemail=document.querySelector("#tab-email");
    var regId=document.querySelector(".reg-id");
    var regPhone=document.querySelector(".reg-phone");
    var mobile=navTab.querySelector("#tab");
    var email=navTab.querySelector("#email");
    var username = document.querySelector("#username");
    var phone=document.querySelector("#moblie"); 
    var yz=document.querySelector("#mobile_captcha");
    return{
        init(){
            this.event();
            this.time();
        },
        event(){
            var _this=this;
            tabemail.addEventListener("click",function(){
                    regPhone.style.display="block";
                    regId.style.display="none";
                    regPhone.checked="checked";
                    mobile.className="tab-btn";
                    email.className="tab-btn cur";
            },false);

            tabmobile.addEventListener("click",function(){
                regId.style.display="block";
                regPhone.style.display="none";
                regId.checked="checked";
                mobile.className="tab-btn cur";
                email.className="tab-btn ";
            },false);
             
            username.onblur = function () {
                var p = this.nextElementSibling;
                if (this.value== '') {
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
            yz.onblur = function () {
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
                    p.innerHTML = "验证码不正确，请重新输入";
                }
            }
        }
    }
}())