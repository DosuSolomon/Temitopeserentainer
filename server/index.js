import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Configure CORS to allow frontend requests
const corsOptions = {
  origin: [
    'https://temitopeserentainer.onrender.com',
    'https://temitopeserentainer-8spp.onrender.com',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Song endpoints
app.get('/api/songs', async (req, res) => {
  try {
    const { sort, is_available } = req.query;
    const orderBy = sort?.replace('-', '') || 'created_date';
    const order = sort?.startsWith('-') ? 'desc' : 'asc';
    
    const where = {};
    if (is_available !== undefined) {
      where.is_available = is_available === 'true';
    }
    
    const songs = await prisma.song.findMany({
      where,
      orderBy: { [orderBy]: order }
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/songs', async (req, res) => {
  try {
    const { title, artist, album, genre, is_available = true } = req.body;
    const song = await prisma.song.create({
      data: { title, artist, album, genre, is_available }
    });
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch('/api/songs/:id', async (req, res) => {
  try {
    const { play_count, is_available } = req.body;
    const data = {};
    if (play_count !== undefined) data.play_count = play_count;
    if (is_available !== undefined) data.is_available = is_available;
    
    const song = await prisma.song.update({
      where: { id: req.params.id },
      data
    });
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/songs/:id', async (req, res) => {
  try {
    await prisma.song.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// SongRequest endpoints
app.get('/api/requests', async (req, res) => {
  try {
    const { status, sort } = req.query;
    console.log('GET /api/requests - status:', status, 'sort:', sort);
    
    const orderByField = sort?.replace('-', '') || 'created_date';
    const order = sort?.startsWith('-') ? 'desc' : 'asc';
    
    const where = status ? { status } : {};
    
    const requests = await prisma.songRequest.findMany({
      where,
      include: { song: true },
      orderBy: { [orderByField]: order }
    });
    res.json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/requests', async (req, res) => {
  try {
    const { song_id, requester_name } = req.body;
    
    // Increment play count
    await prisma.song.update({
      where: { id: song_id },
      data: { play_count: { increment: 1 } }
    });
    
    const request = await prisma.songRequest.create({
      data: { song_id, requester_name, status: 'pending' },
      include: { song: true }
    });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch('/api/requests/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const request = await prisma.songRequest.update({
      where: { id: req.params.id },
      data: { status },
      include: { song: true }
    });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

