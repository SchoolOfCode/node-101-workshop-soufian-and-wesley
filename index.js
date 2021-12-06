let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!",
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory",
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)",
  },
];

console.log(myCollection);

function describeItem(item) {
  for (let i = 0; i < myCollection.length; i++) {
    if (item === myCollection[i].name && myCollection[i].count === 1) {
      console.log(
        `I have a ${item}. Here's  what i like about it ${myCollection[i].whatILike}`
      );
    }
  }
}
describeItem("School of Code mug");
