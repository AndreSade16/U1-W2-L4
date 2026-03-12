// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const giveMeRandom = function (n) {
  const arr = [];
  for (i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }
  return arr;
};

const checkArray = function (n) {
  const randomArr = giveMeRandom(n);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (randomArr[i] > 5) {
      console.log(randomArr[i], " è maggiore di 5!");
      sum += randomArr[i];
    }
  }
  return sum;
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 3,
    name: "fork",
    id: 1,
    quantity: 24,
  },
  {
    price: 2,
    name: "knife",
    id: 2,
    quantity: 24,
  },
  {
    price: 6,
    name: "plate",
    id: 3,
    quantity: 12,
  },
];

const shoppingCartTotal = function (arr) {
  let total = 0;
  for (i = 0; i < shoppingCart.length; i++) {
    const articleTotal = shoppingCart[i].price * shoppingCart[i].quantity;
    total += articleTotal;
  }

  return total;
};

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = function (obj) {
  if (obj.price && obj.name && obj.id && obj.quantity) {
    shoppingCart.push(obj);
  }
  return shoppingCart.length;
};
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function () {
  let tempMostValuable = {};
  for (i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price >= shoppingCart[i - 1].price) {
      tempMostValuable = shoppingCart[i];
    } else tempMostValuable = shoppingCart[0];
  }

  return tempMostValuable;
};

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function () {
  return shoppingCart[shoppingCart.length - 1];
};

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function (n) {
  if (n < 0 || n > 9) {
    return "Inserisci un numero tra 1 e 9";
  } else {
    const arr = [];
    while (!(arr[0] > n && arr[1] > n && arr[2] > n)) {
      const random = Math.floor(Math.random() * 10);
      arr.unshift(random);
    }

    return arr;
  }
};

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const randomArr = giveMeRandom(5);

const average = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }

  return sum / arr.length;
};

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const longest = function (arr) {
  let tempLongest = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i].length >= arr[i - 1].length) {
      tempLongest = arr[i];
    }
  }
  return tempLongest;
};

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const antiSpamFilter = function (emailContent) {
  if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
    return false;
  }

  return true;
};

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const getDays = function (date) {
  const oneDay = 1000 * 60 * 60 * 24;
  const nowMs = new Date().getTime();
  const msPast = nowMs - date.getTime();
  return msPast / oneDay;
};

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = function (x, y) {};
