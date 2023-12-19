//Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
//Création des balises
for (let i = 0; i < pieces.length; i++) {
  const article = pieces[i];
  //Creation du corps de la carte produits
  const pieceElement = document.createElement("article");
  //Creation des balises
  const imageElement = document.createElement("img");
  imageElement.src = article.image;
  const nomElement = document.createElement("h2");
  nomElement.innerText = article.nom;
  const prixElement = document.createElement("p");
  prixElement.innerText = `Prix : ${article.prix} €(${
    article.prix < 35 ? "€" : "€€€"
  })`;
  const categorieElement = document.createElement("p");
  categorieElement.innerText = article.categorie ?? "(Aucune catégorie)";
  const descriptionElement = document.createElement("p");
  descriptionElement.innerText =
    article.description ?? "(Pas de description pour le moment)";
  const stockElement = document.createElement("p");
  stockElement.innerText =
    article.disponibilite === true ? "En stock" : "En rupture";

  const sectionFiches = document.querySelector(".fiches");
  sectionFiches.appendChild(pieceElement);
  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nomElement);
  pieceElement.appendChild(prixElement);
  pieceElement.appendChild(categorieElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
}
