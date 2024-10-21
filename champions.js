{
    "squadre"[
        {
            "nome": "Arsenal",
            "nazione": "Inghilterra",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
        },
        {
            "nome": "Manchester City",
            "nazione": "Inghilterra",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
        },
        {
            "nome": "Liverpool",
            "nazione": "Inghilterra",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
        },
        {
            "nome": "Real Madrid",
            "nazione": "Spagna",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
        },
        {
            "nome": "Bayern Monaco",
            "nazione": "Germania",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/1/1c/FC_Bayern_Munich_logo.svg"
        },
        {
            "nome": "Barcelona",
            "nazione": "Spagna",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona.svg"
        },
        {
            "nome": "Atletico Madrid",
            "nazione": "Spagna",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/5/55/Atlético_de_Madrid.svg"
        },
        {
            "nome": "Inter",
            "nazione": "Italia",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/0/03/Inter_Milan_logo.svg"
        },
        {
            "nome": "AC Milan",
            "nazione": "Italia",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/d/d9/AC_Milan.svg"
        },
        {
            "nome": "Napoli",
            "nazione": "Italia",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/0/0f/S.S.C._Napoli.svg"
        },
        {
            "nome": "Paris Saint-Germain",
            "nazione": "Francia",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/e/e6/Paris_Saint-Germain_F.C..svg"
        },
        {
            "nome": "FC Porto",
            "nazione": "Portogallo",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/2/27/FC_Porto_logo.svg"
        },
        {
            "nome": "Benfica",
            "nazione": "Portogallo",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/c/c8/S.L._Benfica.svg"
        },
        {
            "nome": "Ajax",
            "nazione": "Paesi Bassi",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/b/b5/Ajax_Logo.svg"
        },
        {
            "nome": "RB Leipzig",
            "nazione": "Germania",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/d/db/RB_Leipzig_logo.svg"
        },
        {
            "nome": "Real Sociedad",
            "nazione": "Spagna",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/1/1e/Real_Sociedad.svg"
        },
        {
            "nome": "Lazio",
            "nazione": "Italia",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/8/8c/SS_Lazio_logo.svg"
        },
        {
            "nome": "Sevilla",
            "nazione": "Spagna",
            "immagine": "https://upload.wikimedia.org/wikipedia/en/a/a0/Sevilla_FC_logo.svg"
        }
    ]
}



function riempiCompetizione(squadre) {
    let buffer = "";

    let squadreID = document.getElementById("squadre");
    squadreID.innerHTML = "";

    for (let i = 0; i < squadre.length; i++) {
        buffer += `<div class="col-4"> <img src="${squadre[i].immagine}">`
        buffer += `    <h4><span class="bold">${squadre[i].nome}</span></h4>`
        buffer += `    <h6>Nazione:${squadre[i].nazione}</h6>`
        buffer += `</div>`
    }
    squadreID.innerHTML += buffer;

}