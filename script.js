const grid = document.querySelector('#grid');
const colorGrid = document.querySelector('#color-grid');
const colorPicker = document.querySelector('#color-picker');
const clearButton = document.querySelector('#clear');
const convertButton = document.querySelector('#convert');

const colors = ['#000000', '#1d2b53', '#7e2553', '#008751', '#ab5236', '#5f574f', '#c2c3c7', '#fff1e8', '#ff004d', '#ffa300', '#ffb6b0', '#ffd93f', '#94e044', '#a8e6ff', '#ff80c3', '#ffffff'];

// create the color grid
for (let i = 0; i < colors.length; i++) {
  const colorCell = document.createElement('div');
  colorCell.classList.add('color-cell');
  colorCell.style.backgroundColor = colors[i];
  if (i === 0) {
    colorCell.classList.add('selected');
  }
  colorCell.addEventListener('click', () => {
    document.querySelector('.selected').classList.remove('selected');
    colorCell.classList.add('selected');
    colorPicker.value = colors[i];
  });
  colorGrid.appendChild(colorCell);
}

// create the main grid
for (let i = 0; i < 1024; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = colorPicker.value;
  });
  grid.appendChild(cell);
}

// clear button click event
clearButton.addEventListener('click', () => {
    const selectedColorCell = document.querySelector('#color-grid .selected');
    const color = window.getComputedStyle(selectedColorCell).backgroundColor;
    const cells = document.querySelectorAll('#grid .cell');
    cells.forEach((cell) => {
      cell.style.backgroundColor = color;
    });
});

// convert button click event
convertButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  const bytes = [];
  for (let i = 0; i < cells.length; i += 2) {
    const highNibble = colors.indexOf(cells[i].style.backgroundColor).toString(16);
    const lowNibble = colors.indexOf(cells[i + 1].style.backgroundColor).toString(16);
    const byte = (highNibble.length === 2 ? highNibble : '0' + highNibble) + (lowNibble.length === 2 ? lowNibble : '0' + lowNibble);
    bytes.push(byte);
  }
  console.log(bytes);
});
