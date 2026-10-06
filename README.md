# 🧭 İNANÇ PUSULASI (MEB 6. Sınıf Din Kültürü Oyunu & Portalı)

Bu proje; MEB 6. Sınıf Din Kültürü ve Ahlak Bilgisi dersi için geliştirilmiş, hem mobil telefonlarda (APK) hem web sitesinde hem de okullardaki etkileşimli akıllı tahtalarda (Pardus ETAP ve Windows) 2 kişilik yarışma olarak çalışan tam kapsamlı bir eğitim oyunudur.

---

## 📂 Dosya Yapısı

* **`index.html`**: Ana web portalı. Canlı mobil önizleme, ünite/oyun tanıtımı ve akıllı tahtaya hızlı geçiş içerir.
* **`akilli_tahta.html`**: Okullardaki akıllı tahtalar için özel **2 Kişilik (Splitscreen - Bölünmüş Ekran)** düello sürümü. Sol ve sağ oyunculara birbirinden farklı sorular gelir.
* **`package.json`**: Masaüstü (EXE, AppImage) ve mobil (APK) derleme yapılandırması.
* **`electron_main.js`**: Pardus Linux ve Windows masaüstü uygulaması motoru.

---

## 🚀 1. İnternet Sitesi Olarak Yayınlama (Ücretsiz)

Bu dosyalar statik HTML/JS/CSS olduğu için hiçbir sunucu kurulumu gerektirmeden hemen ücretsiz yayınlanabilir:

### Yöntem A: Vercel veya Netlify (En Kolay - 1 Dakika)
1. [vercel.com](https://vercel.com) veya [netlify.com](https://netlify.com) sitesine gidin.
2. `inanc_pusulasi` klasörünü doğrudan tarayıcıya sürükleyip bırakın (Drag & Drop).
3. Siteniz anında `https://inanc-pusulasi.vercel.app` şeklinde yayına girer!

### Yöntem B: GitHub Pages
1. Bir GitHub deposu açıp bu klasördeki dosyaları yükleyin.
2. Depo ayarlarından (**Settings -> Pages**) dalı `main` seçip kaydedin.
3. Siteniz dünya çapında ücretsiz olarak açılır.

---

## 📱 2. Android APK Çıkarma

Bu projeyi APK dosyasına çevirmenin 2 kolay yolu vardır:

### 1. Yol: Web2APK veya PWA Builder (Kurulumsun & Hızlı)
1. Web sitenizi yayınladıktan sonra [pwabuilder.com](https://www.pwabuilder.com) adresine gidin.
2. Sitenizin linkini yapıştırıp **"Package for Android"** butonuna basarak doğrudan imzalı `.apk` dosyanızı indirin.

### 2. Yol: Capacitor (Resmi Yöntem)
Terminalde bu klasörde şu komutları çalıştırın:
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Inanc Pusulasi" "com.inancpusulasi.app" --web-dir "."
npx cap add android
npx cap open android
```
Android Studio açıldığında **Build -> Build APK** diyerek `.apk` dosyasını elde edebilirsiniz.

---

## 🐧 3. Pardus Linux (AppImage) ve Windows (.EXE) Çıkarma

Akıllı tahtalar ve bilgisayarlar için kurulumsuz masaüstü paketi oluşturmak:

```bash
# Bağımlılıkları yükleyin
npm install

# Pardus Linux için (AppImage ve Debian .deb paketi):
npm run build:linux

# Windows için (.exe kurulum veya taşınabilir portable):
npm run build:win
```
Çıkan dosyalar `dist/` klasöründe yer alır:
- `dist/inanc-pusulasi.AppImage` (Pardus akıllı tahtalarda çift tıklamayla anında açılır!)
- `dist/InancPusulasi-Setup.exe` (Windows akıllı tahtalar için)

---

## 🎮 Akıllı Tahta 2 Kişilik Modunun Özellikleri

1. **Bölünmüş Ekran:** Sol taraf 1. Oyuncu, Sağ taraf 2. Oyuncu.
2. **Farklı Sorular:** İki öğrenciye asla aynı anda aynı soru gelmez; sorular havuzdan rastgele ve ayrı dağıtılır.
3. **Boşluk Doldurma:** 5 kelime (1 doğru, 4 yanlış) arasından doğru olanı ilk seçen puanı alır.
4. **Nokta Seçme:** Soruya göre sahada dağılmış kelimelerden doğruya ilk dokunan puanı kapar.
5. **Görsel Kutlama:** Süre bittiğinde kazanan oyuncu için konfetili şampiyonluk ekranı açılır.
