/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  const result = l1 * l2;
  return result;
};

console.log("Qui il risultato di 15 e 18", area(15, 18));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  const sum = n1 + n2;
  if (n1 === n2) {
    return sum * 3;
  }

  return sum;
};

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n) {
  if (n > 19) {
    const diff = n - 19;
    return diff * 3;
  }
  return 19 - n;
};

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
  const beginning = string.slice(0, 7);
  if (beginning !== "EPICODE") {
    return `EPICODE${string}`;
  }
  return string;
};

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (positiveN) {
  if (positiveN % 3 === 0) {
    return true;
  } else if (positiveN % 7 === 0) {
    return true;
  }
  return false;
};

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (string) {
  let newString = "";
  for (let i = string.length; i >= 0; i--) {
    newString += string.slice(i, i + 1);
  }
  return newString;
};

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (string) {
  const arr = string.split(" ");
  for (i = 0; i < arr.length; i++) {
    const wordArr = arr[i].split("");
    wordArr.splice(0, 1, wordArr[0].toUpperCase());
    const newWord = wordArr.join("");
    arr.splice(i, 1, newWord);
  }
  return arr.join(" ");
};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string) {
  const firstString = string.slice(1, -1);
  return firstString;
};

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const arr = [];
  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }
  return arr;
};
