const num = "01§23&&45@!6789"
const numReg = /[^0-9]/g
console.log(num.match(numReg))