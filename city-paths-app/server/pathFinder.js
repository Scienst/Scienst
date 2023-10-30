
function findShortestPath(graph, start, end) {
    // Create a set to keep track of visited nodes
    const visited = new Set();
  
    // Create a map to store the distance from the start node to each node
    const distances = new Map();
  
    // Create a map to store the previous node in the shortest path
    const previousNodes = new Map();
  
    // Initialize distances with infinity for all nodes except the start node
    for (const node in graph) {
      distances.set(node, Infinity);
    }
    distances.set(start, 0);
  
    // Find the shortest path
    while (visited.size !== Object.keys(graph).length) {
      const currentNode = minDistanceNode(distances, visited);
  
      for (const neighbor in graph[currentNode]) {
        const distance = distances.get(currentNode) + graph[currentNode][neighbor];
        if (distance < distances.get(neighbor)) {
          distances.set(neighbor, distance);
          previousNodes.set(neighbor, currentNode);
        }
      }
  
      visited.add(currentNode);
    }
  
    // Reconstruct the shortest path
    const path = [];
    let node = end;
    while (node !== null) {
      path.unshift(node);
      node = previousNodes.get(node);
    }
  
    return path;
  }
  
  // Helper function to find the unvisited node with the smallest distance
  function minDistanceNode(distances, visited) {
    let minDistance = Infinity;
    let minNode = null;
    for (const [node, distance] of distances) {
      if (distance < minDistance && !visited.has(node)) {
        minDistance = distance;
        minNode = node;
      }
    }
    return minNode;
  }
  
  module.exports = {
    findShortestPath,
  };
  