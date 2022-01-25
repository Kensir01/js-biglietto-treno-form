
const bottone = document.getElementById('elabora');

bottone.addEventListener('click',
    function() {

        const nome = document.getElementById('nome').value;
        console.log(nome);

        const kmDaPercorrere = document.getElementById('km').value;
        console.log(kmDaPercorrere);

        const fasciaEta = document.getElementById('fascia-eta').value;
        console.log(fasciaEta);

        const prezzoKm = 0.21;

        let prezzoBiglietto = kmDaPercorrere * prezzoKm;
        let offerta = "Prezzo pieno";

        if (fasciaEta == "minorenne") {

            prezzoBiglietto -=  - (prezzoBiglietto / 100 * 20);
            offerta = "Sconto minorenni";

        } else if (fasciaEta == "over65") {
            
            prezzoBiglietto -=  - (prezzoBiglietto / 100 * 40);
            offerta = "Sconto pensionati";
        } 

        // Mostro div biglietto
        let biglietto = document.getElementById('calcolato');
        biglietto.classList.remove('hidden');
        
        // trascrivo il nome
        document.getElementById('nome-passeggero').innerHTML = nome;

        // trascrivo il costo    
        document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2) + " Euro";

        // trascrivo l'offerta
        document.getElementById('offerta-applicata').innerHTML = offerta;

        // calcolo la carrozza
        const numeroCarrozza = Math.floor((Math.random() * 9)) + 1;

        // trascrivo la carrozza
        document.getElementById('carrozza').innerHTML = numeroCarrozza;

        // calcolo un numero casuale CP
        const numeroCP = Math.floor(Math.random() * 10000) + 90000;

        // trascrivo il numero CP
        document.getElementById('codice-cp').innerHTML = numeroCP;

    }
);


// gestisco l'ascoltatore degli eventi per annulla

const annulla = document.getElementById('cancella');

annulla.addEventListener('click',
  function () {

    //   nascondo il biglietto
    let biglietto = document.getElementById('calcolato');
    biglietto.classList.add('hidden');

    // resetto nome e km
    document.getElementById('nome').value = "";
    document.getElementById('km').value = "";

    // resettare il menu a tendina
    document.getElementById('fascia-eta').value = "minorenne";

  }
);











// const button = document.getElementById('elabora')

// button.addEventListener('click',
//     function() {

//         let name = document.getElementById('name').value
//         console.log(name)
//         let km = document.getElementById('km')
//         let eta = document.getElementById('eta')


//         let costo_biglietto = km * 0.21
//         console.log(costo_biglietto)

//         let typeUser = 'Biglietto Standard';
//         var prezzoFinale


//         let sconto_minorenni = costo_biglietto - ((costo_biglietto * 20) / 100)
//         console.log(sconto_minorenni)

//         let sconto_senior = costo_biglietto - ((costo_biglietto * 40) / 100)
//         console.log(sconto_senior)


//         if (eta.value == "") {
//             alert('Seleziona un età');

//         } else if (name.value == "") {
//             alert('Digita un Nome');      

//         } else if (km.value == "") {
//             alert('Digita i Km da percorrere');
        
//         } else if (eta == 'minorenne') {
//             prezzoFinale = sconto_minorenni;
//             typeUser = 'Sconto Minorenni';

//         } else if (eta == 'senior') {
//             prezzoFinale = sconto_senior;
//             typeUser = 'Sconto Senior';

//         } else {
//             name.value = "";
//             eta.value = "";
//             km.value = "";
//         }    
//         var numeroCarrozza = Math.floor((Math.random() * 9) + 1);


//     }
// );

// let cancella = document.getElementById('cancella')

// cancella.addEventListener('click',   
//     function() {

//         name.value = "";
//         eta.value = "";
//         km.value = "";
//         document.getElementById('nome_passeggero').innerHTML = "";

//         document.getElementById('nome_sconto').innerHTML = "";
//         document.getElementById('carrozza').innerHTML = "" ;
//         document.getElementById('codice_identificativo').innerHTML = "";
//         document.getElementById('prezzo_finale').innerHTML = "";

// }
// );
