const make_sandwich = ((items) => {
    items.map((item) => {
        console.log(`added ${item} to sandwich`)
    });
});

make_sandwich(["beef", "lettuce", "cheese", "ketchup"]);
console.log("\n");
make_sandwich(["chicken", "mayonnaise", "tomato"]);
console.log("\n");
make_sandwich(["lamb", "olives", "black pepper"]);

