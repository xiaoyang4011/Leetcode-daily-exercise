
function quickSort(array) {
  var i = 0
  var j = array.length - 1

  var Sort = function(i, j) {
    if(i === j) return

    var key = array[i]
    var temp_i = i
    var temp_j = j
    var temp

    while(i !== j) {
      while (array[j] >= key && i < j) {
        j--
      }

      while (array[i] <= key && i < j) {
        i++
      }

      if(i < j) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
    //相遇了
    array[temp_i] = array[i]
    array[i] = key

    Sort(temp_i, i-1)
    Sort(i+1, temp_j)
  }

  Sort(i, j)

  return array
}



console.log('-----------------------')
console.log(quickSort([2,4,1,3,5]))
