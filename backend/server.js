import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import bookRouter from './routes/bookRoute.js';
import reviewRouter from './routes/reviewRoutes.js'


//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());


//api endpoints
app.use('/api/user', userRouter);
app.use('/api/books', bookRouter);
app.use('/api/review', reviewRouter);

// app.get('/', (req, res) => {
//     res.send("API Working")
// })

// app.post("/test", (req, res) => {
//   console.log("Test endpoint hit with body:", req.body);
//   res.send("OK");
// });

app.listen(port, () => console.log(`Server started on port : ${port}`))