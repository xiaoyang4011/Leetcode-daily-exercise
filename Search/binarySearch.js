function binarySearch(array, target) {
  var start = 0
  var end = array.length - 1

  while(start + 1 < end) {
    var mid = start + parseInt((end - start) / 2)

    if(array[mid] === target) {
      end = mid
    } else if(array[mid] < target) {
      start = mid
    } else {
      end = mid
    }
  }

  if(array[start] === target) {
    return start
  }
  if(array[end] === target) {
    return end
  }

  return -1
}


console.log(binarySearch([2,1,3,8,4,5], 3))
