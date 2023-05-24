// exercice 1
// let mdp = 2023;
// let question = prompt("Quelle est votre mot de passe");
// if(question == mdp){
//     console.log("Bienvenue");
// } else {
//     console.log("Erreur de mot de passe");
// }



// exercice 2 a

// let x = prompt("Entrez un nombre");
// if(isNaN(x)){
//     console.log("Veuillez suivre les instructions")
// } else {
//   let nombre = parseInt(x);
//   console.log("La suite de nombres pairs");
//   for( let i = 0; i <= nombre; i += 2) {
//         console.log(i)
// }
// }



// exercice 2 b

// let x = prompt("Entrez un nombre");
// if(isNaN(x)){
//     console.log("Veuillez suivre les instructions")
// } else{
// console.log("La suite de nombres impairs");
// let i;
// for( i = 0; i <= x; i++){
//     if(i%2 != 0){
//     console.log(i)}
// }
// }



// exercice 3

// let premierVariable = prompt("Entrez le premier nombre");
// let deuxiemeVariable = prompt("Entrez le deuxième nombre");
// if(isNaN(premierVariable || deuxiemeVariable)){
//     console.log("Veuillez suivre les instructions")
// } else {
//     console.log(`${premierVariable} et ${deuxiemeVariable}`)
//     let echange = premierVariable;
//     premierVariable = deuxiemeVariable;
//     deuxiemeVariable = echange;
//     console.log(`${premierVariable} et ${deuxiemeVariable}`);
// }


// exercice 4

// let year = parseInt(prompt("Entrez une année"));
// if(isNaN(year)){
//     console.log("Veuillez suivre les instructions");
// } else{    
//     if((year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0)){
//         console.log(`Oui, c'est une année bissextile`)
//     } else {
//         console.log(`Non, ce n'est pas un année bissextile`)
//     }
// }
    

// exercice 5

// let a = parseInt(prompt("Entrez la valeur de a"));
// let b = parseInt(prompt("Entrez la valeur de b"));
// let c = parseInt(prompt("Entrez la valeur de c"));
// if(isNaN(a || b || c)){
//     console.log(`Veuillez suivre les instructions`);
// } else {
//     // Formule de delta
//     let delta = Math.pow(b,2) - (4*a*c);
//     if(delta > 0){
//         // Nous devons trouver les deux racines
//         let s1,s2;
//         s1 = (-b + Math.sqrt(delta)) / (2*a);
//         s2 = (-b - Math.sqrt(delta)) / (2*a);
//         console.log(`La première racine vaut ${s1} et la deuxième racine vaut ${s2}`);
//     } else if(delta === 0){
//         // Les deux racines sont égales d'où S1 = S2
//         let s;
//         s = -b / (2*a);
//         console.log(`La solution vaut ${s}`);
//     } else {
//         console.log(`La racine carrée de Delta n'existe`)
//     }
// }

// exercice 6

// exercice 7

// let nombreAleatoire = Math.floor(Math.random() * 51);
// let nombre;

// do{
//     nombre = parseInt(prompt(`Donnez un nombre entre 10 et 20`));
//     if(isNaN(nombre)){
//         console.log(`Veuillez suivre les instructions`)
//     } if(nombre > 20){
//         console.log(`Plus grand`);
//     } else if(nombre < 10){
//         console.log(`Plus petit`);
//     }
//     break;
// } while(nombre !== nombreAleatoire);



