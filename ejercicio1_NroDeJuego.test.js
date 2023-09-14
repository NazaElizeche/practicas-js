//arrange 
let nroAnterior=4;

//act
let nroActual=5;

//assert

test('1<=nroActual<=10', () =>{
    expect (nroActual).toBe(nroAnterior+1);
});
