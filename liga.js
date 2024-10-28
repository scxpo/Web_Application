let squadre_l = [
    {
        "nome": "Alavés",
        "stadio": "Estadio Mendizorrotza",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/2055px-Deportivo_Alaves_logo_%282020%29.svg.png",
        "fondazione": 1921,
        "città": "Vitoria-Gasteiz",
        "allenatore": "Luis García Plaza",
        "descrizione": "Deportivo Alavés è un club basco noto per il suo spirito combattivo e una memorabile finale di Coppa UEFA nel 2001 contro il Liverpool."
    },
    {
        "nome": "Almería",
        "stadio": "Estadio de los Juegos Mediterráneos",
        "stemmaUrl": "https://iconape.com/wp-content/png_logo_vector/almeria.png",
        "fondazione": 1989,
        "città": "Almería",
        "allenatore": "Vicente Moreno",
        "descrizione": "L'UD Almería è una squadra giovane con sede in Andalusia, che ha recentemente visto il suo ritorno nella massima serie spagnola."
    },
    {
        "nome": "Athletic Bilbao",
        "stadio": "San Mamés",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg",
        "fondazione": 1898,
        "città": "Bilbao",
        "allenatore": "Ernesto Valverde",
        "descrizione": "L'Athletic Club è noto per la sua politica di tesserare solo giocatori baschi ed è uno dei club storici della Spagna, con numerosi titoli nazionali."
    },
    {
        "nome": "Atlético Madrid",
        "stadio": "Estadio Wanda Metropolitano",
        "stemmaUrl": "https://seeklogo.com/images/A/atletico-madrid-new-logo-6AC4CCB6A2-seeklogo.com.png",
        "fondazione": 1903,
        "città": "Madrid",
        "allenatore": "Diego Simeone",
        "descrizione": "L'Atlético Madrid è una delle principali squadre spagnole, nota per il suo stile di gioco intenso e la storica rivalità con il Real Madrid."
    },
    {
        "nome": "Barcelona",
        "stadio": "Spotify Camp Nou",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        "fondazione": 1899,
        "città": "Barcellona",
        "allenatore": "Xavi Hernández",
        "descrizione": "Il FC Barcelona è un club iconico, noto per il suo stile di gioco tiki-taka e per aver prodotto grandi campioni come Lionel Messi."
    },
    {
        "nome": "Cádiz",
        "stadio": "Estadio Nuevo Mirandilla",
        "stemmaUrl": "https://iconape.com/wp-content/files/ez/316472/png/316472.png",
        "fondazione": 1910,
        "città": "Cádiz",
        "allenatore": "Sergio González",
        "descrizione": "Il Cádiz CF è noto per la sua passione e per un gioco difensivo, rappresentando con orgoglio la città di Cádiz in La Liga."
    },
    {
        "nome": "Celta Vigo",
        "stadio": "Estadio Municipal de Balaídos",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg",
        "fondazione": 1923,
        "città": "Vigo",
        "allenatore": "Rafael Benítez",
        "descrizione": "Il Celta Vigo è un club galiziano noto per il suo bel gioco offensivo e per essere stato una squadra costante nella Liga."
    },
    {
        "nome": "Getafe",
        "stadio": "Estadio Coliseum Alfonso Pérez",
        "stemmaUrl": "https://seeklogo.com/images/G/Getafe_CF_S_A_D_-logo-ECC0F2A882-seeklogo.com.png",
        "fondazione": 1983,
        "città": "Getafe",
        "allenatore": "José Bordalás",
        "descrizione": "Il Getafe CF è una squadra di periferia di Madrid, apprezzata per la sua difesa forte e per la competizione nella parte centrale della classifica."
    },
    {
        "nome": "Girona",
        "stadio": "Estadi Montilivi",
        "stemmaUrl": "https://iconape.com/wp-content/png_logo_vector/girona.png",
        "fondazione": 1930,
        "città": "Girona",
        "allenatore": "Míchel",
        "descrizione": "Il Girona FC è una squadra in crescita in Catalogna, riconosciuta per il suo stile di gioco moderno e la stabilità recente in La Liga."
    },
    {
        "nome": "Las Palmas",
        "stadio": "Estadio Gran Canaria",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/2/20/UD_Las_Palmas_logo.svg",
        "fondazione": 1949,
        "città": "Las Palmas",
        "allenatore": "García Pimienta",
        "descrizione": "UD Las Palmas rappresenta le Isole Canarie in Liga, noto per il calcio tecnico e per la forte base di tifosi locali."
    },
    {
        "nome": "Mallorca",
        "stadio": "Visit Mallorca Estadi",
        "stemmaUrl": "https://iconape.com/wp-content/files/dw/311715/svg/311715.svg",
        "fondazione": 1916,
        "città": "Palma di Maiorca",
        "allenatore": "Javier Aguirre",
        "descrizione": "Il RCD Mallorca è un club delle Isole Baleari, noto per aver avuto momenti di successo e una recente rinascita in Liga."
    },
    {
        "nome": "Real Betis",
        "stadio": "Estadio Benito Villamarín",
        "stemmaUrl": "https://iconape.com/wp-content/files/fb/322199/png/322199.png",
        "fondazione": 1907,
        "città": "Siviglia",
        "allenatore": "Manuel Pellegrini",
        "descrizione": "Il Real Betis è una delle squadre più popolari in Andalusia, famosa per la passione dei suoi tifosi e il bel gioco."
    },
    {
        "nome": "Real Madrid",
        "stadio": "Santiago Bernabéu",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        "fondazione": 1902,
        "città": "Madrid",
        "allenatore": "Carlo Ancelotti",
        "descrizione": "Il Real Madrid è uno dei club più prestigiosi al mondo, con un record di titoli in Spagna e Champions League."
    },
    {
        "nome": "Real Sociedad",
        "stadio": "Reale Arena",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg",
        "fondazione": 1909,
        "città": "San Sebastián",
        "allenatore": "Imanol Alguacil",
        "descrizione": "La Real Sociedad è un club basco di lunga tradizione, noto per l'attenzione ai giovani e il gioco offensivo."
    },
    {
        "nome": "Valencia",
        "stadio": "Estadio de Mestalla",
        "stemmaUrl": "https://iconape.com/wp-content/files/gj/321019/svg/321019.svg",
        "fondazione": 1919,
        "città": "Valencia",
        "allenatore": "Rubén Baraja",
        "descrizione": "Il Valencia CF è uno dei principali club della Spagna, con una storia ricca e una delle migliori accademie giovanili del paese."
    },
    {
        "nome": "Villarreal",
        "stadio": "Estadio de la Cerámica",
        "stemmaUrl": "https://banner2.cleanpng.com/20180901/bbk/kisspng-villarreal-cf-b-2-1718-la-liga-football-villarreal-logo-svg-vector-amp-png-transparent-5b8aff1fc3f9a2.9461542415358359358027.jpg",
        "fondazione": 1923,
        "città": "Villarreal",
        "allenatore": "Quique Setién",
        "descrizione": "Il Villarreal CF, noto come il 'Sottomarino Giallo', ha guadagnato fama per le recenti vittorie europee e la qualità del settore giovanile."
    }
]

let squadre_lID = document.getElementById("squadre_l");
squadre_lID.innerHTML = "";

let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre_l.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center" onclick="mostraDettagli_l(${i})">
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



function mostraDettagli_l(i) {
    const squadra = squadre_l[i];
    document.getElementById('modalNome_l').textContent = squadra.nome;
    document.getElementById('modalDescrizione_l').textContent = squadra.descrizione;
    document.getElementById('modalFondazione_l').textContent = squadra.fondazione;
    document.getElementById('modalStadio_l').textContent = squadra.stadio;
    document.getElementById('modalCitta_l').textContent = squadra.città;
    document.getElementById('modalAllenatore_l').textContent = squadra.allenatore;

    document.getElementById('detailModal_l').style.display = "block";
}

function chiudiModal_l() {
    document.getElementById('detailModal_l').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('detailModal_l');
    if (event.target == modal) {
        chiudiModal_l();
    }
}

mostraDettagli_l();

