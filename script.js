function knightMoves(start, end) {
  const queue = [];
  const visited = new Set();
  const prev = [];
  let path = [];
  
  start.previous = null;
  queue.push(start);
  visited.add(start.toString());
  
  if (start.toString() === end.toString()) {
    console.log('=> No moves made!');
    return;
  }
  
  const directions = [
    [-1,2], [-2,-1], [-1,-2], [2,1], [1,2], [2,-1], [1,-2], [-2,1]
  ];

  while (queue.length) {
    let node = queue.shift();
    if (visited.has(end.toString())) { break; }

    for (let dir of directions) {
      let newCol = node[0] + dir[0];
      let newRow = node[1] + dir[1];

      let neighbor = [newCol, newRow];

      if (newRow < 0 || newCol < 0) continue;
      if (newRow >= 8 || newCol >= 8) continue;
      
      if (visited.has(neighbor.toString())) continue;
      
      queue.push(neighbor);
      visited.add(neighbor.toString());
      neighbor.previous = node;
      prev.push(neighbor);

      if (neighbor.toString() === end.toString()) break;
    }

  }

  let currentNode = prev[prev.length - 1];

  while (currentNode) {
    path.push(currentNode);
    currentNode = currentNode.previous;
  }

  path.reverse();

  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
  
  path.forEach((node) => console.log('  [' + node.toString() + ']'));
}



knightMoves([0,0],[4,4]);
knightMoves([3,3],[4,3]);