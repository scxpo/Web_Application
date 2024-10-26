let squadre_p = [
    {
        "nome": "Arsenal",
        "stadio": "Emirates Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
    },
    {
        "nome": "Aston Villa",
        "stadio": "Villa Park",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/09/aston-villa-logo.png"
    },
    {
        "nome": "Bournemouth",
        "stadio": "Vitality Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2016/02/afc_bournemouth-logo_brandlogos.net_wifjg.png"
    },
    {
        "nome": "Brentford",
        "stadio": "Gtech Community Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg"
    },
    {
        "nome": "Brighton & Hove Albion",
        "stadio": "Amex Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg"
    },
    {
        "nome": "Chelsea",
        "stadio": "Stamford Bridge",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
    },
    {
        "nome": "Crystal Palace",
        "stadio": "Selhurst Park",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2016/05/crystal_palace_fc-logo_brandlogos.net_asddi-768x957.png"
    },
    {
        "nome": "Everton",
        "stadio": "Goodison Park",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg"
    },
    {
        "nome": "Fulham",
        "stadio": "Craven Cottage",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/10/fulham-fc-logo-768x768.png"
    },
    {
        "nome": "Liverpool",
        "stadio": "Anfield",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
    },
    {
        "nome": "Manchester City",
        "stadio": "Etihad Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
    },
    {
        "nome": "Manchester United",
        "stadio": "Old Trafford",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
    },
    {
        "nome": "Newcastle United",
        "stadio": "St James' Park",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg"
    },
    {
        "nome": "Nottingham Forest",
        "stadio": "City Ground",
        "stemmaUrl": "https://cdn.worldvectorlogo.com/logos/nottingham-forest-fc.svg"
    },
    {
        "nome": "Tottenham Hotspur",
        "stadio": "Tottenham Hotspur Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
    },
    {
        "nome": "West Ham United",
        "stadio": "London Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg"
    },
]


let squadre_pID = document.getElementById("squadre_p");
squadre_pID.innerHTML = "";

let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre_p.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center">
                <img src="${squadre_p[i].stemmaUrl}" alt="${squadre_p[i].nome} logo" class="logo-img mb-2">
                <h4><span class="bold">${squadre_p[i].nome}</span></h4>
                <h6>Stadio: ${squadre_p[i].stadio}</h6>
            </div>
        </div>
    `;
}

buffer += `</div></div>`; 
buffer += `<div class="text-center my-4"><a href="products.html" class="btn btn-primary">Torna Indietro</a></div>`;

squadre_pID.innerHTML += buffer;