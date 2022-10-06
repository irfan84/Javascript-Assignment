let alien_color = "green";

if(alien_color == "green") {
    console.log("You have just earned 5 points for shooting the alien.");
}

alien_color = "yellow";

if(alien_color !== "green") {
    console.log("\nYou have just earned 10 points.");
}

alien_color = "green";

if(alien_color == "red") {
    console.log("\nYou have not earned any points.");
}
else {
    console.log("\nYou have earned 2 points");
}