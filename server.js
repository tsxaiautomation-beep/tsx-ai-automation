import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ensure data directory exists for fallback JSON storage
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const leadsFile = path.join(dataDir, 'leads.json');
if (!fs.existsSync(leadsFile)) {
  fs.writeFileSync(leadsFile, JSON.stringify([], null, 2));
}

// Optional MongoDB setup
let mongoDb = null;
if (process.env.MONGODB_URI) {
  try {
    const { MongoClient } = await import('mongodb');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    mongoDb = client.db('tsxaiautomation');
    console.log('✅ Connected to MongoDB Atlas successfully.');
  } catch (err) {
    console.warn('⚠️ MongoDB connection attempt failed, using local file storage:', err.message);
  }
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    brand: 'HTM AI Automation',
    tagline: 'Automate • Innovate • Grow',
    headquarters: 'Karachi, Pakistan',
    email: 'contact@htmaiautomation.com',
    database: mongoDb ? 'MongoDB Atlas' : 'Local JSON Store (Ready for MongoDB/Firebase)',
    timestamp: new Date().toISOString(),
  });
});

// Contact / Audit API Endpoint
app.post(['/api/contact', '/api/leads'], async (req, res) => {
  try {
    const { name, email, phone, company, service, databasePreference, budget, message, details } = req.body;

    if (!name || (!email && !phone)) {
      return res.status(400).json({ error: 'Name and at least Email or Phone are required.' });
    }

    const newLead = {
      id: 'AUX-' + Date.now().toString(36).toUpperCase(),
      name,
      email: email || '',
      phone: phone || '',
      company: company || 'Not specified',
      service: service || 'General AI Automation',
      databasePreference: databasePreference || 'Unspecified',
      budget: budget || 'Standard',
      message: message || details || '',
      status: 'NEW',
      source: 'HTM AI Automation Website',
      createdAt: new Date().toISOString(),
    };

    // If MongoDB connected, insert to collection
    if (mongoDb) {
      await mongoDb.collection('leads').insertOne(newLead);
      console.log(`[MongoDB] New lead saved: ${newLead.id} - ${newLead.name}`);
    } else {
      // Fallback: Read and append to local JSON
      const fileData = fs.readFileSync(leadsFile, 'utf-8');
      const leads = JSON.parse(fileData || '[]');
      leads.unshift(newLead);
      fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
      console.log(`[FileStore] New lead saved: ${newLead.id} - ${newLead.name}`);
    }

    // Determine reply timing based on provided phone number
    const normalizedPhone = (phone || '').replace(/\D/g, '');
    const primaryPhone = '03363925950'.replace(/\D/g, '');
    const isPrimary = normalizedPhone === primaryPhone;
    const replyMessage = isPrimary
      ? 'Your request has been received. We will get back to you within 24 hours.'
      : 'Consultation request received successfully. Our team will reply shortly via WhatsApp.';

    return res.status(201).json({
      success: true,
      message: replyMessage,
      leadId: newLead.id,
      contact: {
        email: 'contact@htmaiautomation.com',
      }
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Internal server error processing lead.' });
  }
});

// Read leads (for admin review)
app.get('/api/leads', (req, res) => {
  try {
    if (mongoDb) {
      mongoDb.collection('leads').find().sort({ createdAt: -1 }).toArray()
        .then(data => res.json(data))
        .catch(() => res.json([]));
    } else {
      const fileData = fs.readFileSync(leadsFile, 'utf-8');
      res.json(JSON.parse(fileData || '[]'));
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve leads.' });
  }
});

// Serve static frontend if dist exists
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 HTM AI Automation Backend running on http://localhost:${PORT}`);
  console.log(`📞 Contact: 03363925950 / 03141151571 | 📧 contact@htmaiautomation.com | 📍 Karachi, Pakistan`);
});

