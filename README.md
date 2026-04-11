# Xiaomi MiMo Electron 应用

一个基于 Electron 框架开发的桌面应用程序，用于访问Xiaomi MiMo AI Studio 平台。

## 项目简介

本项目是一个 Electron 桌面应用，将Xiaomi MiMo AI Studio 网站封装为独立的桌面应用程序，提供更好的用户体验和更便捷的访问方式。

## 功能特性

- 🖥️ 桌面应用封装：将在线网站封装为原生桌面应用
- 🔒 安全配置：禁用 Node 集成，启用上下文隔离，确保应用安全
- 🌐 网络状态监测：自动检测网络连接状态
- 🪟 多窗口支持：支持在应用内打开新窗口（如登录、支付等）
- 📦 跨平台支持：支持 Windows、macOS 和 Linux 系统

## 技术栈

- **Electron**: 桌面应用框架
- **Node.js**: 运行时环境
- **electron-builder**: 应用打包构建工具

## 项目结构

```
xiaomimimo-electron-app/
├── assets/
│   └── icon.png          # 应用图标
├── dist/                 # 构建输出目录
├── main.js              # Electron 主进程文件
├── index.html           # 应用入口页面（可选）
├── package.json         # 项目配置文件
└── README.md           # 项目说明文档
```

## 安装依赖

```bash
npm install
```

## 开发运行

```bash
npm start
```

## 构建应用

### 构建所有平台

```bash
npm run build
```

### 构建特定平台

#### Windows
```bash
npm run build -- --win
```

#### macOS
```bash
npm run build -- --mac
```

#### Linux
```bash
npm run build -- --linux
```

## 配置说明

### 应用配置

- **应用名称**: xiaomimimo
- **应用ID**: com.xiaomi.mimo
- **版本**: 1.0.0
- **目标URL**: https://aistudio.xiaomimimo.com/#/c

### 窗口配置

- **窗口大小**: 1200 x 800 像素
- **图标**: assets/icon.png
- **安全设置**:
  - Node 集成: 禁用
  - 上下文隔离: 启用
  - Web 安全: 启用

## 构建输出

构建完成后，安装包将输出到 `dist` 目录：

- **Windows**: `xiaomimimo Setup 1.0.0.exe` (NSIS 安装包)
- **macOS**: `.dmg` 镜像文件
- **Linux**: `.AppImage` 可执行文件

## 开发说明

### 主进程

主进程文件 [main.js](file:///c:\Users\Administrator\Desktop\Classroom_resources\xiaomimimo-electron-app\main.js) 负责：

- 创建和管理浏览器窗口
- 处理应用生命周期事件
- 管理新窗口打开请求
- 监测网络连接状态

### 安全注意事项

- 禁用了 Node.js 集成以提高安全性
- 启用了上下文隔离
- 谨慎使用 `webSecurity: false` 配置（仅在必要时）

## 系统要求

- **Node.js**: 推荐使用最新 LTS 版本
- **npm**: 推荐使用最新版本
- **操作系统**: 
  - Windows 10 及以上
  - macOS 10.13 及以上
  - Linux（主流发行版）

## 许可证

本项目遵循相关开源许可证。

## 联系方式

如有问题或建议，请通过项目仓库提交 Issue。

---

**注意**: 本应用为Xiaomi MiMo AI Studio 的第三方桌面封装版本，所有内容和功能均来源于Xiaomi MiMo AI Studio 官方网站。
本程序仅供学习和研究，不涉及任何商业用途。