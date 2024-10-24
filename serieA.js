
    let squadre_a = [
        {
            "nome": "AC Milan",
            "stadio": "San Siro"
        },
        {
            "nome": "Inter Milan",
            "stadio": "San Siro"
        },
        {
            "nome": "Juventus",
            "stadio": "Allianz Stadium"
        },
        {
            "nome": "AS Roma",
            "stadio": "Stadio Olimpico"
        },
        {
            "nome": "Napoli",
            "stadio": "Stadio Diego Armando Maradona"
        },
        {
            "nome": "Lazio",
            "stadio": "Stadio Olimpico"
        },
        {
            "nome": "Fiorentina",
            "stadio": "Stadio Artemio Franchi"
        },
        {
            "nome": "Atalanta",
            "stadio": "Gewiss Stadium"
        },
        {
            "nome": "Sassuolo",
            "stadio": "Mapei Stadium"
        },
        {
            "nome": "Bologna",
            "stadio": "Stadio Renato Dall'Ara"
        },
        {
            "nome": "Torino",
            "stadio": "Stadio Olimpico Grande Torino"
        },
        {
            "nome": "Udinese",
            "stadio": "Dacia Arena"
        },
        {
            "nome": "Empoli",
            "stadio": "Stadio Carlo Castellani"
        },
        {
            "nome": "Salernitana",
            "stadio": "Stadio Arechi"
        },
        {
            "nome": "Cagliari",
            "stadio": "Unipol Domus"
        },
        {
            "nome": "Lecce",
            "stadio": "Stadio Via del Mare"
        },
    ]

    let buffer = "";

let squadre_aID = document.getElementById("squadre_a");
squadre_aID.innerHTML = "";

for (let i = 0; i < squadre_a.length; i++) {
    buffer += `<div class="col-4">`
    buffer += `<br>`
    buffer += `    <h4><span class="bold">${squadre_a[i].nome}</span></h4>`
    buffer += `    <h6>Stadio: ${squadre_a[i].stadio}</h6>`
    buffer += `</div>`
}
squadre_aID.innerHTML += buffer + "<br>" + `<a href="products.html" class="btn btn-primary">Torna Indietro</a>`;

