# 🧪 KUVVETLİ FEN & 🧭 İNANÇ PUSULASI
## MEB 6. Sınıf Eğitici Oyunlar, Akıllı Tahta Portalı & Mobil Uygulama

> **Sürüm:** v2.0.0 • **Durum:** Kararlı (Stable) & Internetsiz (Offline-First) • **Lisans:** MIT

Bu proje; MEB 6. Sınıf **Fen Bilimleri** ve **Din Kültürü ve Ahlak Bilgisi** dersleri için geliştirilmiş; mobil telefonlarda (APK), masaüstünde (Windows EXE), okullardaki etkileşimli tahtalarda (Pardus ETAP / Linux AppImage) ve web ortamında **%100 internetsiz** çalışan tam kapsamlı bir eğitim oyun paketidir.

---

## ✨ Öne Çıkan Özellikler

- 🔬 **Fen Bilimleri (Kuvvetli Fen):** 4 ünite, alt konular, 9 farklı tekli oyun, 2 kişilik akıllı tahta düellosu.
- 🧭 **Din Kültürü (İnanç Pusulası):** 5 ünite, alt konular, 9 farklı tekli oyun, 2 kişilik akıllı tahta düellosu.
- 🎯 **Alt Konu Filtreleme Sistemi:** Hem mobil hem akıllı tahta modunda kullanıcı ünite alt konusu seçebilir; sorular doğrudan seçilen alt konudan gelir!
- 📶 **%100 İnternetsiz Çalışma:** CDN bağımlılıkları kaldırılmıştır. `tailwind.min.css` yerel dosya üzerinden çalışır.
- 🎵 **Dahili Ses Motoru:** Harici ses dosyası gerekmez; Web Audio API ile internetsiz 8 farklı sentezlenmiş ses efekti.
- 💡 **Gece / Gündüz Lambası:** Tüm sayfalarda etkileşimli sallanan lamba ile tema değiştirici.
- 🏆 **10'ar Başarı Rozeti:** Öğrencileri motive eden rozet kazanma ve kutlama animasyonları.

---

## 📂 Dosya Yapısı

| Dosya | Görev |
|-------|-------|
| **`index.html`** | Ana portal giriş sayfası (Fen veya Din seçimi) |
| **`fen-giris.html`** | Kuvvetli Fen ders ana sayfası |
| **`fen-mobile.html`** | Fen Bilimleri 9 oyunlu, alt konulu tek kişilik mobil mod |
| **`fen-akilli_tahta.html`** | Fen Bilimleri 2 kişilik bölünmüş ekran sınıf düellosu |
| **`din-giris.html`** | İnanç Pusulası ders ana sayfası |
| **`din-mobile.html`** | Din Kültürü 9 oyunlu, alt konulu tek kişilik mobil mod |
| **`din-akilli_tahta.html`** | Din Kültürü 2 kişilik bölünmüş ekran sınıf düellosu |
| **`style.css`** | Ana portal ortak CSS dosyası |
| **`tailwind.min.css`** | İnternetsiz yerel Tailwind CSS dosyası |
| **`electron_main.js`** | Masaüstü uygulama motoru (Windows EXE / Pardus AppImage) |
| **`package.json`** | Derleme ve paketleme yapılandırması |

---

## 💻 1. Masaüstü Uygulama Yapımı (EXE & AppImage)

Uygulama Electron ile paketlenir ve hiçbir internet bağlantısına ihtiyaç duymaz.

### Adım 1: Bağımlılıkları Yükleyin
```bash
npm install
```

### Adım 2: Windows için EXE Çıkarma
```bash
npm run build:win
```
> Çıktı `dist/` klasöründe kurulumsuz veya tek tıkla çalışan `.exe` olarak hazır olur.

### Adım 3: Pardus Linux & Akıllı Tahta için AppImage Çıkarma
```bash
npm run build:linux
```
> Çıktı `dist/` klasöründe `.AppImage` ve `.deb` paketi olarak hazır olur. Fatih Etkileşimli Tahtalarda doğrudan çalışır.

---

## 📱 2. Android APK Yapımı (Capacitor ile Tam İnternetsiz)

Statik web dosyaları doğrudan yerel Android webview içine gömüldüğü için uygulama telefonda uçak modunda dahi çalışır:

```bash
# 1. Capacitor araçlarını kurun
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Android projesini oluşturun
npx cap init "Kuvvetli Fen" "com.kuvvetlifen.app" --web-dir "."
npx cap add android

# 3. Dosyaları eşitleyin
npx cap sync

# 4. Android Studio'da açın
npx cap open android
```
> Android Studio açıldığında **Build > Build Bundle(s) / APK(s) > Build APK(s)** yolunu izleyerek `.apk` dosyanızı alabilirsiniz.

---

## 👥 Emeği Geçenler

- **Proje Fikri & İçerik:** Yasin Demirtaş (Fen Bilimleri Öğretmeni)
- **Eğitim & Koordinasyon:** Büşra Ertek
- **Yazılım Geliştirme:** Antigravity & DeepSeek
- **Lisans:** MIT