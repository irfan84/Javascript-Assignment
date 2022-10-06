let userNames = ["eric", "irfan", "nauman", "admin", "asif"];
const user = "admin"

if(userNames.length > 0) {
for (let i=0; i<userNames.length; i++) {
if(user == "admin") {
    return console.log("Hello admin, would you like to see a status report?")
}
else {
    return console.log(`Hello ${user}, thank you for logging in again!`)
}
}
}
else {
    console.log("We need to find some users!")
}