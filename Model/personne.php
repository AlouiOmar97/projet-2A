<?php

class Personne{
  //  public string $nom;
  //  public string $prenom;
      private string $nom;
      private string $prenom;

    public function __construct(string $nom,string $prenom)
    {
        /*$this->nom= 'Default nooom';
        $this->prenom= 'prenom par defaut';*/
        $this->nom= $nom;
        $this->prenom= $prenom;
    }

    public function __destruct()
    {
        echo '<br>Object Personne deleted.<br>';
    }

    public function saisir(string $nom,string $prenom){
        $this->nom= $nom;
        $this->prenom= $prenom;
    }

    public function afficher(){
        echo '<table border="2px"><tr><th>Nom</th><th>Prenom</th></tr>';
        echo '<tr><td>'.$this->nom.'</td>'.'<td>'.$this->prenom.'</td></tr></table>';
    }

    public function getNom(){
        return $this->nom;
    }

    public function getPrenom(){
        return $this->prenom;
    }

    public function setNom(string $nom){
        $this->nom= $nom;
    }

    public function setPrenom(string $prenom){
        $this->prenom= $prenom;
    }

}

$personne1=new Personne('Yassine','Oussama');
$personne1->afficher();
$personne2=new Personne('Yassmine','Sarra');
$personne2->afficher();
$personne1->saisir('Ahmed','Ali');
echo $personne1->getNom();
$personne2->saisir('khaled','Ali');
$personne1->afficher();
$personne2->afficher();
$personne2->saisir('khaled','Agmed');
$personne2->setPrenom('Ahmed2');
$personne2->afficher();
echo $personne1->getNom().'<br>'; 
$personne5=1;
if($personne5 instanceof Personne){
    echo 'instance de la classe Personne';
}else{
    echo 'ce n\'est pas une instance de la classe personne';
}
echo '<br>';
var_dump($personne2);
unset($personne1);
?>