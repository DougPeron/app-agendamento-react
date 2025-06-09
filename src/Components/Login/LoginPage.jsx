import React from 'react'
import { useState } from 'react';
import './LoginPage.scss'

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [userpassword, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(username == 'admin@email.com' && userpassword == 'admin'){
            alert('logado');
        }else{
            alert('Credenciais inválidas!');
        }   
    };
  return (
    <div className='login-container'>
        <div className='login-card'>
            <div className='form-section'>
                <h1 className='title'>Seja bem-vindo</h1>
                <p className='subtitle'>Entre com sua conta para acessar o painel</p>
                <form onSubmit={handleSubmit} className='form' htmlFor='formulario'>   
                    <div className='input-group'>
                        <label htmlFor="email" className="label" id=''>E-mail</label>
                        <input className='input' type="email" placeholder="admin@email.com" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password" className='label' id=''>Senha</label>
                        <input className='input' type="password" placeholder="admin" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='submit-button'>Entrar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage;
