// const colorPalette = document.querySelector('#color-palette');
const colorSquares = document.getElementsByClassName('color');
const colors = ['black', 'aquamarine', 'coral', 'greenyellow'];
const buttonRandom = document.querySelector('#button-random-color');
const buttonClear = document.querySelector('#clear-board');

const addColor = () => {
  for (let index = 0; index < colorSquares.length; index += 1) {
    const colorSquare = colorSquares[index];
    colorSquare.style.backgroundColor = `${colors[index]}`;
  }
};

addColor();

buttonRandom.addEventListener('click', () => {
  const randomizable = [colorSquares[1], colorSquares[2], colorSquares[3]];
  for (let index2 = 0; index2 < randomizable.length; index2 += 1) {
    const randomColor = randomizable[index2];
    randomColor.style.backgroundColor = `rgb(${Math.floor(Math.random() * 220) + 50}, 
            ${Math.random() * 255}, ${Math.random() * 255})`;
  }
  const myColors = {
    color1: colorSquares[0].style.backgroundColor,
    color2: randomizable[0].style.backgroundColor,
    color3: randomizable[1].style.backgroundColor,
    color4: randomizable[2].style.backgroundColor,
  };

  localStorage.setItem('colorPalette', JSON.stringify(myColors));
});

// const savedColor = Object.values(JSON.parse(localStorage.getItem('colorPalette')));

// for (let index4 = 0; index4 < colorSquares.length; index4 += 1) {
//   if (localStorage.length !== null) {
//     colorSquares[index4].style.backgroundColor = `${savedColor[index4]}`;
//   } else {
//     colorSquares[index4].style.backgroundColor = `${colors[index4]}`;
//   }

const pixelBoard = document.querySelector('#pixel-board');

const createBoard = (number) => {
  for (let index5 = 0; index5 < number; index5 += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
};
createBoard(120);

const pixels = document.querySelectorAll('.pixel');

for (let index6 = 0; index6 < pixels.length; index6 += 1) {
  pixels[index6].style.border = 'solid black 1px';
  pixels[index6].style.height = '40px';
  pixels[index6].style.width = '40px';
  pixels[index6].style.display = 'inline-block';
  pixels[index6].style.backgroundColor = 'white';
}

colorSquares[0].classList.add('selected');
const selected = document.getElementsByClassName('selected');

const clickColor = (event) => {
  for (let index7 = 0; index7 < selected.length; index7 += 1) {
    selected[index7].classList.remove('selected');
  }
  event.target.classList.add('selected');
};

for (let index3 = 0; index3 < colorSquares.length; index3 += 1) {
  const eachColor = colorSquares[index3];
  eachColor.addEventListener('click', clickColor);
}

const fillPixel = (event) => {
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = selected[0].style.backgroundColor;
};

for (let index8 = 0; index8 < pixels.length; index8 += 1) {
  pixels[index8].addEventListener('click', fillPixel);
}

const clearBoard = () => {
  for (let index9 = 0; index9 < pixels.length; index9 += 1) {
    pixels[index9].style.backgroundColor = 'white';
  }
};

buttonClear.addEventListener('click', clearBoard);
