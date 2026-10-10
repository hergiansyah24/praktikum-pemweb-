UY Studio — Praktikum Pengembangan Aplikasi Web

Website katalog fragrance & lifestyle objects berbasis Next.js/React dan Tailwind CSS.

Basis proyek

Proyek ini merupakan pengembangan lanjutan dari website praktikum sebelumnya. Struktur utama dipertahankan, lalu keluaran AI diperiksa dan direvisi secara manual.

Revisi terhadap keluaran AI

Responsivitas hero — tinggi hero dibuat relatif terhadap viewport agar lebih stabil pada desktop, tablet, dan mobile.

Aksesibilitas header — kontrol menu, search, dan shopping bag diberi aria-expanded sesuai state UI.

Empty state katalog — pencarian/filter yang tidak menghasilkan produk sekarang menampilkan pesan dan tombol Reset Catalog.

Perbaikan Tailwind utility — group-hover:scale-104 diganti menjadi group-hover:scale-[1.04].

Shopping bag — ukuran thumbnail dibuat eksplisit agar drawer lebih stabil pada layar kecil.

Form — ditambahkan autocomplete pada input nama dan email.

Keyboard accessibility — ditambahkan :focus-visible pada elemen interaktif.

Reduced motion — ditambahkan prefers-reduced-motion untuk pengguna yang mengurangi animasi.

Fitur utama

Responsive navigation

Search produk

Filter kategori

Currency EUR / IDR

Product detail modal

Add to Bag

Shopping bag dengan quantity control

Contact form

Newsletter form

Responsive product grid

Screenshot submission

Gunakan tiga ukuran viewport:

Desktop: 1440 × 900

Tablet: 768 × 1024

Mobile: 390 × 844

Teks penjelasan revisi

Saya menggunakan website UY Studio dari praktikum sebelumnya sebagai dasar pengembangan. Keluaran AI kemudian saya revisi dan sesuaikan secara manual, terutama pada responsivitas tampilan, interaksi header, katalog produk, shopping bag, dan form. Saya menambahkan empty state ketika pencarian tidak menemukan produk, memperbaiki utility Tailwind yang kurang konsisten, menambahkan atribut aksesibilitas pada kontrol interaktif, serta memperbaiki navigasi keyboard dan dukungan reduced motion. Dengan demikian, hasil akhir tidak hanya menggunakan keluaran AI secara langsung, tetapi telah diperiksa, diperbaiki, dan disesuaikan dengan kebutuhan website serta beberapa ukuran layar.