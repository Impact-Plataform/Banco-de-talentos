const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());

router(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

module.exports = app;
