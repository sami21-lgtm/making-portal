{
  "name": "assignment-website",
  "version": "1.0.0",
  "description": "Simple assignment submission website for GitHub repo URLs",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "body-parser": "^1.20.2",
    "express-basic-auth": "^1.2.0"
  }
}
const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Use body parser to parse form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Submission "database" (JSON file)
const SUBMISSION_FILE = 'submissions.json';

function loadSubmissions() {
    if (!fs.existsSync(SUBMISSION_FILE)) return [];
    return JSON.parse(fs.readFileSync(SUBMISSION_FILE, 'utf8'));
}

function saveSubmissions(data) {
    fs.writeFileSync(SUBMISSION_FILE, JSON.stringify(data, null, 2));
}

// Home / submission page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle submission
app.post('/submit', (req, res) => {
    const { name, github_url } = req.body;
    if (!name || !github_url || !github_url.startsWith('https://github.com/')) {
        return res.status(400).send('Invalid input. Please provide your name and a valid GitHub URL.');
    }
    const submissions = loadSubmissions();
    submissions.push({
        name,
        github_url,
        submitted_at: new Date().toISOString()
    });
    saveSubmissions(submissions);
    res.redirect('/?submitted=1');
});

// Auth for instructor page
app.use('/submissions', basicAuth({
    users: { 'instructor': 'password' },
    challenge: true,
}));

// Submissions page
app.get('/submissions', (req, res) => {
    const submissions = loadSubmissions();
    let html = fs.readFileSync(path.join(__dirname, 'views', 'submissions.html'), 'utf8');
    const rows = submissions.map(
        s => `<tr><td>${s.name}</td><td><a href="${s.github_url}" target="_blank">${s.github_url}</a></td><td>${s.submitted_at}</td></tr>`
    ).join('');
    html = html.replace('{{ROWS}}', rows || '<tr><td colspan="3">No submissions yet.</td></tr>');
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

