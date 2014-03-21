<?php

$to = "rblaske@realmadvertising.com, eberrios@realmadvertising.com";
$subject = 'GFTC Timing Promo Contact';

$contactName = 'Missing information';
$contactEmail = 'Missing information';

if(isset($_POST['name'])){ 
	$contactName = $_POST['name']; 
}

if(isset($_POST['email'])){ 
	$contactEmail = $_POST['email']; 
} else {
	//header('Location: http://www.realmadvertising.com/timing/');
	//exit;
}

date_default_timezone_set('America/New_York');
$sentDateTime = date('m/d/Y h:i:s a', time());

$body = '
<html>
<body>
	<h2>GFTC Timing Promo Contact:</h2>
	<p>The following information has been sent by a visitor at:<br/>
	<a href="http://www.realmadvertising.com/timing">http://www.realmadvertising.com/timing</a></p>
	<table>
		<tr>
			<td><strong>Name</strong></td>
			<td>' . $contactName . '</td>
		</tr>
		<tr>
			<td><strong>Email</strong></td>
			<td>' . $contactEmail . '</td>
		</tr>
		<tr>
			<td><strong>Sent</strong></td>
			<td>' . $sentDateTime . '</td>
		</tr>
	</table>
</body>
</html>
';

$headers = 'From: GFTC Contact Form <info@realmadvertising.com>' . "\r\n";
$headers .= 'Content-type: text/html' . "\r\n";

mail($to, $subject, $body, $headers);

?>