var infobulleEnemy = document.querySelector('#info-bulle-enemy'),
    infobullePlayer = document.querySelector('#info-bulle-player');

infobulleEnemy.style.display = "none";
infobullePlayer.style.display = "none";

var imgPlayer = document.querySelector('#player'),
    imgEnemy = document.querySelector('#enemy img');

// event au survol + "desurvol" des avatars

imgPlayer.addEventListener('mouseover', function(){
  infobullePlayer.style.display = "block";
});

imgPlayer.addEventListener('mouseout', function(){
  infobullePlayer.style.display = "none";
});

imgEnemy.addEventListener('mouseover', function(){
  infobulleEnemy.style.display = "block";
});

imgEnemy.addEventListener('mouseout', function(){
  infobulleEnemy.style.display = "none";
});


// récuperation des donnees a inclure dans l'infobulle :

    // creation des balises pour chaque element :
    var statsAttaqueP = document.createElement('p'),
        statsMagieP = document.createElement('p'),
        statsAttaqueE = document.createElement('p'),
        expPlayer = document.createElement('p'),
        statsMagieE = document.createElement('p'),
        typeEnemy = document.createElement('p');

    // recup les donnes depuis l'objet :
    statsAttaqueP.textContent = "Attaque : " + player.attaque;
    statsMagieP.textContent = "Magie : " + player.magie;
    expPlayer.textContent = "Experience : " + player.experience;
    statsAttaqueE.textContent = "Attaque : " + enemy1.attaque;
    statsMagieE.textContent = "Magie : " + enemy1.magie;
    typeEnemy.textContent = "Type : " + enemy1.type;

    // injecter les données dans la page :
    infobullePlayer.appendChild(statsAttaqueP);
    infobullePlayer.appendChild(statsMagieP);
    infobullePlayer.appendChild(expPlayer);
    infobulleEnemy.appendChild(statsAttaqueE);
    infobulleEnemy.appendChild(statsMagieE);
    infobulleEnemy.appendChild(typeEnemy);
