import express, {} from 'express';
import fetch from 'node-fetch';
const SLEEPER_BASE = 'https://api.sleeper.app/v1';
export function initSleeperRoutes(app) {
    const router = express.Router();
    router.get('/sleeper/user/:username', async (req, res) => {
        const username = req.params.username;
        if (!username || !username.trim()) {
            res.status(400).json({ error: 'username parameter is required' });
            return;
        }
        try {
            const url = `${SLEEPER_BASE}/user/${encodeURIComponent(username)}`;
            const response = await fetch(url);
            if (response.status === 404) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            if (!response.ok) {
                res.status(502).json({
                    error: 'Upstream Sleeper API error',
                    status: response.status,
                    statusText: response.statusText
                });
                return;
            }
            const data = (await response.json());
            if (!data) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json({
                user: data
            });
            return;
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Unknown error';
            res.status(500).json({ error: 'Internal server error', message });
            return;
        }
    });
    router.get('/sleeper/health', (_req, res) => {
        res.json({ status: 'ok' });
    });
    app.use('/api', router);
}
//# sourceMappingURL=sleeper_data.js.map