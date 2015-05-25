
// Etape 1 declarations des variables

// form est un objet vide
var form = {};
form.texte1 = "";

var form2 = {};
form2.largeur = "";
form2.longueur = "";
form2.hauteur = "";

var dab = {};
dab.somme = 0;
dabTabImage = [
			'<img src="media/img/euros-500.jpg">',
			'<img src="media/img/euros-200.jpg">',
			'<img src="media/img/euros-100.jpg">',
			'<img src="media/img/euros-50.jpg">',
			'<img src="media/img/euros-20.jpg">',
			'<img src="media/img/euros-10.jpg">',
			'<img src="media/img/euros-5.jpg">'
			]

// On ecrit du plus grand au plus petit
dabTabBillet = [500, 200, 100, 50, 20, 10, 5];			

// Etape 2 declarations des fonctions

form.demarrage = function()
{
	//alert("la page est prete");

	// Installer les on click
	jQuery("#bouton1").on("click", form.click1); 
};

form.click1 = function()
{
	//alert("tu as clicker");

	// Recuperer ce que le visiteur a ecrit
	form.texte1 = jQuery("Input#nom").val();
	alert(form.texte1);
	jQuery("#resultat1").html(form.texte1);
}

form2.demarrage = function()
{
	//alert("la page est prete");

	// Installer les on click
	jQuery("#total").on("click", form2.click1); 
};

form2.click1 = function()
{
	form2.largeur = parseInt(jQuery("#number").val());
	form2.longueur = parseInt(jQuery("#number2").val());
	form2.hauteur = parseInt(jQuery("#number3").val());
	resultat = "";

	if (form2.largeur && form2.longueur)
	{
		resultat = ((form2.largeur + form2.longueur) * 2);
		jQuery("#surface1").html(resultat);
	}

	if (form2.largeur && form2.longueur && form2.hauteur)
	{
		resultat = ((form2.largeur + form2.longueur) * 2) * form2.hauteur;
		jQuery("#surface2").html(resultat);
	}

}


dab.demarrage = function()
{
	//alert("la page est prete");

	// Installer les on click
	jQuery("#retrait").on("click", dab.click); 
};


dab.click = function()
{

	// on recupere la somme entrer
	dab.somme = parseInt(jQuery("#nombre").val());

	// Parcourir le tableau des billets


	compteur = 0;
	// effacer les billets
	jQuery("#afficheBillet").html("");

	while(compteur < dabTabBillet.length)
	{
		billetEnCours = dabTabBillet[compteur];
		imageEnCours = dabTabImage[compteur];

		//alert("combien de billet " + billetEnCours);

		nbBillets = Math.floor(dab.somme / billetEnCours);

		//alert(nbBillets);

		compteurBillet = 0;

		while(compteurBillet < nbBillets)
		{
			// Afficher le billet

			// .append sert a garder et ajouter une image
			jQuery("#afficheBillet").append(imageEnCours);

			compteurBillet += 1;
		}

		// Enlever la somme distribuer

		dab.somme = dab.somme - nbBillets * billetEnCours;
		// ou dab.somme = dab.somme % billetEnCours;



		compteur += 1;

	
	}

}


// Etape 3 activations des codes


// Demande a jQuery d'activer la fonction form.demarrage seulement quand la page est prete
jQuery(form.demarrage);
jQuery(form2.demarrage);
jQuery(dab.demarrage);