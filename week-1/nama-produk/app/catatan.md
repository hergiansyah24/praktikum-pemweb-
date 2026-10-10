Catatan Submission — UY Studio

Output

Tautan repository / berkas kode.

Tangkapan layar website pada 3 ukuran layar.

Penjelasan singkat perubahan terhadap keluaran AI.

Revisi yang dilakukan

Website UY Studio tetap menggunakan basis kode praktikum sebelumnya, tetapi keluaran AI diperiksa dan direvisi secara manual:

Responsivitas: hero menggunakan tinggi relatif terhadap viewport sehingga lebih stabil pada desktop, tablet, dan mobile.

Interaksi header: menu, search, dan shopping bag diberi state aksesibilitas aria-expanded.

Katalog: jika pencarian/filter tidak menghasilkan produk, ditampilkan empty state dengan tombol Reset Catalog.

Product card: scale-104 diganti menjadi scale-[1.04] agar utility Tailwind lebih eksplisit.

Shopping bag: ukuran thumbnail dibuat eksplisit agar layout drawer lebih stabil.

Form: ditambahkan autocomplete untuk nama dan email.

Aksesibilitas: ditambahkan focus-visible untuk navigasi keyboard.

Reduced motion: ditambahkan dukungan prefers-reduced-motion.

Teks untuk kolom submission

Saya menggunakan website UY Studio dari praktikum sebelumnya sebagai dasar pengembangan. Keluaran AI kemudian saya revisi dan sesuaikan secara manual, terutama pada responsivitas tampilan, interaksi header, katalog produk, shopping bag, dan form. Saya menambahkan empty state ketika pencarian tidak menemukan produk, memperbaiki utility Tailwind yang kurang konsisten, menambahkan atribut aksesibilitas pada kontrol interaktif, serta memperbaiki navigasi keyboard dan dukungan reduced motion. Dengan demikian, hasil akhir tidak hanya menggunakan keluaran AI secara langsung, tetapi telah diperiksa, diperbaiki, dan disesuaikan dengan kebutuhan website serta beberapa ukuran layar.

Screenshot yang disarankan

Desktop: 1440 × 900

Tablet: 768 × 1024

Mobile: 390 × 844

Tampilkan website, bukan DevTools. Untuk bukti revisi, screenshot dapat memperlihatkan navbar + hero, katalog, dan pada mobile menu/katalog.

Backup

File original_* tidak dibuat ulang di paket ini karena file upload asli tetap menjadi sumber awal. revised_* adalah versi hasil revisi.