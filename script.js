var firstName = "Austin";
var lastName = "Preece";
var age = 24;
var likesTravel = true;

console.log(firstName,lastName,age,likesTravel);

// your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.

var movieArray = ["Joker","Batman","Robin"];

console.log(movieArray);

console.log(movieArray[0]);

console.log(movieArray[1]);

console.log(movieArray[2]);

// All About Me Pt. 2
// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

var austinObject = {
    firstName: "Austin",
    lastName: "Preece",
    age: 24,
    likesToTravel: true,
    favoriteMovies: ["Joker","Batman","Robin"]
}

console.log(austinObject.firstName);
console.log(austinObject.age);
console.log(austinObject.favoriteMovies[2]);








