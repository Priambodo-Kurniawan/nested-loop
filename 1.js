/*
 * STUDY CASE 1
 * Diberikan sebuah input kalimat dengan tipe string.
 * Buat sebuah program untuk mengubah kalimat tersebut ke dalam bentuk title case.
 *
 * Contoh:
 *  Input: this is javascript
 *  Output: This Is Javascript
 */

/* 
algoritma
1. huruf di awal kalimat
2. huruf yang sebelumnya adalah spasi kita ubah jadi huruf besar
3. sisanya tidak usah diubah
*/

let input = "this is javascript"
let output = ""
for (let i = 0; i < input.length; i++) {
  let charInput = input[i]
  if(i === 0 || input[i-1] === " " ) {
    output += charInput.toUpperCase()
  }else {
    output += input[i]
  }
}
console.log(output)














// var output = ''
// var input = 'his is javascript';

// for (var i = 0; i < input.length; i++) {
//   // console.log(input[i])
//   if (i === 0) {
//     output += input[i].toUpperCase() 
//   } else if (input[i - 1] === ' ') {
//     output += input[i].toUpperCase() 
//   } else {
//     output += input[i]
//   }
// }

// console.log(output) // hasil dari program kita