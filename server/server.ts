import express, { Express, json } from 'express';
import cors, { CorsOptions } from 'cors';
import * as dotenv from 'dotenv';
// get driver connection
import { connectToServer } from './db/conn';
import productRoutes from './routes/product';

dotenv.config({ path: './config.env' });

const app: Express = express();

const port = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:3000'];
const options: CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.use(json());
app.use(productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  connectToServer();
  console.log(`Server is running on port: ${port}`);
});
