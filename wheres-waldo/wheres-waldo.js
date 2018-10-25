// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var x = arr.forEach(isIt);
  function isIt(name) {
    if (name === "Waldo") {
      b = arr.indexOf("Waldo");
      found(b);
    }
  }
}

function actionWhenFound(indexOfWaldo) {
  console.log("Found Waldo at index " + indexOfWaldo + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
