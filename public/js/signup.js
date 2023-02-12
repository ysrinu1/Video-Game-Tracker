const signUpHandler = async (e) => {
    e.preventDefault();
    const user_name = $('#signup-username').val().trim();
    const password = $('#signup-password').val().trim();
    const email = $('#signup-email').val().trim();
    const birth_date = $('#signup-date').val().trim();

    if (user_name == "") {
        $('#signup-username').attr("style", "border-color: red;")
        $('#signup-username').attr("placeholder", "Please enter a username")
    } 

    if (password.length < 10) {
        $('#signup-password').attr("style", "border-color: red;")
        $('#signup-password').attr("placeholder", "Please enter a valid password")
        return;
    } 

    if (password.length > 10) {
        $('#signup-password').attr("style", "border-color: red;")
        $('#signup-password').attr("placeholder", "Please enter a valid password")
        return;
    } 
   
    if(user_name && password && email && date) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ user_name, password, email, birth_date }),
            headers: {'Content-Type': 'application/json'},
        });

        const signData = await response.json();
        if(response.status === 400 || response.status === 404) { 
           return alert(signData.message)
            }
        if(response.ok){
            //replaces current page with home page
            document.location.replace('/');
        } else {
            return alert('This username is already taken. Please try a different Username.')
        }
    }
};

$('#signup-btn').click(signUpHandler)