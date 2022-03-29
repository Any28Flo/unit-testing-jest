const cities = ['Mexico cyty', 'Bogotá' , 'Buenos aires' , 'Guadalajara'];

const randomString = () =>{
    let index = Math.floor(Math.random() * (cities.length - 0) + 0);
    return cities[index];
}

module.exports = randomString;