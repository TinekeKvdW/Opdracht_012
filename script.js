// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.

const age = 18;
const isFemale = true;
const driverStatus = "bob";
const prename = "Bram"; "Sarah";
const totalAmount = 100;

/*  testdata
const age = 16;
const isFemale = false;
const driverStatus = 808;
*/

if (age >= 18) {
    console.log("U bent 18 jaar of ouder");
} else {
    console.log("U bent nog geen 18 jaar en daarom heeft u helaas geen toegang.");
}

if (isFemale) {
    console.log("U bent vrouw, u heeft toegang.");
} else {
    console.log(
        "U bent man, u heeft geen toegang.");
}

if (driverStatus === "bob") {
    console.log("U kunt zelf naar huis rijden");
} else {
    console.log("U kunt niet zelf naar huis rijden");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}

if (prename == "Bram" || prename == "Sarah") {
    console.log("U krijgt een gratis biertje.")
}

if (totalAmount >= 25) {
    console.log("Je krijgt een gratis portie bitterballen, 6 st.")
} else if (totalAmount >= 50) {
    console.log("Je krijgt een gratis portie nacho's")
} else (totalAmount >= 100); {
    console.log("Je krijgt een gratis fles champagne")
}