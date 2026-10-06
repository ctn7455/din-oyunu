const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 700,
    title: "İnanç Pusulası - Akıllı Tahta & Mobil Sürüm",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    autoHideMenuBar: true
  });

  // Varsayılan olarak Akıllı Tahta ekranını veya Ana Web Portalını açabilirsiniz
  win.loadFile('index.html');

  // Menü çubuğunu gizle (Akıllı tahtada temiz görünüm için)
  Menu.setApplicationMenu(null);
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
