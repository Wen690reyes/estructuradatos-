function viajar(destino){
    if(destino === 'Brasil') {
        console.log('Gire a la izquierda');
} else if(destino === 'Argentina') {
        console.log('Gire a la derecha');
} else {
        console.log('Nos perdimos');''
}
};
viajar('Brasil');
viajar('Argentina');


function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( "Puede Manejar" );
    } 
    console.log( "No puede manejar" );
  }
  
  puedeManejar(17);