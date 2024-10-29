
let squadre = [

    {
        "nome": "Arsenal",
        "nazione": "Inghilterra",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        "fondazione": 1886,
        "stadio": "Emirates Stadium",
    
        "descrizione": "L'Arsenal è uno dei club più storici della Premier League, noto per il suo stile di gioco attraente e per aver prodotto grandi talenti nel corso degli anni."
    },
    {
        "nome": "Manchester City",
        "nazione": "Inghilterra",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        "fondazione": 1880,
        "stadio": "Etihad Stadium",
        "descrizione": "Il Manchester City ha guadagnato notorietà internazionale negli ultimi anni, grazie a un progetto ambizioso e a un gioco offensivo spettacolare."
    },
    {
        "nome": "Liverpool",
        "nazione": "Inghilterra",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        "fondazione": 1892,
        "stadio": "Anfield",
    
        "descrizione": "Il Liverpool è noto per la sua storia ricca e le sue tradizioni, con una fanbase appassionata e un forte legame con la musica e la cultura di Liverpool."
    },
    {
        "nome": "Real Madrid",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        "fondazione": 1902,
        "stadio": "Santiago Bernabéu",
        "descrizione": "Il Real Madrid è uno dei club più prestigiosi al mondo, famoso per la sua straordinaria storia e per aver vinto il maggior numero di Champions League."
    },
    {
        "nome": "Bayern Monaco",
        "nazione": "Germania",
        "stemmaUrl": "https://iconape.com/wp-content/files/kv/325477/svg/325477.svg",
        "fondazione": 1900,
        "stadio": "Allianz Arena",
        "descrizione": "Il Bayern Monaco è il club di maggior successo in Germania, con una reputazione per il suo gioco offensivo e per aver prodotto molti campioni."
    },
    {
        "nome": "Barcelona",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        "fondazione": 1899,
        "stadio": "Camp Nou",
        "descrizione": "Il Barcellona è conosciuto per il suo gioco spettacolare e per la sua filosofia giovanile, contribuendo a formare alcuni dei migliori calciatori del mondo."
    },
    {
        "nome": "Atletico Madrid",
        "nazione": "Spagna",
        "stemmaUrl": "https://seeklogo.com/images/A/atletico-madrid-new-logo-6AC4CCB6A2-seeklogo.com.png",
        "fondazione": 1903,
        "stadio": "Wanda Metropolitano",
        "descrizione": "L'Atletico Madrid è famoso per la sua difesa solida e la determinazione, spesso sfidando le aspettative contro le squadre più blasonate."
    },
    {
        "nome": "Inter",
        "nazione": "Italia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
        "fondazione": 1908,
        "stadio": "San Siro",
        "descrizione": "L'Inter è nota per la sua rivalità storica con il Milan e per aver avuto un grande successo sia in Italia che in Europa."
    },
    {
        "nome": "AC Milan",
        "nazione": "Italia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
        "fondazione": 1899,
        "stadio": "San Siro",
        "descrizione": "L'AC Milan è uno dei club più titolati a livello mondiale, con una tradizione di eccellenza e un'impronta significativa nel calcio europeo."
    },
    {
        "nome": "Napoli",
        "nazione": "Italia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg",
        "fondazione": 1926,
        "stadio": "Stadio Diego Armando Maradona",
        "descrizione": "Il Napoli è famoso per il suo forte legame con la città e per i suoi tifosi appassionati, oltre a una storia di successi e talenti come Diego Maradona."
    },
    {
        "nome": "Paris Saint-Germain",
        "nazione": "Francia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        "fondazione": 1970,
        "stadio": "Parc des Princes",
        "descrizione": "Il Paris Saint-Germain è emerso come una potenza nel calcio europeo negli ultimi anni, attirando grandi stelle e investimenti significativi."
    },
    {
        "nome": "FC Porto",
        "nazione": "Portogallo",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg",
        "fondazione": 1893,
        "stadio": "Estádio do Dragão",
        "descrizione": "Il FC Porto è uno dei club più storici e di successo in Portogallo, noto per la sua capacità di sviluppare talenti e competere a livello europeo."
    },
    {
        "nome": "Benfica",
        "nazione": "Portogallo",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg",
        "fondazione": 1904,
        "stadio": "Estádio da Luz",
        "descrizione": "Il Benfica è uno dei club più seguiti in Portogallo, con una grande storia e una fanbase appassionata, noto per i suoi successi domestici."
    },
    {
        "nome": "Ajax",
        "nazione": "Paesi Bassi",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg",
        "fondazione": 1900,
        "stadio": "Johan Cruyff Arena",
        "descrizione": "L'Ajax è famoso per il suo modello di gioco totale e per la sua accademia, che ha prodotto alcuni dei migliori calciatori della storia."
    },
    {
        "nome": "RB Leipzig",
        "nazione": "Germania",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg",
        "fondazione": 2009,
        "stadio": "Red Bull Arena",
        "descrizione": "Il RB Leipzig è un club relativamente giovane che ha rapidamente scalato le gerarchie del calcio tedesco, conosciuto per il suo approccio moderno e dinamico."
    },
    {
        "nome": "Real Sociedad",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg",
        "fondazione": 1909,
        "stadio": "Anoeta Stadium",
        "descrizione": "La Real Sociedad è un club che ha una forte identità locale, con una lunga tradizione e un buon settore giovanile che produce talenti."
    },
    {
        "nome": "Lazio",
        "nazione": "Italia",
        "stemmaUrl": "https://iconape.com/wp-content/files/sd/332174/svg/332174.svg",
        "fondazione": 1900,
        "stadio": "Stadio Olimpico",
        "descrizione": "La Lazio è un club con una storia ricca e una rivalità intensa con la Roma, noto per i suoi tifosi appassionati e i successi in coppa."
    },
    {
        "nome": "Sevilla",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
        "fondazione": 1890,
        "stadio": "Estadio Ramón Sánchez Pizjuán",
        "descrizione": "Il Sevilla è famoso per il suo successo in Europa League e per la sua capacità di competere ai massimi livelli, con una forte tradizione calcistica."
    }

]


let squadreID = document.getElementById("squadre");
squadreID.innerHTML = "";


let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center" onclick="mostraDettagli(${i})">
                <img src="${squadre[i].stemmaUrl}" alt="${squadre[i].nome} logo" class="logo-img mb-2">
                <h4><span class="bold">${squadre[i].nome}</span></h4>
                <h6>Nazione: ${squadre[i].nazione}</h6>
            </div>
        </div>
    `;
}

buffer += `</div></div>`;
buffer += `<div class="text-center my-4"><a href="products.html" class="btn btn-primary">Torna Indietro</a></div>`;

squadreID.innerHTML += buffer;



function mostraDettagli(index) {
    const squadra = squadre[index];

    document.getElementById('modalNome').textContent = squadra.nome;
    document.getElementById('modalDescrizione').textContent = squadra.descrizione;
    document.getElementById('modalFondazione').textContent = squadra.fondazione;
    document.getElementById('modalStadio').textContent = squadra.stadio;

    document.getElementById('detailModal').style.display = "block";
}

function chiudiModal() {
    document.getElementById('detailModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) {
        chiudiModal();
    }
}

mostraDettagli();