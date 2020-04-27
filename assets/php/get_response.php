<?php 
require_once("config.php");

 $secretKey = '6LeBQukUAAAAAPa9w2N7zlDsVB4tld1sgnlqzeFo';
 $captcha = $_POST['g-recaptcha-response'];
 
 if(!$captcha){
    echo 'Please check the the captcha form.';
          exit;
  }
  
  
 
//
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['comments']))
{
    
    $ip = $_SERVER['REMOTE_ADDR'];
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);

        if(intval($responseKeys["success"]) !== 1) {
          echo 'Please check the the captcha form.';
        } else {
            require_once("contact_mail.php");
            $username = $conn->real_escape_string($_POST['name']);
            $email = $conn->real_escape_string($_POST['email']);
            $subject = $conn->real_escape_string($_POST['subject']);
            $comments = $conn->real_escape_string($_POST['comments']);
            $sql="INSERT INTO contact_form_info (username, email, subject, comments) VALUES ('".$username."','".$email."', '".$subject."', '".$comments."')";
            if(!$result = $conn->query($sql)){
	           die('There was an error running the query [' . $conn->error . ']');
	        }
	        else{
	        	echo 'I will contact you as soon as I can!';
         	}
        }

}
else
{
echo "Please fill Name and Email";
}


?>