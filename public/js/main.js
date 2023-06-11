$ = jQuery;

window.addEventListener('load', function () {
  
$("input[type='tel']").each(function(i, el) {
  var iti = window.intlTelInput(el, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    autoPlaceholder: "polite",
    initialCountry: "auto",
    geoIpLookup: function(callback) {
      $.get("https://ipapi.co/json/", function(response) {
        var countryCode = response.country_code || "";
        callback(countryCode);
      }, "json");
    },
  });  

  el.addEventListener("countrychange", function(e) {
    var countryDialCode = iti.getSelectedCountryData().dialCode;
    el.value = countryDialCode;
  });


});
  var carousel_staff = new Swiper("[data-element='carousel-staff']", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".carousel_staff .swiper-button-next",
    prevEl: ".carousel_staff .swiper-button-prev",
  },
});


var carousel_thumbs = new Swiper("[data-element='carousel-thumbs']", {
  spaceBetween: 8,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: false
});


var carousel_product = new Swiper("[data-element='carousel-gallery']", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: carousel_thumbs,
  },
});
  $(document).on('click', '[data-element="dropdown-select"] a', function(e) {
    
  e.preventDefault();
  var dropdown = $(this).closest('[data-element="dropdown-select"]');
  var input = dropdown.find('input');
  var links = dropdown.find('.dropdown-item');
  var toggle_value = dropdown.find('.dropdown__value-wrap span');

  links.removeClass('active');
  $(this).addClass('active');
  var value = $(this).data('value');
  var label = $(this).text();

  input.val( value );
  toggle_value.text( label );

})
})


