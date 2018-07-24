$(function() {
   var lunbo=$('.img');
   var li=$('.img li')
    var lunbolWidth = li.width(); //获取li  标签的宽度
    console.log(lunbolWidth);
    var point=$('.dian').children()  //小圆点对象的数组 到时候需要设置小圆点的
    var tab = $('.news-nav').children() //
    console.log(tab);
    
    var navNews = $('.zyc-nav-right div>ul')  //获取这个对象的
    var count = 0;  //定义一个索引
    var timer = null;  //定时器
    function move() {
            timer = setInterval(function () {
            count += 1

            if (count > 2) {//这个是判断是不是到第三图片了  如果是  马上切换到第一张
                count = 0
            }
   
            $('.img').animate({
                left: -(count) * lunbolWidth    //这个是给轮播图ul向左移动
            })
            /* 这里就是对应小圆点的  我在index.css写了一个active  通过添加类名变颜色 */
            $(point[count]).addClass("active").siblings().removeClass("active");  //轮播图到了哪张   小圆点对应的就是哪个

        }, 2000)
    }


    move()  //这是第一次调用轮播图



/* 给父元素通过事件委托给下面小圆点注册一个点击事件  这样可以获取到对应的点击是哪个小圆点 */
    $('.dian').on('click','li',function(e) {
          console.log(e);
          /* 点击下满的point显示对应的图片 但是要先清除定时器  不然这个移动和定时器移动会一起   然后点击移动完了之后再调用定时器 */
          clearInterval(timer)
         var index= $(this).index()   //获取到小圆点对应的索引值
         count=index
        $('.img').stop().animate({
            left: -index * lunbolWidth    //通过动画函数移动ul来事轮播图移动起来
        }) 
        $(point[index]).addClass("active").siblings().removeClass("active");  //给小圆点添加一个class然后去掉除了当前元素其他兄弟元素的active都移除
        move()
            
    })


    /* tab显示显示和隐藏 */
    $('.news-nav').on('click','li',function () {
    
        var index=$(this).index();  //获取当前点击元素的索引值索引值
            /* 点击之后给上面的nav添加一个class  然后是背景改变 */
        $(tab[index]).addClass("active").siblings().removeClass("active")
        /* 通过索引值使对应的内容显示出来 */
        $(navNews[index]).show().siblings().hide()
        console.log(index);
        
        
    })
    /* 显示 */
    $('li').on('click',function( ) {
       /* 获取到当前li标签里面的子元素 */
     var prop=  $(this).children()
        console.log($(this).children());
        /* 让第二个子元素隐藏 */
        $(prop).eq(1).fadeIn()
        $(this).siblings("li").children("div").fadeOut()
    })

    /* 隐藏 */
    $('.close-btn').on('click',function (e) {
       e.stopPropagation()  //阻止事件冒泡  不阻止时间冒泡会有问题 你可以注释这句代码点击看一下是什么效果
        $('.info-pop').fadeOut()  //隐藏
    })
    
    
})