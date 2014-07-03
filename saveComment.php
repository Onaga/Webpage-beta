<?php
	//get value of text fields from the form
	$username=htmlspecialchars($_POST['username']);
	$comment=htmlspecialchars($_POST['commentText']);
	
	//path to file 
	$file = 'data/comments.zontak';
	
	//gets content of the file
	$current = file_get_contents($file);
	
	//add new comment
    $current .= "##".$username."%%".$comment;
	
	//save to file
    file_put_contents($file, $current);
	
	header('Location: bookOfMagic.php');
?>