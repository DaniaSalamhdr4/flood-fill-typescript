function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  if (
    image.length === 0 ||
    sr < 0 ||
    sr >= image.length ||
    !image[sr] ||
    sc < 0 ||
    sc >= image[sr].length
  ) {
    return image;
  }

  const originalColor = image[sr][sc];

  if (originalColor === newColor) {
    return image;
  }

  function dfs(row: number, col: number) {
    // check boundaries
    // if (row < 0 || row >= image.length || col < 0 ) {
    //   return;
    // }

    // if (!image[row] || col >= image[row].length) {
    //   return;
    // }
    if (row < 0 || row >= image.length || col < 0 || col >= image[row].length) {
      return;
    }
    if (image[row][col] !== originalColor) {
      return;
    }

    image[row][col] = newColor;

    dfs(row - 1, col); // up
    dfs(row + 1, col); // down
    dfs(row, col - 1); // left
    dfs(row, col + 1); //right
  }

  // start DFS
  dfs(sr, sc);

  return image;
}
const grid = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];
console.log(floodFill(grid, 1, 2, 2));
