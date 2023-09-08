for (let i=0; i<10; i++){
    let aleatorio= Math.floor(Math.random()*(360));
    let dos= (Math.floor(Math.random()*aleatorio))+(360*5);
    let numero= dos%360;

    console.log("\n");
    console.log(" posicion inicial: "+ aleatorio + "\n Valor aleatorio generado: "+ dos + "\n angulo final: "+ numero);
}