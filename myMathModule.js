function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function hiddenFunction() {
    console.log("You can't access me outside of this module.");
}
module.exports = { add, subtract };
