function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let nb = document.getElementById("qty").value;
  let titreTexte = document.getElementById("titre").value;
  let contenuTexte = document.getElementById("contenu").value;
  let demo = document.getElementById("demo");

  demo.innerHTML = ""
  for(let i = 0;i < nb;i++){
    let h = document.createElement("h2");
    h.textContent = titreTexte + " " + i;
    let p = document.createElement("p");
    p.textContent = contenuTexte + " " + i;

    demo.appendChild(h);
    demo.appendChild(p);
  };
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  let couleur = document.getElementById("couleur").value;
  let demo = document.getElementById("demo");
  let ps = demo.getElementsByTagName("p");
  for(let p of ps){
    p.style.color = couleur;
  }

}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let nouvelleClass = document.getElementById("btnClass").value;
  let boutons = document.getElementsByTagName("button")
  for(let bouton of boutons){
    bouton.className = nouvelleClass
  }
}