# 🧭 İNANÇ PUSULASI (MEB 6. Sınıf Din Kültürü Oyunu & Portalı)

> **Sürüm:** v1.1.1 &bull; **Durum:** Kararlı (Stable) &bull; **Lisans:** MIT

Bu proje; MEB 6. Sınıf Din Kültürü ve Ahlak Bilgisi dersi için geliştirilmiş, hem mobil telefonlarda (APK) hem web sitesinde hem de okullardaki etkileşimli akıllı tahtalarda (Pardus ETAP ve Windows) 2 kişilik yarışma olarak çalışan tam kapsamlı bir eğitim oyunudur.

---

## ✨ Öne Çıkan Özellikler

- 🎓 **MEB 6. Sınıf Müfredatı** — 5 ünite, 28 alt konu
- 🎮 **9 Farklı Oyun Türü** — Doğru/Yanlış, Boşluk Doldurma, Ayet Tamamlama, Hafıza, Ahlaki Tercih, Tarih Şeridi, Kutsal Mekanlar, Kavram Sepeti, Sevap Koşusu, Hikmet & Savunma
- 🏫 **2 Kişilik Akıllı Tahta Düellosu** — Bölünmüş ekran, farklı sorular, gerçek zamanlı rekabet
- 🏆 **10 Başarı Rozeti** — Motivasyon sistemi
- 🌞🌙 **Gece/Gündüz Modu** — Tüm sayfalarda sarkan lamba ile tema değiştirici
- 🎵 **Web Audio API** — 8 farklı ses efekti (doğru, yanlış, zafer, tema, rozet...)
- 📱 **Çok Platformlu** — Web + Pardus Linux + Windows + Android

---

## 📂 Dosya Yapısı

| Dosya | Görev |
|-------|-------|
| **`index.html`** | Ana web portalı. Tanıtım, indirme linkleri, künye |
| **`akilli_tahta.html`** | 2 Kişilik Split-Screen düello (Pardus/ETAP/Windows) |
| **`mobile.html`** | Tek kişilik 9 oyunlu motor (mobil + tablet) |
| **`electron_main.js`** | Masaüstü uygulama motoru (Electron) |
| **`package.json`** | Derleme yapılandırması (EXE/AppImage/APK) |
| **`README.md`** | Bu dosya |

---

## 🚀 1. İnternet Sitesi Olarak Yayınlama (Ücretsiz)

Statik HTML/JS/CSS olduğu için sunucu kurulumu gerekmez.

### Yöntem A: Vercel veya Netlify (1 Dakika)
1. [vercel.com](https://vercel.com) veya [netlify.com](https://netlify.com)
2. `inanc_pusulasi` klasörünü tarayıcıya sürükle-bırak
3. Anında yayında: `https://inanc-pusulasi.vercel.app`

### Yöntem B: GitHub Pages
1. GitHub deposu aç, dosyaları yükle
2. **Settings → Pages** → `main` dalı
3. Dünya çapında erişilebilir

---

## 📱 2. Android APK Çıkarma

### Yöntem 1: PWA Builder (Kurulumsuz)
1. Siteyi yayınladıktan sonra [pwabuilder.com](https://www.pwabuilder.com)
2. Site linkini yapıştır → "Package for Android"
3. İmzalı `.apk` dosyasını indir

### Yöntem 2: Capacitor (Resmi)
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Inanc Pusulasi" "com.inancpusulasi.app" --web-dir "."
npx cap add android
npx cap open android
