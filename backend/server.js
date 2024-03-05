import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import connectToDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectToDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Inventory server started on port ${port}`));