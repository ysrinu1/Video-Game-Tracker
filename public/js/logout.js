const logout = async (event) => {
    event.preventDefault();
    const response = await fetch('/logout', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
    
    if(response.status == 200) {
        document.location.replace('/');
    } else {
        alert('Something has gone wrong')
    }
}

$('#logout').click(logout);
