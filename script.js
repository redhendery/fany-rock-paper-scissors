let playerScore = 0
let compScore = 0
let rounds = 0
let currentlyPlaying = true
let result

let scoreboard = document.getElementById('scoreboard')
let round = document.getElementById('round')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let gameStatus = document.getElementById('status')
let outcome = document.getElementById('message')

rock.addEventListener('click', function() {
  while(rounds < 5) {
    return playRound('rock')
  }
})

paper.addEventListener('click', function() {
  while(rounds < 5) {
    return playRound('paper')
  }
})

scissors.addEventListener('click', function() {
  while(rounds < 5) {
    return playRound('scissors')
  }
})

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {
  let computerSelection = computerPlay()
  rounds < 5 ? round.textContent = `Round ${rounds + 1} / 5` : round.textContent = `Round ${rounds} / 5`

  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    playerScore++
    rounds++
    scoreboard.textContent = `${playerScore} : ${compScore}`
    gameStatus.textContent = `I chose ${computerSelection}.`
    message.textContent = `You win this round!`
  }
  else if (playerSelection === computerSelection) {
    scoreboard.textContent = `${playerScore} : ${compScore}`
    gameStatus.textContent = `I chose ${computerSelection} too.`
    message.textContent = `Tie! Again!`
  }
  else {
    compScore++
    rounds++
    scoreboard.textContent = `${playerScore} : ${compScore}`
    gameStatus.textContent = `I chose ${computerSelection}.`
    message.textContent = `You lose this round!`
  }

  if (rounds === 5) {
    if (playerScore > compScore) result = 'You win'
    else if (compScore > playerScore) result = 'You lose'
    gameStatus.style.backgroundColor = '#ddd'
    gameStatus.innerHTML = `I chose ${computerSelection}. ${result}! <br><strong style="calc(font-size: 1.3rem + 0.6vw)">Play again?</strong>`
  }
  return gameStatus
}

gameStatus.addEventListener('click', reset)

function reset() {
  while (rounds <= 5) {
    return playerScore = 0,
    compScore = 0,
    rounds = 0,
    scoreboard.textContent = `${playerScore} : ${compScore}`,
    round.textContent = `Round ${rounds + 1}/5`,
    gameStatus.textContent = 'Good luck!',
    gameStatus.style.backgroundColor = '#fff',
    currentlyPlaying = true
  }
}
