const nodes = [
  {
    links: [1],
    visited: false
  }, {
    links: [0, 2],
    path: [],
    visited: false
  }, {
    links: [],
    path: [],
    visited: false
  },
];

const bfs = (start) => {
  const listToExplore = [start];

  nodes[start].visited = true;

  while (listToExplore.length > 0) {
    const nodeIndex = listToExplore.shift();

    nodes[nodeIndex].links.forEach(childIndex => {
      if (!nodes[childIndex].visited) {
        nodes[childIndex].visited = true;
        listToExplore.push(childIndex);
      }
    });
  }
};

bfs(0);
