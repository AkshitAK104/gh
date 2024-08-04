function authenticate() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const correctUsername = 'ak';
    const correctPassword = '123';

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
       
        document.body.classList.add('hidden');

        
        setTimeout(() => {
            window.location.href = 'third.html'; 
        }, 500);
    } else {
        
        document.body.style.backgroundColor = 'red';

        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Incorrect username or password';
        messageElement.style.color = 'red'; 
    }
}
