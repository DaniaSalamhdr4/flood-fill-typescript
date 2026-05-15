# flood-fill-typescript

## Repository Description

A TypeScript implementation of the **Flood Fill Algorithm** using the **Depth-First Search (DFS)** approach.

This project solves the classic Flood Fill problem commonly used in image editing applications, graph traversal, and matrix-based algorithms.
The algorithm starts from a given pixel and changes the color of all connected pixels that share the same original color.

The implementation includes:

- Recursive DFS traversal
- Boundary condition validation
- Edge case handling
- Clean and readable TypeScript code

---

## Problem Overview

Given a 2D grid representing an image:

- Each cell represents a pixel color.
- Starting from a specific pixel `(sr, sc)`,
- Replace all connected pixels with the same original color using a new color.

Pixels are connected only:

- Up
- Down
- Left
- Right

## Technologies Used

- TypeScript

## Algorithm Used

### Depth-First Search (DFS)

The solution uses the **DFS recursive traversal algorithm** to explore all connected pixels.

#### Steps:

1. Store the original color of the starting pixel.
2. Check if the new color is already the same as the original color.
3. Traverse recursively in 4 directions:
   - Up
   - Down
   - Left
   - Right

4. Change the pixel color during traversal.

## Boundary & Edge Case Handling

The implementation includes several important validations:

### Initial Input Validation

Checks:

- Empty image
- Invalid row index
- Invalid column index
- Undefined rows

### DFS Boundary Checks

Prevents:

- Accessing rows outside the image
- Accessing columns outside valid range
- Processing pixels with different colors

### Optimization

If:

```ts
originalColor === newColor;
```

The function immediately returns the image to avoid unnecessary recursion.

# How to Run

## Install TypeScript

```bash
npm install -g typescript
```

## Compile the File

```bash
tsc floodFill.ts
```

## Run the Program

```bash
node floodFill.js
```

## Code Example

```ts
const image1 = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

console.log(floodFill(image1, 1, 2, 2));
```

```ts
Output[([2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2, 2])];
```

# Author:

- **Dania Salama** - [DaniaSalamadr4](https://github.com/DaniaSalamhdr4)
