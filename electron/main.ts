import { app, BrowserWindow, ipcMain } from 'electron';
import channels from '../src/shared/endpoints';
import * as path  from 'path';
import * as url from 'url';

let mainWindow;

function createWindow() {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
    });
    mainWindow = new BrowserWindow({
        width: 1024, height: 768, webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    });
    mainWindow.loadURL(startUrl);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on(channels.APP_INFO, (event) => {
    event.sender.send(channels.APP_INFO, {
        appName: app.getName(),
        appVersion: app.getVersion(),
    });
});