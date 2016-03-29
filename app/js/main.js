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
    if (cookieValue) {
      $('#hello').removeClass('bg1 bg2 bg3')
      $('#hello').addClass(cookieValue)
    }
  }
  var selectBackground = function (selectedBackground) {
    document.cookie = 'background=' + selectedBackground
    changeBackground()
  }

  changeBackground()
// }
//
// $(document).ready(main)
