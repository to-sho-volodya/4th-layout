$(document).ready(function () {
  $('.programs').slick({

    // autoplay: true,
    // autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots:true,
    responsive:[
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
    ]
    // fade: true,
    // adaptiveHeight:true,
    // draggable:true,
  });
});

$(document).ready(function () {
  $('.quote').slick({

    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    arrows: false,
    dots:true,
    // fade: true,
    responsive: [{
      breakpoint: 0,
      settings: {
  }
  }
    ]
     // adaptiveHeight:true,
     // draggable:false,
  });
});

$(document).ready(function () {
  $('.mentors_box').slick({

    // autoplay: true,
    // autoplaySpeed: 10000,
    infinite: false,
    arrows: false,
    dots:true,
    // fade: true,
    // adaptiveHeight:true,
    // draggable:true,
  });
});