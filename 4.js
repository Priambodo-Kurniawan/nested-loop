/*
 * STUDY CASE 3
 * Tampilkan nama website di dalam variabel url
 * Contoh 1:
 *  input: www.facebook.com
 *  output: facebook
 *
 * Contoh 2:
 *  input: www.google.co.id
 *  output: google
 *
 */


/* 
algoritma
1. character yg diambil adalah character setelah titik pertama
2. jika ketemu titik kedua stop
*/

/* 
// 1x loop
for (var i = 0; i < input.length; i++) {
  if (input[i] === '.') {
    counter++
    continue
  }

  if (counter === 1) { // setelah kita menemukan 1 titik
    output += input[i] // kita simpan karakternya di var output
  }
  // console.log('ini characternya: ' + input[i] + ' ' + counter)
}
*/

var input = 'www.facebook.co.id'
var output = '' // facebook
var counter = 0 // counter utk mendapatkan titik ke berapanya

// nested loop
for (var i = 0; i < input.length; i++) {
  if (input[i] === '.') {
    for (var j = i + 1; j < input.length; j++) {
      if (input[j] === '.') {
        break // break loopingan dalam
      }
      output += input[j]
    }
    break // break loopingan luar
  }
}

console.log(output)