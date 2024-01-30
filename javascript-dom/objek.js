var siswa = new Object();
siswa.namaDepan = "Hasybi";
siswa.namaBelakang = "Mim";
siswa.alamat = "Bandung";
siswa.namaLengkap = function(){
    return this.namaDepan + " " + this.namaBelakang;
};

alert("Nama : " + siswa.namaLengkap());
// function namaLengkap(){

// }