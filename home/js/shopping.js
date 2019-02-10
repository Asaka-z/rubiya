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
                $hua2.animate({ height: 300, opacity: 1 })
                $('.slis').animate({ height: 300, opacity: 1 })
                $('.iplists').show();
                $('.lefs').show();
                $('.rigs').show();
            })
            $liAll.eq(1).mouseleave(function () {
                _this.hde();
            })
            $liAll.eq(2).mouseleave(function () {
                $hua2.animate({ height: 0 }, 150)
                $('.slis').animate({ height: 0 }, 150)
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
            $hua.animate({ height: 300, opacity: 1 })
            $sli.animate({ height: 300, opacity: 1 })
            $minul.show();
            $left.show();
            $rig.show();
        },
        hde() {
            $hua.animate({ height: 0 }, 150)
            $sli.animate({ height: 0 }, 150)
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
            $liAll.eq(0).addClass('active').siblings().removeClass('active');;
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
