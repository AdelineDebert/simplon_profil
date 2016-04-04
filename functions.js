function recupProfils(){
    profilsBase = JSON.parse(this.responseText);
    createProfil();
}

var requete = new XMLHttpRequest();
requete.onload = recupProfils;

requete.open("get", "http://www.benoitdelb.top/test/renvoiejson.php", true);
requete.send();

//
// var profilsBase = [{
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "DEBERT Adeline",
//   portfolio: "monportfolio.fr",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 5},{nom: "js", progression: 1}, {nom: "php", progression: 4},{nom: "jquery", progression: 5},{nom: "css", progression: 5},{nom: "nodejs", progression: 1}],
//   presentation: "Bonjour, moi c'est Adeline",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif:  "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "ANTHONY Elodie",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Elo",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif:  "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "FZ Charline",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Charline",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "TOTO Toto",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Toto",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "EYRE Samuel",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Sam",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "JECPAS David",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 5}],
//   presentation: "Bonjour, moi c'est David",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "JECPAS Séverin",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Séverin",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "TORTUE Sam",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Michèle",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "JACQUEMIN Irina",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Irina",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// },
// {
//   gif: "gif",
//   gif2: "url gif2",
//   photoMin: "url photo mini",
//   nom: "SAILLANT Chloé",
//   portfolio: "#",
//   github: "#",
//   codepen: "#",
//   competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
//   presentation: "Bonjour, moi c'est Chloé",
//   reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
// }
// ];

var profils=[];
var numbProfils= 24;

function createProfil(){
  for (var i = 0; i< numbProfils; i++){
    // ------------------------------------------------------------- Random des Profils
    var indexRand = Math.floor(Math.random()*profilsBase.length);
    var profilRand = profilsBase.splice(indexRand,1);
    profils.push(profilRand[0]);
    // ------------------------------------------------------------- Creation des Profils
    createDiv_blocprofil(i);
    createPhotoronde(i);
    createDiv_chevron(i);
    createDiv_infosprofil(i);
    createH2(i);
    createPortfolio(i);
    createDiv_iconespro(i);
    createLienGithub(i);
    createLienCodepen(i);
    createDiv_competencesFermee(i);
    createGif(i);
  }
}

function animation_Profil(event){

  var u = event.currentTarget.getAttribute("data-profil-id");
  var thisDiv = document.getElementById(u);
  var new_infosProfil = document.getElementById("infos"+u);
  var new_photoRonde = document.getElementById("avatar"+u);
  var new_chevron = document.getElementById("chevron"+u);
  var new_icones = document.getElementById("icones"+u);
  var gif_back = document.getElementById("img_back_"+u);

  if(new_chevron.classList.contains("chevron") === true){
  gif_back.setAttribute("src", profil[u].prenom+"_actif.gif");
  var  removeDiv = document.getElementById('competences'+u);
  new_infosProfil.removeChild(removeDiv);

  new_infosProfil.removeAttribute("class");
  new_infosProfil.setAttribute("class", "infosprofil-ouvert");

  createDiv_description(u);
  createDiv_competencesOuverte(u);
  new_photoRonde.classList.remove("photoronde");
  new_photoRonde.setAttribute("class", "photoronde-ouvert");

  new_chevron.classList.remove("chevron");
  new_chevron.setAttribute("class", "chevron-ouvert");


  new_icones.classList.remove("iconespro");
  new_icones.setAttribute("class", "iconespro-ouvert");

  createDiv_reseaux(u);
}else{
  gif_back.setAttribute("src", profil[u].prenom+"_attente.gif");
  createDiv_competencesFermee(u);

  new_infosProfil.removeAttribute("class");
  new_infosProfil.setAttribute("class", "infosprofil");

  var removeDescription = document.getElementById("description"+u);
  new_infosProfil.removeChild(removeDescription);

  var removeCompetencesOuvertes = document.getElementById("competences_ouvertes"+u);
  new_infosProfil.removeChild(removeCompetencesOuvertes);

  var removeReseaux = document.getElementById("reseaux"+u);
  new_infosProfil.removeChild(removeReseaux);

  new_infosProfil.removeAttribute("class");
  new_infosProfil.setAttribute("class", "infosprofil");

  new_photoRonde.classList.remove("photoronde-ouvert");
  new_photoRonde.setAttribute("class", "photoronde");

  new_chevron.classList.remove("chevron-ouvert");
  new_chevron.setAttribute("class", "chevron");


  new_icones.classList.remove("iconespro-ouvert");
  new_icones.setAttribute("class", "iconespro");
}

}



// -----------------------------------pour refermer la div
// remove description createDiv_competencesOuverte reseau
//rappeler competences fermees
// nouveau paramètre create gif


// -------------------------------------------------------------- Creation de la div container

function createDiv_blocprofil(i){
  var section = document.getElementById("profil");
  div_blocprofil = document.createElement("div");
  div_blocprofil.setAttribute("class", "blocprofil");
  div_blocprofil.setAttribute("id", i);
  section.appendChild(div_blocprofil);
  return div_blocprofil;
}

//---------------------------------------------------------------  Photo ronde
function createPhotoronde(i){
  photoronde = document.createElement("img");
  div_blocprofil.appendChild(photoronde);
  photoronde.setAttribute("src", profils[i].prenom+ "_petite.png");
  photoronde.setAttribute("class", "photoronde");
  photoronde.setAttribute("id", "avatar"+i);
  return photoronde;
}

// --------------------------------------------------------------   Div contenant toutes les infos
function createDiv_infosprofil(i){
  div_infosprofil = document.createElement("div");
  div_blocprofil.appendChild(div_infosprofil);
  div_infosprofil.setAttribute("class", "infosprofil");
  div_infosprofil.setAttribute("id", "infos"+i);
  return div_infosprofil;
}

// ------------------------------------------------------------------ Le chevron pour descendre
function createDiv_chevron(i){
  div_chevron = document.createElement("div");
  div_blocprofil.appendChild(div_chevron);
  div_chevron.setAttribute("class", "chevron");
  div_chevron.setAttribute("id", "chevron"+i);
  div_chevron.addEventListener("click", animation_Profil, false);
  div_chevron.setAttribute("data-profil-id", i);
  var img_chevron = document.createElement("img");
  div_chevron.appendChild(img_chevron);
  img_chevron.setAttribute("src", "chevron_bas.svg");
  return div_chevron;
}

// ------------------------------------------------------------------- NOM Prenom
function createH2(i){
  h2 = document.createElement("h2");
  div_infosprofil.appendChild(h2);
  h2.textContent = profils[i].nom;
  return h2;
}

// -----------------------------------------------------------------------Lien vers le portfolio
function createPortfolio(i){
  portfolio = document.createElement("a");
  div_infosprofil.appendChild(portfolio);
  portfolio.setAttribute("class", "portfolio");
  portfolio.setAttribute("href","profils[i].portfolio");
  portfolio.textContent = profils[i].portfolio;
  return portfolio;
}

//----------------------------------------------------------------------- Container icones github/codepen
function createDiv_iconespro(i){
  div_iconespro = document.createElement("div");
  div_infosprofil.appendChild(div_iconespro);
  div_iconespro.setAttribute("class", "iconespro");
  div_iconespro.setAttribute("id", "icones"+i);
  return div_iconespro;
}

// ----------------------------------------------------------------------- Lien Github
function createLienGithub(i){
  if (profils[i].github != null){
  liengithub = document.createElement("a");
  div_iconespro.appendChild(liengithub);
  liengithub.setAttribute("href", profils[i].github);
  liengithub.setAttribute("class", "liengithub");
  var imgGithub = document.createElement("img");
  liengithub.appendChild(imgGithub);
  imgGithub.setAttribute("src", "github.svg");
  return liengithub;
}else{
  return;
}
}

// ------------------------------------------------------------------------ Lien Codepen
function createLienCodepen(i){
  if (profils[i].codepen != null){
  liencodepen = document.createElement("a");
  div_iconespro.appendChild(liencodepen);
  liencodepen.setAttribute("href", "profils[i].codepen");
  liencodepen.setAttribute("class", "liencodepen");
  var imgCodepen= document.createElement("img");
  liencodepen.appendChild(imgCodepen);
  imgCodepen.setAttribute("src", "codepen.svg");
  return liencodepen;
}else{
  return;
}
}

//------------------------------------------------------------------------- Texte de présentation
function createDiv_description(i){
  var new_infosProfil = document.getElementById("infos"+i);
  div_description = document.createElement("div");
  new_infosProfil.appendChild(div_description);
  div_description.setAttribute("class", "description-ouvert");
  div_description.setAttribute("id", "description"+i);
  var p = document.createElement("p");
  div_description.appendChild(p);
  p.textContent = profils[i].presentation;
  return div_description;
}

//----------------------------------------------------------------------- Compétences version div Ouverte
function createDiv_competencesOuverte(i){
  var new_infosProfil = document.getElementById("infos"+i);
  div_competences_ouvertes = document.createElement("div");
  new_infosProfil.appendChild(div_competences_ouvertes);
  div_competences_ouvertes.setAttribute("class", "competences-ouvert");
  div_competences_ouvertes.setAttribute("id", "competences_ouvertes"+i);
  var competencesArray = profils[i].competences;
  for (var j = 0; j < competencesArray.length; j ++ ){
    var langage = document.createElement("div");
    div_competences_ouvertes.appendChild(langage);
    langage.setAttribute("class", "langage-ouvert");
    var h5 = document.createElement("h5");
    langage.appendChild(h5);
    h5.textContent = competencesArray[j].nom;

//-------------------------------------------------------------------------- barre de progression
    var barreprogression = document.createElement("div");
    langage.appendChild(barreprogression);
    barreprogression.setAttribute("class", "barreprogression-ouvert");
    var barreprogressionWidth = 32;
    var avanceeprogression = document.createElement("div");
    barreprogression.appendChild(avanceeprogression);
    avanceeprogression.setAttribute("class", "avanceeprogression");
    console.log("niveau :", competencesArray[j].niveau," ",competencesArray[j].nom);
      if (competencesArray[j].niveau == 1){
        avanceeprogression.style.width = barreprogressionWidth + "px";
      }else if (competencesArray[j].niveau == 2){
        avanceeprogression.style.width = barreprogressionWidth * 2 + "px";
      }else if (competencesArray[j].niveau == 3){
        avanceeprogression.style.width = barreprogressionWidth * 3 + "px";
      }else if (competencesArray[j].niveau == 4){
        avanceeprogression.style.width = barreprogressionWidth * 4 + "px";
      }else{
        avanceeprogression.style.width = barreprogressionWidth *5 + "px";
      }
}
  return div_competences_ouvertes;
}

//----------------------------------------------------------------------- Compétences version div fermée
function createDiv_competencesFermee(i){
  var new_infosProfil = document.getElementById("infos"+i);
  div_competences_fermees = document.createElement("div");
  new_infosProfil.appendChild(div_competences_fermees);
  div_competences_fermees.setAttribute("class", "competences");
  div_competences_fermees.setAttribute("id", "competences"+i);
  var competencesArray = profils[i].competences;
  for (var j = 0; j < competencesArray.length; j ++ ){
    function afficheLangages(){
      var langage = document.createElement("div");
      div_competences_fermees.appendChild(langage);
      langage.setAttribute("class", "langage");
      var h5 = document.createElement("h5");
      langage.appendChild(h5);
      h5.textContent = competencesArray[j].nom;
    }
    if (competencesArray.length > 3){
      competencesArray.splice(4);
      afficheLangages();
    }else{
      afficheLangages();
    };
  };
  return div_competences_fermees;
}
// ----------------------------------------------------------------------------Réseaux sociaux
function createDiv_reseaux(i){
  var new_infosProfil = document.getElementById("infos"+i);
  div_reseaux = document.createElement("div");
  new_infosProfil.appendChild(div_reseaux);
  div_reseaux.setAttribute("class", "reseaux-ouvert");
  div_reseaux.setAttribute("id", "reseaux"+i);
  var reseauxArray = profils[i].reseaux;
  for (var k = 0; k < reseauxArray.length; k++){
    var lienreseaux = document.createElement("a");
    div_reseaux.appendChild(lienreseaux);
    lienreseaux.setAttribute("class", reseauxArray[k].nom);
    lienreseaux.setAttribute("href", reseauxArray[k].url);
    var imgReseaux = document.createElement("img");
    lienreseaux.appendChild(imgReseaux);
    var cheminImg = reseauxArray[k].nom + ".svg";
    imgReseaux.setAttribute("src", cheminImg);

  }
  return div_reseaux;
}

//----------------------------------------------------------------------------------gif de fond
function createGif(i){
  gif = document.createElement("img");
  div_blocprofil.appendChild(gif);
  gif.setAttribute("src", profil[i].prenom +"_attente.gif");
  gif.setAttribute("class", "photofull");
  gif.setAttribute("id", "img_back_"+i);
  return gif;
}
