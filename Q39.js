const city_country =((city, country) => {
    return (`${city}, ${country}`);
})

let results = city_country("Lahore", "Pakistan");
console.log(results);

results = city_country("Auckland", "New Zealand");
console.log(results);

results = city_country("Paris", "France");
console.log(results);