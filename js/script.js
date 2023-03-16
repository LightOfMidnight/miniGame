let card;
let firstCard = null,
  secondCard = null;
const numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

function shuffle(arr) {
  for(var i = 0; i < arr.length; i++)
  {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp =  arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
  }
  return arr;
}

function newCard(shuffleArray) {
  for (let i = 0; i < shuffleArray.length; i++) {
    card = document.createElement('div');
    card.classList.add('card');
    card.textContent = shuffleArray[i];
    document.getElementById('game').append(card);
  }
}

function startGame() {
  const cardInDom = document.getElementsByClassName('card');
    for (let card of cardInDom) {
      card.addEventListener('click', function () {
        if (card.classList.contains('open')) {
          return;
        } else {
          card.classList.add('open');
        }

        if (firstCard !== null && secondCard !== null) {
          if (firstCard.textContent !== secondCard.textContent) {
            firstCard.classList.remove('open');
            secondCard.classList.remove('open');
            firstCard = null;
            secondCard = null;
          }
        }

        if (firstCard == null) {
          firstCard = card;
        } else {
          if (secondCard == null) {
            secondCard = card;
          }
        }

        if (firstCard !== null && secondCard !== null) {
          if (firstCard.textContent == secondCard.textContent) {
            firstCard.classList.add('success');
            secondCard.classList.add('success');
            firstCard = null;
            secondCard = null;
          }
        }
        resetGame();
      })
    }
}

function resetGame() {
  if (document.querySelectorAll('.card.success').length == numberArray.length) {
    alert('You are winner!');
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Сыграть ещё раз';
    document.getElementById('game').append(button);
    button.addEventListener('click', function() {
      if (document.querySelector('.card')) {
        game.innerHTML = '';
      }
      newCard(shuffle(numberArray));
      startGame();
    })
  }
}

newCard(shuffle(numberArray));
startGame();
