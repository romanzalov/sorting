function split (array) {
  let arr1 = [];
  let arr2 =[];
  var mid = array.length/2;
  if (array.length % 2 ===0){

    arr1 = array.slice(0,mid);
    arr2 = array.slice(mid,array.length);
  } else {
    mid = Math.ceil(mid);
    arr1 = array.slice(0,mid)
    arr2 = array.slice(mid,array.length)
  } return [arr1,arr2];
}

function merge (array1,array2) {
  let newArray = array1.concat(array2);
  let counter = array1.length + array2.length
  return bubbleSort(newArray)
}

function mergesort(array) {
  if (array.length <= 1)  {
    return array;
  }

  let splitArray = split(array);
  let first = splitArray[0]
  let second = splitArray[1]
  return merge(mergesort(first), mergesort(second))
}
