$(document).ready(function(){

  // Resize logo onscroll
  window.onscroll = function() {
    growShrinkLogo()
  };

  function growShrinkLogo() {
    var logo = document.getElementById("logo")
    var border = document.getElementById("border")
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      logo.classList.add("shrink");
      border.classList.add("hidden-xs");
    } else {
      logo.classList.remove("shrink");
      border.classList.remove("hidden-xs");
    }
  }

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

  // Form submit
  $('#submit').on('click', function(e){

		e.preventDefault();
		name = $('input#name').val();
    email = $('input#email').val();
    category = $('select#category').val();
		message = $('textarea#message').val();
		dataString = 'name='+ name + '&email=' + email + '&category=' + category + '&message=' + message + '&submit=true';
	  
		$('#form').html("<div id='message'>Thank you for reaching out! You\'ll hear back from us soon!</div>");

	  $.ajax({
	    type: "POST",
	    url: "index.php",
	    data: dataString,
	    success: function() {
	    	// no needs
	    }
	  });
	  return false;
	});
});