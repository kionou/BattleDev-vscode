// Ne supprimez pas ces lignes
// Chargement de l'input de test
let input;
function initInput(valeur) {
  input = valeur;
}

// Ne supprimez pas ces lignes
// Support de LocalPrint et LocalPrintArray utilisées dans les
// réponses des exercices de la saison 11
function LocalPrint(chaine) {
  console.error(chaine);
}
function LocalPrintArray(chaine) {
  console.error(chaine);
}

// -- Développez votre code dans la fonction ContestResponse ci-après
function ContestResponse() {

  var  Nbre_Resto=input[0];
  var notes_resto = input.slice(1);
  var nombre 
  var moyenne_max = [];

  for (let i = 0; i < notes_resto.length; i++) {
    nombre = notes_resto[i].split(' ')
    let n1 = Number(nombre[0])
    let n2 = Number(nombre[1])
    let n3 = Number(nombre[2])
   let  moyenne = (n1+n2+n3)/3
        moyenne = Math.ceil(moyenne)
    moyenne_max.push(moyenne)

    
  }
      Math.max(...moyenne_max)
      console.log( Math.max(...moyenne_max));
 



  // Implémentez votre code ci-dessous
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;