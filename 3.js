/*
 * STUDY CASE 3
 * Tampilkan angka 0 sampai 9 ke samping, sebanyak 5 kali.
 * Contoh:
 *  0123456789 // temp
 *  12345678910
 *  234567891011
 *  3456789101112
 */


var limit = 10
for (var i = -1; i < 10; i++) {
  var temp = '' // ini dalam looping
  for (var j = i + 1; j <= limit; j++) {
    temp += j // menambahkan 01234567...10
  }
  console.log(temp)
  limit++
}
