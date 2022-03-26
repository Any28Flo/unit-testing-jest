let password  = "winter is comming";

test("Test string password" , ()=>{
    expect(password).toMatch(/winter/);
})
//Array test
let starkFamily = [
    "Rob Stark",
    "Sansa Stark",
    "Arya Stark",
    "Bran Stark",
    "Rickon Stark",
    "Jon Snow"

];

test('test validate starkFamily array has Jon Snow on it', ()=>{
    //expect(starkFamily).toContain("Jon Snow");
    expect(new Set(starkFamily)).toContain('Jon Snow');

})

test('test have legal age', ()=>{
    const age = 18;
    expect(age).toBeGreaterThanOrEqual(18);
});


test('test is in the cart', ()=>{
    const isInCart = true;
    expect(isInCart).toBeTruthy();
})


test('test is available', ()=>{
    const isAvalable = false;
    expect(isAvalable).toBeFalsy();
});

const reverseString = (string, callback) =>{
    callback(  string.split('').reverse().join(""));
  //  return string.split('').reverse().join();
}

test('validate reverse' , ()=>{
    reverseString("Hola", (str)=>{
        expect(str).toBe("aloH");
    })
});
test('validate input' , () =>{
    const string = "Role";
    expect(string).toMatch("Role");
    //expect(string).toMatch(/role/);

})

const reverseString_2 = str => {
    return new Promise(((resolve, reject) => {
        if(!str){
             reject(Error("Not string"));
        }
         resolve( str.split("").reverse().join(""))
    }))
}
test('test async code', ()=>{
    return reverseString_2("Hola")
        .then(str=>{
            expect(str).toBe("aloH")
        })

})
test('test async reverseString resolve', async()=>{
    expect.assertions(1);
    await expect(reverseString_2("Hello")).resolves.toBe("olleH");
});

test('test async reverseString reject', async ()=>{
    expect.assertions(1);
    await expect(reverseString_2()).rejects.toThrow("Not string");
})