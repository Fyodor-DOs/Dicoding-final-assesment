function fibonacci(n) {
  if (n === 0) {
    return [0]; // Basis: deret Fibonacci untuk n=0
  } else if (n === 1) {
    return [0, 1]; // Basis: deret Fibonacci untuk n=1
  } else {
    const fib = fibonacci(n - 1); // Rekursi untuk mendapatkan deret hingga n-1
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]); // Menambahkan elemen Fibonacci berikutnya
    return fib;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
