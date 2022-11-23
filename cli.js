const { mdLinks } = require('./index.js')
const { validarLink } = require('./funciones.js')
const {totalLink}= require('./funciones.js')
const { estadoLink}= require('./funciones.js')
const ruta = process.argv[2];
const arg= process.argv

const cli = (ruta,arg) =>{
     if(ruta===undefined){
         console.log('ingresa una ruta')
     } else if (arg.includes('--stats') && arg.includes('--validate')){
        (mdLinks(ruta, (options = { validate: true })).then((res) =>{console.table(estadoLink(res))}))
    }else if(arg.includes('--stats')){
        (mdLinks(ruta, (options = { validate: true })).then((res) =>{console.table(totalLink(res))}))
    } else if(arg.includes('--validate')){
     (mdLinks(ruta,options ={ validate: true }).then((res) => {console.log((res))}))
    }else if ( arg!='--stats' && arg !='--validate' && arg!=undefined ){
       mdLinks(ruta, (options = { validate: false })).then((res) => {
         console.log(res);
       });
        // console.log('la opcion no es valida ,intenta con : --stats ,--validate o --stats --validate ')
        }
    
}


cli(ruta,arg)