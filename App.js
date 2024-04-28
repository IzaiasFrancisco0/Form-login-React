import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa'

function App() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  const usuario = document.getElementById('usuario');
  const senha = document.getElementById('senha');

    alert("enviando os dados: " + "Email: " + username + " - " + "Senha: " + password)
 
 
}
  return (
    <div className="container">
      <form className="formulario" onSubmit={handleSubmit}> 
      <h1>Acesse o sistema</h1>
        <div class="input-field">
          <label htmlFor="usuario">Digite um Usuário</label>
          <input type="Email" id="usuario" name="username" required
          onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon"/>
        </div>
        <div class="input-field">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="password" required
          onChange={(e) => setPassword(e.target.value)}/>
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>  
            <input type="checkbox" />
            Lembre de mim
          </label>
          <span>Esqueceu a senha?</span> 
        </div>
        <button type="submit" id="botao">Enviar</button>
        <div className="criarConta">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
}


export default App;
