//arrange 
let ValorAleatorio= Math.floor((Math.random()*37*5)+37*5);

//act
ValorRuleta=ValorAleatorio%37;

//assert

test('0<=ValorAleatorio<=36', () =>{
    expect (ValorRuleta).toBeGreaterThanOrEqual(0);
    expect (ValorRuleta).toBeLessThanOrEqual(36);
});