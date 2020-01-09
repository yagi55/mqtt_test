const SERVER_IP = "mqtt://192.168.24.6"; //localhost 
const TOPIC_BASE = "application/1/node/0000000000000001/";

var mqtt = require('mqtt');
var client = mqtt.connect(SERVER_IP);
var count =0;

client.on('connect', function(){
    console.log("接続");  
});

var timerID = setInterval(function(){

    var nowtime = new Date;
    var nowsec = nowtime.getSeconds();
    var nowmilsec = nowtime.getMilliseconds();

    var RXPK = {

        "TagName":  "280 1204 0002" + "-" + count,
        "ReadTime5": nowsec + "," + nowmilsec,
        "RSSI": -35.5
                 
    };

    client.publish(TOPIC_BASE+'tx', JSON.stringify(RXPK));
    count++;
    if(count==10){
        clearInterval(timerID);
    }

}, 10);

