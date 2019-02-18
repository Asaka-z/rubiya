// 二级菜单
var slide = (function () {
    var $ul = $('.topnav');
    var $hua = $('#slide');
    var $hua2 = $('#slides');
    var $sli = $('.sli');
    var $liAll = $ul.children('li');
    var $AAll = $liAll.children('a');
    var $minul = $('.iplist');
    var $left = $('.lef');
    var $rig = $('.rig');
    var $a2 = $AAll.eq(1);
    var val = $AAll.html();
    console.log($hua2);
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $AAll.eq(1).mouseover(function () {
                _this.shw();
            })
            $AAll.eq(2).mouseover(function () {
                $hua2.stop().animate({ height: 300, opacity: 1 })
                $('.slis').stop().animate({ height: 300, opacity: 1 })
                $('.iplists').show();
                $('.lefs').show();
                $('.rigs').show();
            })
            $liAll.eq(1).mouseleave(function () {
                _this.hde();
            })
            $liAll.eq(2).mouseleave(function () {
                $hua2.stop().animate({ height: 0 }, 150)
                $('.slis').stop().animate({ height: 0 }, 150)
                $('.iplists').hide();
                $('.lefs').hide();
                $('.rigs').hide();
            })
            $left.click(function () {
                //$minul.animate({left:10},150)
                $minul.animate({ left: -1000 }, 500)
                $minul.animate({ left: -1050 }, 150)
                $minul.animate({ left: -1000 }, 150)


            })
            $('.rigs').click(function () {
                $('.iplists').animate({ left: 10 }, 500)
                $('.iplists').animate({ left: 0 }, 150)
                $('.iplists').animate({ left: 10 }, 150)
                //$ul2.animate({left:-1000},500)

            })
            $('.lefs').click(function () {
                //$('.iplists').animate({left:10},150)
                $('.iplists').animate({ left: -1000 }, 500)
                $('.iplists').animate({ left: -1050 }, 150)
                $('.iplists').animate({ left: -1000 }, 150)


            })
            $rig.click(function () {
                $minul.animate({ left: 10 }, 500)
                $minul.animate({ left: 0 }, 150)
                $minul.animate({ left: 10 }, 150)
                //$ul2.animate({left:-1000},500)

            })
        },
        shw() {
            $hua.stop().animate({ height: 300, opacity: 1 })
            $sli.stop().animate({ height: 300, opacity: 1 })
            $minul.show();
            $left.show();
            $rig.show();
        },
        hde() {
            $hua.stop().animate({ height: 0 }, 150)
            $sli.stop().animate({ height: 0 }, 150)
            $minul.hide();
            $left.hide();
            $rig.hide();
        }

    }
}())
slide.init();
// 回到顶部
var Htop = (function () {
    var $dai = $('#dai');
    var $code = $('.code');
    var $list2 = $('.list2');
    var $gotop = $('#gotop');
    var $up = $('.up');
    var b = null;
    var istop = true;
    console.log($up);
    return {
        init() {
            this.event()
        },
        event() {
            var _this = this;
            $dai.mouseover(function () {
                $code.show(250);
            })
            $list2.mouseleave(function () {
                $code.hide(100);
            })
            document.body.onscroll = function () {
                var scroll = document.documentElement.scrollTop;
                if (scroll > 500) {
                    $gotop.show(250);
                } else {
                    $gotop.hide(100);
                }
                if (!stop) {
                    clearInterval(b);
                }
                istop = false;
            }
            $up.click(function () {
                var scroll = document.documentElement.scrollTop;
                var b = setInterval(function () {
                    var scroll = document.documentElement.scrollTop;
                    var speed = Math.floor(-scroll / 100);
                    document.documentElement.scrollTop = scroll + speed;
                    if (scroll == 0) {
                        clearInterval(b);
                    }
                }, 1)
            })
        }
    }
}())
Htop.init();
//点击小图边大图
var Large =(function(){
    $('.lar li img').click(function(){
        var imgsrc = $(this).attr('src');
        var i = imgsrc.lastIndexOf('.');
        var unit = imgsrc.substring(i);
        imgsrc = imgsrc.substring(0,i);
        var imgsrc_jq = imgsrc + unit;
        $('#bigImg').attr({'src':imgsrc_jq});
        
    })
    $('.lar li').click(function(){
        console.log(111);
        $(this).addClass('active').siblings().removeClass('active');
    })
}())
// 分享
var fen = (function(){
    $('.box-1').mouseover(function(){
        $('.imgs').show();
        $('.box-txt').show();
    })
    $('.box-1').mouseleave(function(){
        $('.imgs').hide();
        $('.box-txt').hide();
    })
}())
// 详情与参数
var dis = (function(){
    var Allli = $('.list').children('li');
    Allli.eq(0).click(function(){
        $('.shangping').show();
         $('.canshu').hide();
    })
    Allli.eq(1).click(function(){
        $('.shangping').hide();
        $('.canshu').show();
   })
}())
// 切换颜色
var  cut = (function(){
    var Allli = $('.lists').children('li');
    var $liAll  = $('.lar').children('li');
        Allli.eq(1).click(function(){
            console.log($('#ims').attr('src'));
            $liAll.eq(0).addClass('active').siblings().removeClass('active');
            $('#bigImg').attr({'src':"../images/x/pics1.png"}) ;
            $('#ims').attr({'src':"../images/x/pics1.png"}) ;
            $('#ims2').attr({'src':"../images/x/pics2.png"}) ;
            $('#ims3').attr({'src':"../images/x/pics3.png"}) ;
            $('#ims4').attr({'src':"../images/x/pics4.png"}) ;
            
        })
        Allli.eq(0).click(function(){
            console.log($('#ims').attr('src'));
            $liAll.eq(0).addClass('active').siblings().removeClass('active');;
            $('#bigImg').attr({'src':"../images/x/pic1.png"}) ;
            $('#ims').attr({'src':"../images/x/pic1.png"}) ;
            $('#ims2').attr({'src':"../images/x/pic2.png"}) ;
            $('#ims3').attr({'src':"../images/x/pic3.png"}) ;
            $('#ims4').attr({'src':"../images/x/pic4.png"}) ;
            
        })
}())
//购物车{
var shop = (function(){
    var $div = document.querySelector('.page');
    console.log($div);
    return{
        init(){
            this.getData();
            this.event()
        },
        event(){
            var _this = this;
            $div.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.className === 'col2'){
                    
                    console.log(111);
                    $('#bigImg').attr({'src':"../images/x/pics1.png"}) ;
                    $('#ims').attr({'src':"../images/x/pics1.png"}) ;
                    $('#ims2').attr({'src':"../images/x/pics2.png"}) ;
                    $('#ims3').attr({'src':"../images/x/pics3.png"}) ;
                    $('#ims4').attr({'src':"../images/x/pics4.png"}) ;
                    
                    
                }
                if(target.className === 'col1'){
                    $('#bigImg').attr({'src':"../images/x/pic1.png"}) ;
                    $('#ims').attr({'src':"../images/x/pic1.png"}) ;
                    $('#ims2').attr({'src':"../images/x/pic2.png"}) ;
                    $('#ims3').attr({'src':"../images/x/pic3.png"}) ;
                    $('#ims4').attr({'src':"../images/x/pic4.png"}) ;
                }
                if(target.nodeName === 'A'){
                    var index = target.parentNode.parentNode.getAttribute('index');
                    var obj = {
                        count:1,
                        ..._this.data[index]
                    }
                    _this.setData(obj);
                    
                    
                }
            }
        },
        getData(){
            var _this = this;
            sendAjax('../json/data.json',{
                success(data){
                    var data = JSON.parse(data)
                    console.log(data);
                    _this.innertData(data) ;
                }
            })
        },
        innertData({code,data}){
            this.data = data;
            console.log(this.data);
            if(code == 200){
                var arr = [];
                data.forEach((item,index) => {
                    var $div = `
                    <div id="${item.id}" index =${index}>
                    <div class="box-hong">
                    <span>${item.name}</span>
                    <span>￥${item.price}</span>
                    <a href="#">查看详情</a>
                </div>
                <div class="box-riqi">
                    <span>【2月1日~2月17日】红魔Mars全系列可享六期免息</span>
                </div>
                <div class="box-dizhi">
                    <p>
                        <img src="../images/x/5ae00f8b59e2087.png">
                        <span>广东省 深圳市 宝安区</span>
                        <span>修改</span>
                    </p>
                    <p>现货</p>
                </div>
                <div class="box-color">
                    <p>1、选择颜色</p>
                    <ul class="lists">
                        <li class="col1">曜石黑</li>
                        <li class="col2">迷彩色</li>
                        <li>烈焰红</li>
                        <li>RNG六周年纪念版</li>
                    </ul>
                </div>
                <div class="box-banben">
                    <p>2、选择版本</p>
                    <p>
                        <span>8GB+128GB</span>
                        <span>6GB+64GB</span>
                    </p>
                    
                </div>
                <div class="box-taocan">
                    <p>3、选择优惠配件套餐</p>
                    <p>
                        <span>仅手机</span>
                    </p>
                    
                </div>
                <div class="box-fuwu">
                    <p>4、选择保障服务(可选) <a href="#">了解"nubia保障服务"</a></p>
                    <span>红魔Mars（6+64G）屏碎宝（1年内保修1次） ￥149.00</span>
                    <span>屏碎宝（半年内保修1次） ￥99.00</span>
                </div>
                <div class="box-huabei">
                    <h2>5、支持花呗分期：</h2>
                    <p>
                        <span>￥954.12*3</span>
                        <span>(含￥64.35手续费)</span>
                    </p>
                    <p>
                        <span>￥487.32*6</span>
                        <span>(含￥125.91手续费)</span>
                    </p>
                    <p>
                        <span>￥250.65*12</span>
                        <span>(含￥209.85手续费)</span>
                    </p>

                </div>
                <div class="box-shang">
                    <p>您选择的商品：</p>
                    <p>${item.ps} 屏碎宝（半年内保修1次）</p>
                </div>
                <div class="box-mia">
                    <a href="cat.html">
                        立即购买
                    </a>
                </div>
                <div class="box-zongji">
                    <p>总计：<span>￥${item.price}</span></p>
                </div> 
                </div>
                    `
                    arr.push($div);
                });
                $div.innerHTML = arr.join('');
            }
        },
        setData(data){
            var shopList = localStorage.getItem('shopList')  || '[]';
            shopList = JSON.parse(shopList);
            //如果商品不存在，添加一条新数据
            //如果商品已经存在，数量累加即可
            for(var i = 0;i < shopList.length;i++){
                var item = shopList[i];
                if(item.id == data.id){
                    //商品已经存在
                    item.count = Number(item.count) + Number(data.count);
                    break;
                }
            }
            if(i == shopList.length){
                //商品不存在
                shopList.push(data);
            }
            localStorage.shopList = JSON.stringify(shopList);
            //alert('加入购物车成功');
        }
    }
    
    }())
    shop.init();

