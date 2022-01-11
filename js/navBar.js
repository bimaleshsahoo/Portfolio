        var toggle=0 ;
        var navGlobal ;
        function openNav(navnum) {
          navGlobal=navnum ;
          navDecide(navnum);
          document.getElementById("myNav").style.display = "block";
          $('#myNav').animate({
                scrollTop: 0
            }, 0);
          $("body").css("overflow-y","hidden");
        }
        function closeNav() {
          document.getElementById("myNav").style.display = "none";
          $("body").css("overflow-y","auto");
        }
        
        function navDecide(num) {
          var navpic=num ;
          if(navpic==0){
            $('#navPicture').attr("src","img/about/port0Detail.png") ;
            $('#navHead').html("Privy - that enables you to access your realtime data.") ;
            $('.nxtt').css("display","block") ;
            $('.prvv').css("display","block") ;
          }
          if(navpic==1){
            $('#navPicture').attr("src","img/about/port1Detail.png") ;
            $('#navHead').html("iCPR - CPR Training App") ;
            $('.nxtt').css("display","block") ;
            $('.prvv').css("display","block") ;
          }
          if(navpic==2){
            $('#navPicture').attr("src","img/about/port2Detail.png") ;
            $('#navHead').html("Company e-Bill") ;
            $('.nxtt').css("display","block") ;
            $('.prvv').css("display","block") ;
          }
          if(navpic==3){
            $('#navPicture').attr("src","img/about/port3Detail.png") ;
            $('#navHead').html("Commission of Robots") ;
            $('.nxtt').css("display","block") ;
            $('.prvv').css("display","block") ;
          }
          if(navpic==4){
            $('#navPicture').attr("src","img/about/port4Detail.png") ;
            $('#navHead').html("Mo Bus") ;
            $('.nxtt').css("display","block") ;
            $('.prvv').css("display","block") ;
          }
          if(navpic==5){
            $('#navPicture').attr("src","img/about/port5Detail.png") ;
            $('#navHead').html("Time Management") ;
            $('.nxtt').css("display","block") ;
            $('.prvv').css("display","block") ;
          }
          if(navpic==6){
            $('#navPicture').attr("src","img/about/port6Detail.png") ;
            $('#navHead').html("Health Wallet") ;
            $('.nxtt').css("display","block") ;
            $('.prvv').css("display","block") ;
          }
        }

        $('#navNxt').click(function() {
            navGlobal=(navGlobal+1)%7 ;
            navDecide(navGlobal) ;
            $('#myNav').animate({
                scrollTop: 0
            }, 0);
        });
        $('#navPrv').click(function() {
            navGlobal=(navGlobal-1)%7 ;
            if (navGlobal<0) {
              navGlobal=navGlobal+7 ;
            }
            navDecide(navGlobal) ;
            $('#myNav').animate({
                scrollTop: 0
            }, 0);
        });

        function enablescroll() {
             $("#menuimage").attr("src", "img/about/menu.png");
             $("nav").removeClass("creamBackground") ;
             $("nav").addClass("blackBackground") ;
             $(".navbar-brand").css("opacity","1") ;
             $('.collapse').collapse('hide') ;
             $("body").css("overflow-y","auto");
             toggle=toggle+1;
        }
        function togglemenu(){
            toggle=toggle+1;
            if((toggle%2)==1){
                $(".invi-link").stop();
                $(".invi-link").css("opacity","0") ;
                $("#menuimage").attr("src", "img/about/cancel.png");
                $(".navbar-brand").css("opacity","0") ;
                $("nav").removeClass("blackBackground") ;
                $("nav").addClass("creamBackground") ;
                $("body").css("overflow-y","hidden");
                $("#nav1").animate({opacity: "1"},80,function(){
                  $("#nav2").animate({opacity: "1"},80,function(){
                    $("#nav3").animate({opacity: "1"},80,function(){
                        $("#nav4").animate({opacity: "1"},80,function(){
                        });
                    });
                  });
                });
            }
            else{
                $("#menuimage").attr("src", "img/about/menu.png");
                $(".navbar-brand").css("opacity","1") ;
                $("nav").removeClass("creamBackground") ;
                $("nav").addClass("blackBackground") ;
                $("body").css("overflow-y","auto");
            }
        }
