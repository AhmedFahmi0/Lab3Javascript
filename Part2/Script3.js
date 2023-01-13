var sum = 0;
var num = Number(prompt("Enter number of numbers"));
var nums = prompt("Enter numbers separated by a space");
var arrNums = nums.split(" ");
for (let i = 0; i < num; i++) sum += Number(arrNums[i]);
alert("Sum: " + sum + "\n\nAverage: " + (sum / num));


