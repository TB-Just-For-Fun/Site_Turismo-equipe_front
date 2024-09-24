import React from "react";
import './css/css1.css'; // Importando o CSS para estilizar

// Dados dos pacotes (array de objetos)
const pacotes = [
  {
    descricao: "Explore o mundo com nosso pacote especial, que inclui uma variedade de atividades emocionantes e relaxantes.",
    detalhes: {
      atividade: "Passeios guiados",
      duracao: "7 Dias",
      voos: "Incluídos",
      alojamento: "Hotel 4 estrelas",
      refeicoes: "Pensão Completa",
    },
    servicos: ["Transportes em veículos 4x4", "Motoristas experientes", "Seguro de viagem"],
  },
 
];

function Detalhes() {
  // Variável para armazenar o conteúdo gerado dentro do loop
  const pacotesRenderizados = []; 

  // Usando um loop for para renderizar os pacotes
  for (let i = 0; i < pacotes.length; i++) {
    pacotesRenderizados.push(
      <div key={i}>
        {/* Descrição do Pacote */}
        <section className="detalhamento-descricao">
          <h2>Descrição</h2>
          <p>{pacotes[i].descricao}</p>
        </section>

        {/* Detalhes do Pacote em formato de tabela */}
        <section className="detalhamento-info">
          <h2>Detalhes do Pacote</h2>
          <table>
            <tbody>
              <tr>
                <th>Atividade:</th>
                <td>{pacotes[i].detalhes.atividade}</td>
              </tr>
              <tr>
                <th>Duração:</th>
                <td>{pacotes[i].detalhes.duracao}</td>
              </tr>
              <tr>
                <th>Voos:</th>
                <td>{pacotes[i].detalhes.voos}</td>
              </tr>
              <tr>
                <th>Alojamento:</th>
                <td>{pacotes[i].detalhes.alojamento}</td>
              </tr>
              <tr>
                <th>Refeições:</th>
                <td>{pacotes[i].detalhes.refeicoes}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Lista de Serviços Incluídos */}
        <section className="detalhamento-servicos">
          <h2>Serviços Incluídos</h2>
          <ul>
            {pacotes[i].servicos.map((servico, servicoIndex) => (
              <li key={servicoIndex}>{servico}</li>
            ))}
          </ul>
        </section>

        {/* Botão de Reservar */}
        <div className="Bottom">
          <button>Reservar Agora</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Detalhamento de Pacotes</h1>
      {/* Renderiza todos os pacotes gerados no loop for */}
      {pacotesRenderizados}
    </>
  );
}

export default Detalhes;
