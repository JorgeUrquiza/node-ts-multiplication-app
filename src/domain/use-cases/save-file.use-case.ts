import fs from 'fs';


export interface SaveFileUseCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileContent : string,
    fileDestination?: string,
    fileName?   : string,
}

export class SaveFile implements SaveFileUseCase {
    
    constructor(
        // repository: StorageRepository
    ){}

    execute({ 
        fileContent,
        fileDestination = 'outputs', 
        fileName  = 'table'
    }: Options): boolean {
 
        
        try {
            // Crea la carpeta si no existe (recursivamente)
            fs.mkdirSync(fileDestination, { recursive: true });
    
            // Crea el archivo de texto con la tabla de multiplicar
            fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent);
            console.log('File created!');
            
            return true;
        } catch (error) {
            console.error(error);
            return false;

        }

    }
}