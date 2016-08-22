var x = 122231

var temp = x
var y = 0

while(x !== 0) {
  y = y*10 + x%10
  x = parseInt(x/10)
}

if(y === temp) {
  console.log(true)
}else {
  console.log(false)
}
