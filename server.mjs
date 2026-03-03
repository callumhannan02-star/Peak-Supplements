import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Route for home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for checkout
app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'checkout.html'));
});

// Route for protein
app.get('/protein', (req, res) => {
  res.sendFile(path.join(__dirname, 'protein.html'));
});

// Route for preworkout
app.get('/preworkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'preworkout.html'));
});

// Route for bundles
app.get('/bundles', (req, res) => {
  res.sendFile(path.join(__dirname, 'bundles.html'));
});

// Route for other
app.get('/other', (req, res) => {
  res.sendFile(path.join(__dirname, 'other.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
