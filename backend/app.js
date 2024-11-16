const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Other routes can be added here
app.get('/penetration_testing', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/penetration_testing.html'));
});

app.get('/vulnerabilities', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/vulnerabilities.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dashboard.html'));
});

app.get('/report', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/report.html'));
});

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/api.html'));
});

app.get('/web_scanning', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/web_scanning.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
