<?php
require_once '../config.php';
class OfferController{
    function displayOffers(){
        $sql ='SELECT * FROM `offer`';
        $db = config::getConnexion();
        try{
            $query= $db->prepare($sql);
            $query->execute();
            $result= $query->fetchAll();
        }catch(Exception $e){
            echo 'error message'. $e->getMessage();
        }
        foreach ($result as $row) {
            var_dump($row);
        }
    }


}

$oC=new OfferController();
$oC->displayOffers();
?>