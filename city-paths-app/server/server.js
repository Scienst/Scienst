const pathFinder = require('./pathFinder');

// Endpoint to find the shortest path
app.get('/api/shortest-path', (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    res.status(400).json({ error: 'Both start and end parameters are required.' });
    return;
  }

  // Fetch the cities data
  axios.get('https://gist.githubusercontent.com/dastagirkhan/...')
    .then((response) => {
      const cities = response.data;
      const graph = createGraph(cities); // Implement createGraph function

      const shortestPath = pathFinder.findShortestPath(graph, start, end);

      if (shortestPath) {
        res.json({ shortestPath });
      } else {
        res.status(404).json({ error: 'No path found.' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error fetching data' });
    });
});

