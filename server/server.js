const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const srcPath = path.join(__dirname, '..', 'src');
app.use(express.static(srcPath));
app.get('*', (req, res) => {
 res.sendFile(path.join(srcPath));
});
app.listen(port, () => {
 console.log(`Server is up on port ${port}!`);
});