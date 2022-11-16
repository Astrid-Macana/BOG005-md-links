const {rutAbsolut,buscarRutasMds,leerTodosArchivos} = require("./funciones.js");

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.


function mdLinks(pathUser, options = { validate: false }) {
    return new Promise((resolve, reject) => {
        const pathAbsolute = rutAbsolut(pathUser)
        const arrayMds = buscarRutasMds(pathAbsolute)
        leerTodosArchivos(arrayMds).then(res=>resolve(res))
    })
}

mdLinks(ruta).then(res => console.log('resulltado de res en md-links: ', res))




































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
