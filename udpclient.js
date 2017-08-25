const dgram = require('dgram');
const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('World');
const client = dgram.createSocket('udp4');
client.send([buf1, buf2], 41234, 'localhost',(err) => {
  client.close();
});