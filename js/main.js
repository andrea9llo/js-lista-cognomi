// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova

// dichiaro le variabili
var cognome,listaCognomi,posizione,elenco,copiaArray,elencoDue;

// chiedo all'utente il cognome
cognome = prompt("Inserisca il suo cognome");

// creo array con diversi cognomi
listaCognomi = ["novello","perrucci","appezzato","cancelmo"];
listaCognomi.push(cognome);


// copia dell' array
copiaArray = listaCognomi.slice();

// formula per lista ordinata
copiaArray.sort();

// posizione del cognome
posizione = parseInt(copiaArray.indexOf(cognome) + 1);
// console.log(posizione);


//stampo la  lista non ordinata
for (var i = 0; i < listaCognomi.length; i++) {
  elenco = document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML = elenco + "<li>" + listaCognomi[i] + "  " + "</li>" ;
  // console.log(listaCognomi[i]);
}

// stampo la lista ordinata

for (var j = 0; j < copiaArray.length; j++) {
  elencoDue = document.getElementById('lista2').innerHTML;
  document.getElementById('lista2').innerHTML = elencoDue + "<li>" + copiaArray[j] + "  " + "</li>" ;
  // console.log(copiaArray[j]);
}

// stampo la posizione del cognome inserito dall'utente
document.getElementById('pos').innerHTML = "Il tuo cognome si trova nella posizione : " + posizione;
