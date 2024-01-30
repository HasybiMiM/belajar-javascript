var siswa = new Object();
siswa.namaDepan = "Hasybi";
siswa.namaBelakang = "Mim";
siswa.alamat = "Bandung";
siswa.namaLengkap = function(){
    return this.namaDepan + " " + this.namaBelakang;
};

// object JSON
var siswa2 = {
    namaDepan : "Hasybi",
    namaBelakang : "mim",
    alamat : "Bandung",
    namaLengkap : function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}
alert("Nama : " + siswa.namaLengkap());
alert("Nama : " + siswa2.namaLengkap());
// function namaLengkap(){

// }