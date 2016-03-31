// var main = function () {
  'use strict'
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
      $('#hello').removeClass('bg1 bg2 bg3')
      $('#hello').addClass(cookieValue)
  }
  var selectBackground = function (selectedBackground) {
    document.cookie = 'background=' + selectedBackground
    changeBackground()
  }

  changeBackground()
  // jQuery validation
  // $('#contact-form').validate()

  // Create a map object and specify the DOM element for display.
  function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.994911, lng: 28.854100},
        scrollwheel: false,
        zoom: 9
      })
    }

   initMap()

  // var search = function () {
  //   // var serachWord = $('#search').val()
  //   // var jqsections = $('section')
  //   // console.log(jqsections)
  //   var serachWord = document.querySelector('#search')
  //   var sections = document.querySelectorAll('section')
  //   console.log(sections)
  //   for (var section in sections) {
  //     if (sections.hasOwnProperty(section)) {
  //       console.log(sections[section])
  //       var elements = section.childNodes
  //       console.log(elements)
  //       for (var element of section) {
  //         // console.log(sections[section].hasOwnProperty(element))
  //         // if (sections[section].hasOwnProperty(element)) {
  //           console.log(section)
  //         // }
  //       }
  //     } else {
  //       console.log('this is not his property: ' + sections[section]);
  //     }
  //   }
  // }
  // search()
// }
//
// $(document).ready(main)
