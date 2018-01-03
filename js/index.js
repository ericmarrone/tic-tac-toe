document.addEventListener('DOMContentLoaded', function() {
  var currentPlayer = "X";
  var gameOver = false;
  var moves = 0;
  var startGame = document.querySelector('button');

  var board = document.querySelector('#board');
  var gameCells = document.querySelectorAll('.cell');
  var gameRows = document.querySelectorAll('.row');
  var table = document.querySelector('table');
  var display = document.querySelector('.display');
  var cell1 = document.querySelector('#cell1');
  var cell2 = document.querySelector('#cell2');
  var cell3 = document.querySelector('#cell3');
  var cell4 = document.querySelector('#cell4');
  var cell5 = document.querySelector('#cell5');
  var cell6 = document.querySelector('#cell6');
  var cell7 = document.querySelector('#cell7');
  var cell8 = document.querySelector('#cell8');
  var cell9 = document.querySelector('#cell9');

  // Setup board and gameplay
  startGame.addEventListener('click', function() {
    board.style.display = "block";
    // board.style.position = 'absolute'
    // board.style.top = '25%';
    board.style.margin = '5% auto';
    board.style.width = '500px'
    board.style.height = '500px'
    board.style.border = '2px solid black';
    table.style.width = '100%';
    table.style.height = '100%';
    display.style.width = '100%';
    display.style.height = '3.2rem'
    display.style.fontFamily = 'Helvetica';
    display.style.textAlign = 'center';
    display.style.fontSize = '3rem';

    gameCells.forEach(function(gameCell) {
      gameCell.style.border = '2px solid black';
      gameCell.style.margin = '0';
      gameCell.style.padding = '0';
      gameCell.style.width = '33.3%';
      gameCell.style.height = '33.3%';
      gameCell.style.fontSize = '8rem';
      gameCell.style.fontFamily = 'Helvetica';
      gameCell.style.textAlign = 'center';

      gameCell.onclick = function() {
        moves++
        if (currentPlayer === 'O') {
          gameCell.style.color = 'red';
          gameCell.classList.add('o');
        } else {
          gameCell.style.color = 'black';
          gameCell.classList.add('x');
        }
        gameCell.innerText = currentPlayer;
        gameCell.style.pointerEvents = 'none';
        checkRows()
        checkColumns()
        checkDiagonals()
        if (checkGameOver()) {
          switchPlayer()
        };
      };
    });
  });

  // functions for checking gameplay and game end
  function switchPlayer() {
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    display.innerText = `${currentPlayer}'s turn`;
  };


  function checkGameOver() {
    if (gameOver === true) {
      display.innerText = `${currentPlayer} has won!`;
      return false;
    } else if (moves === 9) {
      display.innerText = 'Draw!';
      return false;
    };
    return true;
  };

  function checkRows() {
    if ((cell1.innerText === currentPlayer && cell2.innerText === currentPlayer && cell3.innerText === currentPlayer) || (cell4.innerText === currentPlayer && cell5.innerText === currentPlayer && cell6.innerText === currentPlayer) || (cell7.innerText === currentPlayer && cell8.innerText === currentPlayer && cell9.innerText === currentPlayer)) {
      gameOver = true
      table.style.pointerEvents = 'none';
    };
  };

  function checkColumns() {
    if ((cell1.innerText === currentPlayer && cell4.innerText === currentPlayer && cell7.innerText === currentPlayer) || (cell2.innerText === currentPlayer && cell5.innerText === currentPlayer && cell8.innerText === currentPlayer) || (cell3.innerText === currentPlayer && cell6.innerText === currentPlayer && cell9.innerText === currentPlayer)) {
      gameOver = true
      table.style.pointerEvents = 'none';
    };
  };

  function checkDiagonals() {
    if ((cell1.innerText === currentPlayer && cell5.innerText === currentPlayer && cell9.innerText === currentPlayer) || (cell3.innerText === currentPlayer && cell5.innerText === currentPlayer && cell7.innerText === currentPlayer)) {
      gameOver = true
      table.style.pointerEvents = 'none';
    };
  };


});
