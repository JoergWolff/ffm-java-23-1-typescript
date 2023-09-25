import './style.css'

let age: number = 10;
console.log("age = " + age)
for (let i: number = 1; i < age; i++) {
    console.log(i);
}

if(age > 18){
    console.log("age ist größer als 18")
}
else{
    console.log("age ist kleiner gleich 18")
}
// Ternary Schreibweise
console.log("Ternary Schreibweise: " + (age > 10 ? "Age ist größer als 18":"Age ist kleiner als 18"))

let score: number = 0

if(score){
    console.log("score hat einen Wert")
    console.log("Score wird als truthy angezeigt")
}
else {
    console.log("score hat keinen Wert")
    console.log("Score wird als falsy angezeigt")
}

// Ternary Schreibweise
console.log("Ternary Schreibweise: " + (score ? "Score wird als truthy angezeigt":"Score wird als falsy angezeigt"))


let userName : string = ""
if(userName){
    console.log("Username ist verfügbar.")
}

console.log(userName ? "Username ist truthy":"Username ist falsy")

let isAdmin : boolean = false
console.log(isAdmin?"isAdmin wird als truthy ausgewertet.":"isAdmin wird als falsy ausgewertet.")

if(!isAdmin){
    console.log("isAdmin ist false.")
}

console.log("\nBonus:")
console.log("****************************")
starTree(5)
function starTree(height: number): void {
    if (height <= 0) {
        console.log("Die Höhe des Baumes muss größer als 0 sein.");
        return;
    }

    for (let i = 1; i <= height; i++) {
        const spaces = " ".repeat(height - i);
        const stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
    let trunk:string = "";

    for (let i = 0; i < height; i++) {
        const trunkSpaces = " ".repeat(height - 1);
        trunk += trunkSpaces+"*\n"
        // console.log(trunkSpaces + "*");
    }
    console.log(trunk)
}