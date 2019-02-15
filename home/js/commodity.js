
				$(function() {

					//代码初始化
					var length = $(".img li").length;
					for(var i = 1; i <= length; i++) {
						var li = "<li>" + i + "</li>";
						$(".num").append(li);
					};

					//手动控制轮播效果
					$(".img li").eq(0).show();
					$(".num li").eq(0).addClass("active");
					$(".num li").mouseover(function() {
						$(this).addClass("active").siblings().removeClass("active");
						var index = $(this).index();
						i = index;
						$(".img li").eq(index).fadeIn(1500).siblings().fadeOut(1500);
					})

					//自动
					var i = 0;
					var t = setInterval(move, 4000);
					//核心向左的函数
					function moveLeft() {
						i--;
						if(i == -1) {
							i = length - 1;
						}
						$(".num li").eq(i).addClass("active").siblings().removeClass("active");
						$(".img li").eq(i).fadeIn(1500).siblings().fadeOut(1500);

					}
					//核心向右的函数
					function move() {
						i++;
						if(i == length) {
							i = 0;
						}
						$(".num li").eq(i).addClass("active").siblings().removeClass("active");
						$(".img li").eq(i).fadeIn(1500).siblings().fadeOut(1500);

					}
					//定时器的开始与结束
					$("#out").hover(function() {
						clearInterval(t);
					}, function() {
						t = setInterval(move, 3000)
					})
					//左边按钮的点击事件
					$("#out .left").click(function() {
						moveLeft();
					})
					//右边按钮的点击事件
					$("#out .right").click(function() {
						move();
					})
				})
