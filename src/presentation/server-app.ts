import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    base           : number,
    fileDestination: string,
    fileName       : string,
    limit          : number,
    showTable      : boolean,
}


// serverApp sirve para levantar el servidor y configurarlo
export class ServerApp {


    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
        console.log('ServerApp is running...');

        const table = new CreateTable().execute({ base, limit });
        
        const wasCreated = new SaveFile()
            .execute({ 
                fileContent: table, 
                fileDestination,
                fileName,
            });
        
        if (showTable) {
            console.log(table);
        }
        
        ( wasCreated )
            ? console.log('File created!')
            : console.error('Error creating file!');

    }
}