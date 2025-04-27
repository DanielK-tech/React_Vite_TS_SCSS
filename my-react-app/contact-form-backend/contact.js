const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;
  
  if (!email || !message) {
    return res.status(400).json({ error: 'Email a zpráva jsou povinné' });
  }

  try {
    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // Your email where you want to receive messages
      subject: `Nová zpráva z kontaktního formuláře od ${email}`,
      html: `
        <h3>Nová zpráva z kontaktního formuláře</h3>
        <p><strong>Od:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Zpráva byla úspěšně odeslána' });
  } catch (error) {
    console.error('Chyba při odesílání emailu:', error);
    res.status(500).json({ 
      error: 'Došlo k chybě při odesílání zprávy, zkuste to prosím později.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});