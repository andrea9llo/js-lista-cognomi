// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova

// dichiaro le variabili
var cognome,listaCognomi,posizione,elenco;

// chiedo all'utente il cognome
cognome = prompt("Inserisca il suo cognome");

// creo array con diversi cognomi
listaCognomi = ["novello","perrucci","appezzato","cancelmo"];
listaCognomi.push(cognome);
listaCognomi.sort();


for (var i = 0; i < listaCognomi.length; i++) {
  elenco = document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML = elenco + "<li>" + listaCognomi[i] + "  " + "</li>" ;
  console.log(listaCognomi[i]);
}

posizione = parseInt(listaCognomi.indexOf(cognome) + 1);
console.log(posizione);
document.getElementById('pos').innerHTML = "Il tuo cognome si trova nella posizione : " + posizione;
