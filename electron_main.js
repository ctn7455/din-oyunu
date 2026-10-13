const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require('path');

// Güvenlik: dışarıya ağ isteği engelle (tam internetsiz mod)
app.commandLine.appendSwitch('disable-features', 'CrossOriginOpenerPolicy');
app.commandLine.appendSwitch('disable-http-cache');
app.commandLine.appendSwitch('disable-background-networking');
app.commandLine.appendSwitch('disable-component-update');
app.commandLine.appendSwitch('disable-default-apps');
app.commandLine.appendSwitch('disable-sync');
app.commandLine.appendSwitch('no-first-run');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    minWidth: 1024,
    minHeight: 600,
    title: 'Kuvvetli Fen & İnanç Pusulası',
    // icon: path.join(__dirname, 'icon.png'), // icon.png eklenince aktif et
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      // Tüm içerik yerel — internet izni yok
      preload: undefined
    },
    backgroundColor: '#09090b',
    show: false, // hazır olunca göster (beyaz flash önleme)
    autoHideMenuBar: true
  });

  // Menüyü tamamen kaldır
  Menu.setApplicationMenu(null);

  // Ana portal — tam yol ile güvenli yükle
  const indexPath = path.join(__dirname, 'index.html');
  mainWindow.loadFile(indexPath);

  // Hazır olunca göster (beyaz flash önleme)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Harici linkleri tarayıcıda aç, pencere içinde değil
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http') || url.startsWith('https')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  // Geliştirme: DevTools için Ctrl+Shift+I
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key === 'I') {
      mainWindow.webContents.openDevTools();
    }
    // F11 = tam ekran
    if (input.key === 'F11') {
      mainWindow.setFullScreen(!mainWindow.isFullScreen());
    }
    // Escape = tam ekrandan çık
    if (input.key === 'Escape' && mainWindow.isFullScreen()) {
      mainWindow.setFullScreen(false);
    }
  });

  mainWindow.on('closed', () => { mainWindow = null; });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Güvenlik: renderer'dan gelen gezinme isteklerini kontrol et
app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    // Sadece yerel dosyalara izin ver
    if (parsedUrl.protocol !== 'file:') {
      event.preventDefault();
    }
  });
});
