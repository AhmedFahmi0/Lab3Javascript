const months = ['January', 'February', 'March', 'April'];

months.forEach(function (month) {
    console.log(month);
});

/* output

January
February
March
April

*/



const transformedArray = months.map(function (month) {
    return month.toUpperCase();
});

console.log(transformedArray);  // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]



const converted = [];

for (let i = 0; i < months.length; i++) {
    converted.push(months[i].toLowerCase());
};

console.log(converted); // ["january", "february", "march", "april"]


console.log(months.find((mon) => mon.length > 7));
//The find method returns the value of the first element in the array that satisfies the provided test condition



console.log(months.findIndex((mon) => mon.length > 7));
//The findIndex method returns the index of the first element in the array that satisfies the provided test condition.
//Otherwise, it returns - 1, indicating that no element passed the test

console.log(months.filter((mon) => mon.length == 5));
//The filter method returns a new array with all the elements that satisfy the provided test condition



let numbers = [10, -30, 20, 50];

let allPositive = numbers.every(function (number) { 
    return number > 0;
});
console.log(allPositive); // false 

numbers = [10, 30, 20, 50];

allPositive = numbers.every(function (number) {
    return number > 0;
});
console.log(allPositive); // true
//The every method tests whether all elements in the array pass the provided test conditions and returns a boolean true or false value.



numbers = [-30, 40, 20, 50];

let containsPositive = numbers.some(function (number) {
    return number > 0;
});
console.log(containsPositive); // true 

numbers = [-10, -30, -20, -50];

containsPositive = numbers.every(function (number) {
    return number > 0;
});
console.log(containsPositive); // false
//The some method tests whether at least one element in the array passes the test condition given by the provided function and returns a boolean true or false value


console.log(numbers.reduce((accumulator, num) => accumulator + num, 0));

//The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

console.log(months.join("===>"));
//The join() method joins all array elements into a string