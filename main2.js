const bottone = document.getElementById('bottone');

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
        let biglietto = document.getElementById('biglietto');
        biglietto.classList.remove('hidden');
        
        // trascrivo il nome
        document.getElementById('nome-passeggero').innerHTML = nome;

        // trascrivo il costo    
        document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed + " Euro";

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

const anulla = document.getElementById('annulla');

annulla.addEventListener('click',
  function () {

    //   nascondo il biglietto
    let biglietto = document.getElementById('biglietto');
    biglietto.classList.add('hidden');

    // resetto nome e km
    document.getElementById('nome').value = "";
    document.getElementById('km').value = "";

    // resettare il menu a tendina
    document.getElementById('fascia-eta').value = "minorenne";

  }
);