const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/posts', async (req, res) => {
  try {
    const response = await fetch('https://mosesngeth.com/wp-json/wp/v2/posts', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Cookie': 'cf_clearance=2Ec6h3NTaid5VVgTo3UbGM1i.jgJqJ3fW.TWfjLymf4-1741929882-1.2.1.1-YTUqqADlu4rQ8pYEwHo5X6qnckWowbWkMUM9p9V_zChUwBot7QLuGJxxIoIdFVUWvFGH2nT0n95GIPTqFRY.1kzz.Y1dXFoSuLi34cQP6fKLh1u1iTu1fEqvhdkzo07dV1Ze79KHfgQRtEdn6EeGN4GqZPDybSqqFqBc5sc4J80DUo_.s6whpgLbr5gQSULwl8FQKQKewxD0q7_SC4763ShXWj3sXgxNcb0HC8T.QKDsOZ99USRREtaavbSwEaIcf0VS2HS4Qz7SkZ3Q3IoYLjZo7u82WFQGsFiIM.qWghxRWGPawLnlrQYSqxWhwGRpom8aUBaoqpe8qljhFxYJPe7Aaj4FsLjo4wkiASQ0WM.duXBdk8YHQiFmQpbpNRokKNtcpHj6HIRrT6uI8feUdwRy9VDVIDHjEew8DPx98F0'
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});