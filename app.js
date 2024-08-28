const mineflayer = require('mineflayer');
const { google } = require('googleapis');
require('dotenv').config();

const youtube = google.youtube('v3');


const apiKey = process.env.GOOGLEAPI;

const channelId = process.env.CHANNELID;

let previousSubscriberCount = null;

const bot = mineflayer.createBot({
  host: process.env.HOST, // Your server address
  port: process.env.PORT, // Minecraft server port
  username: 'killer',
  auth : "offline",
  version: "1.20.4"
  
});



function checkSubscribers() {
  youtube.channels.list({
    part: 'statistics',
    id: channelId,
    key: apiKey
  }, (err, response) => {
    if (err) {
      console.error('Error:', err);
      return;
    }

    const currentSubscriberCount = parseInt(response.data.items[0].statistics.subscriberCount, 10);
    console.log(`Current Subscriber count: ${currentSubscriberCount}`);

    if (previousSubscriberCount !== null && currentSubscriberCount > previousSubscriberCount) {
  
      console.log('New subscriber detected!');
      onNewSubscriber(currentSubscriberCount);
    }

    // Update the previous subscriber count
    previousSubscriberCount = currentSubscriberCount;
  });
}

function onNewSubscriber(newSubscriberCount) {
  // This function gets called when a new subscriber is detected
  console.log(`We now have ${newSubscriberCount} subscribers!`);
  bot.on("login" , ()=>{
    bot.chat("/say new subscriber detected");
    bot.chat("/kill faizan45640");
  })
}

setInterval(checkSubscribers, 60000);


checkSubscribers();

 
 

  

  bot.on('login', () => {
    console.log('Bot logged in');
   


    
   
      
     
    
    
  });
   

  




  
  






