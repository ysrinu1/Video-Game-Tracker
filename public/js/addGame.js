const addGame = async (e) => {
    e.preventDefault(); 

const title = $('#game-title').val().trim();
const system = $('#game-system').val().trim();
const genre = $('#game-genre').val().trim();
const rating = $('#game-rating').val().trim();
const summary = $('#game-summary').val();
const tips_tricks = $('#game-tips_tricks').val();

   if (title && system && genre && rating && summary && tips_tricks) {
    const response = await fetch(`/api/game`, {
        method: 'POST', 
        body: JSON.stringify({ title, system, genre, rating, summary, tips_tricks }), 
        headers: { 'Content-Type': 'application/json' }
    });

    const gameData = await response.json();
        
    if(response.status === 400 || response.status === 404) { 
       return alert(gameData.message)
        }
    if(response.ok){
        //replaces current page with home page
        document.location.replace('/');
    }else {
        alert(`I'm sorry but I've ran into an issue while attempting to create your game.`);
    }
   }
    

    
}

$('#add-game').click(addGame);
