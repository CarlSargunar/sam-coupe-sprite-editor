const grid = document.querySelector('#grid');
const colorPicker = document.querySelector('#color-picker');
const clearButton = document.querySelector('#clear');
const convertButton = document.querySelector('#convert');

const colors = ['#ffffff', '#c7c7c7', '#9f9f9f', '#7f7f7f', '#5f5f5f', '#3f3f3f', '#1f1f1f', '#000000', '#ff9c9c', '#ff0000', '#c70000', '#9f0000', '#7f0000', '#5f0000', '#3f0000', '#1f0000'];

for (let i = 0; i < 1024; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  cell.addEventListener('click', () => {
    cell.style.backgroundColor = colorPicker.value;
  });

  grid.appendChild(cell);
}

clearButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
});

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
