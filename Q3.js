// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var firstName = "sarwat jahan";
// in uppercase
console.log(firstName.toUpperCase());
//in lowercase
console.log(firstName.toLowerCase());
//in titlecase
console.log(firstName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
