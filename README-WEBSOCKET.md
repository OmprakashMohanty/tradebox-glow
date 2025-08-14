# Tradebox Real-Time Market Data

This project implements real-time financial data streaming using WebSockets to display live market data for Nifty 50, Sensex, Dow Jones, and Gold prices.

## Architecture

- **Server**: Node.js WebSocket server that fetches data from Yahoo Finance API every 2 seconds
- **Client**: React/Vite frontend that connects to WebSocket server for real-time updates
- **Data Source**: Yahoo Finance API for live market data

## Features

- ✅ Real-time WebSocket connection
- ✅ Live updates every 2 seconds
- ✅ Market data for Nifty 50, Sensex, Dow Jones, and Gold
- ✅ Responsive design with animated UI
- ✅ Connection status indicator
- ✅ Fallback to demo data if connection fails
- ✅ Auto-reconnection on connection loss

## Running the Application

### 1. Start the WebSocket Server

```bash
cd server
npm install
npm run dev
```

The server will start on `http://localhost:8080` and begin fetching market data.

### 2. Start the Client

```bash
cd client
npm install
npm run dev
```

The client will start on `http://localhost:8081` (or next available port).

## Market Data Display

The market data appears in the Hero Section, above the trading infographic, showing:

- Current price
- Price change (absolute and percentage)
- Real-time status indicator
- Last update timestamp
- Animated trend indicators

## WebSocket API

The server broadcasts market data in the following format:

```json
{
  "type": "marketData",
  "data": {
    "nifty": {
      "symbol": "NIFTY 50",
      "price": 21737.6,
      "change": 45.3,
      "changePercent": 0.21,
      "lastUpdate": "2025-08-13T14:54:34.000Z"
    },
    "sensex": {
      "symbol": "SENSEX",
      "price": 71595.53,
      "change": -123.45,
      "changePercent": -0.17,
      "lastUpdate": "2025-08-13T14:54:34.000Z"
    },
    "dow": {
      "symbol": "DOW JONES",
      "price": 39497.54,
      "change": 201.23,
      "changePercent": 0.51,
      "lastUpdate": "2025-08-13T14:54:34.000Z"
    },
    "gold": {
      "symbol": "GOLD",
      "price": 2034.7,
      "change": -15.3,
      "changePercent": -0.75,
      "lastUpdate": "2025-08-13T14:54:34.000Z"
    }
  }
}
```

## Data Sources

- **Nifty 50**: ^NSEI
- **Sensex**: ^BSESN
- **Dow Jones**: ^DJI
- **Gold**: GC=F

## Error Handling

- Connection failures trigger auto-reconnection every 3 seconds
- Fallback to demo data if Yahoo Finance API is unavailable
- Visual indicators show connection status
- Graceful degradation with error messages

## Development Notes

- Market data updates every 2 seconds via cron job
- WebSocket connections are automatically managed
- The client handles connection drops and reconnections seamlessly
- Demo data is provided for offline development/testing
