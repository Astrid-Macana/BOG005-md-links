const path = require("path");
const fs = require("fs");
const axios = require("axios");
marked = require("marked");


const ruta = process.argv[2];

//Comprobar sincrónicamente si existe path

function existePath(path){
  const pathExiste = fs.existsSync(path);
   if (pathExiste) {
    return true
    
   } else{
    console.error("la ruta no existe");

   }
  
}
// console.log(existePath(ruta));

//evRuta= evaluando la ruta
const rutAbsolut =(mypath)=>{
 const evRuta = path.isAbsolute(mypath); 
 if (!evRuta){
  const cvRut = path.resolve(mypath);
  return cvRut;
 } 
 const cvRut= mypath;
 return cvRut;
}
// console.log("esta es mi ruta aabsoluta",rutAbsolut(ruta));


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
// console.log(
//   "ver los elementos del directorio: ",
//   buscarRutasMds(rutAbsolut(ruta))
// );

 
  // console.log("Leer contenido", procesArchivo(file));

// Leer los archivos .md
function leerArchivo(archivoMD) {
 let arrayLinks = []
  return new Promise ((resolve, reject)=>{
    fs.readFile(archivoMD, 'utf-8', (err, data) => {
      if (err) {
        resolve(err);
      }
      // Extraer links 

      const renderer = new marked.Renderer()
      renderer.link = function (href, file, text) {
        const linkPropiedades = {
          'href': href,
          'text': text.split('').slice(0, 50).join(''),
          'file': archivoMD
        }

        if (linkPropiedades.href.includes('http')) {
          arrayLinks.push(linkPropiedades)
        }

      }
      marked.marked(data, { renderer })
      resolve(arrayLinks)
    })
    })

  }



 function leerTodosArchivos(arrayMds) {
   let arrPromesas = [];
   arrPromesas = arrayMds.map((archivoMD) => {
     return leerArchivo(archivoMD);
   });

   return Promise.all(arrPromesas).then((res) => res.flat());
 }

 


function validarLink(arrayObjetos) {
  let arrPromesas = [];
  arrPromesas = arrayObjetos.map((objeto) => {
    return axios
      .get(objeto.href)
      .then((res) => {
        console.log("AXIOSSSSSSS", res.status);
          objeto.status = res.status;
          objeto.mensaje = "ok";
          return objeto;

      })
      .catch((err) => {
        objeto.status = 404;
        objeto.mensaje = "Fail";
        return objeto;
      });
  });

  return  Promise.all(arrPromesas).then(res=>res)
  }
//  validarLink(Links).then(res=>console.log(res))

 leerTodosArchivos(buscarRutasMds(rutAbsolut(ruta)))
 .then(resAll=>validarLink(resAll))
 .then(res=>console.log('soy yo: ', res))

//  module.exports = {rutAbsolut,buscarRutasMds,leerTodosArchivos}