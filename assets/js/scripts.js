function initMap() {
  var vaxjo = { lat: 56.882641, lng: 14.801907 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: vaxjo,
  });
  var marker = new google.maps.Marker({
    position: vaxjo,
    map: map,
  });
}

var swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  speed: 2500,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
});