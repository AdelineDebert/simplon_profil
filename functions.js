
var profils = [{
  gif: "avatar-femme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "DEBERT Adeline",
  portfolio: "monportfolio.fr",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 5},{nom: "js", progression: 1}],
  presentation: "Bonjour, moi c'est Adeline",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif:  "avatar-femme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "ANTHONY Elodie",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Elo",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif:  "avatar-femme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "FZ Charline",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Charline",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif: "avatar-homme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "TOTO Toto",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Toto",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif: "avatar-homme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "EYRE Samuel",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Sam",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif: "avatar-homme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "JECPAS David",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est David",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif: "avatar-homme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "JECPAS Séverin",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Séverin",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif:  "avatar-femme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "TORTUE Sam",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Michèle",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif:  "avatar-femme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "JACQUEMIN Irina",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Irina",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
},
{
  gif:  "avatar-femme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "SAILLANT Chloé",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
  presentation: "Bonjour, moi c'est Chloé",
  reseaux: [{nom: "twitter", url: "#"}, {nom: "linkedin", url: "#"}]
}
];


function createProfil(){
  for (var i = 0; i< profils.length; i++){
  createDiv_blocprofil(i);
  createDiv_infosprofil(i);
  createDiv_chevron(i);
  createH2(i);
  createPortfolio(i);
  createDiv_iconespro(i);
  createLienGithub(i);
  createLienCodepen(i);
  createDiv_description(i);
  createDiv_competences(i);
  createDiv_reseaux(i);
  createGif(i);
  // console.log("je suis dans la fonction createprofil");
}
}

// -------------------------------------------------------------- Creation de la div container

function createDiv_blocprofil(){
var section = document.getElementById("profil");
  div_blocprofil = document.createElement("div");
  div_blocprofil.setAttribute("class", "blocprofil");
  section.appendChild(div_blocprofil);
  return div_blocprofil;
}

// --------------------------------------------------------------   Div contenant toutes les infos
function createDiv_infosprofil(){
  div_infosprofil = document.createElement("div");
  div_blocprofil.appendChild(div_infosprofil);
  div_infosprofil.setAttribute("class", "infosprofil");
  return div_infosprofil;
}

// ------------------------------------------------------------------ Le chevron pour descendre
function createDiv_chevron(){
  div_chevron = document.createElement("div");
  div_blocprofil.appendChild(div_chevron);
  div_chevron.setAttribute("class", "chevron");
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
function createDiv_iconespro(){
  div_iconespro = document.createElement("div");
  div_infosprofil.appendChild(div_iconespro);
  div_iconespro.setAttribute("class", "iconespro");
  return div_iconespro;
}

// ----------------------------------------------------------------------- Lien Github
function createLienGithub(i){
  liengithub = document.createElement("a");
  div_iconespro.appendChild(liengithub);
  liengithub.setAttribute("href", profils[i].github);
  liengithub.setAttribute("class", "liengithub");
  var imgGithub = document.createElement("img");
  liengithub.appendChild(imgGithub);
  imgGithub.setAttribute("src", "github.svg");
  return liengithub;
}

// ------------------------------------------------------------------------ Lien Codepen
function createLienCodepen(i){
  liencodepen = document.createElement("a");
  div_iconespro.appendChild(liencodepen);
  liencodepen.setAttribute("href", "profils[i].codepen")
  var imgCodepen= document.createElement("img");
  liencodepen.appendChild(imgCodepen);
  imgCodepen.setAttribute("src", "codepen.svg");
  return liencodepen;
}

//------------------------------------------------------------------------- Texte de présentation
function createDiv_description(i){
  div_description = document.createElement("div");
  div_infosprofil.appendChild(div_description);
  div_description.setAttribute("class", "description");
  var p = document.createElement("p");
  div_description.appendChild(p);
  p.textContent = profils[i].presentation;
  return div_description;
}

//----------------------------------------------------------------------- Compétences
function createDiv_competences(i){
  div_competences = document.createElement("div");
  div_infosprofil.appendChild(div_competences);
  div_competences.setAttribute("class", "competences");
  var competencesArray = profils[i].competences;
  console.log("tableau de compétences : "+ competencesArray);
  for (var j = 0; j < competencesArray.length; j ++ ){
    var langage = document.createElement("div");
    div_competences.appendChild(langage);
    langage.setAttribute("class", "langage");
    var h5 = document.createElement("h5");
    langage.appendChild(h5);
    h5.textContent = competencesArray[j].nom;
//-------------------------------------------------------------------------- barre de progression
    var barreprogression = document.createElement("div");
    div_competences.appendChild(barreprogression);
    barreprogression.setAttribute("class", "barreprogression");
    var barreprogressionWidth = 160;
    var avanceeprogression = document.createElement("div");
    avanceeprogression.setAttribute("class", "avanceeprogression");
    console.log("progression "+competencesArray[j].progression);
      if (competencesArray[j].progression === 1){
        avanceeprogression.style.width = barreprogressionWidth / 5 + "px";
      }else if (competencesArray[j].progression === 2){
        avanceeprogression.style.width = barreprogressionWidth / 4 + "px";
      }else if (competencesArray[j].progression === 3){
        avanceeprogression.style.width = barreprogressionWidth / 3 + "px";
      }else if (competencesArray[j].progression === 4){
        avanceeprogression.style.width = barreprogressionWidth / 2 + "px";
      }else{
        avanceeprogression.style.width = barreprogressionWidth + "px";
      }
    barreprogression.appendChild(avanceeprogression);
}
  return div_competences;
}

// ----------------------------------------------------------------------------Réseaux sociaux
function createDiv_reseaux(i){
  div_reseaux = document.createElement("div");
  div_infosprofil.appendChild(div_reseaux);
  div_reseaux.setAttribute("class", "reseaux");
  var reseauxArray = profils[i].reseaux;
  for (var k = 0; k < reseauxArray.length; k ++){
    var lienreseaux = document.createElement("a");
    div_reseaux.appendChild(lienreseaux);
    lienreseaux.setAttribute("class", reseauxArray[k].nom);
    lienreseaux.setAttribute("href", "reseauxArray[k].url");
    var imgReseaux = document.createElement("img");
    lienreseaux.appendChild(imgReseaux);
    var cheminImg = reseauxArray[k].nom + ".svg";
    imgReseaux.setAttribute("src", cheminImg);
  }
    return div_reseaux;
}

//----------------------------------------------------------------------------------gif de fond
function createGif(){
  gif = document.createElement("img");
  div_blocprofil.appendChild(gif);
  gif.setAttribute("src", "elodie.gif");
  return gif;
}

// --------------------------------------------------------------------------Fonction création éléments

// function createElementPerso(conteneur, element){
// var element = document.createElement("element");
// conteneur.appendChild(element);
// }

// window.onload = createProfil();
