const express = require('express');
const app = express();
const path = require('path');

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
