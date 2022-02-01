<?php
    $Object = new DateTime();  
    $DateAndTime = $Object->format("d-m-Y h:i:s a");  
    sleep(5);
    echo "Fecha actual $DateAndTime.";
?>