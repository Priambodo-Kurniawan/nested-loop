/*
 * STUDY CASE 2
 * Tampilkan angka 0 sampai 9 ke samping.
 * Contoh:
 *  0123456789
 */

// var temp = ''
// for (var i = 0; i <= 9; i++) {
//   temp += i
// }
// console.log(temp) // hardcoded

// console.log('01234567891011121314') // hardcoded

let text = ""
let mulai = 1
let selesai = 100
for (let i = mulai; i <= selesai; i++) {
  if (i < 10) {
    text += i.toString()
    text += "  "
  } else {
    text += i.toString()
    text += " "
  }
}
console.log(text)