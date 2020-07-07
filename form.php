<?php

	$emailTo = "thusa.arul@hotmail.com";//change this to the email address which should receive the form data
	
	
	/*  
		NOTE: do not change anything below this
	*/
	
	if( isset($_POST['myvitae']) ) {
		
		//honey pot detection
		
		if( $_POST['myvitae'] != '' ) {
			
			die('Bad spam bot!!');
			
		}
		
		$message = "";
		
		foreach( $_POST as $field => $val ) {
			
			if( $field != 'myvitae' ) {
				
				$message .= $field . " : ". $val . "\n";
				
			}
			
		}
		
		$subject = $_POST['theSubject'];
		
		//send the email
				
		if( mail($emailTo, $subject, $message) ) {
			
			echo "Message sent!";
			
		} else {
			
			echo "Could not send message";
			
		}
		
	}

?>