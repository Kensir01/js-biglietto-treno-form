let name = document.getElementById('name')
let km = document.getElementById('km')
let eta = document.getElementById('eta')

let button = document.getElementById('elabora')

button.addEventListener('click',
    function() {

        if (eta.value == "") {
            alert('Seleziona un età;');

        } else if (name.value == "") {
            alert('Digita un Nome');      

        } else if (km.value == "") {
            alert('Digita i Km da percorrere');

        } else {
            // alert("Il nome è:" + name.value + "Il colore è:" + eta.value);
            name.value = "";
            eta.value = "";
            km.value = "";

        }
    }
);

let cancella = document.getElementById('cancella')

cancella.addEventListener('click',   
    function() {

        name.value = "";
        eta.value = "";
        km.value = "";
}
);