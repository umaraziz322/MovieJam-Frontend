// JavaScript Document
 $(document).ready(function() {
    /* Movies Top Slider */
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    }); 


    /* Hero Overlays Script */
    $('#heroDown').click(function(){
        $('.heroShare, .heroRequest').css('display', 'none');
        $('.heroDownload').css('display', 'block');
    });
    $('#heroShare').click(function(){
        $('.heroDownload, .heroRequest').css('display', 'none');
        $('.heroShare').css('display', 'block');
    });
    $('#heroReq').click(function(){
        $('.heroDownload, .heroShare').css('display', 'none');
        $('.heroRequest').css('display', 'block');
    });
    $('.heroHomeBtn').click(function(){
        $('.heroDownload, .heroShare, .heroRequest').css('display', 'none');
    });
    
    
    /* Geners Animation Section */
    $('.gMovies').hide();
    $('.gActionMovies').show();
    let col1 = 'black';
    let col2 = 'white';
    $('#gAction').css('color', col1);

    $('#gAction').click(function(){
        $('.gMovies').hide();
        $('.gActionMovies').fadeIn(1500);
        $('#gAction').css('color', col1);
        $('#gThriller, #gRomantic, #gComedy, #gFantasy, #gScifi').css('color', col2);
    });
    $('#gThriller').click(function(){
        $('.gMovies').hide();
        $('.gThrillerMovies').fadeIn(1500);
        $('#gThriller').css('color', col1);
        $('#gAction, #gRomantic, #gComedy, #gFantasy, #gScifi').css('color', col2);
    });
    $('#gRomantic').click(function(){
        $('.gMovies').hide();
        $('.gRomanticMovies').fadeIn(1500);
        $('#gRomantic').css('color', col1);
        $('#gThriller, #gAction, #gComedy, #gFantasy, #gScifi').css('color', col2);
    });
    $('#gComedy').click(function(){
        $('.gMovies').hide();
        $('.gComedyMovies').fadeIn(1500);
        $('#gComedy').css('color', col1);
        $('#gThriller, #gRomantic, #gAction, #gFantasy, #gScifi').css('color', col2);
    });
    $('#gFantasy').click(function(){
        $('.gMovies').hide();
        $('.gFantasyMovies').fadeIn(1500);
        $('#gFantasy').css('color', col1);
        $('#gThriller, #gRomantic, #gComedy, #gAction, #gScifi').css('color', col2);
    });
    $('#gScifi').click(function(){
        $('.gMovies').hide();
        $('.gScifiMovies').fadeIn(1500);
        $('#gScifi').css('color', col1);
        $('#gThriller, #gRomantic, #gComedy, #gFantasy, #gAction').css('color', col2);
    });

    /* Featured Movies Slider */
    $('#autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth2').removeClass('cS-hidden');
        } 
    });
    
    /* Testimonials & user Reviews Slider */
    $('#autoWidth3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth3').removeClass('cS-hidden');
        } 
    });
  });