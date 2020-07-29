import electron from 'electron';

declare global {
    interface Window {
        ipcRenderer: electron.IpcRenderer ;
    }
}

export { }