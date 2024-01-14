import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b: base, l: limit, s: showTable  } = yarg;

let outputMessage = '';
const headerMessage = `
==========================
    Tabla del ${base}
==========================\n
`;

for (let i = 1; i <= limit ; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable ) {
    console.log(outputMessage);
}

const outputPath = `outputs`;

// Crea la carpeta si no existe (recursivamente)
fs.mkdirSync(outputPath, { recursive: true });

// Crea el archivo de texto con la tabla de multiplicar
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');