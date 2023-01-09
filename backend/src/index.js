const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

module.exports = app;
