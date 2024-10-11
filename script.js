document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Regex per la validazione dell'email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regex per la validazione della password (almeno 8 caratteri, un numero, una lettera maiuscola e un simbolo)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;-_])[A-Za-z\d.,:;-_@$!%*?&]{8,}$/;

    let isValid = true;

    // Validazione email
    if (!emailRegex.test(username)) {
        alert('Inserisci un indirizzo email valido.');
        isValid = false;
    }

    // Validazione password
    if (!passwordRegex.test(password)) {
        alert('La password deve contenere almeno 8 caratteri, una lettera maiuscola, un numero e un simbolo.');
        isValid = false;
    }

    // Se entrambe le validazioni sono superate, mostra l'alert di login
    if (isValid) {
        alert(`Nome utente: ${username}\nPassword: ${password}`);
        location.href="products.html"
    }
});