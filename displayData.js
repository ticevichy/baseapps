// Récupération des données du fichier JSON
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Récupération de l'élément tbody du tableau HTML
    const tbody = document.querySelector("#data");

    // Parcours de chaque objet dans le fichier JSON et création d'une nouvelle ligne dans le tableau HTML
    data.forEach(obj => {
      const tr = document.createElement("tr");
      const tdNom = document.createElement("td");
      tdNom.textContent = obj.nom;
      const tdPrenom = document.createElement("td");
      tdPrenom.textContent = obj.prenom;
      tr.appendChild(tdNom);
      tr.appendChild(tdPrenom);
      tbody.appendChild(tr);
    });
  })
  .catch(error => console.error(error));
