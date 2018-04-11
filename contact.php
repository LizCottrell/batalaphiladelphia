<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['category'];
    $message = $_POST['message'];
    $from = 'batalaphiladelphia contact form'; 
    $to = 'batala.philly@gmail.com'; 
    
    		
    $body = "From: $name\n E-Mail: $email\n Category: $subject\n Message:\n $message";
				
    if ($_POST['submit']) {				 
        if (mail ($to, $subject, $body, $from)) { 
	       echo '<p>Your message has been sent!</p>';
        } else {
            echo 'YOU FAILED TO MAIL';
        }
    }else{
        echo 'YOU FORGOT TO SUBMIT';
    }
?>