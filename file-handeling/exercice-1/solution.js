
const fs = require("fs");

fs.readFile(".input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error reading file!");
    return;
  }

  const words_count = data.split(" ");
  console.log(`There are ${words_count.length} words`);
});
