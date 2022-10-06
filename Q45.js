const car_info = ((manufacturer, model, ...options) => {
   
   console.log(options);

 const car_details = {
    manufacturer: manufacturer,
    model: model
 }
 
//  args.forEach((item, index) => {
//    car_details[[index]] = item
//    console.log(car_details)
// });
});

const info = car_info("toyota", "vitz", color="red", extra_feature="abs", mileage="20km");

console.log(info)