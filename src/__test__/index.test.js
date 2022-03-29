const randomStrings = require("../main");
describe('test random string func', ()=>{
    test("Must be a string", ()=>{
        expect(typeof (randomStrings())).toBe('string');
    });
    test('not match' , ()=>{
        expect(randomStrings()).not.toMatch(/Madrid/);
    })
})
