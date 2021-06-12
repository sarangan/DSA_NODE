function isValidMove(placement, place, row){
  for(let i = 0; i < placement.length - 1; i++){
    const diff = Math.abs(place - placement[i]);
    if(diff === 0 || diff === row - i){
       return false;
    }
  }
  return true;
}


function print(placement){
  let s = '';
  for(let i = 0; i < placement.length; i++){
    for(let j = 0; j < placement.length; j++){
      if(placement[i] === j){
        s += ' Q ';
      }
      else{
        s += ' _ ';
      }
    }
    s += '\n';
  }
  console.log(s);
}

function solve8Queens(col, row, placement){
  if(placement.length === 8){
    console.log(placement);
    print(placement)
  }
  else{
      for(let i = 0; i < 8; i++){
        placement.push(i);
        if(isValidMove(placement, i, placement.length - 1 )){
          solve8Queens(col, row + 1, placement);
        }
        placement.pop();
      }
  }
}


solve8Queens(0, 0, []);
