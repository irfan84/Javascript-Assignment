const obj =
{ 
    // made intentional error by changing index mountains to m 
    // m: ["K2", "Nanga Parbat", "Mount everest"],
    // ReferenceError: mountains is not defined
    mountains: ["K2", "Nanga Parbat", "Mount everest"],
    rivers: ["Jehlum", "Sutlej", "Chenab"],
    countries: ["Pakistan", "China", "Turkey"],
    cities: ["Islamabad", "Beijing", "Paris"],
    languages: ["Urdu", "English", "Turkish"]

}

console.log(obj[mountains])