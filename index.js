const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')
const app = express()

app.get('/', (req, res) => res.send('online'))
app.post('/dialogflow', express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res })

  function welcome() {
    agent.add('Welcome to my agent!')
  }

  function fallback() {
    agent.add('Sorry, can you repeat that?')
  }

  function webhookTest() {
    agent.add('This is a webhook test of some sorts!')
  }

  function testTest() {
    agent.add('This is a test!')
  }
	//console.log(req)
	console.log(req.body)
	//console.log(JSON.stringify(req.body))
	//console.log(req.body.queryResult.fulfillmentMessages[0].text)
	//console.log(req.body.queryResult.intent)
  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome)
  intentMap.set('testTest', testTest)
  intentMap.set('webhookTest', webhookTest)
  agent.handleRequest(intentMap)
})

app.listen(process.env.PORT || 8080)
