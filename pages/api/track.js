export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body;
    if (typeof req.body === 'string') {
      body = JSON.parse(req.body);
    } else {
      body = req.body;
    }

    const { event, linkId, destination, timestamp, referrer } = body;

    // Log to console in development — replace with database in production
    // Example: MongoDB, Postgres, Supabase, etc.
    console.log('[Analytics]', {
      event,
      linkId: linkId || null,
      destination: destination || null,
      timestamp,
      referrer,
      userAgent: req.headers['user-agent'],
      ip: (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '')
        .split(',')[0]
        .trim(),
      createdAt: new Date().toISOString(),
    });

    // Return 204 No Content — minimal response
    res.status(204).end();
  } catch (error) {
    console.error('[Analytics Error]', error);
    res.status(400).json({ error: 'Invalid payload' });
  }
}
