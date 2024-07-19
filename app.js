import express from "express";
import "dotenv/config";
import cors from "cors";
import dbConnect from "./dbConnect.js";
import { login, register } from "./controllers/authController.js";
import authRoutes from "./routes/authRoutes.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import jobRoutes from "./routes/jobRouters.js";
//import dbConnect from "dbConnect";
const app=express();
const port=process.env.PORT||5000;
app.use(cors())
app.use(express.json())
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/jobs',jobRoutes)
app.use(register)
app.use(notFound)
app.use(errorHandler)
//app.use(errorHandler)
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  ;(async()=>{  /*ifif functio*/
    try {
        
            await dbConnect(process.env.MONGO_URL);
            console.log("database connected successfully...")
            app.listen(port,console.log(`Server is running at port ${port}`));
        }
     catch (error) {
        console.log("error in db connect ...");
        
    }
}
)();