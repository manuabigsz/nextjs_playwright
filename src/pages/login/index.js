import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes('@')) {
      setErro('Email inválido');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setErro('');
    alert('Login enviado com sucesso!');
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            data-testid="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Senha:</label><br />
          <input
            data-testid="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {erro && (
          <p data-testid="erro" style={{ color: 'red' }}>{erro}</p>
        )}

        <button type="submit" style={{ marginTop: '1rem' }}>Entrar</button>
      </form>
    </main>
  );
}
