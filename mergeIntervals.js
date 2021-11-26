function mergeIntervals(intervals){
  const result = [];
  const items = intervals.sort((a, b) => a[0] - b[0]);
  
  items.forEach(item => {
    if(result.length === 0 || result[result.length - 1][1] < item[0] ){
      result.push(item);
    }
    else{
      result[result.length - 1] = [result[result.length - 1][0],  item[1]]
    }
    
  });
  
  return result
  
}


const intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(mergeIntervals(intervals));
