document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        document.getElementById('message').innerHTML = '<div class="alert alert-danger">Both fields are required.</div>';
        return;
    }

    document.getElementById('message').innerHTML = '<div class="alert alert-success">Login successful!</div>';
    
});
