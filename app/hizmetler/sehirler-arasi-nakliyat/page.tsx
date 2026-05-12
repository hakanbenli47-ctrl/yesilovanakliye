"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";

const firma = {
  ad: "YEŞİLOVA NAKLİYAT",
  telefon: "0555 555 55 55",
  whatsapp: "905555555555",
  konum: "İstanbul / Türkiye",
  heroGorsel: "/sehirler-arasi.jpg",
};

const avantajlar = [
  "Türkiye geneli taşıma",
  "Rota ve zaman planlaması",
  "Yük türüne uygun araç",
  "Güvenli yükleme ve teslimat",
  "Ticari sevkiyat desteği",
  "Hızlı teklif ve net iletişim",
];

const hizmetKapsami = [
  {
    baslik: "Şehirler Arası Ticari Yük",
    aciklama:
      "İstanbul çıkışlı veya İstanbul varışlı ticari yükler için şehirler arası düzenli taşıma hizmeti sunulur.",
  },
  {
    baslik: "Koli & Palet Sevkiyatı",
    aciklama:
      "Koli, palet, paketli ürün ve işletme sevkiyatları güvenli şekilde farklı şehirlere ulaştırılır.",
  },
  {
    baslik: "Tekstil & Mağaza Ürünleri",
    aciklama:
      "Tekstil ürünleri, mağaza sevkiyatları ve üretim çıkışlı yükler için kontrollü taşıma planı yapılır.",
  },
  {
    baslik: "Parça Yük Taşıma",
    aciklama:
      "Az hacimli yükler, tekil ürünler ve şehir dışı özel teslimatlar için ekonomik taşıma çözümü sağlanır.",
  },
];

const surec = [
  {
    baslik: "Talep Alınır",
    aciklama:
      "Çıkış şehri, varış şehri, yük türü, teslim süresi ve araç ihtiyacı netleştirilir.",
  },
  {
    baslik: "Rota Planlanır",
    aciklama:
      "Mesafe, teslim zamanı ve yol planı dikkate alınarak en uygun taşıma programı hazırlanır.",
  },
  {
    baslik: "Yükleme Yapılır",
    aciklama:
      "Yükler araca düzenli şekilde alınır, taşıma güvenliği için kontrollü yerleştirme yapılır.",
  },
  {
    baslik: "Teslimat Sağlanır",
    aciklama:
      "Belirlenen adrese şehirler arası teslimat tamamlanır ve süreç net şekilde sonuçlandırılır.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.97,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const leftReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SehirlerArasiNakliyatPage() {
  const wp = `https://wa.me/${firma.whatsapp}?text=Merhaba,%20şehirler%20arası%20nakliyat%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7f2] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 px-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white transition group-hover:-translate-x-1">
              <ArrowLeft className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-black text-emerald-800 sm:text-2xl">
                {firma.ad}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                Şehirler Arası Nakliyat
              </p>
            </div>
          </Link>

          <a
            href={wp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-800/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
          >
            Teklif Al
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#10251b] px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#34d39944,transparent_28%),radial-gradient(circle_at_85%_15%,#a3e63533,transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div variants={leftReveal} initial="hidden" animate="show">
            <p className="mb-5 inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200 sm:text-xs">
              Türkiye Geneli Profesyonel Taşıma
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Şehirler arası nakliyatta güvenli rota, kontrollü teslimat.
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/75 sm:text-lg">
              Yeşilova Nakliyat olarak İstanbul merkezli şehirler arası taşıma
              ihtiyaçlarınızda yük türüne uygun araç, doğru rota planı ve
              zamanında teslimat anlayışıyla profesyonel hizmet sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={wp}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-emerald-400 px-7 py-4 text-center text-sm font-black text-[#10251b] shadow-xl shadow-emerald-400/25 transition hover:-translate-y-1"
              >
                WhatsApp’tan Teklif Al
              </a>

              <a
                href={`tel:${firma.telefon.replaceAll(" ", "")}`}
                className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-1"
              >
                Hemen Ara
              </a>
            </div>
          </motion.div>

          <motion.div variants={rightReveal} initial="hidden" animate="show" className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-300/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/10 p-2 shadow-2xl sm:rounded-[2.5rem] sm:p-3">
              <div className="relative h-[330px] overflow-hidden rounded-[1.4rem] sm:h-[440px] lg:h-[540px]">
                <Image
                  src={firma.heroGorsel}
                  alt="Şehirler arası nakliyat hizmeti"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-0 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200 sm:text-sm">
                    Türkiye Geneli Sevkiyat
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Uzun mesafede doğru plan, güvenli taşıma ve net teslimat.
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
              Hizmet Detayı
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Şehir dışı taşımalarda doğru planlama teslimat kalitesini belirler.
            </h2>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 sm:rounded-[2rem] sm:p-8">
            <p className="text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Şehirler arası nakliyat, yalnızca yükün bir şehirden diğerine
              taşınması değildir. Araç seçimi, yükleme düzeni, rota planı,
              teslimat zamanı ve yol güvenliği birlikte değerlendirilmelidir.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Yeşilova Nakliyat; ticari yük, tekstil, koli, palet, parça eşya
              ve kurumsal sevkiyatlarda İstanbul merkezli olarak Türkiye geneline
              planlı taşıma hizmeti sunar.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
              Kapsam
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Şehirler arası nakliyatta hangi hizmetleri sunuyoruz?
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {hizmetKapsami.map((item, i) => (
              <motion.div
                key={item.baslik}
                variants={i % 2 === 0 ? leftReveal : rightReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[1.7rem] border border-slate-200 bg-[#f8faf7] p-6 shadow-lg shadow-slate-900/5 sm:rounded-[2rem] sm:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                  <PackageCheck className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">{item.baslik}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {item.aciklama}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="mb-10 text-center"
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
              Süreç
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Şehirler arası taşıma süreci nasıl ilerler?
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {surec.map((item, i) => (
              <motion.div
                key={item.baslik}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative overflow-hidden rounded-[1.7rem] bg-[#10251b] p-6 text-white shadow-xl shadow-emerald-900/10 sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/20" />
                <p className="text-4xl font-black text-emerald-300 sm:text-5xl">
                  0{i + 1}
                </p>
                <h3 className="mt-7 text-xl font-black">{item.baslik}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-white/65">
                  {item.aciklama}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10251b] px-4 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#22c55e30,transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-9 lg:grid-cols-2">
          <motion.div
            variants={leftReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-300 sm:text-sm">
              Avantajlar
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Uzun mesafede güvenli taşıma için doğru ekip ve doğru plan gerekir.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {avantajlar.map((item) => (
              <motion.div
                key={item}
                variants={rightReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-white/85 backdrop-blur"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] bg-white p-6 shadow-2xl shadow-emerald-900/10 sm:rounded-[2.5rem] sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
                Teklif Al
              </p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                Şehirler arası taşıma için hızlı fiyat alın.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-slate-600 sm:text-lg">
                Çıkış şehri, varış şehri, yük türü, teslim tarihi ve araç
                ihtiyacınızı paylaşın. Size uygun taşıma planını ve fiyatı
                iletelim.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-emerald-50 p-5 sm:rounded-[2rem] sm:p-6">
              <a
                href={wp}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center rounded-2xl bg-emerald-700 px-6 text-center text-sm font-black text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-1 hover:bg-emerald-800 sm:min-h-16"
              >
                WhatsApp’tan Teklif Al
              </a>

              <a
                href={`tel:${firma.telefon.replaceAll(" ", "")}`}
                className="mt-4 flex min-h-14 items-center justify-center rounded-2xl border border-emerald-200 bg-white px-6 text-center text-sm font-black text-emerald-800 transition hover:-translate-y-1 sm:min-h-16"
              >
                {firma.telefon}
              </a>

              <div className="mt-5 grid gap-3 text-sm font-bold text-slate-600">
                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <MapPin className="h-5 w-5 text-emerald-700" />
                  İstanbul çıkışlı Türkiye geneli hizmet
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <Route className="h-5 w-5 text-emerald-700" />
                  Rota ve teslimat planlaması
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <Clock className="h-5 w-5 text-emerald-700" />
                  Zamanında teslimat yaklaşımı
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  Güvenli taşıma süreci
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-[#10251b] px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black">{firma.ad}</p>
            <p className="text-sm text-white/60">
              Şehirler arası nakliyat ve profesyonel taşıma çözümleri.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black text-emerald-300"
          >
            Ana sayfaya dön
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </main>
  );
}