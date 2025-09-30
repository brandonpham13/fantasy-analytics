import express from 'express';
import { initSleeperRoutes } from './routes/sleeper_data.js';
const app = express();
const PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 4000;
app.use(express.json());
initSleeperRoutes(app);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'fantasy-analytics-server' });
});
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map