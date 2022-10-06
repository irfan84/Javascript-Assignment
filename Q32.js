const current_users = ["bilal", "irfan", "hamza", "tahir", "nauman"];
const new_users = ["tahir", "adnan", "umair", "awais", "irfan"];

let user_exists = new_users.filter((user) => current_users.includes(user));
if(user_exists.length > 0) {
    console.log("Username already exists, you will need to choose a new username");
}
else {
    console.log("congratulations, username is available");
}

//Insensitive comparison.
user_exists = new_users.filter((user) => current_users.includes(user.toLowerCase()));

if(user_exists.length > 0) {
    console.log("Username already exists, you will need to choose a new username");
}
else {
    console.log("congratulations, username is available");
}