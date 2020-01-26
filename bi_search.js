const sortedArray = [ 1, 3, 7, 12, 26, 56, 72, 83, 111, 343, 454, 565, 676, 787 ];

function binarySearch(arr, pointer, needle){

    if(arr[needle] === pointer ){
        console.log("FOUND!!");
        return true;
    }

    if(arr.length == 1){
        console.log("NOT FIND!!");
        return false;
    }
    else if( arr[needle] < pointer){
        const temp = arr.slice(needle, (arr.length));
        const _needle =  Math.floor(temp.length / 2);
        binarySearch( temp, pointer, _needle );
    }
    else if(arr[needle] > pointer ){
        const temp = arr.slice(0, needle);
        const _needle =  Math.floor((temp.length - 1) / 2);
        binarySearch( temp, pointer, _needle );
    }
    

}

const pointer = 55;

const needle = Math.floor(sortedArray.length / 2);

binarySearch(sortedArray, pointer, needle);