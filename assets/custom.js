(function ($) {
    $(".fadea").slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<div class="button-prev cutome-pakage"><svg xmlns="http://www.w3.org/2000/svg" ><path style="fill:#fff" d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg> </div>',
      nextArrow:
        '<div class="button-next cutome-pakage"><svg xmlns="http://www.w3.org/2000/svg"   ><path style="fill:#fff" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg></div>',
    });
  })(jQuery);