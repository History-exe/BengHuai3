/*
** Create by 43845 on 2018/6/2
*/
$(function () {
    //需求1:给news-nav的li标签设置鼠标点击事件,添加类active,它的兄弟节点移除类active
    $('.big_bg .news-nav li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');

         //需求2:鼠标点击导航栏,导航列表对应出现;
         var index = $(this).index();
         $('.news_list').eq(index).addClass('selected').siblings('.news_list').removeClass('selected')
    })

    // $(".yellow").click(function(){
    //     $(this).fadeOut(500).siblings('div').fadeIn(500);
    // })
    
    //需求3:点击黄色按钮,第一个span标签内容改为"加载中",第二个span标签内容修改为"loading",随后变回原来的样子
    $('.yellowTop').on('click',function(){
        
        $(this).animate({
            'opacity':0
        },1000,function(){
            $(this).animate({
                "opacity":1
            },1000)
        })

        return false;
    })

    //需求4:鼠标移入小火箭.小火箭的图片变成gif
    $('.actGotop').on('mouseenter',function(){
        $(this).children("i").css({
            'background':'url("images/blog7year_gotopd.gif") no-repeat',
        })
    })

    //需求5:鼠标移出小火箭,小火箭的图片变回静态图
    $('.actGotop').on('mouseleave',function(){
        $(this).children('i').css({
            'background':'url("images/blog7year_gotop.png") no-repeat',
        })
    })

    //需求6:当被卷入的高度大于屏幕可视区的高度时,小火箭出现,否则隐藏
    // $(window).on('scroll',function(){
    //     var scrollTop = $(this).scrollTop();
    //     if(scrollTop >= 10){
    //         $('.actGotop').show()
    //     }else{
    //         $('.actGotop').hide()
    //     }
    // })

    //需求7:当鼠标点击小火箭的时候,缓缓回到顶部
    var goTop = document.querySelector(".actGotop");
    var timer = null;
    var target = 0;
    var leader = 0;
    window.onscroll = function(){
        scroll().scrollTop > 0 ? show(goTop) : hide(goTop);
        leader = scroll().scrollTop;
    }
    goTop.onclick = function(){
        target = 0;
        
        timer=setInterval(function(){
            leader = leader + (target-leader)/10
            window.scrollTo(0,leader);
            if(leader == target){
                clearInterval(timer);
                goTop.style.display = 'none';
            }
        },30)
    }

    function show(ele){
        ele.style.display = 'block'
      }
      
      function hide(ele){
        ele.style.display = 'none'
      }
    // $('.actGotop').on('click',function(){
    
    //     $(window).scrollTop()=0;

    // })
    //需求:鼠标滚动,角色进行切换
    $(".btn").on('click',function(){
        if($('.show')!=$('.p4')){
            $('.show').next().addClass('show').siblings('.female-role').removeClass('show')
        }else {
            $('.show').prev().addClass('show').siblings('.female-role').removeClass('show')
        }
       
    })
   
})