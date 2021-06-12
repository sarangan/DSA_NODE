function chunk(array, size) {
    if(array.length <= size){
        return [].concat(array);
    }
    const result = [];
    let subArray = [];
    array.forEach(arr => {
        subArray.push(arr);
        if(subArray.length === size){
            result.push(subArray);
            subArray = [];
        }
    });
    return result.concat(subArray);
}

chunk([1, 3, 2, 4, 5, 6, 7, 8], 3);
