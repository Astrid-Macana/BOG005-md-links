const {rutAbsolut,buscarRutasMds,leerTodosArchivos,validarLink,} = require("./funciones.js");

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.


function mdLinks(pathUser, options = { validate: false }) {
    return new Promise((resolve, reject) => {
        const pathAbsolute = rutAbsolut(pathUser)
        const arrayMds = buscarRutasMds(pathAbsolute)
        if ( options.validate===true){
            leerTodosArchivos(arrayMds)
              .then((res) => validarLink(res))
              .then((res) => resolve(res));
        }else{
          
          leerTodosArchivos(buscarRutasMds(rutAbsolut(ruta)))
          .then((res) => resolve(res));
        }
       
    })
}

   mdLinks(ruta, (options = { validate: false }))
   .then((res) => res)
   .catch((err) => err);

  
  
  module.exports = { mdLinks}





































// function mdLinks(mypath, options=valida ) {
//     return new Promise( (resolve, reject) => {
//   const rutAbsoluta = rutAbsolut(mypath)
//   const archivoMd = buscarRutasMds(rutAbsoluta)
//   const leerArchivo = leerTodosArchivos(archivoMd)
//   const validando =   valedatelink (leerArchivo)
//        if( validando===false){
//          return leerTodosArchivos(buscarRutasMds(rutAbsolut(ruta))).then((response) =>
//        }else{
//         validando===true
//         resolve
//        }

//     })
// }

// // mdLinks(x).then(res=>console.log(res))
