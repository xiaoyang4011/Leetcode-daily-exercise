/**
 * @description
 * Given a sorted array, remove the duplicates in place such that > each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * For example, Given input array A = [1,1,2],
 * Your function should return length = 2, and A is now [1,2].
 */

var List = [1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 9]
var j = 0

for (var i = 1; i < List.length; i++) {
  if(List[j] !== List[i]){
    List[++j] = List[i]
  }
}
j = j + 1
List.length = j

console.log(j)
console.log(List)
