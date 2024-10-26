
let squadre = [

    {
        "nome": "Arsenal",
        "nazione": "Inghilterra",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
    },
    {
        "nome": "Manchester City",
        "nazione": "Inghilterra",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
    },
    {
        "nome": "Liverpool",
        "nazione": "Inghilterra",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
    },
    {
        "nome": "Real Madrid",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
    },
    {
        "nome": "Bayern Monaco",
        "nazione": "Germania",
        "stemmaUrl": "https://iconape.com/wp-content/files/kv/325477/svg/325477.svg"
    },
    {
        "nome": "Barcelona",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
    },
    {
        "nome": "Atletico Madrid",
        "nazione": "Spagna",
        "stemmaUrl": "https://seeklogo.com/images/A/atletico-madrid-new-logo-6AC4CCB6A2-seeklogo.com.png"
    },
    {
        "nome": "Inter",
        "nazione": "Italia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg"
    },
    {
        "nome": "AC Milan",
        "nazione": "Italia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
    },
    {
        "nome": "Napoli",
        "nazione": "Italia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg"
    },
    {
        "nome": "Paris Saint-Germain",
        "nazione": "Francia",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
    },
    {
        "nome": "FC Porto",
        "nazione": "Portogallo",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg"
    },
    {
        "nome": "Benfica",
        "nazione": "Portogallo",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg"
    },
    {
        "nome": "Ajax",
        "nazione": "Paesi Bassi",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg"
    },
    {
        "nome": "RB Leipzig",
        "nazione": "Germania",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg"
    },
    {
        "nome": "Real Sociedad",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg"
    },
    {
        "nome": "Lazio",
        "nazione": "Italia",
        "stemmaUrl": "https://iconape.com/wp-content/files/sd/332174/svg/332174.svg"
    },
    {
        "nome": "Sevilla",
        "nazione": "Spagna",
        "stemmaUrl": "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg"
    }

]




// let buffer = "";

let squadreID = document.getElementById("squadre");
squadreID.innerHTML = "";

// for (let i = 0; i < squadre.length; i++) {
//     buffer += `<div class="col-4">`
//     buffer += `<br>`
//     buffer += `    <h4><span class="bold">${squadre[i].nome}</span></h4>`
//     buffer += `    <h6>Nazione: ${squadre[i].nazione}</h6>`
//     buffer += `</div>`
// }
// squadreID.innerHTML += buffer + "<br>" + `<a href="products.html" class="btn btn-primary">Torna Indietro</a>`;


let buffer = `<div class="container"><div class="row">`;

for (let i = 0; i < squadre.length; i++) {
    buffer += `
        <div class="col-md-4 my-3">
            <div class="team-card p-3 text-center">
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