import express from 'express';
import morgan from 'morgan';

import projectRoutes from './routes/projects';
import actionsRoutes from './routes/actions';


const app = express();

// Midlewares   
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/projects', projectRoutes);
app.use('/api/actions', actionsRoutes);

export default app;