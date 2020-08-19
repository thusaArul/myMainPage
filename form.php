<?php

	$emailTo = "thusa.arul@hotmail.com";//change this to the email address which should receive the form data

	$subject = $_POST['theSubject'];

	$message = $_POST['message'];

	mail($emailTo, $subject, $message);

?>
