function createDiv_competences(i){
  div_competences = document.createElement("div");
  div_infosprofil.appendChild(div_competences);
  div_competences.setAttribute("class", "competences");
  var competencesArray = profils[i].competences;
  var competencesArrayFerme = [];

  for (var j = 0; j < competencesArray.length; j ++ ){
    while (competencesArrayFerme.length <= 3){
      if (competencesArray[j].progression === 5){
        competencesArrayFerme.push(competencesArray[j].nom);
      }else if (competencesArray[j].progression === 4){
        competencesArrayFerme.push(competencesArray[j].nom);
      }else if (competencesArray[j].progression === 3){
        competencesArrayFerme.push(competencesArray[j].nom);
      }else if (competencesArray[j].progression === 2){
        competencesArrayFerme.push(competencesArray[j].nom);
      }else{
        competencesArrayFerme.push(competencesArray[j].nom);
      }
    var langage = document.createElement("div");
    div_competences.appendChild(langage);
    langage.setAttribute("class", "langage");
    var h5 = document.createElement("h5");
    langage.appendChild(h5);
    h5.textContent = competencesArrayFerme[j];
      }
    };
