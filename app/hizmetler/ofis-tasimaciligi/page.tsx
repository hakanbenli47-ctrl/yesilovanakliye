"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Archive,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  MapPin,
  MonitorCheck,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";

const firma = {
  ad: "YEŞİLOVA NAKLİYAT",
  telefon: "0555 555 55 55",
  whatsapp: "905555555555",
  konum: "YEŞİLOVA NAKLİYAT • Yeşilova Mahallesi / İstanbul",
  mapsLink:
    "https://www.google.com/maps/place/YE%C5%9E%C4%B0LOVA+NAKL%C4%B0YAT-+%C4%B0STANBUL/@41.006394,28.6935971,17z/data=!3m1!4b1!4m6!3m5!1s0x14caa10064a901e9:0x3bf2ea107d200dc5!8m2!3d41.00639!4d28.696172!16s%2Fg%2F11ybfb7j8d",
  heroGorsel: "/ofis-tasima.jpg",
};

const avantajlar = [
  "Ofis düzenine uygun planlama",
  "Arşiv ve evrak taşıma desteği",
  "Masa, sandalye ve ekipman taşıma",
  "Kurumsal taşıma disiplini",
  "İş akışını aksatmayan operasyon",
  "Hızlı teklif ve net iletişim",
];

const hizmetKapsami = [
  {
    baslik: "Ofis Ekipmanı Taşıma",
    aciklama:
      "Masa, sandalye, dolap, toplantı ekipmanları ve ofis mobilyaları için düzenli taşıma planı yapılır.",
    ikon: BriefcaseBusiness,
  },
  {
    baslik: "Arşiv & Evrak Taşıma",
    aciklama:
      "Dosya, klasör, arşiv kolileri ve şirket evrakları kontrollü şekilde taşınır.",
    ikon: Archive,
  },
  {
    baslik: "Bilgisayar & Teknik Ekipman",
    aciklama:
      "Bilgisayar, monitör, yazıcı ve teknik ekipmanlar dikkatli yükleme ve teslimat süreciyle taşınır.",
    ikon: MonitorCheck,
  },
  {
    baslik: "Kurumsal Şube Taşıma",
    aciklama:
      "Şube, mağaza, depo ve ofis geçişlerinde zaman planlı kurumsal taşıma desteği sağlanır.",
    ikon: Truck,
  },
];

const surec = [
  {
    baslik: "Keşif & Planlama",
    aciklama:
      "Taşınacak ofis alanı, eşya yoğunluğu, ekipman türü ve teslim adresi değerlendirilir.",
  },
  {
    baslik: "Ekip & Araç Hazırlığı",
    aciklama:
      "Ofis taşımasına uygun araç, personel ve yükleme düzeni önceden planlanır.",
  },
  {
    baslik: "Düzenli Yükleme",
    aciklama:
      "Mobilyalar, arşiv kolileri ve teknik ekipmanlar kontrollü şekilde araca alınır.",
  },
  {
    baslik: "Teslim & Yerleşim",
    aciklama:
      "Yeni adreste teslimat yapılır, ürünler belirlenen alanlara düzenli şekilde aktarılır.",
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

export default function OfisTasimaciligiPage() {
  const wp = `https://wa.me/${firma.whatsapp}?text=Merhaba,%20ofis%20taşımacılığı%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f4f4] text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 px-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white transition group-hover:-translate-x-1">
              <ArrowLeft className="h-5 w-5" />
            </span>

            <div>
              <p className="text-lg font-black text-black sm:text-2xl">
                {firma.ad}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                Ofis & Kurumsal Taşıma
              </p>
            </div>
          </Link>

          <a
            href={wp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-3 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Teklif Al
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div variants={leftReveal} initial="hidden" animate="show">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-200 sm:text-xs">
              Kurumsal Ofis Taşımacılığı
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Ofis taşıma sürecini planlı, hızlı ve düzenli yönetin.
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/75 sm:text-lg">
              Yeşilova Nakliyat olarak ofis, şube, arşiv, teknik ekipman ve
              kurumsal taşınma süreçlerinde iş akışınızı aksatmadan düzenli
              taşıma hizmeti sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={wp}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-black text-black shadow-xl shadow-white/20 transition hover:-translate-y-1 hover:bg-zinc-200"
              >
                WhatsApp’tan Teklif Al
              </a>

              <a
                href={`tel:${firma.telefon.replaceAll(" ", "")}`}
                className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                Hemen Ara
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={rightReveal}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/10 p-2 shadow-2xl sm:rounded-[2.5rem] sm:p-3">
              <div className="relative h-[330px] overflow-hidden rounded-[1.4rem] sm:h-[440px] lg:h-[540px]">
                <Image
                  src={firma.heroGorsel}
                  alt="Ofis taşımacılığı hizmeti"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute bottom-0 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-white sm:text-sm">
                    İş Akışına Uygun Planlama
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-3xl">
                    Ofis ekipmanları, arşiv ve mobilyalar için kontrollü taşıma.
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
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-600 sm:text-sm">
              Hizmet Detayı
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black sm:text-5xl">
              Ofis taşımacılığında düzen ve zamanlama her şeydir.
            </h2>
          </div>

          <div className="rounded-[1.7rem] border border-zinc-200 bg-white p-6 shadow-xl shadow-black/5 sm:rounded-[2rem] sm:p-8">
            <p className="text-base font-medium leading-8 text-zinc-600 sm:text-lg">
              Ofis taşımacılığı, yalnızca masa ve dolapların taşınması değildir.
              Evrak düzeni, teknik ekipman güvenliği, personel alanları,
              çalışma düzeni ve teslim sonrası yerleşim planı birlikte
              değerlendirilmelidir.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-zinc-600 sm:text-lg">
              Yeşilova Nakliyat; şirket, ofis, şube, mağaza, arşiv ve kurumsal
              alan taşımalarında planlı operasyon anlayışıyla hareket eder.
              Amaç, taşınma sürecini karmaşadan çıkarıp kontrollü bir iş planına
              dönüştürmektir.
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
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-600 sm:text-sm">
              Kapsam
            </p>

            <h2 className="mt-4 text-3xl font-black text-black sm:text-5xl">
              Ofis taşıma hizmetinde neleri kapsıyoruz?
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {hizmetKapsami.map((item, i) => {
              const Icon = item.ikon;

              return (
                <motion.div
                  key={item.baslik}
                  variants={i % 2 === 0 ? leftReveal : rightReveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-[1.7rem] border border-zinc-200 bg-zinc-50 p-6 shadow-lg shadow-black/5 sm:rounded-[2rem] sm:p-8"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-black text-black">
                    {item.baslik}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-zinc-600">
                    {item.aciklama}
                  </p>
                </motion.div>
              );
            })}
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
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-600 sm:text-sm">
              Süreç
            </p>

            <h2 className="mt-4 text-3xl font-black text-black sm:text-5xl">
              Ofis taşıma süreci nasıl ilerler?
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
                className="relative overflow-hidden rounded-[1.7rem] bg-black p-6 text-white shadow-xl shadow-black/10 sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />

                <p className="text-4xl font-black text-zinc-300 sm:text-5xl">
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

      <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.14),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-9 lg:grid-cols-2">
          <motion.div
            variants={leftReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-300 sm:text-sm">
              Avantajlar
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Kurumsal taşımada planlama, hız kadar önemlidir.
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
                <CheckCircle2 className="h-5 w-5 shrink-0 text-zinc-300" />
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
          className="mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] bg-white p-6 shadow-2xl shadow-black/10 sm:rounded-[2.5rem] sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-600 sm:text-sm">
                Teklif Al
              </p>

              <h2 className="mt-4 text-3xl font-black text-black sm:text-5xl">
                Ofis taşıma süreciniz için planlı teklif alın.
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-zinc-600 sm:text-lg">
                Ofis alanı, taşınacak ekipmanlar, arşiv durumu, çıkış ve varış
                adresi bilgilerini paylaşın. Size uygun araç, ekip ve taşıma
                planını oluşturalım.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-zinc-100 p-5 sm:rounded-[2rem] sm:p-6">
              <a
                href={wp}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-center rounded-2xl bg-black px-6 text-center text-sm font-black text-white shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-zinc-800 sm:min-h-16"
              >
                WhatsApp’tan Teklif Al
              </a>

              <a
                href={`tel:${firma.telefon.replaceAll(" ", "")}`}
                className="mt-4 flex min-h-14 items-center justify-center rounded-2xl border border-zinc-300 bg-white px-6 text-center text-sm font-black text-black transition hover:-translate-y-1 hover:bg-zinc-50 sm:min-h-16"
              >
                {firma.telefon}
              </a>

              <div className="mt-5 grid gap-3 text-sm font-bold text-zinc-600">
                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <MapPin className="h-5 w-5 text-black" />
                  İstanbul içi ve şehir dışı kurumsal taşıma
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <Clock className="h-5 w-5 text-black" />
                  İş akışına uygun zaman planlaması
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <ShieldCheck className="h-5 w-5 text-black" />
                  Teknik ekipman ve arşiv güvenliği
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <BriefcaseBusiness className="h-5 w-5 text-black" />
                  Kurumsal taşıma disiplini
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white px-4 pb-16 sm:pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[1.8rem] border border-zinc-200 shadow-2xl shadow-black/10 sm:rounded-[2.5rem]"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-black p-6 text-white sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-zinc-300 sm:text-sm">
                Konumumuz
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Bizi haritada kolayca bulun.
              </h2>

              <p className="mt-5 text-base font-medium leading-8 text-white/70 sm:text-lg">
                YEŞİLOVA NAKLİYAT olarak İstanbul merkezli hizmet veriyoruz.
                Konumumuzu inceleyebilir, tek tıkla yol tarifi oluşturabilirsiniz.
              </p>

              <a
                href={firma.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-2xl bg-white px-7 py-4 text-sm font-black text-black shadow-xl shadow-white/20 transition hover:-translate-y-1 hover:bg-zinc-200"
              >
                Google Maps’te Aç
              </a>
            </div>

            <div className="relative min-h-[360px]">
              <iframe
                src="https://www.google.com/maps?q=41.00639,28.696172&z=16&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-black px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black">{firma.ad}</p>
            <p className="text-sm text-white/60">
              Ofis taşımacılığı ve kurumsal taşıma çözümleri.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black text-zinc-300 transition hover:text-white"
          >
            Ana sayfaya dön
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </main>
  );
}