// var main = function () {
  'use strict'
  /* Create a map object and specify the DOM element for display. */
  var initMap = function () {
    var myLatLng = {lat: 46.994219, lng: 28.851536}

    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      zoom: 9
    })

    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Home'
    })
  }

  initMap()

  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function (event) {
    $('.overlay').show()
    $('.sidebar').animate({
      left: '0px'
    }, 200)
    $('.content').animate({
      marginLeft: '285px'
    }, 200)
  })

  /* Then push them back */
  $('.overlay').click(function (event) {
    $('.sidebar').animate({
      left: '-285px'
    }, 200)

    $('.content').animate({
      marginLeft: '0px'
    }, 200)
    $('.overlay').hide()
  })

  /* set background and save the choice in cookie */
  var changeBackground = function () {
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)background\s*\=\s*([^;]*).*$)|^.*$/, "$1")
      $('main').removeClass('bg1 bg2 bg3')
      $('main').addClass(cookieValue)

  }
  var selectBackground = function (selectedBackground) {
    document.cookie = 'background=' + selectedBackground
    changeBackground()
  }

  changeBackground()

  /* jQuery validation */
  $('#contact-form').validate()


// }
//
// $(document).ready(main)
