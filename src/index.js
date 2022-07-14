import fs from 'fs';
import {VM,VMScript} from 'vm2';
import catvm2 from './CatVm2/catvm2.node.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const catvm2code = catvm2({proxy:false});
const codefile = `${__dirname}/code.js`;
const vm = new VM()
const script = new VMScript(catvm2code + fs.readFileSync(codefile),`${__dirname}/调试.js`);
debugger
vm.run(script);
debugger

