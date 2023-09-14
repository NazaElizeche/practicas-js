//arrange 
let canMin=5;

//act
ValorRnd= (Math.random()*37*5)+37*5;

//assert

test('37*5<=ValorRnd<=37*10', () =>{
    expect (ValorRnd).toBeGreaterThanOrEqual(37*5);
    expect (ValorRnd).toBeLessThanOrEqual(37*10);
});
