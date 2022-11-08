const path = require("path");
const resolve = require("path");
 const fs = require("fs");

const ruta = process.argv[2];

//Comprobar sincrónicamente si existe un archivo

function existePath(path){
  const pathExiste = fs.existsSync(path);
   if (!pathExiste) {
    console.log("fs.exiatsSync no es" +"no esxite path " );
   }
   console.log(existePath)
  
}
//evRuta= evaluando la ruta
const rutAbsolut =(path)=>{
 const evRuta = path.isAbsolute(path); 
 if (!evRuta){
  const cvRut = path.resolve(path);
  return cvRut;
 } 
 const cvRut= path
 return cvRut
}
console.log(rutAbsolut());


// console.log(ruta);
// const evRuta = path.isAbsolute(ruta); 
// if (!path.isAbsolute(ruta)) {
//   let cvRuta= path.resolve(ruta)
//   console.log(cvRuta);
// }else{

// }
//es un directorio?
fs.stat("./", (err, stats) => {
  if (err) throw err;
  // console.log(`stats: ${JSON.stringify(stats)}`);
  console.log(stats.isDirectory());
});

fs.stat("./", (err, stats) => {
  if (err) throw err;
  // console.log(`stats: ${JSON.stringify(stats)}`);
  if (stats.isDirectory()) {
    console.log("fs.Stats describes a " + "file system directory");
  } else {
    console.log("fs.Stats does not " + "describe a file system directory");
  }
});

// const inRuta = (path) => {
// if (path === ""){
// alert (" la ruta no existe")
// } else if (!evRuta) {
//   path.resolve(ruta); 
// } 

// }
// console.log(inRuta);




  // fs.readFile(ruta, "utf8", (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(data);
  // });