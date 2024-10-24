let squadre_p = [
    {
        "nome": "Arsenal",
        "stadio": "Emirates Stadium"
    },
    {
        "nome": "Aston Villa",
        "stadio": "Villa Park"
    },
    {
        "nome": "Bournemouth",
        "stadio": "Vitality Stadium"
    },
    {
        "nome": "Brentford",
        "stadio": "Gtech Community Stadium"
    },
    {
        "nome": "Brighton & Hove Albion",
        "stadio": "Amex Stadium"
    },
    {
        "nome": "Chelsea",
        "stadio": "Stamford Bridge"
    },
    {
        "nome": "Crystal Palace",
        "stadio": "Selhurst Park"
    },
    {
        "nome": "Everton",
        "stadio": "Goodison Park"
    },
    {
        "nome": "Fulham",
        "stadio": "Craven Cottage"
    },
    {
        "nome": "Liverpool",
        "stadio": "Anfield"
    },
    {
        "nome": "Manchester City",
        "stadio": "Etihad Stadium"
    },
    {
        "nome": "Manchester United",
        "stadio": "Old Trafford"
    },
    {
        "nome": "Newcastle United",
        "stadio": "St James' Park"
    },
    {
        "nome": "Nottingham Forest",
        "stadio": "City Ground"
    },
    {
        "nome": "Tottenham Hotspur",
        "stadio": "Tottenham Hotspur Stadium"
    },
    {
        "nome": "West Ham United",
        "stadio": "London Stadium"
    },
]

let buffer = "";

let squadre_pID = document.getElementById("squadre_p");
squadre_pID.innerHTML = "";

for (let i = 0; i < squadre_p.length; i++) {
buffer += `<div class="col-4">`
buffer += `<br>`
buffer += `    <h4><span class="bold">${squadre_p[i].nome}</span></h4>`
buffer += `    <h6>Stadio: ${squadre_p[i].stadio}</h6>`
buffer += `</div>`
}
squadre_pID.innerHTML += buffer + "<br>" + "<br>" + `<a href="products.html" class="btn btn-primary">Torna Indietro</a>`;
