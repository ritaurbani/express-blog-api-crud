// ESERCIZIO 1
// Scrivi una funzione filterByLength che accetta un array di stringhe e un numero minimo di caratteri.
//Restituisci un nuovo array contenente solo le stringhe con una lunghezza maggiore o uguale al numero dato.
//
// Esempio di invocazione della funzione:

// const words = ["apple", "cat", "banana", "dog"]

// function filterByLength(arr,minCharNum) {
//     const result = arr.filter((curElem) => curElem.length >=minCharNum)
//     return result
// }

// console.log(filterByLength(words,4))



// ESERCIZIO 2
// Calcola la somma e la media dei primi 10 numeri.

// const nums = [2,4,5,6,7,8,8,9,6,7,8,7,8,8,9]

// sum =0;
// for(let i=0; i< 10; i++) {
//     const curNum = nums[i];
//     sum+=curNum
// } console.log(sum)

// ESERCIZIO 3
// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// const names = ["anna", "attilio", "franco", "toto"]
// const lastNames = ["urbs", "man", "dillon", "sandhu"]
// let strin = "";
// const fakeList = []

// for (let i=0; i<names.length; i++) {
//     const curItem1 = names[i];
//     const curItem2 = lastNames[i];
//     strin = curItem1 + " " + curItem2 + 1
//     fakeList.push(strin)
// }console.log(fakeList)

// ESERCIZIO 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari
// const nums = [2,4,6,8,4,6,8,6]
// let arrSum = 0;
// for(i=0; i<nums.length;i++) {
//     const curNum = nums[i];
//     if(i %2 !==0) {
//     arrSum += nums[i];
//     }
    
// } console.log(arrSum);


// ESERCIZIO 5
// Scrivi una funzione getNames che accetta un array di oggetti con proprietà name e age, 
// e restituisce un array contenente solo i nomi delle persone maggiorenni (età ≥ 18).

// Esempio Input:

// const people = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 15 },
//     { name: "David", age: 21 }
// ];

// function getNames(arr) {
//     let result = [];
//     result = arr.filter((curElem) => curElem.age >=18)
//     return result

// }
// console.log(getNames(people))


// getNames(people);
// Output: ["Bob", "David"]

/////////////////////////////////////////

const menu = [
    {
        id: 1,
        name: "Margherita",
        image: "imgs/pizze/margherita.webp",
        ingredients: ["pomodoro", "mozzarella"],
    },
    {
        id: 2,
        name: "Marinara",
        image: "imgs/pizze/marinara.jpeg",
        ingredients: ["pomodoro", "aglio", "origano"],
    },
    {
        id: 3,
        name: "Diavola",
        image: "imgs/pizze/diavola.jpeg",
        ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    },
    {
        id: 4,
        name: "Bufalina",
        image: "imgs/pizze/bufalina.jpeg",
        ingredients: ["pomodoro", "mozzarella di bufala"],
    },
    {
        id: 5,
        name: "4 formaggi",
        image: "imgs/pizze/4_formaggi.jpeg",
        ingredients: [
            "pomodoro",
            "mozzarella",
            "gorgonzola",
            "parmigiano",
            "ricotta",
        ],
    },
];


//console.log(menu);



// per ogni pizza raccolgo tutti gli ingrdienti solo se non sono presenti nel mio array di base
// prelevo gli ingredienti -> per ogni ingrediente verifico se è già presente o meno nell'array di risposta
// se non è presente lo aggiungo

// for (let i = 0; i < menu.length; i++) {
//     const pizzaIngredients = menu[i].ingredients  //array di ingredienti prima pizza
//     for (let j = 0; j < pizzaIngredients.length; j++) {
//         const curIngredient = pizzaIngredients[j]; //pomodoro c'e'? allora pusho
//         if (!ingredients.includes(curIngredient)) {
//             ingredients.push(curIngredient);
//         }
//     }
// };

// console.log(ingredients);
// const ingredients = [];
// menu.forEach(pizza => {
//     pizza.ingredients.forEach(ingredient => {
//         if (!ingredients.includes(ingredient)) {
//             ingredients.push(ingredient);
//         }
//     });
// })
// console.log(ingredients);


