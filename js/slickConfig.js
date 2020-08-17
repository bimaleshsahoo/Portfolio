 $(document).ready(function(){
  $('.your-class').slick({
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    speed:500,
    draggable:false,
    responsive: [
      {
        breakpoint: 1295,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          draggable:false,
          swipe:false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite:true,
          draggable:false,
          swipe:false,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
          draggable:false,
          swipe:false,
        }
      }
    ]
  });
});