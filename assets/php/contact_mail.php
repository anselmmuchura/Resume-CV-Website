<?php
    $toEmail = "anselmmuchura7@gmail.com";
    $fromEmail = $_POST['email'];
    $subject = 'WEBSITE CONTACT: '.$_POST["subject"];
    $message = $_POST["comments"]; 
    $mailHeaders = $headers = 
    
    $mailHeaders = 'From: '.$fromEmail."\r\n".'Reply-To: '. $fromEmail."\r\n" .'X-Mailer: PHP/' . phpversion();
    if(mail($toEmail, $subject, $message, $mailHeaders)) {
        echo "Thank you for reaching out! ";
    } else {
        echo"Problem in Sending Mail."; 
    }
?>