const { readFile, writeFile } = require("fs");

readFile("./people.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Un error occured while reading the file!");
    return;
  }

  const { people } = JSON.parse(data);
  const oldestPerson = people.reduce((oldest, currentPerson) => {
    return oldest.age > currentPerson.age ? oldest : currentPerson;
  });

  writeFile(
    "./oldest_person.json",
    JSON.stringify(oldestPerson),
    "utf-8",
    (err) => {
      if (err) {
        console.log("An error occured while writing the data!");
        return;
      }

      console.log("Operation completed successfully");
    }
  );
});
