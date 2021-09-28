 const maze = [ 
   [1, 0, 0, 1],
   [1, 1, 0, 1],
   [0, 1, 1, 1],
   [0, 0, 1, 1]
 ];

 const movement = [ 
   [1, 0, 0, 0],
   [0, 0, 0, 0],
   [0, 0, 0, 0],
   [0, 0, 0, 0]
 ];

const shifts = {
  right: [0, 1],
  down: [1, 0],
  left: [0, -1],
  up: [-1, 0],
};

function validMove(tempX, tempY){
  if( tempX >=0 && tempY >= 0 && tempX <=3 && tempY <=3 && maze[tempX][tempY] === 1){
    return true;
  }
  return false;
}

function solveMaze(movement, x, y){
  if(x === 0 && y === 3){
     movement[0][0] = 1; // starting
    console.log('Movement ', movement);
    return true;
  }
  
  for(const key in shifts){
    
    const tempX = x + Number(shifts[key][0]);
    const tempY = y + Number(shifts[key][1]);
    
    // console.log(key, 'x,y', x,y, 'X,Y', tempX, tempY, validMove(tempX, tempY))
    
    if(tempX >= 0  && tempX <= 3 &&  tempY >= 0 && tempY <= 3 &&  movement[tempX][tempY] !== 1 ){
       movement[tempX][tempY] = 1;
      if(validMove(tempX, tempY)){
      
        // console.log(movement)
        if(solveMaze(movement, tempX, tempY)){
          return true;
        }
      }

      movement[tempX][tempY] = 0;
    }
    
  };
  
  return false;
  
}


solveMaze(movement, 0, 0);

