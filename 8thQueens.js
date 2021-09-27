const colPlacement = [];
const noOfQueens = 8;

function print(colPlacement){
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
  
  return str;
}


function isValid(colPlacement, lastItem){
  
  for(let i = 0; i < colPlacement.length - 1; i++){
    
    if(colPlacement[i] === lastItem || Math.abs(lastItem - colPlacement[i]) === (colPlacement.length - 1) - i ){
      return false;
    }
  }
  return true;
}

function nthQueens(level, colPlacement){
  
  if(level === noOfQueens){
    console.log(colPlacement);
    console.log(print(colPlacement));
  }
  
  for(let i = 0; i < noOfQueens; i++){
    colPlacement.push(i);
    if(isValid(colPlacement, i)){
      nthQueens(level + 1, colPlacement);
    }
    colPlacement.pop();
  }
  
  
}


nthQueens(0, colPlacement);
