// main.js
const { app, BrowserWindow, session } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false, // 安全起见，禁用Node集成
      contextIsolation: true,
      webSecurity: true,
      // 允许跨域请求（如果网站需要）
      webPreferences: {
        webSecurity: false // 谨慎使用，仅在必要时
      }
    },
    // 可选：设置图标
    icon: path.join(__dirname, 'assets/icon.png')
  });

  // 加载在线网站
  mainWindow.loadURL('https://aistudio.xiaomimimo.com/#/c');

  // 可选：打开开发者工具（开发时）
  // mainWindow.webContents.openDevTools();

  // 处理新窗口请求（如登录、支付等）
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // 在应用内打开新窗口
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true
        }
      }
    };
  });
  mainWindow.setMenu(null);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
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

// 网络状态监听
app.on('ready', () => {
  // 检查网络连接
  const { net } = require('electron');
  net.isOnline() ? console.log('网络连接正常') : console.log('网络未连接');
});
