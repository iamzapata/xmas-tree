// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

// __*__
// _***_
// *****
// __#__
// __#__
export default function createXmasTree(height) {
  let treeTop = "";

  // feach line has 5 characters
  // how many '*' in each line ? 1, 3, 5, 7,
  // count lines by counting from 1 until height

  let count = 1;
  while (count <= height) {
    // * count?
    // 1 + 0 = 1
    // 2 + 1 = 3
    // 3 + 2 = 5
    // 4 + 3 = 7
    // 5 + 4 = 9

    // _ count?
    // 3 - 1 = 2
    // 3 - 2 = 1
    // 3 - 3 = 0

    const padding = "_".repeat(height - count);

    treeTop += padding;
    treeTop += "*".repeat(count + count - 1);
    treeTop += padding;
    treeTop += "\n";

    count++;
  }

  const treeBasePadding = "_".repeat(height - 1);
  const treeBaseLine = treeBasePadding + "#" + treeBasePadding;
  let base = treeBaseLine + "\n";
  base += treeBaseLine;

  return treeTop + base;
}
