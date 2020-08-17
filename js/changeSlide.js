        var changeSlide=0 ;
        $('.portnxt').click(function(){
            $(".your-class").slick('slickNext');
            changeSlide=(changeSlide+1)%7 ;
            if (changeSlide==0){
                $(".port6").removeClass("outerFirst") ;

                $(".port0").removeClass("outerSecond") ;
                $(".port0").addClass("outerFirst") ;

                $(".port1").removeClass("outerThird") ;
                $(".port1").addClass("outerSecond") ;

                $(".port2").removeClass("outerFourth") ;
                $(".port2").addClass("outerThird") ;

                $(".port3").addClass("outerFourth") ;
            }
            if (changeSlide==1){
                $(".port0").removeClass("outerFirst") ;

                $(".port1").removeClass("outerSecond") ;
                $(".port1").addClass("outerFirst") ;

                $(".port2").removeClass("outerThird") ;
                $(".port2").addClass("outerSecond") ;

                $(".port3").removeClass("outerFourth") ;
                $(".port3").addClass("outerThird") ;

                $(".port4").addClass("outerFourth") ;
            }
            if (changeSlide==2){
                $(".port1").removeClass("outerFirst") ;

                $(".port2").removeClass("outerSecond") ;
                $(".port2").addClass("outerFirst") ;

                $(".port3").removeClass("outerThird") ;
                $(".port3").addClass("outerSecond") ;

                $(".port4").removeClass("outerFourth") ;
                $(".port4").addClass("outerThird") ;

                $(".port5").addClass("outerFourth") ;
            }
            if (changeSlide==3){
                $(".port2").removeClass("outerFirst") ;

                $(".port3").removeClass("outerSecond") ;
                $(".port3").addClass("outerFirst") ;

                $(".port4").removeClass("outerThird") ;
                $(".port4").addClass("outerSecond") ;

                $(".port5").removeClass("outerFourth") ;
                $(".port5").addClass("outerThird") ;

                $(".port6").addClass("outerFourth") ;
            }
            if (changeSlide==4){
                $(".port3").removeClass("outerFirst") ;

                $(".port4").removeClass("outerSecond") ;
                $(".port4").addClass("outerFirst") ;

                $(".port5").removeClass("outerThird") ;
                $(".port5").addClass("outerSecond") ;

                $(".port6").removeClass("outerFourth") ;
                $(".port6").addClass("outerThird") ;

                $(".port0").addClass("outerFourth") ;
            }
            if (changeSlide==5){
                $(".port4").removeClass("outerFirst") ;

                $(".port5").removeClass("outerSecond") ;
                $(".port5").addClass("outerFirst") ;

                $(".port6").removeClass("outerThird") ;
                $(".port6").addClass("outerSecond") ;

                $(".port0").removeClass("outerFourth") ;
                $(".port0").addClass("outerThird") ;

                $(".port1").addClass("outerFourth") ;
            }
            if (changeSlide==6){
                $(".port5").removeClass("outerFirst") ;

                $(".port6").removeClass("outerSecond") ;
                $(".port6").addClass("outerFirst") ;

                $(".port0").removeClass("outerThird") ;
                $(".port0").addClass("outerSecond") ;

                $(".port1").removeClass("outerFourth") ;
                $(".port1").addClass("outerThird") ;

                $(".port2").addClass("outerFourth") ;
            }
            $(".portnxt").attr("disabled", "disabled");
            setTimeout(function() {
                $(".portnxt").removeAttr("disabled");
            }, 500);
        });
        $('.portprev').click(function(){
            $(".your-class").slick('slickPrev');
            changeSlide=changeSlide-1;
            changeSlide=(changeSlide+7)%7 ;
            if (changeSlide==6){
                $(".port3").removeClass("outerFourth") ;

                $(".port2").removeClass("outerThird") ;
                $(".port2").addClass("outerFourth") ;

                $(".port1").removeClass("outerSecond") ;
                $(".port1").addClass("outerThird") ;

                $(".port0").removeClass("outerFirst") ;
                $(".port0").addClass("outerSecond") ;

                $(".port6").addClass("outerFirst") ;
            }
            if (changeSlide==5){
                $(".port2").removeClass("outerFourth") ;

                $(".port1").removeClass("outerThird") ;
                $(".port1").addClass("outerFourth") ;

                $(".port0").removeClass("outerSecond") ;
                $(".port0").addClass("outerThird") ;

                $(".port6").removeClass("outerFirst") ;
                $(".port6").addClass("outerSecond") ;

                $(".port5").addClass("outerFirst") ;
            }
            if (changeSlide==4){
                $(".port1").removeClass("outerFourth") ;

                $(".port0").removeClass("outerThird") ;
                $(".port0").addClass("outerFourth") ;

                $(".port6").removeClass("outerSecond") ;
                $(".port6").addClass("outerThird") ;

                $(".port5").removeClass("outerFirst") ;
                $(".port5").addClass("outerSecond") ;

                $(".port4").addClass("outerFirst") ;
            }
            if (changeSlide==3){
                $(".port0").removeClass("outerFourth") ;

                $(".port6").removeClass("outerThird") ;
                $(".port6").addClass("outerFourth") ;

                $(".port5").removeClass("outerSecond") ;
                $(".port5").addClass("outerThird") ;

                $(".port4").removeClass("outerFirst") ;
                $(".port4").addClass("outerSecond") ;

                $(".port3").addClass("outerFirst") ;
            }
            if (changeSlide==2){
                $(".port6").removeClass("outerFourth") ;

                $(".port5").removeClass("outerThird") ;
                $(".port5").addClass("outerFourth") ;

                $(".port4").removeClass("outerSecond") ;
                $(".port4").addClass("outerThird") ;

                $(".port3").removeClass("outerFirst") ;
                $(".port3").addClass("outerSecond") ;

                $(".port2").addClass("outerFirst") ;
            }
            if (changeSlide==1){
                $(".port5").removeClass("outerFourth") ;

                $(".port4").removeClass("outerThird") ;
                $(".port4").addClass("outerFourth") ;

                $(".port3").removeClass("outerSecond") ;
                $(".port3").addClass("outerThird") ;

                $(".port2").removeClass("outerFirst") ;
                $(".port2").addClass("outerSecond") ;

                $(".port1").addClass("outerFirst") ;
            }
            if (changeSlide==0){
                $(".port4").removeClass("outerFourth") ;

                $(".port3").removeClass("outerThird") ;
                $(".port3").addClass("outerFourth") ;

                $(".port2").removeClass("outerSecond") ;
                $(".port2").addClass("outerThird") ;

                $(".port1").removeClass("outerFirst") ;
                $(".port1").addClass("outerSecond") ;

                $(".port0").addClass("outerFirst") ;
            }
            $(".portprev").attr("disabled", "disabled");
            setTimeout(function() {
                $(".portprev").removeAttr("disabled");
            }, 500);
        });