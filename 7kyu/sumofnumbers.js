function getSum(a,b)
{
    let total = 0;  //total awal masih nol
  if (a === b) { //kalau a sama dengan b, maka return nilai a
    return a;
  }
  
  if (a < b) { //jika b lebih besar dari a maka
    for (let i = a; i <= b; i++) { //i sama dengan a, i kurang dari sama dengan b, tambah i
      total += i; //tambah total dengan sebanyak loop i
    }
    return total; //return total
  }
  
  if (b < a) { //jika a lebih besar dari b maka
    for (let i = b; i <= a; i++) { //i sama dengan b, i kurang dari sama dengan a, tambah i
      total += i; //tambah total dengan sebanyak loop i
    }
    return total; //return total
  }
}