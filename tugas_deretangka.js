function deretAngka(n) {
    var hasilderetAngka = "";
    for (var i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        hasilderetAngka += " Niomic ";
      } else if (i % 3 === 0) {
        hasilderetAngka += " Nio ";
      } else if (i % 5 === 0) {
        hasilderetAngka += " Mic ";
      } else {
        hasilderetAngka += i + " ";
      }
    }
    return hasilderetAngka;
  }
  console.log(deretAngka(10));
  console.log(deretAngka(20));
  console.log(deretAngka(30));
  