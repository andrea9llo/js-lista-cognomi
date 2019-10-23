// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova

// dichiaro le variabili
var cognome,listaCognomi,cerca,i;

// chiedo all'utente il cognome
cognome = prompt("Inserisca il suo cognome");

// creo array con diversi cognomi
listaCognomi = ["novello","perrucci","appezzato","cancelmo"];

// console.log(listaCognomi);
// listaCognomi.sort();
// console.log(listaCognomi.sort());

// verifico che il cognome inserito sia presente e se cosi blocco il ciclo
cerca = false;

i = 0;
while (i < listaCognomi.length && cerca===false ) {
  if (cognome === listaCognomi[i]) {
    cerca = true;
  }
  i++;

}

// se il cognome è presente lo mostro in ordine alfabetico
if (cerca) {
  listaCognomi.sort();
  console.log(listaCognomi.sort());
  //se nn è presete,aggiungo il cognome e anche lui mostro in ordine alfabetico
} else {
  listaCognomi.push(cognome);
  console.log(listaCognomi.sort());
}

// stampo in pagina la lista ordinata
