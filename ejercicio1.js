console.log("hola");

for (let i=0; i<10; i++){
    let aleatorio= (Math.floor(Math.random()*(37*5)))+(37*5);
    let numero= aleatorio%37;
    
    console.log("\n");
    console.log(" Nro. de juego: "+ i + "\n Valor aleatorio generado: "+ aleatorio + "\n Nro en que cayo la ruleta: "+ numero);
}
