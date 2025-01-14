import express, { response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import  request  from 'express'
import UserRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log('Mongodb is connected successfully')}
)
.catch((err) => {
    console.log(err)
});
const app = express();

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
});

app.use(express.json())
// Api creation

app.use('/api/user', UserRoutes)
app.use('/api/auth', authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
}

)