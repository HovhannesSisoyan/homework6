
const lineColor = "green";
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
let isX=true;
let canvasSize = 600;
let sectionSize = canvasSize / 3;
canvas.width = canvasSize;
canvas.height = canvasSize;
context.translate(0.5, 0.5);
const rand = function(num) {
    return Math.floor((Math.random() * num) + 1);
    };
  const isFree = function(board,i,j)
{
  return board[i][j] === ' ';
};

const nextMove = function(board,isX) {
  let i = rand(3) - 1;
  let j = rand(3) - 1;

  while(board[i][j] !== ' '){
    i = rand(3) - 1;
    j = rand(3) - 1;
  } 
    
  return [i, j];
  
};
const makeMove = function(board,loc, isX) // loc= [0,1]       makeMovie start
 {
  if ((board[loc[0]][loc[1]] != " ") || (loc[0]<0) || (loc[0]>2) || (loc[1]<0) || (loc[1]>2))
    {
    return -1; 
    };
  if (isX === true)
  {
    board[loc[0]][loc[1]]="x"
     }
  else
  { 
   board[loc[0]][loc[1]]="o";
};
return 0;
};
const findWinner = function(board)
{
  
  if (((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && (board[0][1] === board[0][2]) && (board[0][0] === 'x')) || 
    ((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && (board[1][1] === board[1][2]) && (board[1][0] === 'x')) || 
    ((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && (board[2][1] === board[2][2]) && (board[2][0] === 'x')))
{    
const obj = {
  winner: 'x',
  winningLocations: "x won horizontaly" 
};
return  obj;   
}
else if 
        (((board[0][0] === board[1][0]) && (board[0][0] === board[2][0]) && (board[1][0] === board[2][0]) && (board[0][0] === 'x')) || 
    ((board[0][1] === board[1][1]) && (board[0][1] === board[2][1]) && (board[1][1] === board[2][1]) && (board[0][1] === 'x')) || 
    ((board[0][2] === board[1][2]) && (board[0][2] === board[2][2]) && (board[1][2] === board[2][2]) && (board[0][2] === 'x')))
{    
   const obj = {
  winner: 'x',
  winningLocations: "x won vertically" 
};
return obj;
}
else if 
        (((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) && (board[1][1] === board[2][2]) && (board[0][0] === 'x')) ||  
    ((board[0][2] === board[1][1]) && (board[0][2] === board[2][0]) && (board[1][1] === board[2][0]) && (board[0][2] === 'x')))
{    
   const obj = {
  winner: 'x',
  winningLocations: "x won diagonally" 
}
return obj;
}
else if (((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && (board[0][1] === board[0][2]) && (board[0][0] === 'o')) || 
    ((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && (board[1][1] === board[1][2]) && (board[1][0] === 'o')) || 
    ((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && (board[2][1] === board[2][2]) && (board[2][0] === 'o')))
{    
const obj = {
  winner: 'o',
  winningLocations: "o won horizontaly" 
};
return  obj;   
}
else if 
        (((board[0][0] === board[1][0]) && (board[0][0] === board[2][0]) && (board[1][0] === board[2][0]) && (board[0][0] === 'o')) || 
    ((board[0][1] === board[1][1]) && (board[0][1] === board[2][1]) && (board[1][1] === board[2][1]) && (board[0][1] === 'o')) || 
    ((board[0][2] === board[1][2]) && (board[0][2] === board[2][2]) && (board[1][2] === board[2][2]) && (board[0][2] === 'o')))
{    
   const obj = {
  winner: 'o',
  winningLocations: "o won vertically" 
};
return obj;
}
else if 
        (((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) && (board[1][1] === board[2][2]) && (board[0][0] === 'o')) ||  
    ((board[0][2] === board[1][1]) && (board[0][2] === board[2][0]) && (board[1][1] === board[2][0]) && (board[0][2] === 'o')))
{    
   const obj = {
  winner: 'o',
  winningLocations: "o won diagonally" 
}
return obj;
}
else if ((board[0][0] != " ") && (board[0][1] != " ") && (board[0][2] != " ") && (board[1][0] != " ") && (board[1][1] != " ") && (board[1][2] != " ") && (board[2][0] != " ") && (board[2][1] != " ") && (board[2][2] != " "))
{    
   const obj = {
  winner: 'non',
  winningLocations: " nobody won" 
} ;
return obj;
};
};
const update = function(isX){
  if(isX === false) {
    const location = nextMove(board); //[2,1]
    makeMove(board, location, isX);
    drawO(location[0]*sectionSize, location[1]*sectionSize);
  }
}
function drawO (xCordinate, yCordinate) {
  var halfSectionSize = (0.5 * sectionSize);
  var centerX = xCordinate + halfSectionSize;
  var centerY = yCordinate + halfSectionSize;
  var radius = (sectionSize - 100) / 2;
  var startAngle = 0 * Math.PI; 
  var endAngle = 2 * Math.PI;

  context.lineWidth = 10;
  context.strokeStyle = "blue";
  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.stroke();
}

function drawX (xCordinate, yCordinate) {
  context.strokeStyle = 'red';
  context.beginPath();
  let offset = 50;
  context.moveTo(xCordinate + offset, yCordinate + offset);
  context.lineTo(xCordinate + sectionSize - offset, yCordinate + sectionSize - offset);

  context.moveTo(xCordinate + offset, yCordinate + sectionSize - offset);
  context.lineTo(xCordinate + sectionSize - offset, yCordinate + offset);

  context.stroke();
}

function drawLines (lineWidth, strokeStyle) {
  let lineStart = 4;
  let lineLenght = canvasSize - 5;
  context.lineWidth = lineWidth;
  context.lineCap = 'round';
  context.strokeStyle = strokeStyle;
  context.beginPath();
  for (var y = 1;y <= 2;y++) {  
    context.moveTo(lineStart, y * sectionSize);
    context.lineTo(lineLenght, y * sectionSize);
  }
  for (var x = 1;x <= 2;x++) {
    context.moveTo(x * sectionSize, lineStart);
    context.lineTo(x * sectionSize, lineLenght);
  }

  context.stroke();
}


drawLines(10, lineColor);
const newGame= function(board)
{
  for (let i=0; i<3; i++)
      for (let j=0; j<3; j++)
      {
        board[i][j] = " ";
      };
         alert('Game Over')
        context.clearRect(0,0,canvas.width,canvas.height);
        drawLines(10, lineColor);
    };
 
canvas.addEventListener('click', function(evt) {
  const x=Math.floor(evt.offsetX/sectionSize);
  const y=Math.floor(evt.offsetY/sectionSize);
  makeMove(board,[x,y], isX);
  if(findWinner(board)) {
    alert('The winner is ' + findWinner(board).winner + ', winning locations are ' + findWinner(board).winningLocations);
    //newGame(board);
  };
  drawX(x*sectionSize, y*sectionSize);
  isX=!isX;
  update(isX);
  isX=!isX;
  
  },false);


