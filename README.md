# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Descripción](#2-Descripción)
* [3. Flujograma Api](#3-Flujogrma-Api)
* [4. Flujograma CLI](#4-Flujograma-CLI)
* [5. Instalación](#5-Instalación)
* [6. Guia de uso](#6-Guia-de-uso)


***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.



![md-links](./imagenes/inicio.PNG)

## 2. Descripción
Es una herramienta de línea de comando(CLI) y una librería, con esta herramienta se extraen los links de un archivo tipo Markdown(md), se identifican cuales están funcionando y cuales están rotos. Adicionalmente esta información se puede entregar al usuario como estadísticas donde se puede ver:

* Total de links
* Links únicos
* Links rotos

En esta oportunidad nos alejamos un poco del navegador para construir un programa que se ejecute usando Node.js. Aprenderemos sobre procesos (process.env, process.argv, ...), cómo interactuar con el sistema archivos, cómo hacer consultas de red, etc.


## 3 Flujograma Api
Se llevo acbo un flujograma que fuese la guia para realizar las pequeñas partes que luego serian integgradas para conformar la funcion mdlink
[Diagrana API](./imagenes/diagram%20Api.png)
## 4 flujograma CLI 
[Diagrama Cli](./imagenes/diagramcomandos.png)
 
## 5 Instalación
ingrese en la terminal el siguiente comando para hacer uso de la libreria:
   npm i md-links-astridmacana
## 6 Guia de uso
utiliza los siguientes comandos
 * 1 . si necesitas conocer la ruta de donde proviene el link y informacion sobre este ingresa la ruta ,
       en la terminal se visualizara la siguiente imagen:
       md-links <path-to-file> [options]
       [ruta](./imagenes/ruta.PNG)

 * 2 . si ademas de la informacion anterior neceitas saber el estado de los link de tus archivos Markdown ingresa
       el siguiente comando mdlink --validate
       [ruta](./imagenes/validate.PNG)

 * 3 . si quieres saber cuantos link hay en tu directorio o archivo ,y cuantos unicos ingresa el siguiente comando  
       mdlink --stats
       [ruta](./imagenes/stats.PNG)

 * 4 . por ultimo si deseas saber cuantos links estan rotos utiliza el comando mdlink --stats --validate         
       [ruta](./imagenes/broken.PNG)

