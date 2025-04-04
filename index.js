let input = document.querySelector("input");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let button = document.querySelector("button");

let rdn = Math.floor(Math.random()*1001);
let count = 0;
let chosenNumber;

//affiche le juste prix dans la console
console.log("The price: "+rdn);

//#1 Check if we enter number côté client
input.addEventListener('keyup', ()=>{
    //check if is a number
    if(isNaN(input.value)){
        //Display the error
        error.style.display = "inline";
    }
    else{
        //Display nothing
        error.style.display = "none";
    }
})
//#2 Check if we enter number côté serveur
formulaire.addEventListener('submit', (e) =>{
    //empeche d'envoyer la valeur du formulaire côté serveur ce qu'on ne veut pas
    e.preventDefault();
    //si est pas un nombre
    if(isNaN(input.value) || input.value == "" || input.value.indexOf(' ') >= 0){
        input.style.borderColor = "red";
    }
    //si est un nombre
    else{
        count++;
        input.style.borderColor = "green";
        chosenNumber = input.value;
        input.value= '';
        //
        displayInstruction(chosenNumber);
        
    }

})

function displayInstruction(chosenNumber){
    //Créer la div instruction
    let instruction = document.createElement("div");
    chosenNumber = parseInt(chosenNumber);//convert to int
        if(chosenNumber>rdn){
            //ajoute la class moins
            instruction.textContent = "#" + count + "( " + chosenNumber + " ) It's smaller !";
            instruction.className = "instruction moins";
        }
        else if(chosenNumber<rdn){
            //ajoute la class plus
            instruction.textContent = "#" + count + "( " + chosenNumber + " ) It's greather !";
            instruction.className = "instruction plus";
        }
        else{
            instruction.textContent = "#" + count + "( " + chosenNumber + " ) Congratulations you have found the price !";
            instruction.className = "instruction fini";
            //desactive l'input quand on trouve le prix
            input.disabled = true;
        }
    //Ajoute l'instruction dans la page en fonction de la class
    //prepend ajoute la div avant l'element (défilement vers le haut) différent de append
    document.querySelector("#instructions").prepend(instruction);
}
