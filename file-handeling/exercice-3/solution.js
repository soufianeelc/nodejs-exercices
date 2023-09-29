const fs = require("fs");

fs.readFile("./content/input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error reading file!");
    return;
  }

  const sum = data
    .split(/\n/) // split the string using the new line '\n' character
    .filter((value) => +value) // This filters out non-numeric values
    .map((value) => +value) // convert strings to numbers
    .reduce((sum, currentValue) => sum + currentValue); // calculate the sum

  console.log(sum);
});
