function validPlace(colPlacement, lastItem){
  for(let i = 0; i < colPlacement.length - 1; i++){
    if(colPlacement[i] === lastItem || Math.abs(lastItem - colPlacement[i]) === colPlacement.length - 1 - i ){
      return false;
    }
  }
  return true;
}

function print(colPlacement, noOfQueens){
  let str = '';
  for(let i = 0; i < noOfQueens ; i++ ){
    for(let j = 0; j < noOfQueens; j++ ){
     if(colPlacement[i] === j){
       str += ' Q ';
     }
      else{
        str += ' - ';
      }
    }
     str += '\n';
  }
  
  console.log(str);
}


function eightQueens(colPlacement, noOfQueens){
  
  if(colPlacement.length === noOfQueens){
    print(colPlacement, noOfQueens);
    // return true;
  }
  
  for(let i = 0; i < noOfQueens; i++){
    
    colPlacement.push(i);
    
    if(validPlace(colPlacement, i)){
      if(eightQueens(colPlacement, noOfQueens)){
        return true;
      }
    }
    
    colPlacement.pop();
    
  }
  
}

const colPlacement = [];
eightQueens(colPlacement, 8);

