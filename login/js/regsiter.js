var regsiter=(function(){
    var phone=document.querySelector("#mobile");
    var password=document.querySelector("#passwordMobile");
    return{
        init(){
            this.event();
        },
        event(){
            var _this=this;
              phone.onblur = function () {
                var p = this.nextElementSibling
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
              
        }
       
}
}())


