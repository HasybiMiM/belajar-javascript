var menu = alert("Menu makanan\n1.Nasi Goreng = Rp.10000\n2.Mie ayam = Rp.8000\n3.Baso tahu = Rp.5000");
var makanan = prompt("Pilih makanan");
var no = prompt("Berapa porsi?");
var x = 10000;
var y = 8000;
var z = 5000;

// Validasi input makanan

// Hitung total harga
var totalHarga = x * no;
if (makanan == "Mie ayam") {
  totalHarga = y * no;
  alert("Pesanan Anda:\nMakanan: " +
 makanan +"\nJumlah porsi: " + no + 
"\nTotal harga: Rp. " + totalHarga );
alert("Terima Kasih mohon di tunggu");

} else if (makanan == "Baso tahu") {
  totalHarga = z * no;
  alert("Pesanan Anda:\nMakanan: " +
 makanan +"\nJumlah porsi: " + no + 
"\nTotal harga: Rp. " + totalHarga );
alert("Terima Kasih mohon di tunggu");

} else if (makanan == "Nasi Goreng") {
  totalHarga = x * no;
  alert("Pesanan Anda:\nMakanan: " +
 makanan +"\nJumlah porsi: " + no + 
"\nTotal harga: Rp. " + totalHarga );
alert("Terima kasih mohon di tunggu")
}else {
  alert("makanan tidak tersedia")
} 

// Tampilkan informasi pesanan