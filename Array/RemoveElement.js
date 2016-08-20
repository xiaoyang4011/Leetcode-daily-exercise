/**
 * @description
 * Given an array and a value, remove all instances of that > value in place and return the new length.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

var List = [1, 2, 3, 3, 4, 6, 8, 3]
var j = 0

for (var i = 0; i < List.length; i++) {
  if(List[i] === 3) continue

  List[j] = List[i]
  j++
}

List.length = j

console.log(j)
console.log(List)
