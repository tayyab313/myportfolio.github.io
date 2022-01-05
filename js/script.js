$(document).ready(()=>{
    $('#menu').click(()=>{
        $('#menu').toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',()=>{
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if($(window).scrollTop()<150)
        {
          $('.top').hide();
        }
        if($(window).scrollTop() >150)
        {
            $('.top').show();
        }
    });
    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();
    
        $('html, body').animate({
    
          scrollTop : $($(this).attr('href')).offset().top,
    
        },
          500, 
          'linear'
        );
    
      });
      $('input[type="checkbox"]').click((e)=>{
        
        $('body').toggleClass('light_mode');
        $('.heading').toggleClass('black_border');
        $('.education>.box-container>.box,.services>.box-container>.box').toggleClass('border_left');
        $('header').toggleClass('header_color');
        $('.slider').toggleClass('change');
        $('header>.user>img').toggleClass('border_color');
        $('.home>h3 ,.dark_color, .home>h1 ,.home p,.experienc,.about>.row>.info>h3>span,.services>.box-container>.box>h3,.education>.box-container>.box>h3,.services>.box-container>.box>p,.education>.box-container>.box>p,.heading,.text-deco').toggleClass('black_color');
        if($('.slider').hasClass('change'))
        {
          $('.dark_color').html('Change into Dark Mode')
        }
        else{
          $('.dark_color').html('Change into Light Mode')
        }
      });
});