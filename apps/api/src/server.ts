import http from 'http';
import app from './app';
import { initSocket } from './config/socket';
import logger from './utils/logger';

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

initSocket(server);

server.listen(PORT, () => {
  logger.info(`🚀 SkyMed API running on port ${PORT}`);
});
