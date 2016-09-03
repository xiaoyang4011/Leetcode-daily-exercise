function bubbleSort (array) {
  var i = 0
  var len = array.length
  var temp

  for(; i < len; i++) {
    for(var j = 0; j < len; j++) {
      if(array[i] < array[j]) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }

  return array
}

console.log(bubbleSort([1,3,2,5,4]))
