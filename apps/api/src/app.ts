import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler';

import authRoutes from './routes/auth.routes';
import productsRoutes from './routes/products.routes';
import ordersRoutes from './routes/orders.routes';
import dronesRoutes from './routes/drones.routes';
import simulationRoutes from './routes/simulation.routes';
import notificationsRoutes from './routes/notifications.routes';
import analyticsRoutes from './routes/analytics.routes';

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/drones', dronesRoutes);
app.use('/api/simulation', simulationRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/analytics', analyticsRoutes);

app.use(errorHandler);

export default app;
