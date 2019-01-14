$(document).ready(function(){
    
    /* Slide show */
  $('.slick').slick({
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000
  });
    
    
    /*sticky navigation*/
   $('.js--section-features').waypoint(function(direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
        }, {
        offset: '100px;'
   }, {
       speed: '3000;'
   });
    
    
  /*  var waypoint = new Waypoint({
  element: document.getElementById('element-waypoint'),
  handler: function(direction) {
    notify(this.element.id + ' triggers at ' + this.triggerPoint)
  },
  offset: '75%'*/
    
});