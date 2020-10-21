module.exports = function reverse (n) {
  let StringNumber = n + '';
  let ReverseStringNumber =  StringNumber.split('').reverse().join('');
  return ReverseStringNumber.endsWith('-') ? ReverseStringNumber.replace('-','') : ReverseStringNumber; 
}
