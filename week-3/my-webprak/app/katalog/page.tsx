
import Bagian from "@/components/Bagian";
import DaftarItem from "@/components/DaftarItem";
import { daftarItem } from "@/lib/data";

export default function Beranda() {
  return (
    <main id="konten" className="mx-auto max-w-6xl px-4 py-8">
      <section
        aria-labelledby="judul-utama"
        className="rounded-2xl bg-slate-900 px-6 py-12 text-white sm:px-10 sm:py-16"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Kampus Cerdas dan Berkelanjutan
        </p>

        <h1
          id="judul-utama"
          className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          Sistem Pemantauan Energi &amp; Lingkungan Kampus
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-300">
          Platform terpadu untuk memantau penggunaan energi dan kondisi
          lingkungan kampus. Dapatkan informasi untuk mendukung kampus
          yang lebih hemat energi, sehat, dan berkelanjutan.
        </p>

        <a
          href="/katalog"
          className="mt-7 inline-block rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Lihat Katalog
        </a>
      </section>

      <div className="grid gap-8 py-10 lg:grid-cols-[2fr_1fr]">
        <Bagian id="cara-kerja" judul="Cara Kerja">
          <div className="space-y-4 leading-7 text-gray-700">
            <p>
              Sistem mengumpulkan data dari sensor cerdas atau Internet
              of Things (IoT), seperti pemantau panel surya dan sensor
              kualitas udara. Data kemudian dikirimkan ke server untuk
              diproses dan dianalisis.
            </p>

            <p>
              Informasi tersebut membantu pengelola kampus memantau
              kondisi fasilitas, mengevaluasi penggunaan energi, dan
              mengenali potensi masalah lingkungan.
            </p>
          </div>
        </Bagian>

        <aside
          aria-labelledby="manfaat"
          className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >
          <h2 id="manfaat" className="text-xl font-bold text-slate-900">
            Manfaat Sistem
          </h2>

          <ul className="mt-4 list-disc space-y-3 pl-5 leading-6 text-gray-700">
            <li>Membantu menghemat biaya operasional kampus.</li>
            <li>Mendukung pengurangan jejak karbon.</li>
            <li>Membantu menjaga lingkungan belajar tetap nyaman.</li>
          </ul>
        </aside>
      </div>

      <Bagian id="terbaru" judul="Item Terbaru">
        <DaftarItem items={daftarItem.slice(0, 3)} />
      </Bagian>

      <Bagian id="kontak" judul="Hubungi Kami">
        <p className="max-w-2xl leading-7 text-gray-700">
          Punya pertanyaan atau saran mengenai pemantauan energi dan
          lingkungan kampus? Silakan isi formulir berikut.
        </p>

        <form className="mt-6 grid max-w-xl gap-5">
          <div className="grid gap-2">
            <label htmlFor="nama" className="font-medium">
              Nama lengkap
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              required
              autoComplete="name"
              className="rounded-lg border border-slate-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="font-medium">
              Alamat email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-describedby="email-bantuan"
              className="rounded-lg border border-slate-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            />
            <p id="email-bantuan" className="text-sm text-gray-600">
              Gunakan alamat email yang aktif.
            </p>
          </div>

          <fieldset className="grid gap-3">
            <legend className="mb-2 font-medium">Peran Anda</legend>

            <label className="flex items-center gap-2">
              <input type="radio" name="peran" value="mahasiswa" />
              Mahasiswa
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="peran" value="dosen" />
              Dosen atau staf
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="peran" value="lainnya" />
              Lainnya
            </label>
          </fieldset>

          <div className="grid gap-2">
            <label htmlFor="pesan" className="font-medium">
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={4}
              className="rounded-lg border border-slate-300 px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Kirim Pesan
          </button>
        </form>
      </Bagian>
    </main>
  );
}