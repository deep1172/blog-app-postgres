// index.js
import express from 'express';
import dotenv from 'dotenv';
import DBCon  from './libs/db.js'; 
import cors from 'cors';
import cookieParser from 'cookie-parser';

import AuthRoutes from './routes/Auth.js';
import BlogRoutes from './routes/Blogs.js';
import DashboardRoutes from './routes/Dashboard.js';
import CommentRoutes from './routes/Comments.js';
import PublicRoutes from './routes/Public.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

await DBCon(); // ✅ now this works

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

const corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));

app.use('/auth', AuthRoutes);
app.use('/blog', BlogRoutes);
app.use('/dashboard', DashboardRoutes);
app.use('/comment', CommentRoutes);
app.use('/public', PublicRoutes);

app.get('/', (req, res) => {
  res.send('hello from server');
});

app.listen(PORT, () => {
  console.log(`🚀 App is running on Port ${PORT}`);
});
