<?php

echo "Adding Offer <br>";
if(isset($_GET['title']) && isset($_GET['destination'])){
   if(!empty($_GET['title']) && !empty($_GET['destination'])){
       echo '<b>Title : </b>'.$_GET['title'];
       echo "<br>";
       echo '<b>Destination : </b>'.$_GET['destination'];
   }else{
    echo 'Title or Destination empty.';
   }
}

?>