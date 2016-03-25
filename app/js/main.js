'use strict'
console.log('main.js')
var main = function () {
  // var hidden = true
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function (event) {

    // $('.overlay').show(function() {
    //   $(this).css('opacity', '0.5')
    // })

    $('.sidebar').animate({
      left: '0px'
    }, 200)

    $('.content').animate({
      marginLeft: '285px'
    }, 200)
    event.stopPropagation()
    // hidden = false
  })
  var hide = function () {
    $('.sidebar').animate({
      left: '-285px'
    }, 200)

    $('.content').animate({
      marginLeft: '0px'
    }, 200)
    // hidden = true
  }



  /* Then push them back */
  $('.content').click(function (event) {
    console.log(event.target.nodeName)
    // if (event.target.nodeName.toLowerCase() !== 'i') {
      hide()
      //event.preventDefault()
    // }
  })
  // $('.icon-close').click(hide)
}
$(document).ready(main)
