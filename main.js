let boxes = document.querySelectorAll('.box');
let prviZnak = 'x';
let buttonWrap = document.querySelector('.buttonWrap')
let newGame = document.querySelector('.newGame');

newGame.addEventListener('click',function () {
   for (var i = 0; i < boxes.length; i++) {
     boxes[i].innerHTML = '';
     boxes[i].style.backgroundColor = '';
   }
   game();
   buttonWrap.style.display = 'none';
})

game();
function game() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',game);
  }
  if (prviZnak == 'x') {
    this.innerHTML = prviZnak;
    this.removeEventListener('click',game);
    prviZnak = 'o';
    checkWinner();
  }else if (prviZnak == 'o') {
    this.innerHTML = prviZnak;
    this.removeEventListener('click',game);
    prviZnak = 'x';
    checkWinner();
  }
}

function checkWinner() {
  if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != "") {
    boxes[0].style.background = 'gray';
    boxes[1].style.background = 'gray';
    boxes[2].style.background = 'gray';
    finish();
  }else if (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != "") {
    boxes[3].style.background = 'gray';
    boxes[4].style.background = 'gray';
    boxes[5].style.background = 'gray';
    finish();

  }else if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != "") {
    boxes[6].style.background = 'gray';
    boxes[7].style.background = 'gray';
    boxes[8].style.background = 'gray';
    finish();

  }else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != "") {
    boxes[0].style.background = 'gray';
    boxes[3].style.background = 'gray';
    boxes[6].style.background = 'gray';
    finish();

  }else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != "") {
    boxes[1].style.background = 'gray';
    boxes[4].style.background = 'gray';
    boxes[7].style.background = 'gray';
    finish();

  }else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != "") {
    boxes[2].style.background = 'gray';
    boxes[5].style.background = 'gray';
    boxes[8].style.background = 'gray';
    finish();

  }else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != "") {
    boxes[0].style.background = 'gray';
    boxes[4].style.background = 'gray';
    boxes[8].style.background = 'gray';
    finish();

  }else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != "") {
    boxes[2].style.background = 'gray';
    boxes[4].style.background = 'gray';
    boxes[6].style.background = 'gray';
    finish();

  }
}

function finish() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click',game);
  }
  buttonWrap.style.display = 'block';
}
