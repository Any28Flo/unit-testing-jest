let password  = "winter is comming";

test("Test string password" , ()=>{
    expect(password).toMatch(/winter/);
})