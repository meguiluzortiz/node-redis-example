const redis = require('redis');
const publisher = redis.createClient();

const CHANNEL_STATUS = 'status';

async function publish() {
  console.log(`Started ${CHANNEL_STATUS} channel publisher...`)
  publisher.publish(CHANNEL_STATUS, 'free');
}

publish();