// Data benar (bisa disesuaikan)
const validData = {
  nama: "Budi Santoso",
  nisn: "1234567890",
  tempatTinggal: "Jakarta",
  tanggalLahir: "2008-05-10",
  umur: 17
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil input
  const nama = document.getElementById("nama").value.trim();
  const nisn = document.getElementById("nisn").value.trim();
  const tempatLahir = document.getElementById("tempatTinggal").value.trim();
  const tanggalTinggal = document.getElementById("tanggalLahir").value;
  const umur = parseInt(document.getElementById("umur").value);

  // Reset error
  document.getElementById("errorNama").textContent = "";
  document.getElementById("errorNisn").textContent = "";
  document.getElementById("errorTempatTinggal").textContent = "";
  document.getElementById("errorTanggalLahir").textContent = "";
  document.getElementById("errorUmur").textContent = "";

  let valid = true;

  if (nama !== validData.nama) {
    document.getElementById("errorNama").textContent = "Nama yang anda masukkan salah";
    valid = false;
  }

  if (nisn !== validData.nisn) {
    document.getElementById("errorNisn").textContent = "NISN yang anda masukkan salah";
    valid = false;
  }

  if (tempatLahir !== validData.tempatLahir) {
    document.getElementById("errorTempatLahir").textContent = "Tempat lahir yang anda masukkan salah";
    valid = false;
  }

  if (tanggalLahir !== validData.tanggalLahir) {
    document.getElementById("errorTanggalLahir").textContent = "Tanggal lahir yang anda masukkan salah";
    valid = false;
  }

  if (umur !== validData.umur) {
    document.getElementById("errorUmur").textContent = "Umur yang anda masukkan salah";
    valid = false;
  }

  if (valid) {
    alert("Login berhasil!");
    // Lanjutkan ke halaman berikutnya jika diperlukan
  }
});
