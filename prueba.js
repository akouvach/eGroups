function nuevoValor(){
    return new Promise((resolve, reject)=>{
        let espera = parseInt(Math.random()*3+1)*1000;
        console.log("esperando..", espera)
        setTimeout( ()=>{
            let nro=parseInt(Math.random()*100);
            resolve(nro);
        },espera);

    });
}

console.log("uno");

(async function (){

    let uno = await nuevoValor();
    console.log("dos", uno);
    let dos = await nuevoValor();
    console.log("tres", dos);

    console.log("suma",uno+dos);


})();


console.log("Final");

// function* alumnos(desde,hasta){
//     // yield {"nombre":"Andres", "notas":[{"materia":"geo","nota":8}]};
//     // yield 2;
//     for(let i=desde;i<hasta;i++){
//         yield i;
//     }
    
// }

// let rango={
//     min:1,
//     max:10,
//     [Symbol.iterator](){
//         return alumnos(this.min, this.max);
//     }
// }

// for(a of rango){
//     console.log(a);
// }

// let gen = alumnos();

// for(alu of gen){
//     console.log(alu);
// }

// let contador ={
//     [Symbol.iterator](){
//         return alumnos();
//     }
        
    
// }
// for(a of contador){
//     console.log(a);
// }

