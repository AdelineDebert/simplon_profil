
var profils = [{
  gif: "avatar-femme.jpg",
  gif2: "url gif2",
  photoMin: "url photo mini",
  nom: "DEBERT Adeline",
  portfolio: "#",
  github: "#",
  codepen: "#",
  competences: [{nom: "html", progression: 3},{nom: "js", progression: 2}],
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
var div_blocprofil;
var div_infosprofil;
var img_chevron;
var h2;
var portfolio;
var div_iconespro;
var liengithub;
var liencodepen;
var div_description;
var div_competences;
var div_reseaux;

function createProfil(){
  console.log("je suis dans la fonction createprofil");
  createDiv_blocprofil();
  createDiv_infosprofil();
  createImg_chevron();
  createH2();
  createPortfolio();
  createDiv_iconespro();
  createLienGithub();
  createLienCodepen();
  createDiv_description();
  createDiv_competences();
  createDiv_reseaux();
}

// -------------------------------------------------------------- Creation de la div container

function createDiv_blocprofil(){
  div_blocprofil = document.createElement("div");
  div_blocprofil.setAttribute("class", "blocprofil");
  document.body.appendChild(div_blocprofil);
}

// --------------------------------------------------------------   Div contenant toutes les infos
function createDiv_infosprofil(){
  div_infosprofil = createElementPerso(div_blocprofil, div);
  div_infosprofil.setAttribute("class", "infosprofil");
}

// ------------------------------------------------------------------ Le chevron pour descendre
function createImg_chevron(){
  img_chevron = createElementPerso(div_infosprofil, img);
  img_chevron.setAttribute("src", "chevron_bas.svg");
}

// ------------------------------------------------------------------- NOM Prenom
function createH2(){
  h2 = createElementPerso(div_infosprofil, h2);
  h2.textContent = profils[0].nom;
}

// -----------------------------------------------------------------------Lien vers le portfolio
function createPortfolio(){
  portfolio = createElementPerso(div_infosprofil, a);
  portfolio.setAttribute("class", "portfolio");
  portfolio.setAttribute("href","profils[0].portfolio");
  portfolio.textContent = profils[0].portfolio;
}

//----------------------------------------------------------------------- Container icones github/codepen
function createDiv_iconespro(){
  div_iconespro = createElementPerso(div_infosprofil, div);
  div_iconespro.setAttribute("class", "iconespro");
}

// ----------------------------------------------------------------------- Lien Github
function createLienGithub(){
  liengithub = createElementPerso(div_iconespro, a);
  liengithub.setAttribute("href", "profils[0].github")
  var imgGithub = createElementPerso(liengithub, img);
  imgGithub.setAttribute("src", "github.svg");
}

// ------------------------------------------------------------------------ Lien Codepen
function createLienCodepen(){
  liencodepen = createElementPerso(div_iconespro, a);
  liencodepen.setAttribute("href", "profils[0].codepen")
  var imgCodepen= createElementPerso(liencodepen, img);
  imgCodepen.setAttribute("src", "codepen.svg");
}

//------------------------------------------------------------------------- Texte de présentation
function createDiv_description(){
  div_description = createElementPerso(div_infosprofil, div);
  div_description.setAttribute("class", "description");
  var p = createElementPerso(div_description, p);
  p.textContent = profils[0].presentation;
}

//----------------------------------------------------------------------- Compétences
function createDiv_competences(){
  div_competences = createElementPerso(div_infosprofil, div);
  competencesArray = profils[0].competences;
  for (var j = 0; j < competencesArray.length; j ++ ){
    var langage = createElementPerso(div_competences, div);
    langage.setAttribute("class", "langage");
    var h5 = createElementPerso(langage, h5);
    h5.textContent = competencesArray[j].nom;
  //--------------------------------- AJOUTER LA BARRE DE PROGRESSION
  }
}

// ----------------------------------------------------------------------------Réseaux sociaux
function createDiv_reseaux(){
  div_reseaux = createElementPerso(div_infosprofil, div);
  reseauxArray = profils[0].reseaux;
  for (var k = 0; k < reseauxArray.length; k ++){
    var lienreseaux = createElementPerso(div_reseaux, a);
    lienreseaux.setAttribute("class", "reseauxArray[k].nom");
    lienreseaux.setAttribute("href", "reseauxArray[k].url");
    var imgReseaux = createElementPerso(lienreseaux, img);
    var cheminImg = reseauxArray[k].nom + ".svg";
    imgReseaux.setAttribute("src", "cheminImg");
  }
}



// --------------------------------------------------------------------------Fonction création éléments

function createElementPerso(conteneur, element){
var element = document.createElement("element");
conteneur.appendChild(element);
}

// window.onload = createProfil();
