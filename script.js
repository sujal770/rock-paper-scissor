let userName = prompt("Enter your name:");
let wins = 0;
let losses = 0;
let ties = 0;
let roundsPlayed = 0;


function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    // Determine the game result
    if (playerChoice === cpuChoice) {
        result = `It's a tie! You both chose ${playerChoice}.`;
        ties++;
    } else if (
        (playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        result = `You win! You chose ${playerChoice} and CPU chose ${cpuChoice}.`;
        wins++;
    } else {
        result = `You lose! You chose ${playerChoice} and CPU chose ${cpuChoice}.`;
        losses++;
    }

    // Display the round result to the user
    alert(result);

    // Increment rounds played
    roundsPlayed++;

    // Check if three rounds have been played
    if (roundsPlayed === 3) {
        // Display final results after three rounds
        displayFinalResults();
    }
    
  }


function displayFinalResults() {
    // Update the username display with final results
    document.getElementById("usernameDisplay").innerHTML = `Player name:${userName}<br>Wins: ${wins}<br> Losses: ${losses} <br> Ties: ${ties}`;

    // Display the result modal
    document.getElementById('resultModal').style.display = 'block';
}

function closeModal() {
    // Hide the result modal
    document.getElementById('resultModal').style.display = 'none';

    // Reset game statistics for new game
    wins = 0;
    losses = 0;
    ties = 0;
    roundsPlayed = 0;
}
