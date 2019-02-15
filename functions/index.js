// Remember not to declare anything unecessary in the global scope as it eats ram
// and can cause the function to crash
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
const {WebhookClient} = require('dialogflow-fulfillment');

// The API credentials
const serviceAccount = require('./.env/hurtighjelpern-firebase-adminsdk-n8o9s-c7918f9116.json');

// Sets the credentials required to upload new functions
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hurtighjelpern.firebaseio.com"
});

// All of our functions go here
exports.webhook = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  function webhookTest(agent) {
    const randomNum = Math.round(Math.random() * 100);
    agent.add(`This is a webhookTest and this is a number between 0 and 100: ${randomNum}`)
  }

  let intentMap = new Map();
  // Sets response functions based on intent
  // The first argument is the intent and the second is the response
  intentMap.set('webhookTest', webhookTest);
  agent.handleRequest(intentMap);
})
