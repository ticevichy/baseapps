// Récupérer le formulaire
var form = document.querySelector('form');

// Ajouter un écouteur d'événements pour le formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du formulaire
  
  // Récupérer les valeurs du formulaire
  var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;

  // Créer un objet pour stocker les données du formulaire
  var userData = {
    nom: nom,
    prenom: prenom
  };

  // Récupérer les données existantes du fichier JSON
  var json = localStorage.getItem('data');
  var data = json ? JSON.parse(json) : [];

  // Ajouter les nouvelles données au tableau
  data.push(userData);

  // Sauvegarder les données dans le fichier JSON
  localStorage.setItem('data', JSON.stringify(data));

  // Rediriger l'utilisateur vers la page d'affichage des données
  window.location.href = 'affichage.html';
});
