// initialisation de tous les boutons :
var btnPasser = document.getElementById('passer');
btnPasser.addEventListener("click", function(){
});

var btnAttaque = document.getElementById('attaque');
btnAttaque.addEventListener("click", function(){
if(enemy1.vies > 0){
  enemy1.vies = enemy1.vies - 25;
  gestionViesEnemy();
}

  //setInterval(nom fonction, temps);
});

var btnPotion = document.getElementById('potion');
btnPotion.addEventListener("click", function(){
});

var btnMagieFeu = document.getElementById('magie-feu');
btnMagieFeu.addEventListener("click", function(){
});

var btnMagieGlace = document.getElementById('magie-glace');
btnMagieGlace.addEventListener("click", function(){
});

// gestion affichages vies

    // container (player et ennemi) :
    var containerViesPlayer = document.querySelector('.vies-player');
    var containerViesEnnemi = document.querySelector('.vies-enemy');

    //creation balise HTML :
    var afficheLesViesDuJoueur = document.createElement('span');
    var afficheLesViesDeLennemi = document.createElement('span');

    // initialisation fonction :
    gestionViesEnemy();
    gestionViesJoueur();

    // vies du joueur :
    function gestionViesJoueur(){
      afficheLesViesDuJoueur.textContent = "PV : " + player.vies;
      containerViesPlayer.appendChild(afficheLesViesDuJoueur);
    }

    // vies de l'ennemi :
    function gestionViesEnemy(){
      afficheLesViesDeLennemi.textContent = "PV : " + enemy1.vies;
      containerViesEnnemi.appendChild(afficheLesViesDeLennemi);
    }

// conditions pour la mécanique du jeu :

if(enemy.vies === 0){
  imgEnemy.style.display = "none";
}
