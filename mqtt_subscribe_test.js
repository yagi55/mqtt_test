const HOSTNAME2 = "192.168.24.6"
const SERVER_IP = "mqtt://" + HOSTNAME2;
const TOPIC_BASE = "application/+/node/+/tx";

var mqtt = require('mqtt');
var client = mqtt.connect(SERVER_IP);

client.on('connect', function() {
    client.subscribe(TOPIC_BASE );
    console.log("接続");
});

client.on('message', function(topic, message){
    var msg = message.toString();
	var o = JSON.parse(msg);
  
    console.log(o);
  //  console.log("data is: " + o["data"]);
});

