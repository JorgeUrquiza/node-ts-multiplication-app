# Node-ts-multiplication-app

Esta es una aplicación Node.js escrita en TypeScript que facilita la generación de tablas de multiplicar de manera personalizada.

## Características
Generación Personalizada: Produce tablas de multiplicar basadas en la entrada del usuario.
Límite Ajustable: Permite establecer un límite para la tabla de multiplicar.
Visualización en Consola: Opción para mostrar la tabla generada en la consola.
Guardado en Archivo: Guarda la tabla generada en un archivo de texto.

## Cómo Utilizar
La aplicación utiliza argumentos de línea de comandos para la entrada del usuario. Aquí están las opciones disponibles:

- b (alias base): El número base para la tabla de multiplicar. Este es un argumento requerido.
- l (alias limit): El límite para la tabla de multiplicar. Por defecto es 10.
- s (alias show): Si se establece en verdadero, la tabla de multiplicar se mostrará en la consola. Por defecto es falso.
- n (alias name): El nombre del archivo de salida. Por defecto es 'tabla-de-multiplicar'.
- d (alias destination): La carpeta de destino para el archivo de salida. Por defecto es 'outputs'.

Puedes ejecutar la aplicación con estos argumentos de la siguiente manera:
node src/app.ts --base 5 --limit 20 --show --name mi-tabla --destination mi-carpeta

Esto generará una tabla de multiplicar para el número 5 hasta 20, la mostrará en la consola y la guardará en un archivo llamado 'mi-tabla.txt' en el directorio 'mi-carpeta'.

## Estructura del Código
La aplicación está estructurada en varias partes:

app.logic.ts: Aquí es donde reside la lógica principal de la aplicación. Utiliza los argumentos de línea de comandos, genera la tabla de multiplicar y la guarda en un archivo.
config/plugins/yargs.plugin.ts: Este archivo maneja los argumentos de línea de comandos utilizando la biblioteca yargs.
domain/use-cases/create-table.use-case.ts: Define el caso de uso para crear una tabla de multiplicar.
domain/use-cases/save-file.use-case.ts: Define el caso de uso para guardar un archivo.

## Instalación
Para instalar la aplicación, asegúrate de tener Node.js y npm instalados en tu máquina. Luego, puedes clonar el repositorio e instalar las dependencias:

```
git clone <URL_DEL_REPOSITORIO>
cd Node-ts-multiplication-app
npm install
```

Para compilar el código TypeScript en JavaScript, ejecuta:
```
npm run build
```

Luego, puedes ejecutar la aplicación como se describió anteriormente.

Contribuir
Las contribuciones son bienvenidas. Por favor, abre un problema o envía una solicitud de extracción en GitHub.

