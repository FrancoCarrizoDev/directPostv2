
/* CSS */
import './App.css';
import './components/header/Header.css';
import './components/login/Login.css';
import './components/footer/Footer.css';
import './components/error/Error.css';

import socketIOClient from "socket.io-client";


import Router from './components/router/Router';
/* COMPONENTES */

import React, { useEffect } from "react";

const ENDPOINT = "ws://localhost:7000";

function App() {
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    var services = [];

    var login = null;
    
    socket.on("connect", () => {
      console.log('WS conectado');
    });

    socket.on('app', (data) => {
      var obj = {
        app: 'BPHUWHQGHBNQAHUAHUQGHBMHBQAHQYVHNUGHCHBUAHXJHNYHPAHJGHZHBKUAHYHWHUNGHBJAHMQAHMYHLAHPGHKBAHVPGHNDHMMGHGHUGHDHJYJHMMAHQBNJAHJNXHWHQMGHBLAHPAHPBNAHDHKGHVDHKHQY'
      }
      if(localStorage.getItem('key')!=null){
        obj.myKey = localStorage.getItem('key');
      }
      socket.emit(data, obj)
    })

    socket.on('appinitialized',(data) => {
      services = data.services ? data.services : [];
      localStorage.setItem('key',data.mykey)
      console.log(services)

      requestws('DP_login',{
        email: 'info@gitcordoba.com',
        pass: 'A7Z9'
      })
    })

    function requestws(name, body) {
      for (let index = 0; index < services.length; index++) {
        if(services[index].name == name){
          socket.emit(services[index].call, body);
        }
      }
    }

    
    socket.on('DP_login', (data) => {
      console.log(data)
      if(data.code == 2){
        login = data;
      }else{

      }
    })
    
  }, []);

  return (
    <div className="App" id="app">
      <Router></Router>
    </div>
  );
}

export default App;
