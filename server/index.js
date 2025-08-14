import express from "express";
import { WebSocketServer } from "ws";
import axios from "axios";
import cron from "node-cron";

const app = express();
const PORT = 8080;

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const wss = new WebSocketServer({ server });

// Store market data
let marketData = {
  nifty: {
    symbol: "NIFTY 50",
    price: 0,
    change: 0,
    changePercent: 0,
    lastUpdate: null,
  },
  sensex: {
    symbol: "SENSEX",
    price: 0,
    change: 0,
    changePercent: 0,
    lastUpdate: null,
  },
  dow: {
    symbol: "DOW JONES",
    price: 0,
    change: 0,
    changePercent: 0,
    lastUpdate: null,
  },
  gold: {
    symbol: "GOLD",
    price: 0,
    change: 0,
    changePercent: 0,
    lastUpdate: null,
  },
};

// Function to fetch market data from Yahoo Finance
const fetchMarketData = async () => {
  try {
    const symbols = [
      "^NSEI", // Nifty 50
      "^BSESN", // Sensex
      "^DJI", // Dow Jones
      "GC=F", // Gold
    ];

    const responses = await Promise.all(
      symbols.map((symbol) =>
        axios
          .get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
            timeout: 5000,
          })
          .catch((err) => {
            console.log(`Error fetching ${symbol}:`, err.message);
            return null;
          })
      )
    );

    const currentTime = new Date().toISOString();

    // Process Nifty data
    if (responses[0]?.data?.chart?.result?.[0]) {
      const niftyData = responses[0].data.chart.result[0];
      const meta = niftyData.meta;
      marketData.nifty = {
        symbol: "NIFTY 50",
        price: meta.regularMarketPrice || meta.previousClose || 0,
        change:
          (meta.regularMarketPrice || meta.previousClose) - meta.previousClose,
        changePercent:
          (((meta.regularMarketPrice || meta.previousClose) -
            meta.previousClose) /
            meta.previousClose) *
          100,
        lastUpdate: currentTime,
      };
    }

    // Process Sensex data
    if (responses[1]?.data?.chart?.result?.[0]) {
      const sensexData = responses[1].data.chart.result[0];
      const meta = sensexData.meta;
      marketData.sensex = {
        symbol: "SENSEX",
        price: meta.regularMarketPrice || meta.previousClose || 0,
        change:
          (meta.regularMarketPrice || meta.previousClose) - meta.previousClose,
        changePercent:
          (((meta.regularMarketPrice || meta.previousClose) -
            meta.previousClose) /
            meta.previousClose) *
          100,
        lastUpdate: currentTime,
      };
    }

    // Process Dow Jones data
    if (responses[2]?.data?.chart?.result?.[0]) {
      const dowData = responses[2].data.chart.result[0];
      const meta = dowData.meta;
      marketData.dow = {
        symbol: "DOW JONES",
        price: meta.regularMarketPrice || meta.previousClose || 0,
        change:
          (meta.regularMarketPrice || meta.previousClose) - meta.previousClose,
        changePercent:
          (((meta.regularMarketPrice || meta.previousClose) -
            meta.previousClose) /
            meta.previousClose) *
          100,
        lastUpdate: currentTime,
      };
    }

    // Process Gold data
    if (responses[3]?.data?.chart?.result?.[0]) {
      const goldData = responses[3].data.chart.result[0];
      const meta = goldData.meta;
      marketData.gold = {
        symbol: "GOLD",
        price: meta.regularMarketPrice || meta.previousClose || 0,
        change:
          (meta.regularMarketPrice || meta.previousClose) - meta.previousClose,
        changePercent:
          (((meta.regularMarketPrice || meta.previousClose) -
            meta.previousClose) /
            meta.previousClose) *
          100,
        lastUpdate: currentTime,
      };
    }

    console.log("Market data updated:", new Date().toLocaleString());

    // Broadcast to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(
          JSON.stringify({
            type: "marketData",
            data: marketData,
          })
        );
      }
    });
  } catch (error) {
    console.error("Error fetching market data:", error.message);
  }
};

// Fetch market data every 2 seconds for real-time updates
cron.schedule("*/2 * * * * *", () => {
  fetchMarketData().catch((error) => {
    console.error("Scheduled fetch error:", error.message);
  });
});

// Initial fetch
fetchMarketData().catch((error) => {
  console.error("Initial fetch error:", error.message);
});

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send current market data to new client
  ws.send(
    JSON.stringify({
      type: "marketData",
      data: marketData,
    })
  );

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("WebSocket client error:", error.message);
  });
});

// Handle process errors
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
