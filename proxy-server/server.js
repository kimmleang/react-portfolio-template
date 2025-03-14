// filepath: proxy-server/server.js
const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/api/posts', async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://mosesngeth.com/wp-json/wp/v2/posts', {
      waitUntil: 'networkidle2',
    });

    // Wait for the CAPTCHA to be solved manually
    await page.waitForSelector('body');

    const content = await page.content();
    await browser.close();

    res.send(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});