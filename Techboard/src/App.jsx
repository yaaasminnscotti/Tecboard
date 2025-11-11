import Banner from "./components/Banner";
import Tema from "./components/Tema";
import FormularioDeEvento from "./components/FormularioDeEvento";
import Logo from "./components/Logo";
import "./reset.css";
import CardEvento from "./components/CardEvento";
import { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";

const ContainerTema=styled.section`
  display: flex;
  gap: 64px 24px;
  flex-wrap: wrap;

  @media(max-width:480px){
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 24px;
  }

`

const ContainerCards= styled.div`
  width: min(100%, 1200px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(max-width:1440px){
    margin: 0 20px 0 90px ;
  }

  @media(max-width:700px){
    align-items: center;
    margin: 0 auto;
  }
`
const AAA=styled.div`
  display: flex;
  justify-content: center;

  
`

function App() {
  const temas = [
    {
      id: 1,
      nome: "Front-end",
    },
    {
      id: 2,
      nome: "Back-end",
    },
    {
      id: 3,
      nome: "Devops",
    },
    {
      id: 4,
      nome: "Inteligência Artificial",
    },
    {
      id: 5,
      nome: "Data Science",
    },
    {
      id: 6,
      nome: "Cloud",
    },
  ];
  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
      paragrafo: "Valorizando e impulsionando a participação feminina no desenvolvimento front-end."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Pixel & Code",
      paragrafo: "Meetup unindo design e desenvolvimento front-end para explorar tendências em UI."
    },

    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Back-End Masters",
      paragrafo: "Performance e inovação no back-end, conectando especialistas e entusiastas."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_4.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Code to Core",
      paragrafo: "Workshop que explora a essência do back-end, escalabilidade e boas práticas."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_5.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Server Side Summit",
      paragrafo: "Evento dedicado a tecnologias e estratégias para desenvolvimento back-end."
    },

    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_6.png",
      tema: temas[2],
      data: new Date(),
      titulo: "DevOps Evolution",
      paragrafo: "Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações."
    },

    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_7.png",
      tema: temas[3],
      data: new Date(),
      titulo: "Deep Learning Days",
      paragrafo: "Imersão sobre IA, redes neurais e aprendizado profundo."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_8.png",
      tema: temas[3],
      data: new Date(),
      titulo: "IA na palma da mão",
      paragrafo: "Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_9.png",
      tema: temas[3],
      data: new Date(),
      titulo: "IA Segura e Acessível",
      paragrafo: "Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_10.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Data Pulse",
      paragrafo: "Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_11.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Data Revolution",
      paragrafo: "Palestra sobre últimas tendências em big data, análise e inteligência empresarial."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_12.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Driven by Data",
      paragrafo: "Minicurso sobre como dados impulsionam decisões e inovações para o futuro."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_13.png",
      tema: temas[4],
      data: new Date(),
      titulo: "SQL Summit",
      paragrafo: "Ciclo de palestras com especialistas do universo dos bancos de dados SQL."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_14.png",
      tema: temas[5],
      data: new Date(),
      titulo: "SkyTech Summit",
      paragrafo: "Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_15.png",
      tema: temas[5],
      data: new Date(),
      titulo: "Mundo Cloud",
      paragrafo: "Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud."
    },

  ]);

  function adicionaEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <>
    <main>
      <Logo />

      <Banner />

      <FormularioDeEvento temas={temas} aoSubmeter={adicionaEvento} />

<AAA>
    <ContainerCards>
      {temas.map(function (tema) {
        if(!eventos.some(function(evento){
          return evento.tema.id == tema.id
        })){
          return null
        }
        return (
        <><Tema tema={tema} />
          <ContainerTema key={tema.id}>
            
            {eventos 
              .filter((evento) => evento.tema.id === tema.id)
              .map((evento, index) => (
                <CardEvento evento={evento} key={index} />
              ))}
          </ContainerTema>
        </>);
      })}
      </ContainerCards></AAA>
    </main>
    <Footer />
    </>
  );
}

export default App;
