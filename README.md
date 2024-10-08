# YouTube Subscriber Detection Minecraft Bot

This repository contains a Minecraft bot built with Mineflayer that automatically detects new YouTube subscribers and sends a message in the Minecraft chat, as well as kills all players on the server when a new subscriber is detected. The bot uses the YouTube Data API to monitor subscriber count in real-time.

## Features
- YouTube Subscriber Monitoring: The bot regularly checks a specified YouTube channel's subscriber count.

- Minecraft Server Integration: When a new subscriber is detected, the bot will send a message in the Minecraft chat and execute a command to kill all players on the server.

- Automated Execution: The bot continuously runs in the background, checking for new subscribers at regular intervals (every 60 seconds).

## Requirements

- Node.js (v14.x or later)

- A Minecraft server running version 1.20.4

- A Google API key with access to the YouTube Data API
- A Minecraft server and the ability to create a bot player
- Environment variables set for API key, channel ID, Minecraft server details, etc.





## Installation

- Clone the Repository

```bash
 git clone https://github.com/faizan45640/minecraft-subscription-death-trigger.git
 cd minecraft-subscription-death-trigger
```

- Install Dependencies

Install the necessary Node.js packages using npm:
```bash
 npm install
```

- Create a .env File

Create a .env file in the root of the project directory and add your configuration variables:

```bash
GOOGLEAPI=your-google-api-key
CHANNELID=your-youtube-channel-id
HOST=your-minecraft-server-host
PORT=your-minecraft-server-port
```
    
- Run the Bot
```bash 
 node index.js
```
