function knightMoves(start, end) {
  const [maxCol, maxRow] = 7;
  const queue = [];
  const visited = [];
  let steps = 0;

  queue.push(start);
  visited.push(start);
  
  const directionalCol = [-1, -2, -1, 2, 1, 2, 1, -2];
  const directionalRow = [2, -1, -2, 1, 2, -1, -2, 1];

  for (let i = 0; i < 8; i++) {
    newCol = start[0] + directionalCol[i];
    newRow = start[1] + directionalRow[i];

    if (newRow < 0 || newCol < 0) { continue; }
    if (newRow > maxRow || newCol > maxCol) { continue; }
    
    let neighbor = [newCol, newRow];
    
    if (visited.includes(neighbor)) { continue; }
    
    queue.push(neighbor);
    visited.push(neighbor);

  }

  steps++;
}