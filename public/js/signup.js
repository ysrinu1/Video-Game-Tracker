const signUpHandler = async (e) => {
    e.preventDefault();
    const user_name = $('#signup-username').val().trim();
    const password = $('#signup-password').val().trim();

    if (user_name == "") {
        $('#signup-username').attr("style", "border-color: red;")
        $('#signup-username').attr("placeholder", "Enter a username")
    } 

    if (password.length < 10) {
        $('#signup-password').attr("style", "border-color: red;")
        $('#signup-password').attr("placeholder", "Must be 10 Characters")
        return;
    } 

    if (password.length > 10) {
        $('#signup-password').attr("style", "border-color: red;")
        $('#signup-password').attr("placeholder", "Must be 10 Characters")
        return;
    } 
   
    if(user_name && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ user_name, password }),
            headers: {'Content-Type': 'application/json'},
        });

        const signupData = await response.json();
        if(response.status === 400 || response.status === 404) { 
           return alert(signupData.message)
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