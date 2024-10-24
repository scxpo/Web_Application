
let squadre = [
    {
        "nome": "Arsenal",
        "nazione": "Inghilterra",

    },
    {
        "nome": "Manchester City",
        "nazione": "Inghilterra",
    },
    {
        "nome": "Liverpool",
        "nazione": "Inghilterra",
    },
    {
        "nome": "Real Madrid",
        "nazione": "Spagna",
    },
    {
        "nome": "Bayern Monaco",
        "nazione": "Germania",
    },
    {
        "nome": "Barcelona",
        "nazione": "Spagna",
    },
    {
        "nome": "Atletico Madrid",
        "nazione": "Spagna",
    },
    {
        "nome": "Inter",
        "nazione": "Italia",
    },
    {
        "nome": "AC Milan",
        "nazione": "Italia",

    },
    {
        "nome": "Napoli",
        "nazione": "Italia",
    },
    {
        "nome": "Paris Saint-Germain",
        "nazione": "Francia",
    },
    {
        "nome": "FC Porto",
        "nazione": "Portogallo",
    },
    {
        "nome": "Benfica",
        "nazione": "Portogallo",
    },
    {
        "nome": "Ajax",
        "nazione": "Paesi Bassi",

    },
    {
        "nome": "RB Leipzig",
        "nazione": "Germania",
    },
    {
        "nome": "Real Sociedad",
        "nazione": "Spagna",
    },
    {
        "nome": "Lazio",
        "nazione": "Italia",
    },
    {
        "nome": "Sevilla",
        "nazione": "Spagna",
    },
]




let buffer = "";

let squadreID = document.getElementById("squadre");
squadreID.innerHTML = "";

for (let i = 0; i < squadre.length; i++) {
    buffer += `<div class="col-4">`
    buffer += `<br>`
    buffer += `    <h4><span class="bold">${squadre[i].nome}</span></h4>`
    buffer += `    <h6>Nazione: ${squadre[i].nazione}</h6>`
    buffer += `</div>`
}
squadreID.innerHTML += buffer;
