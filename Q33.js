const range = [...Array(10).keys()];

range.filter((num) => {
    if(num != 0) {
    if (num == 1) {
        console.log("1st");
    }
    else if (num == 2) {
        console.log("2nd");
    }
    else if (num == 3) {
        console.log("3rd");
    }
    else {
        console.log(`${num}th`)
    }
}
});