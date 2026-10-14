# Dokumentasi Teknis Modul 3

## 1. Deskripsi Proyek

Project ini merupakan aplikasi web **Sistem Pemantauan Energi & Lingkungan Kampus** yang dibuat menggunakan Next.js, React, dan TypeScript. Aplikasi menampilkan informasi mengenai energi, lingkungan, dan fasilitas kampus.

Pada modul ini, pengembangan berfokus pada penerapan tipe data TypeScript, pembuatan komponen React yang dapat digunakan kembali, pengelolaan state, serta fitur pencarian dan filter data.

## 2. Tipe Data Produk

### 2.1 Union Type dan Interface

Pada file `lib/tipe.ts`, aplikasi menggunakan union type `Kategori` untuk membatasi kategori item yang diperbolehkan.

```typescript
export type Kategori =
  | "energi"
  | "lingkungan"
  | "kampus";
```

Union type tersebut memastikan nilai kategori hanya dapat menggunakan salah satu dari tiga pilihan yang ditentukan. Dengan demikian, kesalahan penulisan kategori dapat dideteksi melalui pemeriksaan tipe TypeScript.

Interface `Item` digunakan untuk menentukan struktur data setiap item.

```typescript
export interface Item {
  id: number;
  judul: string;
  kategori: Kategori;
  deskripsi: string;
  tersedia: boolean;
  gambar?: string;
}
```

Properti `id`, `judul`, `kategori`, `deskripsi`, dan `tersedia` wajib tersedia. Sementara itu, properti `gambar` bersifat opsional karena menggunakan tanda `?`.

Penggunaan interface membantu menjaga konsistensi struktur data yang digunakan oleh komponen aplikasi.

### 2.2 Pemetaan Kategori Menggunakan Record

Pada file `components/KartuItem.tsx`, aplikasi menggunakan `Record<Kategori, string>` untuk memetakan kategori ke label yang ditampilkan.

```typescript
const labelKategori: Record<Kategori, string> = {
  energi: "Energi",
  lingkungan: "Lingkungan",
  kampus: "Kampus",
};
```

`Record<Kategori, string>` memastikan setiap kategori yang didefinisikan pada `Kategori` memiliki label bertipe string. Jika kategori baru ditambahkan, pemetaan label juga perlu diperbarui agar tetap sesuai dengan tipe yang ditentukan.

## 3. Struktur Komponen

### 3.1 Struktur dan Tanggung Jawab Komponen

Aplikasi memisahkan beberapa bagian ke dalam komponen agar kode lebih mudah dibaca, digunakan kembali, dan dipelihara.

| File atau komponen | Props atau data | Fungsi |
|---|---|---|
| `app/page.tsx` | Mengimpor `daftarItem` | Menyusun halaman beranda dan menampilkan tiga item pertama. |
| `app/katalog/page.tsx` | Mengimpor `daftarItem` | Menyediakan halaman pada rute `/katalog`. |
| `components/Bagian.tsx` | `id`, `judul`, `children` | Membungkus konten ke dalam bagian halaman. |
| `components/DaftarItem.tsx` | `items: Item[]` | Menampilkan daftar serta menangani pencarian dan filter kategori. |
| `components/KartuItem.tsx` | `item: Item` | Menampilkan kategori, judul, deskripsi, dan status ketersediaan item. |
| `components/SiteHeader.tsx` | Props sesuai definisi komponen | Menampilkan nama produk dan navigasi. |
| `components/SiteFooter.tsx` | Props nama produk | Menampilkan informasi footer. |
| `lib/tipe.ts` | `Kategori` dan `Item` | Mendefinisikan tipe data yang digunakan aplikasi. |
| `lib/data.ts` | Array `daftarItem` | Menyediakan data item statis. |

### 3.2 Pohon Komponen

Berdasarkan kode `app/page.tsx` dan `components/DaftarItem.tsx` yang diperiksa, struktur utama halaman beranda adalah sebagai berikut.

```text
app/page.tsx (Server Component)
├── Bagian — Cara Kerja
├── Bagian — Item Terbaru
│   └── DaftarItem (Client Component)
│       └── KartuItem
└── Bagian — Hubungi Kami
```

Halaman beranda tidak menggunakan direktif `"use client"`, sehingga merupakan Server Component secara default. Komponen `DaftarItem` menggunakan `"use client"` karena membutuhkan `useState` dan event handler untuk menangani interaksi pengguna.

Komponen `KartuItem` tidak menggunakan hook atau event handler interaktif pada kode yang diperiksa. Komponen ini dapat digunakan sebagai bagian dari antarmuka yang menerima data melalui props.

**Catatan:** pohon di atas menggambarkan bagian utama halaman beranda yang telah diperiksa. Struktur lengkap seluruh komponen, termasuk header, footer, dan halaman katalog, perlu disesuaikan dengan susunan aktual file yang digunakan.

### 3.3 Alasan Pemisahan Komponen

Pemisahan komponen dilakukan berdasarkan tanggung jawab masing-masing:

1. `Bagian` digunakan untuk menyusun bagian halaman dengan struktur yang konsisten.
2. `DaftarItem` menangani pencarian, filter, dan daftar hasil.
3. `KartuItem` berfokus pada penyajian informasi satu item.
4. `lib/tipe.ts` menyimpan definisi tipe agar dapat digunakan oleh beberapa komponen.
5. `lib/data.ts` memisahkan data item dari struktur tampilan.

Pendekatan tersebut membantu mengurangi pengulangan kode dan mempermudah pemeliharaan aplikasi.

## 4. State dan Interaksi

### 4.1 Penggunaan useState

Komponen `components/DaftarItem.tsx` menggunakan `useState` untuk menyimpan kata kunci pencarian dan kategori filter yang dipilih.

```typescript
type Filter = Kategori | "semua";

const [kataKunci, setKataKunci] = useState("");
const [filter, setFilter] = useState<Filter>("semua");
```

State `kataKunci` menyimpan teks yang dimasukkan pengguna. State `filter` menyimpan kategori yang dipilih, yaitu `"semua"`, `"energi"`, `"lingkungan"`, atau `"kampus"`.

### 4.2 Alur Interaksi

Pencarian dan filter diterapkan menggunakan metode `filter()` pada array `items`.

Data disaring berdasarkan dua kondisi:

1. Judul item mengandung kata kunci pencarian.
2. Kategori item sesuai dengan filter yang dipilih, atau filter bernilai `"semua"`.

Pencarian tidak membedakan huruf besar dan kecil karena judul dan kata kunci diubah menjadi huruf kecil menggunakan `toLowerCase()`.

Input pencarian menggunakan `value` dan `onChange`. Saat pengguna mengetik, `setKataKunci` memperbarui state. Tombol kategori menggunakan `onClick` untuk memanggil `setFilter` sesuai pilihan pengguna.

Perubahan state menyebabkan React merender ulang komponen agar hasil yang ditampilkan mengikuti kata kunci dan kategori terbaru.

### 4.3 Conditional Rendering dan Aksesibilitas

Jika tidak ada item yang sesuai, komponen menampilkan pesan:

`Tidak ada item yang sesuai.`

Jumlah item yang ditemukan ditampilkan melalui elemen dengan atribut `aria-live="polite"` agar perubahan informasi dapat diketahui oleh teknologi bantu.

Tombol kategori menggunakan `aria-pressed` untuk menunjukkan kategori yang sedang aktif. Daftar item menggunakan `key={item.id}` agar React dapat mengidentifikasi setiap item berdasarkan ID-nya.

Pada `components/KartuItem.tsx`, *conditional rendering* juga digunakan untuk menampilkan pesan `Sementara tidak tersedia` apabila nilai `item.tersedia` adalah `false`.

### 4.4 Bukti Interaksi

**Bukti yang perlu dilampirkan jika diwajibkan dalam instruksi praktikum:**

- Screenshot aplikasi ketika daftar item ditampilkan.
- Screenshot setelah pencarian dilakukan.
- Screenshot setelah kategori filter dipilih.
- Screenshot React Developer Tools pada tab Components yang memperlihatkan props dan state `DaftarItem`.

Screenshot harus diambil langsung dari aplikasi yang dijalankan dan hasil pengujian yang benar-benar dilakukan.

## 5. Pengambilan Data

### 5.1 Sumber Data

Berdasarkan kode yang diperiksa, data item masih berasal dari array statis yang diimpor dari `lib/data.ts`.

Pada halaman beranda, data dikirim ke komponen `DaftarItem` menggunakan:

```typescript
<DaftarItem items={daftarItem.slice(0, 3)} />
```

Kode tersebut mengambil tiga item pertama dari array `daftarItem`, kemudian mengirimkannya melalui props `items`.

### 5.2 Penyesuaian terhadap Instruksi Asisten Praktikum

Sesuai arahan asisten praktikum, file `public/data/item.json` dan `components/ItemTerbaru.tsx` tidak dibuat sebagai bagian dari implementasi ini.

Dengan demikian, dokumentasi ini menjelaskan pengambilan data dari `lib/data.ts` yang memang digunakan dalam kode. Implementasi Fetch API, status loading, dan penanganan kegagalan permintaan belum dapat dinyatakan selesai berdasarkan kode yang telah diperiksa.

Apabila instruksi pengujian Fetch API tetap diwajibkan secara terpisah, bagian tersebut perlu dikonfirmasi kepada asisten praktikum agar dokumentasi sesuai dengan ketentuan penilaian.

## 6. Verifikasi

### 6.1 Pemeriksaan TypeScript

Perintah yang dijalankan:

```bash
npx tsc --noEmit
```

**Hasil:** Perintah selesai tanpa menampilkan pesan error pada terminal.

Hasil tersebut menunjukkan bahwa pemeriksaan tipe TypeScript tidak melaporkan kesalahan pada saat pengujian dilakukan.

### 6.2 Pemeriksaan ESLint

Perintah yang dijalankan:

```bash
npm run lint
```

**Hasil:** ESLint selesai dijalankan tanpa menampilkan pesan error atau peringatan pada output terminal yang diperoleh.

### 6.3 Bukti Pengujian

Bukti pengujian dilengkapi dengan screenshot terminal yang memperlihatkan kedua perintah beserta outputnya.

Hasil pengujian berlaku untuk kondisi kode pada saat kedua perintah dijalankan. Jika terdapat perubahan kode setelah pengujian, pemeriksaan perlu dijalankan kembali.

### 6.4 Pengujian Fungsional

Skenario berikut dapat digunakan untuk mendokumentasikan pengujian manual pada aplikasi.

| Skenario | Hasil yang diharapkan | Hasil aktual |
|---|---|---|
| Membuka halaman beranda | Halaman beranda tampil | Isi setelah pengujian |
| Membuka halaman `/katalog` | Halaman dapat diakses | Isi setelah pengujian |
| Mencari judul item yang tersedia | Daftar menyesuaikan kata kunci | Isi setelah pengujian |
| Memilih kategori energi | Hanya item kategori energi yang sesuai ditampilkan | Isi setelah pengujian |
| Memilih kategori semua | Semua item yang sesuai kata kunci ditampilkan | Isi setelah pengujian |
| Mencari item yang tidak tersedia dalam daftar | Pesan tidak ada item yang sesuai ditampilkan | Isi setelah pengujian |

Kolom hasil aktual harus diperbarui berdasarkan pengujian yang benar-benar dilakukan. Screenshot aplikasi dapat ditambahkan sebagai bukti pendukung.

## 7. Kendala dan Penyelesaian

Salah satu hal yang perlu diperhatikan dalam pengembangan adalah menjaga kesesuaian antara tipe data, props, dan interaksi pengguna.

Penggunaan union type `Kategori` membantu membatasi nilai kategori yang valid. Interface `Item` memastikan struktur data memiliki properti dan tipe yang ditentukan. Sementara itu, `Record<Kategori, string>` membantu menjaga pemetaan label kategori agar sesuai dengan definisi tipe.

Pada bagian interaksi, penggunaan `useState` memungkinkan perubahan pencarian dan filter diperbarui secara langsung. Penggunaan `key`, `aria-pressed`, dan `aria-live` juga mendukung rendering daftar serta aksesibilitas.

Untuk pengambilan data, implementasi yang diperiksa masih menggunakan array statis dari `lib/data.ts`. Oleh karena itu, dokumentasi tidak menyatakan bahwa Fetch API telah diuji.

## 8. Catatan Pemanfaatan AI

AI digunakan sebagai alat bantu untuk memahami struktur TypeScript dan React, menjelaskan penggunaan union type, interface, `Record`, props, serta `useState`, dan membantu menyusun dokumentasi teknis.

AI juga digunakan untuk membantu mengidentifikasi bagian dokumentasi yang perlu dilengkapi dan menyusun penjelasan berdasarkan kode yang diberikan.

Saran dari AI tetap perlu diperiksa terhadap kode aktual. Pemeriksaan TypeScript dan ESLint dilakukan melalui terminal proyek, sedangkan pengujian fungsional dan screenshot perlu berasal dari aplikasi yang benar-benar dijalankan.

## 9. Kesimpulan

Project Sistem Pemantauan Energi & Lingkungan Kampus telah menerapkan dasar TypeScript dan React melalui penggunaan union type, interface, props bertipe, `Record`, komponen yang dapat digunakan kembali, serta `useState` untuk fitur pencarian dan filter.

Pemeriksaan TypeScript dan ESLint telah dijalankan tanpa menampilkan pesan error pada output yang tersedia. Data item yang diperiksa masih berasal dari `lib/data.ts`, dan implementasi Fetch API belum dinyatakan selesai.

Dokumentasi akhir perlu dilengkapi dengan bukti pengujian aktual serta penyesuaian terhadap ketentuan asisten praktikum dan instruksi resmi Modul 3.