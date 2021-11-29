// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]

function findMatching(drivers, name) {
    const match = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
    return match;
}

function fuzzyMatch(drivers, letter) {
    const letters = drivers.filter(driver => driver[0].toUpperCase() === letter[0].toUpperCase());
    return letters;
}

function matchName(drivers, string) {
    const strings = drivers.filter(driver => driver.name.toUpperCase() === string.toUpperCase());
    return strings;
}