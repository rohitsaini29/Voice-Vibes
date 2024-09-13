// pages/api/upload.js

import Cors from 'cors';
import { runMiddleware } from '../../utils/runMiddleware';

const cors = Cors({
    methods: ['POST'],
});

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);

    // Set Cross-Origin-Embedder-Policy and Cross-Origin-Opener-Policy headers
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');

    // Your API logic here
    if (req.method === 'POST') {
        // Handle the POST request
        // ...
        res.status(200).json({ message: 'Success' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
