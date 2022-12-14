const env = require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});