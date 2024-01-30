var x = prompt("Masukan Angka : ");
// alert("Selamat Datang " + nama)

if (x % 2 == 0){
    alert(x + " Bilangan Genap");
}else if(x % 2 == 1) {
    alert(x +" Bilangan Ganjil");
}else {
    alert("LTAG = lu tau angka gak?");
}

if(confirm("Yakin bang ?")) {
    location = "https://www.youtube.com/watch?v=BbeeuzU5Qc8";
} else {
    alert("berak ego");
}