// function check(number){
//     console.log(number % 2 === 0 ? "Nombre pair" : "Nombre impair");
// }

// console.log([1, 2, 3, 4, 5].map(function(x) {
//     return x * 2;
// }));

// function estPalindrome(str) {
//     str = str.toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '');
//     return str === str.split('').reverse().join('')
//         ? "C'est un Palindrome"
//         : "Ce n'est pas un Palindrome"
// }

// // Tests
// console.log(estPalindrome("Élu par cette-//////----#####crapule !"));
// console.log(estPalindrome("jules"));

// async function fetchJsonData() {
//   try {
//     const response = await fetch('https://swapi.dev/api/people/1/');
//     const data = await response.json();

//     const container = document.querySelector('main');
    
//     container.innerHTML = `
//       <p>Nom: ${data.name}</p>
//       <p>Taille: ${data.height} cm</p>
//       <p>Poids: ${data.mass} kg</p>
//       <p>Couleur des cheveux: ${data.hair_color}</p>
//     `;
//   } catch (error) {
//     console.error(error);
//   }
// }

// document.addEventListener('DOMContentLoaded', fetchJsonData);




