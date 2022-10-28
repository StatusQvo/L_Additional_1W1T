let javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

let midLetter = Math.floor(javaScriptDescription.length / 2)
let ResultText = javaScriptDescription.slice(0, midLetter)

ResultText = ResultText.replaceAll('a', 'A') //латиница
  .replaceAll('а', 'А') //кирилица
  .replaceAll(' ', '') //пробелы
  .repeat(3)

let midLetternew = Math.floor(ResultText.length / 2)
console.log('символ посередине конечной строки: ', ResultText[midLetternew])

console.log('конечная строка: ', ResultText)
