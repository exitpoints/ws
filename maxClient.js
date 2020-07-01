const path = require('path');
const express = require('express')
const fs = require('fs')
const manufacturers = JSON.parse(fs.readFileSync('sysexCompanies.json'))
const max = require('max-api')
let wss; 


// ***** Local UDP Send & Receive Config ******* //
let localReceivePort;
let localSendPort;

localReceivePort = 7404
localSendPort = 7403
mode = 'client'

// both modes require these libs
const { Client, Server } = require('node-osc');
const WebSocket = require('ws');
let ws; // keep this here

const localSend = new Client('127.0.0.1', localSendPort);
console.log('Configure your local pd patch(es) to listen on UDP Port ' + localSendPort)
// run the app in client mode
// ***** Websocket ******* //
// WebSocket that will automatically attempt to reconnect if the connection is closed, or if the remote server goes down
const ReconnectingWebSocket = require('reconnecting-websocket');
const serverIP = 'exitpoints.herokuapp.com'
const serverPort = '8081';
const serverWSAddress = `ws://${serverIP}/${serverPort}`;
// options for the reconnecting websocket
const rwsOptions = {
    // make rws use the webSocket module implementation
    WebSocket: WebSocket, 
    // ms to try reconnecting:
    connectionTimeout: 1000,
    //debug:true, 
}

// create a websocket
// console.log(`attempting to connect to server at ${serverWSAddress}`)
ws = new ReconnectingWebSocket(serverWSAddress, [], rwsOptions);

// if the server responds with an error
ws.addEventListener('error', () => {
    console.log(`connection error: ${serverIP}`);
});
// on successful connection to server:
ws.addEventListener('open', () => {
    console.log (`connected to server at ${serverWSAddress}`)
});
// on close:
ws.addEventListener('close', () => {
    console.log("server connection closed");
    localSend.close();
    localReceive.close();
});
// handle messages
ws.addEventListener('message', (data) => {
    let msg = JSON.parse(data.data);
    // console.log(msg)
    switch (msg.cmd){
        // in case you want to receive other data and route it elsewhere
        case 'OSC':
            // send formatted OSC message locally (i.e. a pd patch)
            localSend.send(msg.addressPattern, msg.typeTagString, (err) => {
                if (err) console.error(err);
            }); 
            max.outlet('OSC', msg.addressPattern, msg.typeTagString)              
        break;

        case "beat":
            // document.getElementById("beat").innerHTML = msg.data
            // beat.textContent = msg.data
            max.outlet('beat', msg.data)
            // $("beat").update(msg.data);
            //console.log(msg.data)
        break;
        case "MIDI_Timing":
                // document.getElementById("MIDITiming").innerHTML = MIDITimingCount++
                max.outlet('MIDI_Timing', msg.data)
        break
        case "bpm":
            // document.getElementById("bpm").value = msg.data
            console.log(msg.data)
            max.outlet('bpm', msg.data)
        break
        

        default:
            // inform user that unknown message commang used
            console.log('client sent message with unknown cmd: ' + JSON.stringify(msg))
        break;
    }
});

    // ***** Local UDP-Receiver ******* //


const localReceive = new Server(localReceivePort, '0.0.0.0');
// once running, inform user
localReceive.on('listening', () => {    
    console.log('Configure your local pd patch(es) to send on UDP Port ' + localReceivePort)
})
// handle message:  
localReceive.on('message', (msg) => {
    // validate correct OSC address pattern syntax
    // console.log(msg)
    if(msg[0].charAt(0) === '/'){
        // get the address pattern
        ap = msg[0]
        // trim the address pattern
        msg.shift()
        // construct object to send over websocket
        message = {
            // cmd allows us to send other types of messages, ask Michael for more info if curious!
            cmd: 'OSC',
            date: new Date().toUTCString(),
            addressPattern: ap,
            // this is the data!
            typeTagString: msg
        }
        // inform user
        // console.log('sending to remote:\n', message)
        // package data for the web, send it!
        // if(ws){
            ws.send(JSON.stringify(message))
        // }

    } else {
        // if incoming OSC message does not have an address pattern, refuse to handle it
        console.log('error, OSC Message must lead with an addressPattern\n\ni.e. /bioData')
    }
});




