"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
const firma = {
  ad: "YEŞİLOVA NAKLİYAT",
  slogan: "İstanbul’dan Türkiye geneline güvenli taşımacılık",
  telefon: "0555 555 55 55",
  whatsapp: "905555555555",
  mail: "info@yesilovanakliyat.com",
  konum: "YEŞİLOVA NAKLİYAT • Yeşilova Mahallesi / İstanbul",
  mapsLink:
    "https://www.google.com/maps/place/YE%C5%9E%C4%B0LOVA+NAKL%C4%B0YAT-+%C4%B0STANBUL/@41.006394,28.6935971,17z/data=!3m1!4b1!4m6!3m5!1s0x14caa10064a901e9:0x3bf2ea107d200dc5!8m2!3d41.00639!4d28.696172!16s%2Fg%2F11ybfb7j8d!5m2!1e4!1e2?hl=tr-TR&entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D",
  heroGorsel: "/nakliyat-hero.jpg",
};

const hizmetler = [
  {
    baslik: "Şehir İçi Nakliyat",
    aciklama:
      "İstanbul içi ticari yük, parça eşya, mağaza ve depo taşımalarında hızlı ve planlı hizmet.",
    gorsel: "/sehir-ici.jpg",
    link: "/hizmetler/sehir-ici-nakliyat",
  },
  {
    baslik: "Şehirler Arası Nakliyat",
    aciklama:
      "Türkiye geneline güvenli, zamanında ve kontrollü taşıma çözümleri sunuyoruz.",
    gorsel: "/sehirler-arasi.jpg",
    link: "/hizmetler/sehirler-arasi-nakliyat",
  },
  {
    baslik: "Ofis & Kurumsal Taşıma",
    aciklama:
      "Ofis, arşiv, ekipman ve kurumsal yük taşımalarında düzenli operasyon yönetimi.",
    gorsel: "/ofis-tasima.jpg",
    link: "/hizmetler/ofis-tasimaciligi",
  },
  {
    baslik: "Tekstil Taşımacılığı",
    aciklama:
      "Askılı tekstil, koli, mağaza ürünü ve üretim sevkiyatlarında özenli taşıma.",
    gorsel: "/tekstil.jpg",
    link: "/hizmetler/tekstil-tasimaciligi",
  },
  {
    baslik: "Koli & Paletli Taşıma",
    aciklama:
      "Depo, atölye, mağaza ve işletmeler için koli ve palet bazlı taşıma hizmeti.",
    gorsel: "/palet.jpg",
    link: "/hizmetler/koli-paletli-tasima",
  },
  {
    baslik: "Parça Eşya Taşıma",
    aciklama:
      "Az hacimli yükler, tekil ürünler ve özel teslimatlar için ekonomik taşıma çözümü.",
    gorsel: "/parca-esya.jpg",
    link: "/hizmetler/parca-esya-tasima",
  },
];

const surec = [
  "Talep alınır",
  "Araç planlanır",
  "Yükleme yapılır",
  "Teslimat tamamlanır",
];

const avantajlar = [
  "Planlı araç yönlendirme",
  "Şeffaf fiyatlandırma",
  "Kurumsal taşıma disiplini",
  "Şehir içi ve şehirler arası hizmet",
  "Yük türüne uygun operasyon",
  "Hızlı teklif ve iletişim",
];

const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.97,
    filter: "blur(14px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const leftReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -70,
    scale: 0.98,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 70,
    scale: 0.98,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.94,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuAcik, setMenuAcik] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  const wp = `https://wa.me/${firma.whatsapp}?text=Merhaba,%20nakliyat%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7f2] text-slate-950">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: "blur(18px)",
              transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#10251b]"
          >
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.45, 0.75, 0.45],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute h-[360px] w-[360px] rounded-full bg-emerald-400/20 blur-3xl"
            />

            <motion.div
              initial={{ y: 30, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-5 text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-emerald-300/30 bg-white/10 shadow-2xl shadow-emerald-400/20 backdrop-blur-xl"
              >
                <Truck className="h-12 w-12 text-emerald-300" />
              </motion.div>

              <h1 className="text-3xl font-black text-white sm:text-5xl">
                {firma.ad}
              </h1>

              <p className="mt-3 text-xs font-black uppercase tracking-[0.28em] text-emerald-300 sm:text-sm">
                Güvenli Taşımacılık
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 220 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-emerald-300 via-lime-200 to-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#10251b] px-4 py-3 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-emerald-300" /> {firma.telefon}
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-emerald-300" /> {firma.mail}
          </span>
         <a
  href={firma.mapsLink}
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-2 transition hover:text-emerald-300"
>
  <MapPin className="h-4 w-4 text-emerald-300" />
  {firma.konum}
</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 px-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <div>
            <p className="text-lg font-black text-emerald-800 sm:text-2xl">
              {firma.ad}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
              Nakliyat & Lojistik
            </p>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-black text-slate-700 lg:flex">
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#hizmetler">Hizmetler</a>
            <a href="#surec">Süreç</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={wp}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-800/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 sm:inline-flex"
            >
              Teklif Al
            </a>

            <button
              onClick={() => setMenuAcik(!menuAcik)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 lg:hidden"
              aria-label="Menü"
            >
              {menuAcik ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuAcik && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mx-auto max-w-7xl overflow-hidden lg:hidden"
            >
              <div className="mb-4 grid gap-2 rounded-2xl bg-emerald-50 p-3 text-sm font-black text-emerald-900">
                {["hakkimizda", "hizmetler", "surec", "iletisim"].map(
                  (item) => (
                    <a
                      key={item}
                      onClick={() => setMenuAcik(false)}
                      href={`#${item}`}
                      className="rounded-xl px-3 py-2"
                    >
                      {item === "hakkimizda"
                        ? "Hakkımızda"
                        : item === "hizmetler"
                        ? "Hizmetler"
                        : item === "surec"
                        ? "Süreç"
                        : "İletişim"}
                    </a>
                  )
                )}

                <a
                  href={wp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-700 px-4 py-3 text-center text-white"
                >
                  WhatsApp Teklif Al
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative overflow-hidden bg-[#10251b] px-4 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#34d39944,transparent_28%),radial-gradient(circle_at_80%_10%,#a3e63533,transparent_25%)]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            variants={leftReveal}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-emerald-200 sm:text-xs">
              <Sparkles className="h-4 w-4" />
              İstanbul Merkezli Profesyonel Taşıma
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Taşıma sürecini şansa bırakmayın.
              <span className="block bg-gradient-to-r from-emerald-300 via-lime-200 to-white bg-[length:240%_100%] bg-clip-text text-transparent animate-[textFlow_5s_linear_infinite]">
                Planlı, güvenli, zamanında.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/75 sm:text-lg">
              {firma.ad}; şehir içi, şehirler arası, kurumsal, tekstil, parça
              eşya, koli ve paletli taşımacılık alanlarında düzenli operasyon
              yönetimi sunar.
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

          <motion.div
            variants={rightReveal}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-300/20 blur-2xl" />

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/10 p-2 shadow-2xl sm:rounded-[2.5rem] sm:p-3"
            >
              <div className="relative h-[330px] overflow-hidden rounded-[1.4rem] sm:h-[440px] lg:h-[540px]">
                <Image
                  src={firma.heroGorsel}
                  alt={firma.ad}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <motion.div
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/3 rotate-12 bg-white/10 blur-2xl"
                />

                <div className="absolute bottom-0 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200 sm:text-sm">
                    Operasyonel Güç
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Doğru araç, düzenli ekip, kontrollü teslimat.
                  </h2>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="hakkimizda"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        className="px-4 py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
              Hakkımızda
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Nakliyat işini sadece taşıma değil, planlı operasyon olarak görüyoruz.
            </h2>
          </div>

          <div className="rounded-[1.7rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 sm:rounded-[2rem] sm:p-8">
            <p className="text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Taşıma öncesinde yük türü, adres bilgisi, araç ihtiyacı, teslimat
              süresi ve ekip planlaması netleştirilir. Böylece süreç hem müşteri
              hem de operasyon ekibi için daha düzenli ilerler.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Planlı Sevkiyat", "Uygun Araç", "Zamanında Teslimat"].map(
                (x, i) => (
                  <motion.div
                    key={x}
                    variants={cardReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl bg-emerald-50 p-4 text-center text-sm font-black text-emerald-800"
                  >
                    {x}
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      <section id="hizmetler" className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
              Hizmetlerimiz
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Her yük ve taşıma ihtiyacı için ayrı çözüm.
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hizmetler.map((hizmet, i) => (
              <motion.article
                key={hizmet.baslik}
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { duration: 0.25 },
                }}
                className="group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-[#f8faf7] shadow-lg shadow-slate-900/5 sm:rounded-[2rem]"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <Image
                    src={hizmet.gorsel}
                    alt={hizmet.baslik}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <motion.div
                    animate={{ x: ["-140%", "150%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "linear",
                    }}
                    className="absolute inset-y-0 w-1/4 rotate-12 bg-white/10 blur-xl"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-emerald-700 px-4 py-2 text-xs font-black text-white">
                    0{i + 1}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-black sm:text-2xl">
                    {hizmet.baslik}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                    {hizmet.aciklama}
                  </p>

                  <Link
                    href={hizmet.link}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#10251b] px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
                  >
                    Hizmet Detayları
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="mb-10 text-center"
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
              Operasyon Süreci
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Taşıma süreci net adımlarla ilerler.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {surec.map((item, i) => (
              <motion.div
                key={item}
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -7, scale: 1.02 }}
                className="relative overflow-hidden rounded-[1.7rem] bg-[#10251b] p-6 text-white shadow-xl shadow-emerald-900/10 sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/20" />

                <p className="text-4xl font-black text-emerald-300 sm:text-5xl">
                  0{i + 1}
                </p>

                <h3 className="mt-7 text-xl font-black">{item}</h3>

                <p className="mt-3 text-sm font-medium leading-6 text-white/65">
                  Her aşama önceden planlanır ve teslimata kadar kontrollü
                  şekilde yürütülür.
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
              Neden Yeşilova Nakliyat?
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Düzenli ekip, uygun araç ve net teslimat anlayışı.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {avantajlar.map((item, i) => (
              <motion.div
                key={item}
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-white/85 backdrop-blur"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section id="iletisim" className="px-4 py-16 sm:py-20">
  <motion.div
    variants={sectionReveal}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.22 }}
    className="mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] bg-white shadow-2xl shadow-emerald-900/10 sm:rounded-[2.5rem]"
  >
    <div className="grid lg:grid-cols-[1fr_0.95fr]">
      <div className="p-6 sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-700 sm:text-sm">
          Hızlı Teklif & Konum
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
          Taşıma detaylarınızı gönderin, size en uygun planı oluşturalım.
        </h2>

        <p className="mt-5 text-base font-medium leading-8 text-slate-600 sm:text-lg">
          Yük türü, çıkış adresi, varış adresi ve teslim tarihi bilgilerini
          paylaşmanız yeterli. Hızlı şekilde size uygun taşıma planını
          oluşturalım.
        </p>

        <div className="mt-8 rounded-[1.5rem] bg-emerald-50 p-5 sm:rounded-[2rem] sm:p-6">
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

          <a
            href={firma.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex min-h-14 items-center justify-center rounded-2xl border border-emerald-200 bg-white px-6 text-center text-sm font-black text-emerald-800 transition hover:-translate-y-1 hover:bg-emerald-50 sm:min-h-16"
          >
            Google Haritalar’da Aç
          </a>

          <div className="mt-5 rounded-2xl bg-white p-5">
            <p className="text-lg font-black text-slate-900">
              YEŞİLOVA NAKLİYAT
            </p>

            <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
              Yeşilova Mahallesi, İstanbul
              <br />
              Profesyonel şehir içi ve şehirler arası taşımacılık hizmeti.
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[420px] lg:min-h-full">
        <iframe
          src="https://www.google.com/maps?q=41.00639,28.696172&z=16&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  </motion.div>
</section>

      <footer className="bg-[#10251b] px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black">{firma.ad}</p>
            <p className="text-sm text-white/60">{firma.slogan}</p>
          </div>

          <p className="text-sm text-white/50">
            © 2026 {firma.ad}. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes textFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 240% 50%; }
        }
      `}</style>
    </main>
  );
}