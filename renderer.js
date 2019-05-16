// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
const { ipcRenderer } = electron;

ipcRenderer.on('jabraDeviceData', (event, deviceObject) => {
    console.log('device', deviceObject.jabraDevice);
    console.log('device', deviceObject.productName);
    console.log('device', deviceObject.productManufacturer);
    console.log('event', event);

    document.getElementById('deviceName').innerHTML = deviceObject.productName;
    document.getElementById('deviceManufacturer').innerHTML = deviceObject.productManufacturer;

});
