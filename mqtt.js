const mqtt = require('mqtt')

const brokerUrl = 'mqtt://10.110.1.204'
const options = {
  clientId: 'mqttjs01',
  username: '',
  password:'',
  clean: true
}

const client = mqtt.connect(brokerUrl, options)

// console.log(client)

client.on('connect', function() {
  console.log(`connected ${client.connected}`)
})

client.on('error', function(error) {
  console.log(`can't connect ${error}`)
})


function turnOnTheLight() {
  if (client.connected) {
    client.publish('light/on', 'true')
  } else {
    console.log('NOT CONNECTED')
  }
}

setTimeout(() => {
  console.log('turn light on')
  turnOnTheLight()
}, 3000)


setTimeout(() => {
  console.log('disconnect and exit')
  client.end()
  process.exit(0)
}, 60000)
