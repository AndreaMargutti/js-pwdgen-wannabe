/* Scaletta Mentale
1. Recuperare il div html su cui andrà stampato l'output
2. Creare la variabile con all'interno il numbero 21
2. Chiedere il nome all'utente
3. Chiedere il cognome all'utente
4. Chiedere il colore preferito all'utente
5. Sommare nome, congome e colore e 21
6. Stampare in console la somma sopra eseguita.
7. Stampare in pagine la somma del punto 6
*/

// # Fase di preparazione
// creo variabile con numero 21 
const passwordNumber = 21;
console.log(21, typeof passwordNumber);

// recupero il div dall'html
const myDiv = document.getElementById('my-div')
console.log(myDiv);

// # Fase di raccolta dati
//recupero del nome utente
const userName = prompt('Qual\'è il tuo nome?', 'andrea');
console.log(userName);

//recupero cognome utente
const userLastName = prompt('Qual\'è il tuo cognome?', 'margutti');
console.log(userLastName);

//recupero colore preferito
const userColor = prompt('Qual\'è il tuo colore preferito?', 'viola');
console.log(userColor);

// # Fase di elaborazione dati
//creazione della password
const myPassword = userName + userLastName + userColor + passwordNumber;

//# Fase di produzione output
//produzione password in console
console.log(myPassword);

//produzione output in pagina
myDiv.innerHTML = `My password is <strong>${myPassword}</strong>`;