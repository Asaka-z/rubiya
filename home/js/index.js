// 二级菜单
var slide = (function () {
    var $ul = $('.topnav');
    var $hua = $('#slide');
    var $sli = $('.sli');
    var $liAll = $ul.children('li');
    var $AAll = $liAll.children('a');
    var $minul = $('.iplist');
    var $left = $('.lef');
    var $rig = $('.rig');
    var $ul2 = $('.iplist2');
    var $a2 = $AAll.eq(1);
    var val = $AAll.html();
    console.log(val);
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $AAll.eq(1).mouseover(function(){
                _this.shw();
            })
            $AAll.eq(2).mouseover(function(){
                _this.shw();
            })
            $liAll.eq(1).mouseleave(function () {
                _this.hde();
            })
            $liAll.eq(2).mouseleave(function () {
                _this.hde();
            })
            // $liAll.eq(2).hover(function(){
            //     _this.shw();
            // },function(){
            //     _this.hde();
            // })
            $left.click(function(){
                //$minul.animate({left:10},150)
                $minul.animate({left:-1000},500)
                $minul.animate({left:-1050},150)
                $minul.animate({left:-1000},150)

                
            })
            $rig.click(function(){
                $minul.animate({left:10},500)
                $minul.animate({left:0},150)
                $minul.animate({left:10},150)
                //$ul2.animate({left:-1000},500)
                
            })
        },
        shw() {
            $hua.animate({ height: 300, opacity: 1 })
            $sli.animate({ height: 300, opacity: 1 })
            $minul.show();
            $ul2.show();
            $left.show();
            $rig.show();
        },
        hde() {
            $hua.animate({ height: 0 }, 150)
           $sli.animate({ height: 0 }, 150)
            $minul.hide();
            $ul2.hide();
            $left.hide();
            $rig.hide();
        }

    }
}())
slide.init();
// 回到顶部
var Htop = (function(){
    var $dai = $('#dai');
    var $code = $('.code');
    var $list2 = $('.list2');
    var $gotop = $('#gotop');
    var $up = $('.up');
    var b = null;
    var istop = true;
    console.log($up);
    return{
        init(){
            this.event()
        },
        event(){
            var _this = this;
            $dai.mouseover(function(){
                $code.show(250);
            })
            $list2.mouseleave(function(){
                $code.hide(100);
            })
            document.body.onscroll = function(){
                var scroll = document.documentElement.scrollTop;
                if(scroll > 500){
                    $gotop.show(250);
                }else{
                    $gotop.hide(100);
                }
                if(!stop){
                    clearInterval(b);
                }
                istop =false;
            }
            $up.click(function(){
                var scroll = document.documentElement.scrollTop;
                var b = setInterval(function(){
                    var scroll = document.documentElement.scrollTop;
                      var speed = Math.floor(-scroll/100);
                      document.documentElement.scrollTop = scroll + speed;
                      if(scroll == 0){
                          clearInterval(b);
                      }
                    },1)
            })
        }
    }
}())
Htop.init();
//轮播图
var banner = (function(){
    var index = 1;
    var timer = null;
    var size = $('._slide').children().length;
    var picwidth = $('.pic').width();
    console.log($('#banner'));
    return{
        init(){
            this.event();

        },
        event(){
            var _this = this;
            $('#banner').mouseover(function(){
             clearInterval(timer);
            });
            $('#banner').mouseleave(function(){
                _this.autoSlide();
            });
            $('._slide').mouseleave();
            $('.next').click(function(){
                console.log(111);
                
                index++;
                _this.changeImg();
                _this.changeDots();
            });
            $('.prev').click(function(){
                index--;
                _this.changeImg();
                _this.changeDots();
            });
            $('.dot').click(function(event){
                var target = event.target;
                index = $(target).index() + 1;
                _this.changeDots();
                _this.changeImg();
            })
        },
        //自动播放
        autoSlide(){
            var _this = this;
            timer = setInterval(function(){
                index++;
               _this.changeImg();
               _this.changeDots();
            },1000) 
        },
        //图片切换
        changeImg(){
            var slidewidth = -1 * picwidth * index;
            console.log(slidewidth);
            $('._slide').animate({
                'left':slidewidth + 'px'
            },500);
            if(index >= size - 1){
                $('._slide').animate({
                    'left':-picwidth + 'px'
                },0)
                index = 1
            }
            if(index < 1){
                $('._slide').animate({
                    'left':-(size - 2) * picwidth + 'px'
                },0)
                index = size - 2;
            }
        },
        //小方块切换
        changeDots(){
            $('.dot').eq(index - 1).addClass('active').siblings().removeClass('active');
        },
        //

    }
}())
banner.init();