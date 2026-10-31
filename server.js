const express = require('express');
const path = require('path');
const app = express();

// Serve the static HTML file
app.use(express.static(__dirname));

// Fallback route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`PalmPay disguise running on port ${PORT}`);
});
