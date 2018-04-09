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
      border.classList.add("hidden");
    } else {
      logo.classList.remove("shrink");
      border.classList.remove("hidden");
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
  // no active nav items: hero space 
  $('#intro').waypoint(function(direction) {
    if (direction === 'up') {
      $('#navbar li').removeClass("active");
    }
  }, {
    offset: '-50%'
  });

  // active nav: about
  $('#about').waypoint(function(direction) {
    if (direction === 'down') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#about"]`).parent().addClass("active");
    }
  }, {
    offset: '50%'
  });
  $('#about').waypoint(function(direction) {
    if (direction === 'up') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#about"]`).parent().addClass("active");
    }
  }, {
    offset: '-50%'
  });

  // active nav: donate
  $('#donate').waypoint(function(direction) {
    if (direction === 'down') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#donate"]`).parent().addClass("active");
    }
  }, {
    offset: '50%'
  });
  $('#donate').waypoint(function(direction) {
    if (direction === 'up') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#donate"]`).parent().addClass("active");
    }
  }, {
    offset: '-50%'
  });

  // active nav: book
  $('#book').waypoint(function(direction) {
    if (direction === 'down') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#book"]`).parent().addClass("active");
    }
  }, {
    offset: '50%'
  });
  $('#book').waypoint(function(direction) {
    if (direction === 'up') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#book"]`).parent().addClass("active");
    }
  }, {
    offset: '-50%'
  });

  // active nav: contact
  $('#contact').waypoint(function(direction) {
    if (direction === 'down') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#contact"]`).parent().addClass("active");
    }
  }, {
    offset: '50%'
  });
  $('#contact').waypoint(function(direction) {
    if (direction === 'up') {
      $('#navbar li').removeClass("active");
      $(`#navbar li a[href="#contact"]`).parent().addClass("active");
    }
  }, {
    offset: '-50%'
  });
  
  // no active nav items: footer 
  $('footer').waypoint(function(direction) {
    if (direction === 'down') {
      $('#navbar li').removeClass("active");
    }
  }, {
    offset: '50%'
  });
  

  // Form validation  

  $("#name").change(function() {
    var nameReg = /^[A-Za-z]+$/;
    var name = $('#name').val();

    if(name == ""){
      $('#errorName').html('Please enter your name').show();
      $("#name").addClass('invalid');
    } 
    else if(!nameReg.test(name)){
      $('#errorName').html('Letters only').show();
      $("#name").addClass('invalid');
    } else { 
      $('#errorName').hide(); 
      $("#name").removeClass('invalid').addClass('valid');
    }
  });

  $("#email").change(function() {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#email').val();

    if(email == ""){
      $('#errorEmail').html('Please enter your email address').show();
      $("#email").addClass('invalid');
    } 
    else if(!emailReg.test(email)){
      $('#errorEmail').html('Please enter a valid email address').show();
      $("#email").addClass('invalid');
    } else { 
      $('#errorEmail').hide(); 
      $("#email").removeClass('invalid').addClass('valid');
    }
  });

  $("#category").change(function() {
    var category = $('#category').val();

    if(category == ""){
      $('#errorCategory').html('Please choose a category').show();
      $("#category").addClass('invalid');
    } else { 
      $('#errorCategory').hide(); 
      $("#category").removeClass('invalid').addClass('valid');
    }
  });

  $("#message").change(function() {
    var message = $('#message').val();

    if(message == ""){
      $('#errorMessage').html('Don\'t forget to leave a message!').show();
      $("#message").addClass('invalid');
    } else { 
      $('#errorMessage').hide(); 
      $("#message").removeClass('invalid').addClass('valid');
    }
  });


  // Form submit
  $('#submit').on('click', function(e){

    // all $('.form-control') == valid or NO SUBMIT 
    
		e.preventDefault();
		name = $('#name').val();
    email = $('#email').val();
    category = $('#category').val();
		message = $('#message').val();
		dataString = 'name='+ name + '&email=' + email + '&category=' + category + '&message=' + message + '&submit=true';
	  
		$('#form').html("<p>Thank you for reaching out! You\'ll hear back from us soon!</p>");

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