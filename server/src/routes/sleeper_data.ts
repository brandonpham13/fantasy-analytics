import express, { type Express } from 'express';
import fetch from 'node-fetch';

// Minimal shape of Sleeper user response (partial)
interface SleeperUser {
    user_id: string;
    username: string;
    display_name?: string;
    avatar?: string | null;
    // Add more fields as needed
}

// Helper to build Sleeper API base (centralize in case of future versioning)
const SLEEPER_BASE = 'https://api.sleeper.app/v1';

export function initSleeperRoutes(app: Express) {
    const router = express.Router();

    /**
     * GET /api/sleeper/user/:username
     * Retrieves public Sleeper user profile info.
     * Examples:
     *   /api/sleeper/user/someuser
     */
    router.get('/sleeper/user/:username', async (req, res) => {
        /** Get the username from the request parameters */
        const username = req.params.username;

        // Check if username is empty
        if (!username || !username.trim()) {
            // TODO: Check the behavior when this error is triggered vs. using res.statusCode = 400
            res.status(400).json({ error: 'username parameter is required' });
            // next('username parameter is required');
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

            const data = (await response.json()) as SleeperUser | null;
            if (!data) {
                res.status(404).json({ error: 'User not found' });
                return;
            }

            // res.send(data);
            res.json({
                user: data
            });
            return;

        } catch (err) {
            // Narrow unknown error
            const message = err instanceof Error ? err.message : 'Unknown error';
            res.status(500).json({ error: 'Internal server error', message });
            return;
        }
    });

    // (Optional) simple health check for this router
    router.get('/sleeper/health', (_req, res) => {
        res.json({ status: 'ok' });
    });

    app.use('/api', router);
}