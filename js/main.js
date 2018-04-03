$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });

    } 
  });

  // Add waypoints for active nav items
  var waypoint = new Waypoint({
    element: document.getElementById('context-example'),
    handler: function() {
      notify('Context example triggered')
    },
    context: document.getElementById('overflow-scroll')
  })
});