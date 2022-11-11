 const {rutAbsolut} = require ("./funciones.js");
 const path = require("path");
 const fs = require("fs");
const ruta = process.argv[2];


const buscarRutasMds = (ruta) => {
  let arrayMds = [];
  if (fs.statSync(ruta).isFile() && path.extname(ruta) === ".md") {
    arrayMds.push(ruta);
  } else if (fs.statSync(ruta).isFile() && path.extname(ruta) !== ".md") {
    console.log("este no es un archivo md");
  } else {
    const elementos = fs.readdirSync(ruta);
    let subelemtos = [];
    elementos.forEach((elemento) => {
      const filtradoArchivo = path.join(ruta, elemento);
      // console.log(filtradoArchivo);
      if (fs.statSync(filtradoArchivo).isDirectory()) {
        subelemtos = subelemtos.concat(buscarRutasMds(filtradoArchivo));
        // console.log("estos es subelemento",subelemtos);
      }
    });
    const archivoRuta = elementos
      .filter((elemento) => {
        const filtradoArchivo = path.join(ruta, elemento);
        const Archivomd =
          fs.statSync(filtradoArchivo).isFile() &&
          path.extname(filtradoArchivo) === ".md";
        // console.log("filtrado", filtradoArchivo, Archivomd);
        return Archivomd;
      })
      .map((elemento) => {
        return path.join(ruta, elemento);
      });
    //console.log('ver los elementos del directorio: ', archivoRuta);
    return archivoRuta.concat(subelemtos);
  }
  // console.log(arrayMds);
  return arrayMds;
};
console.log(
  "ver los elementos del directorio: ",
  buscarRutasMds(rutAbsolut(ruta))
);

function leerArchivo(archivoMD) {
  return new Promise((resolve, reject) => {
    fs.readFile(archivoMD, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        resolve(data);
      }
    });
  });
}

function leerTodosArchivos(arrayMds) {
  let arrPromesas = [];
  arrPromesas = arrayMds.map((archivoMD) => {
    return leerArchivo(archivoMD);
  });

  return Promise.all(arrPromesas).then((res) => res);
}
leerTodosArchivos(buscarRutasMds(rutAbsoluta(ruta))).then((response) =>
  console.log("veeeeer: ", response)
);
