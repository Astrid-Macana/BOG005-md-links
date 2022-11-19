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

// mdLinks(ruta, (options = { validate: false }))
//   .then((res) => res)
//   .catch((err) => err);

  // const arrProp = Promise.all(arrPromesas).then((res) => res);
  // //
   const totalLink=(arrProp)=>{
     return {
       'Total': arrProp.length,
       'unique': new Set(arrProp.map((arrayobjetos)=>arrayobjetos.href)).size
     }
   }

 mdLinks(ruta, (options = { validate: false }))
   .then((res) => totalLink(res))
   .then(res=>console.log('estado  del link',res))
   .catch((err) => err);

   const estadoLink =(arrProp)=>{
    const linkRto =arrProp.filter((link)=>link.status === 404 && objeto.mensaje === "Fail").length
    return  {
       'Total': arrProp.length,
       'unique': new Set(arrProp.map((arrayObjetos)=>arrayObjetos.href)).size,
       'Broken': linkRto
     }
   }

 mdLinks(ruta, (options = { validate: false }))
   .then((res) => estadoLink(res))
   .then((res) => console.log("link roto", res))
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
