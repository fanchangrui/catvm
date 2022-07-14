import fs from 'fs'
import vmtools from './tools/node.js'
import htmlElements from './browser/HTMLElements/htmlElements.node.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function GetCode(config,fun_text){
    let code = ''
    code += vmtools() +'\r\n'

    for (let item in config) {
        code += 'catvm.memory.config.' + item + '=' + config[item] + '\r\n'
        
    }

    code += fs.readFileSync(`${__dirname}/browser/eventTarget.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/windowProperties.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/window.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/location.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/navigator.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/history.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/screen.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/storage.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/mimeType.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/plugin.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/pluginArray.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/mimeTypeArray.js`) + '\r\n'

    code += htmlElements() + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/document.js`) + '\r\n'
    code += 'debugger;\r\n'
    return code
}