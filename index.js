const electron = require('electron');
const express = require('express');

//parte da configuração express para o funcionamento correto do WebRTC no Electron
let app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', () => {
    res.render('index.html');
})


//Configurações gerais do Electron
const { app, BrowserWindow, ipcMain } = electron;
let mainWindow;
let ua;
app.commandLine.appendSwitch('allow-insecure-localhost', 'true');
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        //webPreferences: {
        //webSecurity: false,
        //nodeIntegration: true,
        //allowDisplayingInsecureContent: true,
        //allowRunningInsecureContent: true
        //
    });
    mainWindow.webContents.openDevTools({ mode: 'right' });
    mainWindow.loadURL(`file://${__dirname}/views/index.html`);
});