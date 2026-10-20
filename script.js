// GANTI NOMOR HP KAMU DI SINI (Gunakan format 62 untuk WhatsApp)
const NOMOR_WHATSAPP = "6281234567890";

// LOGIKA KUIS INTERAKTIF
document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil jawaban dari radio button
  const q1 = document.querySelector('input[name="q1"]:checked').value;
  const q2 = document.querySelector('input[name="q2"]:checked').value;
  const q3 = document.querySelector('input[name="q3"]:checked').value;

  // Hitung jumlah jawaban A, B, atau C
  let countA = 0, countB = 0, countC = 0;

  [q1, q2, q3].forEach(ans => {
    if (ans === 'A') countA++;
    if (ans === 'B') countB++;
    if (ans === 'C') countC++;
  });

  let hasilTeks = "";

  // Tentukan hasil berdasarkan mayoritas pilihan
  if (countA >= countB && countA >= countC) {
    hasilTeks = "Tipe Communicator & Leader: Cocok untuk Jurusan Ilmu Komunikasi, Hubungan Internasional, Hukum, atau Bahasa Inggris.";
  } else if (countB >= countA && countB >= countC) {
    hasilTeks = "Tipe Analyst & Strategist: Cocok untuk Jurusan Ekonomi, Manajemen, Akuntansi, atau Data Science.";
  } else {
    hasilTeks = "Tipe Helper & Counselor: Cocok untuk Jurusan Psikologi, Bimbingan Konseling, atau Sosiologi.";
  }

  // Tampilkan hasil di layar
  const hasilBox = document.getElementById('hasilKuis');
  const teksHasil = document.getElementById('teksHasil');
  teksHasil.innerText = hasilTeks;
  hasilBox.classList.remove('hidden');

  // Isi otomatis hasil kuis ke form pendaftaran
  document.getElementById('catatanHasil').value = hasilTeks;
});

// LOGIKA FORM PEMESANAN WHATSAPP
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const kelas = document.getElementById('kelas').value;
  const layanan = document.getElementById('layananPilihan').value;
  const hasilAngket = document.getElementById('catatanHasil').value || "Belum mengisi angket";

  // Format pesan WhatsApp
  const pesan = `Halo Mentoring PathFinder Youth! 👋%0A%0A` +
    `Saya ingin mendaftar sesi konsultasi:%0A` +
    `• *Nama:* ${nama}%0A` +
    `• *Kelas/Sekolah:* ${kelas}%0A` +
    `• *Layanan:* ${layanan}%0A` +
    `• *Hasil Angket Minat:* ${hasilAngket}%0A%0A` +
    `Mohon info jadwal dan langkah selanjutnya ya, terima kasih!`;

  // Buka link WhatsApp otomatis
  const urlWA = `https://wa.me/${NOMOR_WHATSAPP}?text=${pesan}`;
  window.open(urlWA, '_blank');
});
