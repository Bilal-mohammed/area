
    var l = "";
    var p = "";
    var lpro = "";
    var currentportfolio = 0;
    var swiper = "";
    var swiperready = 0;
    var inproject = 0;
    var discroll;
    var called = 0;
    var activepage;
    var inportfolio = 0;
	var filters = 'featured';


    //CLICK ON MONOGRAM
    $(".monogram").click(function () {
		"use strict";
        location.href = "#home";
		
    });



    //ROLLOVERS HOME
    $(".view").mouseover(function () {
		"use strict";
        $("#your #yl").addClass("outlineyour");
        $("#your2").addClass("fadein");
        $("#designed").addClass("fadein");
		if ($(this).index()===0){
		$("#your2 #yl").text('ZAATAR W ZEIT');
		}
		else if ($(this).index()===1){
		$("#your2 #yl").text('WONDERLISTS.COM');
		}
		else if ($(this).index()===2){
		$("#your2 #yl").text('NEWOUNSA.COM');
		}
    });
    $(".view").mouseout(function () {
		"use strict";
        $("#your #yl").removeClass("outlineyour");
        $("#your2").removeClass("fadein");
        $("#designed").removeClass("fadein");
    });
	
	



    ///adjust width and height on load / resize

    function adjustdisplay() {
		"use strict";
        $('.page').css({'height':(($(window).height()))+'px'});
        $('.back-arrow').css({ 'left': $("#header .menu .pointer").position().left + 'px' });
        $('.contentwrapper').css({ 'height': (($(window).height())) + 'px' });
        $('.portfolio-l').css({ 'height': (($(window).height())) + 'px' });
		//$('.projinfo').css({ 'height': (($(window).height())) + 'px' });
        $('#profile-p .contentwrapper').css({ 'width': (($(window).width())) + 'px' });
        $('#clients-p .swiper-slide').css({ 'height': (($(window).height())) + 'px' });
		$('.vcontent').css({top: ($(window).height()*0.5-$('.vcontent').height()/2)-25});
		$('#acontent .container').css({top: ($(window).height()*0.5-$('#acontent .container').height()/2)-25});
        $('.swiper-container').css({ 'height': (($(window).height())) + 'px' });
        $('#services-p .swiper-container').css({ 'height': (($(window).height()) * 0.7) + 'px' });
        $('#values-p .swiper-container').css({ 'height': (($(window).height()) * 0.7) + 'px' });
        $('#clients-p .swiper-container').css({ 'width': ($(window).width()) + 'px' });
        $('.portfolio-l .swiper-container').css({ 'width': ($(window).width()) + 'px' });
        $('.portfolio-l .swiper-container').css({ 'height': ($(window).height()) + 'px' });
		$('.swiperportlist').css({ 'width': ($(window).width()) - $('.fluidHeight').offset().left + 'px'  });
		$('.swiper-scrollbarport').css('width', $('.swiperportlist').width() - 20);
   
		 
		 if ($('.theportfolio').width() < $('.swiperportlist').width()) {
            $('.swiper-scrollbarport').hide();}
			else{
				$('.swiper-scrollbarport').show();
				}

        if (inportfolio === 1) {
            $("#portfolio-p .contentwrapper").transition({ top: -$(window).height() + 'px' }, 0);
            $("#portfolio-p .portfolio-l").transition({ top: -$(window).height() + 'px' }, 0);
        }
        //$('#values-p .swiper-wrapper').css({'width':(($(window).width())*0.9)+'px'});
        //$('.tile').css({'height':$(this).width()/2});
    }
    adjustdisplay();

    $(window).resize(function () {
            adjustdisplay();
    });



		

    function sethref(href) {
        location.href = href;
    }

    function openfooter(fheight, fsection) {
        $('#footer .content').transition({ height: fheight + 'px' }, 1000);
        $('#footer .footermenu').transition({ opacity: '100', top: "108px" });
        $('#footer .footerslogan').transition({ top: "54px" });
        $('#footer .getintouch').transition({ opacity: '0' });
        $('#footer .footermenu a').transition({ color: '' });
        $('#footer .footermenu').addClass('footermenuopen');
		$('#footer').addClass('footeropen');
        $('#footer .footermenu a').eq(fsection - 1).transition({ color: '#fff' });
        $('.footerforms .theform').css('display', 'none');

        $('.footerforms .theform').eq(fsection - 2).css('display', 'block');
        rep0 = $('.page').eq(swiperall.activeIndex).attr('id')
        $('#' + rep0).addClass('blurfade');
        disablescroll();
        setTimeout(function () {
            $('.closefooter').css('display', 'block');
        }, 500);


    }
	
	

    function closefooter() {
        $('#footer .footermenu').transition({ opacity: '', top: '' });
        $('#footer .getintouch').transition({ opacity: '' });
        $('#footer .footermenu a').transition({ color: '' });
        $('#footer .content').transition({ height: '48px' }, 1000, "snap");
        $('#footer .footerslogan').transition({ top: '' });
        $('#footer .footermenu a:nth-child(2)').transition({ color: '' });
        $('#footer .footermenu').removeClass('footermenuopen')
		$('#footer').removeClass('footeropen');;
        $('.page').removeClass('blurfade');
        $('.closefooter').css('display', 'none');
        enablescroll();
    }


    function gotopage(pnumber) {
$('#header .menu .pointer').css('display', 'block');
        $("#header .menu .pointer").css('left', $("#header .menu li").eq(pnumber - 1).position().left + "px");
        $("#header .menu .pointer").css('width', $("#header .menu li").eq(pnumber - 1).width() + "px");
        swiperall.swipeTo(pnumber)
        enablescroll();
        closefooter();
    }


    function updateurl(e) {


        if (l.indexOf("/portfolio/") < 0) {
            rep0 = $('.page').eq(swiperall.activeIndex).attr('id')
            rep1 = rep0.replace('-p', '');
            location.href = "#" + rep1;
            called = 1;

            setTimeout(function () {
                called = 0
            }, 200);
        }
    }



    // ALL PAGES SWIPER ==========================================================

    var swiperall = new Swiper('.swiperall', {
        pagination: '.pagination1',
		loop: false,
        grabCursor: true,
        keyboardControl: true,
        mousewheelControl: true,
        mode: 'vertical',
		mousewheelControlForceToAxis: true,
        speed: 1000,
        scrollbar: {
            onScrollbarDrag: function () {
               // alert("scrolled");
            },
            container: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true,
            noSwiping: true
			

        },
        onSlideChangeEnd: function (s) {
            updateurl(s.activeIndex);

        },

        onSlideChangeStart: function (s) {
			//waw
            if (discroll == 1) {
                swiperall.params.mousewheelControl = false;
				
            }
        }




    });
	
	
	

    ///PORTFOLIO LISTING SWIPER =========================================================

    var swiperportlist = new Swiper('.swiperportlist', {
        keyboardControl: true,
		slidesPerView: 'auto',
		mousewheelControl: true,
		mousewheelControlForceToAxis: true,
		mode: 'horizontal',
        scrollbar: {
            container: '.swiper-scrollbarport',
            hide: false,
            draggable: true,
			 snapOnRelease: true,
        scrollContainer: true,
        }
    })


    //Navigation arrows
    $('#portfolio-p .arrow-left').click(function (e) {
        e.preventDefault()
        swiper.swipePrev()
    });
    $('#portfolio-p .arrow-right').click(function (e) {
        e.preventDefault()
        swiper.swipeNext()
    });


    $(".swiper-scrollbar").mouseout(function () {
        updateurl()
    });




    ///SERVICES SWIPER =========================================================



    var swiperser = new Swiper('.swiperser', {
        keyboardControl: true,
        watchActiveIndex: true,
        speed: 1000,
		mousewheelControl: true,
		mode: 'horizontal',
		mousewheelControlForceToAxis: true,
        onSlideChangeStart: function (s) {
            $("#services-p .panel").removeClass('roundabout-in-focus');
            $("#services-p .panel").eq(s.activeIndex).addClass('roundabout-in-focus');
        },
        onTouchMove: function (s) {
            $("#services-p .panel").removeClass('roundabout-in-focus');

            $("#services-p .panel").eq(s.activeIndex).addClass('roundabout-in-focus');
        },
        onSlideClick: function (p) {
            clicked = p.clickedSlideIndex;
            setTimeout(function () {
                swiperser.swipeTo(clicked);
            }, 100);


        },
		        onSlideChangeEnd: function (s) {


        },
        tdFlow: {
            rotate: 0,
            stretch: -50,
            depth: 200,
            modifier: 1,
            shadows: true
        }

    })


    //Navigation arrows
    $('#services-p .s-arrow-left').click(function (e) {
        e.preventDefault()
        swiperser.swipePrev()
    });
    $('#services-p .s-arrow-right').click(function (e) {
        e.preventDefault()
        swiperser.swipeNext()
    });



   
    //Navigation arrows
    $('#services-p .s-arrow-left').click(function (e) {
        e.preventDefault()
        swiperser.swipePrev()
    });
    $('#services-p .s-arrow-right').click(function (e) {
        e.preventDefault()
        swiperser.swipeNext()
    });
	
	
	function filterportfolio() {
	var divs2 = $('.theportfolio > a');
			
            divs2.css('overflow', 'hidden');
            divs2.css('display', 'none');
			divs2.css('max-width', '0px');
			divs2.css('position', 'absolute');
			divs2.css('left', '0px');
			divs2.removeClass("swiper-slide");
			
            divs2.filter('[data-type*="' + filters + '"]').css('max-width', '600px');
            divs2.filter('[data-type*="' + filters + '"]').css('overflow', 'visible');
            divs2.filter('[data-type*="' + filters + '"]').css('display', 'table-cell');
			divs2.filter('[data-type*="' + filters + '"]').css('position', 'relative');
			divs2.filter('[data-type*="' + filters + '"]').addClass('swiper-slide');
			visibledivs = $('.theportfolio a:not([style*="display: none"])').length;
			
			$('.theportfolio').css('width', visibledivs * 300 +'px!important');
			
			if ($('.theportfolio').width() < $('.swiperportlist').width()) {
            $('.swiper-scrollbarport').hide();}
			else{
				$('.swiper-scrollbarport').show();
				}
				$('.swiper-scrollbarport').css('width', $('.swiperportlist').width() - 20);

				
        
            swiperportlist.reInit()
			setTimeout(function () {
				swiperportlist.swipeTo(swiperportlist.initialSlide);
            }, 300);
	}
	








    ///////function that adjusts scroll and content depending on url
    function updatescroll() {

        //alert(l);
        if (l == "/profile") {
            gotopage(1);
           // if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { } else { $('.profilequote p').textillate(); }
        }


        if (l == "/services") { gotopage(2); }

        if (l == "/values") {
            gotopage(3);
            $('.tile').each(function (i) {
                var t = $(this);
                setTimeout(function () { t.addClass('tileanimation'); }, (i + 1) * 500);
            });
			
			setTimeout(function () {$('.vcontent').css({top: ($(window).height()*0.5-$('.vcontent').height()/2)-25})}, 300);
        }



        if (l == "/portfolio" || (l.indexOf("/work/") >= 0)) { gotopage(4); }
        if (l == "/clients") { gotopage(5); }
        if (l == "/awards") { gotopage(6); setTimeout(function () {$('#acontent .container').css({top: ($(window).height()*0.5-$('#acontent .container').height()/2)-25})}, 300);}
        if (l == "/contact") { gotopage(7); }
        if (l == "/emailus") { openfooter(435, 2); }
        if (l == "/quotation") { if ($(window).height() < 800){openfooter(607, 3)}else{openfooter(680, 3);}}
        if (l == "/jobs") { openfooter(545, 4); }
        if (l == "/partner") { openfooter(435, 5); }
		if (l == "/connect") { openfooter(435, 6); }

        if (l == "" || l == "/" || l == "/home") {
            gotopage(0);
            $("#header .menu .pointer").css('display', 'none');
            $(".monogram").transition({ top: "-50px" }, 500);
			//$(".menu").transition({ 'margin-left': '' }, 500);
        }
        else {
            $(".monogram").transition({ top: "0px" }, 500);
			//$(".menu").transition({ 'margin-left': '100px' }, 500);
			
        }







        if (l.indexOf("/portfolio/") >= 0) {
			
            
			inportfolio = 1
            $("body").css("overflow", "hidden");
            setTimeout(function () {
                disablescroll()
                swiperall.swipeTo(4)
            }, 100);


            //$(".potfoliofilter").css('position','fixed');
            //$(".potfoliofilter").transition({top:($(window).height())+100+'px'},500);


			$("#portfolio-p .contentwrapper").transition({ top: -$(window).height() + 'px' }, 800);
            $("#portfolio-p .portfolio-l").delay(800).transition({ top: -$(window).height() + 'px' }, 1000);
            $("#header .menu .pointer").transition({
                left: $("#header .menu li:nth-child(4)").position().left + "px",
                width: $("#header .menu li:nth-child(4)").width()
            }, 300);

            $("#header .menu .arrow-back").transition({
                left: $("#header .menu li:nth-child(4)").position().left + "px"
            }, 0);
            $("#header .menu .arrow-back").delay(1200).transition({
                height: "100px"
            }, 1000, "easeInOutQuint");
            currentproject = l.replace('/portfolio/', '');
            var pdivs = $('.portfoliolarge > .swiper-slide');
            currentportfolio = pdivs.filter('[data-project="' + currentproject + '"]').index();
            swiper.swipeTo(currentportfolio);

        }
        else {
            inportfolio = 0
            $("body").css("overflow", "auto");
            //enablescroll();
            $("#header .menu .arrow-back").transition({ height: "0px" }, 600);

            $(".potfoliofilter").css('position', 'absolute');
            $(".potfoliofilter").transition({ top: "120px" }, 500);

            $("#portfolio-p .contentwrapper").delay(800).transition({ top: '0px' }, 1000);
            $("#portfolio-p .portfolio-l").transition({ top: $(window).height() + 'px' }, 1000);
        }









        if (l.indexOf("/work/") >= 0) {


            filters = l.replace('/work/', '');

            hfilters = "#work/" + filters;

            //set selected filter 
            var divs = $('.potfoliofilter > a');
            divs.removeClass('potfolioliselected');
            divs.filter('[href="' + hfilters + '"]').addClass('potfolioliselected')

            //filter slider
            filterportfolio()
			


        }


        if (l.indexOf("/project/") >= 0) {
            $('.page').css('display', 'none');
            $('#projectdetails').css('display', 'block');
            $('#projectdetails').transition({ top: '0px' }, 1000);
            $('#projectdetails').css('position', 'absolute');
			$('#projectdetails').css('background-image', 'none');

            lpro = l.replace('/project/', '');
			
			
            $("#projectdetails .projinfo").load(lpro + ".html");
        }
		
		
		
		else if (l.indexOf("clientslist") >= 0) {
            $('.page').css('display', 'none');
            $('#projectdetails').css('display', 'block');
            $('#projectdetails').transition({ top: '0px' }, 1000);
            $('#projectdetails').css('position', 'absolute');
			$('#projectdetails').css('background-image', 'url(images/bg.jpg)');
            lpro = 'clientslist'
			
			
			



            $("#projectdetails .projinfo").load(lpro + ".html");
        }

        else {
            $('.page').css('display', 'block');
            $('#projectdetails').transition({ top: '2500px' }, 1000);
            $('#projectdetails').css('position', 'fixed');
			projclear(); return true;

            setTimeout(function () {
                //$('#projectdetails').css('display', 'none');
            }, 1500);
        }


    }


    //ONLOAD + ON URL CHANGE
    var l = ""

    $.getScript("scripts/jquery.address-1.5.min.js", function () {
        $.address.autoUpdate(true).change(function (event) {
            l = event.value;
            setTimeout(function () { updatescroll() }, 200);
        });

    });







    

    

    //PORTFOLIO LARGE SWIPER ====================================================================

    var swiper = new Swiper('.swiper1', {
        pagination: '.pagination1',
        loop: false,
        grabCursor: true,
        keyboardControl: true,
				mousewheelControl: true,
		mousewheelControlForceToAxis: true,
		mode: 'horizontal',
        speed: 1000,
        initialSlide: currentportfolio,
        //tdFlow: {}

		 onSlideChangeStart: function (s) {
			 $(".portfoliolarge .swiper-slide").find('.portmobile').removeClass('portmobileactive');
			 $(".portfoliolarge .swiper-slide").eq(s.activeIndex).find('.portmobile').addClass('portmobileactive');
            
        },
		
		onSlideChangeEnd: function (s) {
			 location.href='#portfolio/'+( $(".portfoliolarge .swiper-slide").eq(s.activeIndex).attr('data-project'));
            
        }
    });
	setTimeout(function () {
			 $(".portfoliolarge .swiper-slide").find('.portmobile').removeClass('portmobileactive');
			 $(".portfoliolarge .swiper-slide").eq(0).find('.portmobile').addClass('portmobileactive');
            }, 1000);
    //Navigation arrows
    $('#portfolio-p .arrow-left').click(function (e) {
        e.preventDefault()
        swiper.swipePrev()
    });
    $('#portfolio-p .arrow-right').click(function (e) {
        e.preventDefault()
        swiper.swipeNext()
    });

    setTimeout(function () {

        swiper.swipeTo(currentportfolio);

    }, 2000);


//filterportfolio();


    //CLIENTS SWIPER =========================================================================
    $(function () {

        var swiper2 = new Swiper('.swiper2', {
            pagination: '.pagination2',
            loop: true,
            grabCursor: true,
            speed: 1000,
					mousewheelControl: true,
							mode: 'horizontal',
		mousewheelControlForceToAxis: true,
            keyboardControl: true
        });
        //Navigation arrows

        $('#clients-p .arrow-left').click(function (e) {
            e.preventDefault()
            swiper2.swipePrev()
        });
        $('#clients-p .arrow-right').click(function (e) {
            e.preventDefault()
            swiper2.swipeNext()
        });
    });




    /////////DISABLE/ENABLE SCROLL CONTROL


    function enablescroll() {
        discroll = 0;
        swiperall.params.onlyExternal = false;
        $('.swiper-scrollbar').show();



    }

    function disablescroll() {
        discroll = 1;
        swiperall.params.onlyExternal = true;
        $('.swiper-scrollbar').hide();
    }


function loadbar() {
	location.href='#home';
	$(".loadingbarbg").transition({ width: $(window).width() + 'px' }, 0 )
	$(".loadingbarbg").transition({ width: '0px',delay:4000 }, 0 );
	 
	 setTimeout(function () {
	
	$(".loadingbar").transition({ width: $(window).width() + 'px' }, 4000 )
	$(".loadingbar").transition({ opacity: 0,delay:4500 }, 1000);
	$(".loadingbar").transition({ width: '0px',opacity:1 }, 0);
	 
	 $(".handle").transition({ top: '5px', opacity:0 }, 0);
	 $(".handle").transition({ top: '', opacity:1, delay:9500 }, 500);
	 
	 $(".confirm").transition({ display: 'block', delay:4000 }, 0);
	 $(".confirm").transition({ opacity:1 }, 500);
	 
	 $(".confirm").transition({ opacity:0,delay:3900 }, 1000);
	 $(".confirm").transition({ display: 'none'  }, 0);
	 

	 
	 }, 1000);
    }




    function projback() {
		
        location.href = "#portfolio/" + lpro
		$("#projectdetails .projinfo").html("<div style='height:1200px'></div>");
		
    }
	
	function opens(url,e) {
   
    }
	
	
	function showrotate() {
		
        $('.rotateyourscreen').css( 'opacity', '1' );
		
    }
	
	
    function projclear() {
        $("#projectdetails .projinfo").html("<div style='height:1200px'></div>");
		
		 setTimeout(function () {         
$('#projectdetails').css('background-color', '#fff');  }, 200);
    }




    $('.page').click(function (e) {
        if (discroll == 0) {
            rep0 = $('.page').eq(swiperall.activeIndex).attr('id')
            rep1 = rep0.replace('-p', '');
            location.href = "#" + rep1;
			
        }
    });
	
	

    $('.handle').click(function () {
        location.href = "#emailus";
    });

    $('.closefooter').click(function () {
        rep0 = $('.page').eq(swiperall.activeIndex).attr('id')
        rep1 = rep0.replace('-p', '');
        location.href = "#" + rep1;
    });


$( ".filterselect" ).change(function () {
    var str = "";
	var str2 = "";
    $( ".filterselect option:selected" ).each(function() {
      str += $( this ).val();
	  str2 += $( this ).text();
    });
	if (l.indexOf("/portfolio") >= 0){
    location.href = "#work/" + str;
	
	$( ".filtermbutton").text( str2  );
	}
  }).change();
  
  
  $('.filtermbutton').on('click', function (){
	  //alert("k2")
 $('.filterselect').trigger('touchstart'); // trigger touchstart
	  //$('.filterselect').focus();

	  });
	  
	  $('.filterselect').on('touchstart', function () {
    $('.filterselect').focus();   // inside this function the focus works
});
   
	
	setTimeout(function () {
		$('.vcontent').css({top: ($(window).height()*0.5-$('.vcontent').height()/2)-25});
		$('#acontent .container').css({top: ($(window).height()*0.5-$('#acontent .container').height()/2)-25});
}, 2000);

setTimeout(function () {
$('.portfoliolarge img').each(function(){
  $(this).attr('src', $(this).attr('delayedsrc'));
});
}, 7000);





var clickme = jQuery("#filtermbutton"),
    select = jQuery("#filterselect");
clickme.on("mousedown", function (e) {
    proxyMouseEvent(e, select[0]);
});
clickme.on("click", function (e) {
    proxyMouseEvent(e, select[0]);
});
function proxyMouseEvent(event, element) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(event.type, event.bubbles, event.cancelable, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  element.dispatchEvent(evt);
}

$('#grid').hoverfold();

$("#emailform").validate({rules:{phone:{required:true,digits:true}},submitHandler:function(e){$(e).hide();var t=$(e).find(".loader");loadbar();var n=$(e).serialize();var r=$(e).attr("action");$.ajax({url:r,type:"post",data:n,success:function(t){if(t=="success"){$(e)[0].reset();$(e).show()}else{}}});return false}})
$("#quotationform").validate({rules:{phone:{required:true,digits:true}},submitHandler:function(e){$(e).hide();var t=$(e).find(".loader");loadbar();var n=$(e).serialize();var r=$(e).attr("action");$.ajax({url:r,type:"post",data:n,success:function(t){if(t=="success"){$(e)[0].reset();$(e).show()}else{}}});return false}})
$("#jobsform").validate({rules:{phone:{required:true,digits:true}},submitHandler:function(e){$(e).hide();var t=$(e).find(".loader");loadbar();var n=$(e).serialize();var r=$(e).attr("action");$.ajax({url:r,type:"post",data:n,success:function(t){if(t=="success"){$(e)[0].reset();$(e).show()}else{}}});return false}});$("#jobsform input:checkbox").click(function(){var e="#jobsform input:checkbox";$(e).attr("checked",false);$(this).attr("checked",true)})
$("#partnerform").validate({rules:{phone:{required:true,digits:true}},submitHandler:function(e){$(e).hide();var t=$(e).find(".loader");loadbar();var n=$(e).serialize();var r=$(e).attr("action");$.ajax({url:r,type:"post",data:n,success:function(t){if(t=="success"){$(e)[0].reset();$(e).show()}else{}}});return false}})
$("#connectform").validate({rules:{phone:{required:true,digits:true}},submitHandler:function(e){$(e).hide();var t=$(e).find(".loader");closefooter();var n=$(e).serialize();var r=$(e).attr("action");$.ajax({url:r,type:"post",data:n,success:function(t){if(t=="success"){$(e)[0].reset();$(e).show()}else{}}});return false}})


//filterportfolio();




