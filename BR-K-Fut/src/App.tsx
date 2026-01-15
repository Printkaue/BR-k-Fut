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
      <h1>Selecione o seu time</h1>
      <p>Resultados do brasileirão de 2003-2024</p>
      <input type="text" placeholder="digite um time" onChange={e => setRodada(e.target.value)}></input>

      <button onClick={buscar}>Buscar resultados</button>
      

      {loading && <p>carregando...</p>}

      <ul>
        {jogos.map(jogo => (
          <li key={jogo.ID}>
            {jogo.data} {" "} {"-"} {" "}
            {jogo.hora} {" "} {"-"} {" "}
            {"Rodada: "}{jogo.rodata} {" "} {"-"} {" "}
            {jogo.mandante} {jogo.mandante_Placar} x{" "}
            {jogo.visitante_Placar} {jogo.visitante}
          </li>
        ))}
      </ul>

      <p>Busque todos os jogos do seu timde no brasileirão desde de 2003 até 2024</p>
      <p>By: kaue Virgolino</p>

    </>
  )
}

export default App
