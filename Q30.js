const userNames = ["eric", "irfan", "nauman", "admin", "asif"];
const user = "irfan"

for (let i=0; i<userNames.length; i++) {
if(user == "admin") {
    return console.log("Hello admin, would you like to see a status report?")
}
else {
    return console.log(`Hello ${user}, thank you for logging in again!`)
}
}