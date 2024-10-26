document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;-_])[A-Za-z\d.,:;-_@$!%*?&]{8,}$/;

    let isValid = true;

    if (!emailRegex.test(username)) {
        alert('LOGIN NON EFFETTUATO!\n\nInserisci un indirizzo email valido.');
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        alert('LOGIN NON EFFETTUATO!\n\nLa password deve contenere almeno 8 caratteri, una lettera maiuscola, un numero e un simbolo.');
        isValid = false;
    }

    if (isValid) {
        alert(`LOGIN EFFETTUATO CORRETTAMENTE!\n\nNome utente: ${username}\nPassword: ${password}`);
        location.href="products.html"
    }
});