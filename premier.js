let squadre_p = [
    {
        "nome": "Arsenal",
        "stadio": "Emirates Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        "città": "Londra",
        "allenatore": "Mikel Arteta",
        "fondazione": "1886",
        "descrizione": "Uno dei club più storici d'Inghilterra, noto per il suo stile di gioco offensivo e il suo lungo periodo di successi."
    },
    {
        "nome": "Aston Villa",
        "stadio": "Villa Park",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/09/aston-villa-logo.png",
        "città": "Birmingham",
        "allenatore": "Unai Emery",
        "fondazione": "1874",
        "descrizione": "Famoso per la sua lunga storia e per aver vinto la Coppa dei Campioni nel 1982."
    },
    {
        "nome": "Bournemouth",
        "stadio": "Vitality Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2016/02/afc_bournemouth-logo_brandlogos.net_wifjg.png",
        "città": "Bournemouth",
        "allenatore": "Andoni Iraola",
        "fondazione": "1890",
        "descrizione": "Club emergente che ha vissuto una rapida ascesa dalla League Two alla Premier League."
    },
    {
        "nome": "Brentford",
        "stadio": "Gtech Community Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg",
        "città": "Brentford",
        "allenatore": "Thomas Frank",
        "fondazione": "1889",
        "descrizione": "Conosciuto per il suo approccio innovativo e il suo gioco collettivo."
    },
    {
        "nome": "Brighton & Hove Albion",
        "stadio": "Amex Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
        "città": "Brighton",
        "allenatore": "Roberto De Zerbi",
        "fondazione": "1901",
        "descrizione": "Club in crescita, noto per la sua filosofia di gioco offensivo e per il supporto della comunità."
    },
    {
        "nome": "Chelsea",
        "stadio": "Stamford Bridge",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
        "città": "Londra",
        "allenatore": "Mauricio Pochettino",
        "fondazione": "1905",
        "descrizione": "Uno dei club più prestigiosi al mondo, con numerosi trofei nazionali e internazionali."
    },
    {
        "nome": "Crystal Palace",
        "stadio": "Selhurst Park",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2016/05/crystal_palace_fc-logo_brandlogos.net_asddi-768x957.png",
        "città": "Londra",
        "allenatore": "Roy Hodgson",
        "fondazione": "1905",
        "descrizione": "Conosciuto per la sua appassionata tifoseria e per il suo storico stadio."
    },
    {
        "nome": "Everton",
        "stadio": "Goodison Park",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
        "città": "Liverpool",
        "allenatore": "Sean Dyche",
        "fondazione": "1878",
        "descrizione": "Uno dei club più antichi della Premier League, noto per la sua rivalità con il Liverpool."
    },
    {
        "nome": "Fulham",
        "stadio": "Craven Cottage",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/10/fulham-fc-logo-768x768.png",
        "città": "Londra",
        "allenatore": "Marco Silva",
        "fondazione": "1879",
        "descrizione": "Club storicamente legato al fiume Tamigi, famoso per il suo stadio pittoresco."
    },
    {
        "nome": "Liverpool",
        "stadio": "Anfield",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        "città": "Liverpool",
        "allenatore": "Jürgen Klopp",
        "fondazione": "1892",
        "descrizione": "Uno dei club più titolati al mondo, noto per la sua storia ricca e la sua passione."
    },
    {
        "nome": "Manchester City",
        "stadio": "Etihad Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        "città": "Manchester",
        "allenatore": "Pep Guardiola",
        "fondazione": "1880",
        "descrizione": "Negli ultimi anni, il City ha dominato il calcio inglese, vincendo numerosi trofei."
    },
    {
        "nome": "Manchester United",
        "stadio": "Old Trafford",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        "città": "Manchester",
        "allenatore": "Erik ten Hag",
        "fondazione": "1878",
        "descrizione": "Un club iconico con una delle tifoserie più fedeli al mondo."
    },
    {
        "nome": "Newcastle United",
        "stadio": "St James' Park",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
        "città": "Newcastle",
        "allenatore": "Eddie Howe",
        "fondazione": "1892",
        "descrizione": "Famoso per il suo stadio e la passione dei suoi tifosi, ha una lunga e orgogliosa storia."
    },
    {
        "nome": "Nottingham Forest",
        "stadio": "City Ground",
        "stemmaUrl": "https://cdn.worldvectorlogo.com/logos/nottingham-forest-fc.svg",
        "città": "Nottingham",
        "allenatore": "Steve Cooper",
        "fondazione": "1865",
        "descrizione": "Club storicamente importante, famoso per aver vinto due Coppe dei Campioni negli anni '70."
    },
    {
        "nome": "Tottenham Hotspur",
        "stadio": "Tottenham Hotspur Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
        "città": "Londra",
        "allenatore": "Ange Postecoglou",
        "fondazione": "1882",
        "descrizione": "Conosciuto per il suo stile di gioco attraente e la sua rivalità con l'Arsenal."
    },
    {
        "nome": "West Ham United",
        "stadio": "London Stadium",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
        "città": "Londra",
        "allenatore": "David Moyes",
        "fondazione": "1895",
        "descrizione": "Famoso per la sua passione calcistica e il supporto della comunità, ha vinto numerosi trofei."
    }
]


let squadre_pID = document.getElementById("squadre_p");
squadre_pID.innerHTML = "";

let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre_p.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center" onclick="mostraDettagli_p(${i})">
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

function mostraDettagli_p(i) {
    const squadra = squadre_p[i];
    document.getElementById('modalNome_p').textContent = squadra.nome;
    document.getElementById('modalDescrizione_p').textContent = squadra.descrizione;
    document.getElementById('modalFondazione_p').textContent = squadra.fondazione;
    document.getElementById('modalStadio_p').textContent = squadra.stadio;
    document.getElementById('modalCitta_p').textContent = squadra.città;
    document.getElementById('modalAllenatore_p').textContent = squadra.allenatore;

    document.getElementById('detailModal_p').style.display = "block";
}

function chiudiModal_p() {
    document.getElementById('detailModal_p').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('detailModal_p');
    if (event.target == modal) {
        chiudiModal_p();
    }
}

mostraDettagli_p();