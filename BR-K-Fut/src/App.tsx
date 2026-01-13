import { useState } from 'react'
import './App.css'

function App() {
  const [rodada, setRodada] = useState("");
  const [jogos, setJogos] = useState([]);
  const [loading, setloading] = useState(false);

  const buscar = () => {
    if (!rodada){
      return;
    }

    setloading(true);

     fetch(`http://localhost:5000/rodada?n=${rodada}`)
      .then(res => res.json())
      .then(data => {
        setJogos(data);
        setloading(false);
      });
  };

  return (
    <>
      <h1>Selecione rodada</h1>
      <input type="number" placeholder="digite um numero" onChange={e => setRodada(e.target.value)}></input>

      <button onClick={buscar}>Buscar rodada</button>

      {loading && <p>carregando...</p>}

      <ul>
        {jogos.map(jogo => (
          <li key={jogo.ID}>
            {jogo.data} {" "} {"-"} {" "}
            {jogo.mandante} {jogo.mandante_Placar} x{" "}
            {jogo.visitante_Placar} {jogo.visitante}
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
