import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import cloudinary from 'cloudinary';

dotenv.config()
cloudinary.v2.config({
 cloud_name:process.env.CLOUD_NAME,
 api_key:process.env.CLOUD_API_KEY,
 api_secret:process.env.CLOUD_API_SECRET
});
console.log(cloudinary.config());
const app = express();

app.use(express.json());


const port = process.env.PORT

import userRoutes from './routes/user.js'
import productRoutes from './routes/product.js'
app.use("/api",userRoutes),
app.use('/api',productRoutes)
console.log("Mongo db connected")
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    connectDb();
});
export default app;