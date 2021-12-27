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
  // Implémentez votre code ci-dessous

var PrixDuBuffet = Number(input[0]);
var NbrePrsTable = input.slice(2);
var vente = 0;
var venteTotal =0;
for (let i = 0; i < NbrePrsTable.length; i++) {
   var NbreDePersones = Number(NbrePrsTable[i]) ;
   vente = NbreDePersones *  PrixDuBuffet;
    
     if ( NbreDePersones >= 10 ) {
         vente = vente * (1 - 0.3);
  } else if ( NbreDePersones >= 6) {
          vente = vente * 0.8;
  } else if (NbreDePersones >= 4) {
           vente =  vente * 0.9;
  }
  venteTotal = venteTotal + vente;   
}
      
 console.log(Math.ceil(venteTotal));   
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;