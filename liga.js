let squadre_l = [
    {
        "nome": "Alavés",
        "stadio": "Estadio Mendizorrotza",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/2055px-Deportivo_Alaves_logo_%282020%29.svg.png"
    },
    {
        "nome": "Almería",
        "stadio": "Estadio de los Juegos Mediterráneos",
        "stemmaUrl": "https://iconape.com/wp-content/png_logo_vector/almeria.png"
    },
    {
        "nome": "Athletic Bilbao",
        "stadio": "San Mamés",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg"
    },
    {
        "nome": "Atlético Madrid",
        "stadio": "Estadio Wanda Metropolitano",
        "stemmaUrl": "https://seeklogo.com/images/A/atletico-madrid-new-logo-6AC4CCB6A2-seeklogo.com.png"
    },
    {
        "nome": "Barcelona",
        "stadio": "Spotify Camp Nou",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
    },
    {
        "nome": "Cádiz",
        "stadio": "Estadio Nuevo Mirandilla",
        "stemmaUrl": "https://iconape.com/wp-content/files/ez/316472/png/316472.png"
    },
    {
        "nome": "Celta Vigo",
        "stadio": "Estadio Municipal de Balaídos",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg"
    },
    {
        "nome": "Getafe",
        "stadio": "Estadio Coliseum Alfonso Pérez",
        "stemmaUrl": "https://seeklogo.com/images/G/Getafe_CF_S_A_D_-logo-ECC0F2A882-seeklogo.com.png"
    },
    {
        "nome": "Girona",
        "stadio": "Estadi Montilivi",
        "stemmaUrl": "https://iconape.com/wp-content/png_logo_vector/girona.png"
    },
    {
        "nome": "Las Palmas",
        "stadio": "Estadio Gran Canaria",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/2/20/UD_Las_Palmas_logo.svg"
    },
    {
        "nome": "Mallorca",
        "stadio": "Visit Mallorca Estadi",
        "stemmaUrl": "https://iconape.com/wp-content/files/dw/311715/svg/311715.svg"
    },
    {
        "nome": "Real Betis",
        "stadio": "Estadio Benito Villamarín",
        "stemmaUrl": "https://iconape.com/wp-content/files/fb/322199/png/322199.png"
    },
    {
        "nome": "Real Madrid",
        "stadio": "Santiago Bernabéu",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
    },
    {
        "nome": "Real Sociedad",
        "stadio": "Reale Arena",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg"
    },
    {
        "nome": "Valencia",
        "stadio": "Estadio de Mestalla",
        "stemmaUrl": "https://iconape.com/wp-content/files/gj/321019/svg/321019.svg"
    },
    {
        "nome": "Villarreal",
        "stadio": "Estadio de la Cerámica",
        "stemmaUrl": "https://banner2.cleanpng.com/20180901/bbk/kisspng-villarreal-cf-b-2-1718-la-liga-football-villarreal-logo-svg-vector-amp-png-transparent-5b8aff1fc3f9a2.9461542415358359358027.jpg"
    }
]

let squadre_lID = document.getElementById("squadre_l");
squadre_lID.innerHTML = "";

let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre_l.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center">
                <img src="${squadre_l[i].stemmaUrl}" alt="${squadre_l[i].nome} logo" class="logo-img mb-2">
                <h4><span class="bold">${squadre_l[i].nome}</span></h4>
                <h6>Stadio: ${squadre_l[i].stadio}</h6>
            </div>
        </div>
    `;
}

buffer += `</div></div>`; 
buffer += `<div class="text-center my-4"><a href="products.html" class="btn btn-primary">Torna Indietro</a></div>`;

squadre_lID.innerHTML += buffer;