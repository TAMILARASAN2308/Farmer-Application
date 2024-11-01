const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDatabase = require('./Config/database'); 

// Load environment variables from config.env
dotenv.config({ path: path.join(__dirname, 'Config', 'config.env') });
connectDatabase();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', require('./Routes/auth'));
app.use('/', require('./Routes/pages'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});