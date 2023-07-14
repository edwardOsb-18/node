// const qrcode = require('qrcode-terminal');

// const { Client } = require('whatsapp-web.js');
// const client = new Client();

// client.on('qr', qr => {
//     console.log(qr)
//     qrcode.generate(qr, {small: true});
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.initialize();


// client.on('message', message => {
// 	if(message.body === '!ping') {
// 		client.sendMessage(message.from, 'pong');
// 	}
// });
 
const express=require("express")
const app=express()

app.use(express.json())

const datos=[ {id:1,nombre:"edward","apellido":"santamaria"},{id:2,nombre:"iriel",apellido:"Santamaria"}]
app.get("/",(req,res)=>{res.send("hola mundo")})

app.get("/api/nombres",(req,res)=>{res.send(datos)})

const port=process.env.port || 80;
app.listen(port,()=>{console.log("escuchnado "+port)})