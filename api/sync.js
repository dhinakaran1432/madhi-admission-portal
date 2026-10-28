import { prisma } from '../lib/prisma.js';

const DEFAULT_STATE = {
  users: [],
  applications: [],
  payments: [],
  announcements: [],
  expenses: [],
  notifications: [],
  points: {},
  badges: {},
  settings: {
    schoolName: 'Madhi',
    tagline: 'Excellence in Education',
    upiId: 'madhi@upi',
    feeAmount: 500,
    address: '123 School Street, Tamil Nadu',
    phone: '+91 90000 00000',
  },
};

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Api-Key');
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const apiKey = req.headers['x-api-key'];
  const expectedKey = process.env.SYNC_API_KEY;

  if (!expectedKey) {
    res.status(500).json({ error: 'Server misconfigured: SYNC_API_KEY missing' });
    return;
  }

  if (!apiKey || apiKey !== expectedKey) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    if (req.method === 'GET') {
      const row = await prisma.appState.findUnique({ where: { id: 1 } });
      if (!row) {
        const created = await prisma.appState.create({
          data: { id: 1, data: DEFAULT_STATE },
        });
        res.status(200).json({ data: created.data, updatedAt: created.updatedAt });
        return;
      }
      res.status(200).json({ data: row.data, updatedAt: row.updatedAt });
      return;
    }

    if (req.method === 'PUT') {
      const body = req.body;
      if (!body || typeof body !== 'object' || body.data === undefined) {
        res.status(400).json({ error: 'Invalid body: expected { data: {...} }' });
        return;
      }
      if (typeof body.data !== 'object' || Array.isArray(body.data) || body.data === null) {
        res.status(400).json({ error: 'data must be an object' });
        return;
      }

      const row = await prisma.appState.upsert({
        where: { id: 1 },
        update: { data: body.data },
        create: { id: 1, data: body.data },
      });

      res.status(200).json({ ok: true, updatedAt: row.updatedAt });
      return;
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('[sync] error', err);
    res.status(500).json({ error: 'Server error', message: err.message });
  }
}