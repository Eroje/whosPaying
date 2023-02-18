var names = ["John", "James", "Chloe", "Austin", "Yul", "Vera"]

function whosPaying(names) {
  
  var numOfpeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numOfpeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";
}
