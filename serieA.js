
let squadre_a = [
    {
        "nome": "AC Milan",
        "stadio": "San Siro",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2021/05/ac_milan-logo_brandlogos.net_xh3sl.png"
    },
    {
        "nome": "FC Inter",
        "stadio": "San Siro",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg"
    },
    {
        "nome": "Juventus",
        "stadio": "Allianz Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2017/01/juventus_fc-brandlogo.net_-768x768.png"
    },
    {
        "nome": "AS Roma",
        "stadio": "Stadio Olimpico",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2012/11/as-roma-logo-vector.png"
    },
    {
        "nome": "Napoli",
        "stadio": "Stadio Diego Armando Maradona",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg"
    },
    {
        "nome": "Lazio",
        "stadio": "Stadio Olimpico",
        "stemmaUrl": "https://iconape.com/wp-content/files/sd/332174/svg/332174.svg"
    },
    {
        "nome": "Fiorentina",
        "stadio": "Stadio Artemio Franchi",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2022/07/acf_fiorentina-logo_brandlogos.net_dpvfb-768x768.png"
    },
    {
        "nome": "Atalanta",
        "stadio": "Gewiss Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/12/atalanta_bc-logo_brandlogos.net_yq22a.png"
    },
    {
        "nome": "Sassuolo",
        "stadio": "Mapei Stadium",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2019/07/us_sassuolo_calcio-logo_brandlogos.net_wl1mr.png"
    },
    {
        "nome": "Bologna",
        "stadio": "Stadio Renato Dall'Ara",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2014/12/bologna_fc_1909-logo_brandlogos.net_vf54h.png"
    },
    {
        "nome": "Torino",
        "stadio": "Stadio Olimpico Grande Torino",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2012/12/torino-logo-vector.png"
    },
    {
        "nome": "Udinese",
        "stadio": "Dacia Arena",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2013/10/udinese-calcio-vector-logo.png"
    },
    {
        "nome": "Empoli",
        "stadio": "Stadio Carlo Castellani",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2015/09/empoli-fc-logo-vector-download.jpg"
    },
    {
        "nome": "Salernitana",
        "stadio": "Stadio Arechi",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2023/08/salernitana-logo_brandlogos.net_mwddx.png"
    },
    {
        "nome": "Cagliari",
        "stadio": "Unipol Domus",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2021/08/cagliari-calcio-logo-768x768.png"
    },
    {
        "nome": "Lecce",
        "stadio": "Stadio Via del Mare",
        "stemmaUrl": "https://brandlogos.net/wp-content/uploads/2019/08/us_lecce-logo_brandlogos.net_1igcy.png"
    }

]


let squadre_aID = document.getElementById("squadre_a");
squadre_aID.innerHTML = "";

let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre_a.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center">
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
