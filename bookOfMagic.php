
<?php 
	include 'header.php';
?>
<div id="bookOfMagicContent">
	<section>
			<?php
			//path to file
			$file = "data/comments.zontak";

			//gets content of the file
			$current = file_get_contents($file);
			$array=explode("##", $current);
			$counter = 0;

			for($i=count($array)-1; $i>0; $i-- ){
				if($counter == 15){
				break;
				}
				$counter++;
				$singleComment=explode("%%",$array[$i]);
				print("<div class='comment'>
				<div class='user'>".$singleComment[0]."<span class='says'> Says:</span></div>
				<div class='commentche'>".$singleComment[1]."</div></div>");
			}
			?>
	</section>
	<main>
		<div id="content">
			<form method="post" action="saveComment.php">
				<input type="text" name="username" id="username" placeholder="UserName"/>
				<textarea name="commentText" id="commentText" placeholder="Here type your comment"></textarea>
				<input type="submit" id="subButton" value="Submit" />
			</form>
		</div>
	</main>
</div>
<?php
	include 'footer.php';
 ?>
