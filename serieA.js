
let squadre_a = [
    {
        "nome": "AC Milan",
        "stadio": "San Siro",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2021/05/ac_milan-logo_brandlogos.net_xh3sl.png",
        "città": "Milano",
        "allenatore": "Stefano Pioli",
        "fondazione": "1899",
        "descrizione": "Uno dei club più titolati al mondo, famoso per la sua storia di successi sia in Italia che in Europa."
    },
    {
        "nome": "FC Inter",
        "stadio": "San Siro",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
        "città": "Milano",
        "allenatore": "Simone Inzaghi",
        "fondazione": "1908",
        "descrizione": "Rivale storico dell'AC Milan, conosciuto per il suo gioco solido e le numerose vittorie nazionali e internazionali."
    },
    {
        "nome": "Juventus",
        "stadio": "Allianz Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2017/01/juventus_fc-brandlogo.net_-768x768.png",
        "città": "Torino",
        "allenatore": "Massimiliano Allegri",
        "fondazione": "1897",
        "descrizione": "Il club più titolato in Italia, noto per la sua continuità di successi e una grande tifoseria."
    },
    {
        "nome": "AS Roma",
        "stadio": "Stadio Olimpico",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2012/11/as-roma-logo-vector.png",
        "città": "Roma",
        "allenatore": "Rudi Garcia",
        "fondazione": "1927",
        "descrizione": "Conosciuta per la sua passione e rivalità con la Lazio, ha una storia ricca di emozioni."
    },
    {
        "nome": "Napoli",
        "stadio": "Stadio Diego Armando Maradona",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg",
        "città": "Napoli",
        "allenatore": "Rudi Garcia",
        "fondazione": "1926",
        "descrizione": "Famoso per la sua tifoseria appassionata e il trionfo con Maradona negli anni '80."
    },
    {
        "nome": "Lazio",
        "stadio": "Stadio Olimpico",
        "stemmaUrl": "https://iconape.com/wp-content/files/sd/332174/svg/332174.svg",
        "città": "Roma",
        "allenatore": "Maurizio Sarri",
        "fondazione": "1900",
        "descrizione": "Rivale dell'AS Roma, noto per la sua storia ricca e il supporto appassionato dei tifosi."
    },
    {
        "nome": "Fiorentina",
        "stadio": "Stadio Artemio Franchi",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2022/07/acf_fiorentina-logo_brandlogos.net_dpvfb-768x768.png",
        "città": "Firenze",
        "allenatore": "Vincenzo Italiano",
        "fondazione": "1926",
        "descrizione": "Conosciuta per il suo stile di gioco e la forte connessione con la città di Firenze."
    },
    {
        "nome": "Atalanta",
        "stadio": "Gewiss Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/12/atalanta_bc-logo_brandlogos.net_yq22a.png",
        "città": "Bergamo",
        "allenatore": "Gian Piero Gasperini",
        "fondazione": "1907",
        "descrizione": "Famosa per il suo gioco offensivo e le sorprendenti prestazioni in Serie A e in Europa."
    },
    {
        "nome": "Sassuolo",
        "stadio": "Mapei Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2019/07/us_sassuolo_calcio-logo_brandlogos.net_wl1mr.png",
        "città": "Sassuolo",
        "allenatore": "Alessio Dionisi",
        "fondazione": "1922",
        "descrizione": "Emergente nel calcio italiano, noto per il suo gioco propositivo e la crescita recente."
    },
    {
        "nome": "Bologna",
        "stadio": "Stadio Renato Dall'Ara",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/12/bologna_fc_1909-logo_brandlogos.net_vf54h.png",
        "città": "Bologna",
        "allenatore": "Thiago Motta",
        "fondazione": "1909",
        "descrizione": "Un club con una lunga storia e una grande tradizione nel calcio italiano."
    },
    {
        "nome": "Torino",
        "stadio": "Stadio Olimpico Grande Torino",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2012/12/torino-logo-vector.png",
        "città": "Torino",
        "allenatore": "Ivan Juric",
        "fondazione": "1906",
        "descrizione": "Conosciuto per la sua storia e la famosa squadra del Grande Torino degli anni '40."
    },
    {
        "nome": "Udinese",
        "stadio": "Dacia Arena",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2013/10/udinese-calcio-vector-logo.png",
        "città": "Udine",
        "allenatore": "Andrea Sottil",
        "fondazione": "1896",
        "descrizione": "Club storicamente solido, noto per il suo approccio alla valorizzazione dei giovani talenti."
    },
    {
        "nome": "Empoli",
        "stadio": "Stadio Carlo Castellani",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2015/09/empoli-fc-logo-vector-download.jpg",
        "città": "Empoli",
        "allenatore": "Paolo Zanetti",
        "fondazione": "1920",
        "descrizione": "Rinomato per il suo settore giovanile e per una filosofia di gioco propositiva."
    },
    {
        "nome": "Salernitana",
        "stadio": "Stadio Arechi",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2023/08/salernitana-logo_brandlogos.net_mwddx.png",
        "città": "Salerno",
        "allenatore": "Paolo Sousa",
        "fondazione": "1919",
        "descrizione": "Conosciuta per la passione della sua tifoseria e per la storia calcistica in Campania."
    },
    {
        "nome": "Cagliari",
        "stadio": "Unipol Domus",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2021/08/cagliari-calcio-logo-768x768.png",
        "città": "Cagliari",
        "allenatore": "Claudio Ranieri",
        "fondazione": "1920",
        "descrizione": "Famoso per il suo stile di gioco e il supporto appassionato dei tifosi sardi."
    },
    {
        "nome": "Lecce",
        "stadio": "Stadio Via del Mare",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2019/08/us_lecce-logo_brandlogos.net_1igcy.png",
        "città": "Lecce",
        "allenatore": "Dario Lioi",
        "fondazione": "1908",
        "descrizione": "Club noto per il suo forte legame con la comunità locale e una storia ricca di emozioni."
    }

]


let squadre_aID = document.getElementById("squadre_a");
squadre_aID.innerHTML = "";

let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre_a.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center" onclick="mostraDettagli_a(${i})">
                <img src="${squadre_a[i].stemmaUrl}" alt="${squadre_a[i].nome} logo" class="logo-img mb-2">
                <h4><span class="bold">${squadre_a[i].nome}</span></h4>
                <h6>Stadio: ${squadre_a[i].stadio}</h6>
            </div>
        </div>
    `;
}

buffer += `</div></div>`;
buffer += `<div class="text-center my-4"><a href="products.html" class="btn btn-primary">Torna Indietro</a></div>`;

squadre_aID.innerHTML += buffer;

function mostraDettagli_a(i) {
    const squadra = squadre_a[i];
    document.getElementById('modalNome_a').textContent = squadra.nome;
    document.getElementById('modalDescrizione_a').textContent = squadra.descrizione;
    document.getElementById('modalFondazione_a').textContent = squadra.fondazione;
    document.getElementById('modalStadio_a').textContent = squadra.stadio;
    document.getElementById('modalCitta_a').textContent = squadra.città;
    document.getElementById('modalAllenatore_a').textContent = squadra.allenatore;

    document.getElementById('detailModal_a').style.display = "block";
}

function chiudiModal_a() {
    document.getElementById('detailModal_a').style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById('detailModal_a');
    if (event.target == modal) {
        chiudiModal_a();
    }
}

mostraDettagli_a();
