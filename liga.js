let squadre_l = [
    {
        "nome": "Alavés",
        "stadio": "Estadio Mendizorrotza"
    },
    {
        "nome": "Almería",
        "stadio": "Estadio de los Juegos Mediterráneos"
    },
    {
        "nome": "Athletic Bilbao",
        "stadio": "San Mamés"
    },
    {
        "nome": "Atlético Madrid",
        "stadio": "Estadio Wanda Metropolitano"
    },
    {
        "nome": "Barcelona",
        "stadio": "Spotify Camp Nou"
    },
    {
        "nome": "Cádiz",
        "stadio": "Estadio Nuevo Mirandilla"
    },
    {
        "nome": "Celta Vigo",
        "stadio": "Estadio Municipal de Balaídos"
    },
    {
        "nome": "Getafe",
        "stadio": "Estadio Coliseum Alfonso Pérez"
    },
    {
        "nome": "Girona",
        "stadio": "Estadi Montilivi"
    },
    {
        "nome": "Las Palmas",
        "stadio": "Estadio Gran Canaria"
    },
    {
        "nome": "Mallorca",
        "stadio": "Visit Mallorca Estadi"
    },
    {
        "nome": "Real Betis",
        "stadio": "Estadio Benito Villamarín"
    },
    {
        "nome": "Real Madrid",
        "stadio": "Santiago Bernabéu"
    },
    {
        "nome": "Real Sociedad",
        "stadio": "Reale Arena"
    },
    {
        "nome": "Valencia",
        "stadio": "Estadio de Mestalla"
    },
    {
        "nome": "Villarreal",
        "stadio": "Estadio de la Cerámica"
    },
]

let buffer = "";

let squadre_lID = document.getElementById("squadre_l");
squadre_lID.innerHTML = "";

for (let i = 0; i < squadre_l.length; i++) {
buffer += `<div class="col-4">`
buffer += `<br>`
buffer += `    <h4><span class="bold">${squadre_l[i].nome}</span></h4>`
buffer += `    <h6>Stadio: ${squadre_l[i].stadio}</h6>`
buffer += `</div>`
}

squadre_lID.innerHTML += buffer + "<br>" + `<a href="products.html" class="btn btn-primary">Torna Indietro</a>`;