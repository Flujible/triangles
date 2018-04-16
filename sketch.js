let resolution = 7;
let cols, rows;
let r, g, b;
let opacity = 255;

let make2DArray = (cols, rows) => {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

let grid;

let assignFill = (grid, i, j) => {
  if(j === 0) {
    grid[i][j] = floor(random(2));
  }

  if((i !== grid.length-1 && i !== 0) && (j !== 0)) {
    if(grid[i-1][j-1] && grid[i][j-1] && grid[i+1][j-1]) {
      grid[i][j] = 1;
    }
    if(!grid[i-1][j-1] && !grid[i][j-1] && !grid[i+1][j-1]) {
      grid[i][j] = 1;
    }
  }

  //Wrap around for a square in the left hand column
  if(i === 0) {
    if(grid[grid.length - 1][j-1] && grid[i][j-1] && grid[i+1][j-1]) {
      grid[i][j] = 1;
    }
    if(!grid[grid.length - 1][j-1] && !grid[i][j-1] && !grid[i+1][j-1]) {
      grid[i][j] = 1;
    }
  }
  // Wrap for a square in the right hand column
  if(i === grid.length -1) {
    if(grid[i-1][j-1] && grid[i][j-1] && grid[0][j-1]) {
      grid[i][j] = 1;
    }
    if(!grid[i-1][j-1] && !grid[i][j-1] && !grid[0][j-1]) {
      grid[i][j] = 1;
    }
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  cols = floor(windowWidth / resolution);
  rows = floor(windowHeight / resolution);
  grid = make2DArray(cols, rows);
  r = random(0, 100);
  g = random(0, 100);
  b = random(0, 100);
  strokeWeight(0);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      assignFill(grid, i, j);
    }
  }
}


function draw() {
  clear();
  background(240);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let xPosition = i * resolution;
      let yPosition = j * resolution;
      if(grid[i][j]) {
        fill(r, g, b, opacity);
        rect(xPosition, yPosition, resolution , resolution );
      }
    }
  }
}
