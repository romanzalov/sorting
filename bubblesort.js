function bubbleSort(array, runCount = array.length) {
  for(let i = 0; i < runCount; i++)
  {
    let first = array[i];
    let second = array[i + 1];

    if (second < first) {
      swap(array, i, i + 1);
    }
  }
  if (runCount !== 0)
  {
    runCount--;
    bubbleSort(array,runCount);
  }
  return array;
}

function swap(array, firstIndex, secondIndex) {
  // [1, 2]
  let temp = array[firstIndex]; // temp = 1
  array[firstIndex] = array[secondIndex]; // [2, 2]
  array[secondIndex] = temp; // [2, 1]
}

let Animal = function () {
  this.species = "Cat";
}



class Animal {

  constructor () {

  }

  vocalize() {

  }
}

var a = new Animal();
