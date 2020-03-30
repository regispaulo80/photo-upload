import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Favor Escanear o Código QR para Realizar o CheckIn</p>
        <img src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2F192.168.0.140%3A3000%2Froom%2F3&chs=180x180&choe=UTF-8&chld=L|2' alt=''></img>
    </div>
  );
}

export default App;