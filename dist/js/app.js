$(document).ready(function(){
    const scroll_top=$('.scroll-top');
    console.log(scroll_top);
    scroll_top.hide(300);
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            scroll_top.show(350);
        }else{
            scroll_top.hide(350);
        }
    });
    $(scroll_top).click(function(){
        $('html').animate({
            scrollTop:0
        },1000)
    });
   
    $(window).scroll(function(){
        // console.log($(document).scrollTop());
        // console.log(window)
        // console.log(document)
        const navs=$(document).scrollTop();
        if(navs>300){
            $('#navbar').css({
                'border-bottom': '3px solid  rgb(121, 56, 242)',
                'box-shadow':'none'
            })
        }else{
            $('#navbar').css({
                'border-bottom':'none',
                'box-shadow':'15px 15px 15px #ccc'
            })
        }
    });

    $('.next').click(function(){
        // console.log('click')

        let curentImage=$('.active');
        // console.log(curentImage);
        let nextImage=curentImage.next();
        console.log(nextImage.length);
        console.log(nextImage);
        if(nextImage.length){
            curentImage.removeClass('active').css('z-index','-10');
            nextImage.addClass('active').css('z-index','10')
        }
    });

    $('.prev').click(function () { 
        let currentImage=$('.active');
        let prevImage=currentImage.prev();
        if(prevImage.length){
            currentImage.removeClass('active').css('z-index','-10');
            prevImage.addClass('active').css('z-index','10');
        }
     })


});