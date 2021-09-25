function is_rotation(list1, list2){
  let pointer = 0;
  
  if(list1.length !== list2.length){
     return false;
  }
  
  for(let i = 0; i < list2.length; i++){
    if(list2[i] === list1[0]){
      pointer = i;
      break;
    }
  }
  
  const temp = [...list2.slice(pointer), ...list2.slice(0, pointer)];
  
  return list1.join() === temp.join();
}


const list1 = [1, 2, 3, 4, 5, 6, 7]
const list2 = [7, 1, 2, 3, 4, 5, 6]

console.log(is_rotation(list1, list2));
