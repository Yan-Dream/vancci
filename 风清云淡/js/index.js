$(document).ready(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/js/erji.json",
        dataType:"json",
        success:function(res){
            $.each(res,function(index,value){
                $.each(value.secondChild,function(ind,val){
                    console.log(value.secondChild[index])
                })
            })
        }
    })
    var mySwiper = new Swiper('.swiper1',{
        // lazy:true,
        effect:'hide',//切换效果
        // mousewheel:'true',//是否支持鼠标滚轮切换
        // preventInteractionOnTransition: true,//轮播过度时无法滑动
        loop:true,//是否循环播放
        speed:1000,//自动播放的速度
        autoplay:{
            delay:3000,//切换停止时间
            disableOnInteraction:false
        },
        on:{
            slideChangeTransitionStart:function(){
                $(".ban_h1").animate({"top":"80px"},0).fadeOut(0);
                $(".ban_btn").animate({"top":"60px"},0).fadeOut(0);
            },
            slideChangeTransitionEnd:function(){
                $(".ban_h1").animate({"top":"0px"},0).fadeIn(1000);
                $(".ban_btn").delay(200).animate({"top":"0px"},0).fadeIn(1000);
            }
        },
        pagination:{
            el:".swiper-pagination",//初始化下边导航按钮
            clickable:true,//是否能点击切换
            // type:'',//小圆点样式
            // renderBullet:function(index,className){//自定义样式的回调函数
            //     return "<span class="+className+">"+(index+1)+"</span>"
            // }
        },
        navigation:{
            nextEl:".swiper-button-next",//初始化左右箭头
            prevEl:".swiper-button-prev",//初始化左右箭头
        }
    })
})