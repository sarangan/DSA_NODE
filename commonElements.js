function commonElements(list1, list2){
  const l1 = list1.length;
  const l2 = list2.length;
  let x = 0;
  let y = 0;
  const s = [];
  
  while(x < l1 && y < l2){
    
    
    if(list1[x] === list2[y]){
      s.push(list1[x]);
      x = x + 1;
      y = y + 1;
    }else if(list1[x] > list2[y]){
      y = y + 1;
    }else if(list1[x] < list2[y]){
        x = x + 1;
    }
  
    
  }
  
  return s;
  
}

const list1 = [0, 1, 2, 3, 4, 5]
const list2 = [6, 7, 8, 9, 10, 11]


const s = commonElements(list1, list2);

console.log(s);
