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

    var Notes = input[0].split(" ");
    var NbreDeMeilleursCopains = Number(input[2]);
    var Copains = input.slice(3);
    var TbleNotes = 0 ;
    var MesNotes = [];
    var NotesDesCopains ;
    var TbleCopains ;
    var Distance = 0;
    var TbleDistance = [];
    var cc = [];

   
    

   for (let i = 0; i < Copains.length; i++) {
     TbleCopains  = Copains[i].split(' ');
     NotesDesCopains = TbleCopains.map(Number);
    
 }

 for (let i = 0; i< Notes.length; i++) {
     TbleNotes = Number(Notes[i]);
     MesNotes.push(TbleNotes)
  
 for (let i = 0;   i <MesNotes.length; i++) {
     Distance = Distance + Math.abs( NotesDesCopains[i] - MesNotes[i]) ;  
    //  console.log(Distance);
  

 }
 TbleDistance.push(Distance)
  // console.log(NotesDesCopains);
  
  } 
 console.log( TbleDistance)
  


   
  
//   const chaineMesNotes = input[0].split(" ");
//   let mesNotes = [];
  
//   for(let i = 0; i < chaineMesNotes.length; i = i + 1) {
//     mesNotes.push(+chaineMesNotes[i]);
//   }
  
//   const nombreDeCopains = +input[1];
//   const nombreDeMeilleursCopains = +input[2];
//   let distances = [];

//   for (let i = 3; i < nombreDeCopains + 3; i = i + 1) {
//     const chaineNotesCopains = input[i].split(" ");
//     let notesCopains = [];
//     for(let i = 0; i < chaineNotesCopains.length; i = i + 1) {
//       notesCopains.push(+chaineNotesCopains[i]);
//     }
//  console.log(notesCopains);
//     let distance = 0;
//     for (let i = 0; i < mesNotes.length; i = i + 1) {
//       distance = distance + Math.abs(mesNotes[i] - notesCopains[i]);
     
//     }
//     distances.push(distance);
//   }
//     // console.log(distances);

  
   
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;