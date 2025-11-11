import styled from "styled-components";

const Cards = styled.div`
    background-color: #212121;
    display: flex;
    flex-direction: column;
    max-width: 282px;
    width: 100%;
    color: #fff;
`

const BaixoCard= styled.div`
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;

    .tag{
        background-color: #4A4949;
        border-radius: 4px;
        padding: 8px;
        font-family: "Orbitron", sans-serif;
        font-weight: 700;
        font-size: 10px;
        line-height: 120%;
        letter-spacing: 10%;
        text-transform: uppercase;
    }

    .data{
        font-weight: 400;
        font-size: 13px;
        line-height: 120%;
    }

    h4{
        font-family: "Orbitron", sans-serif;
        font-weight: 700;
        font-size: 25px;
        line-height: 125%;
    }

    
`

const CardEvento=({evento})=>{
    return(
        <Cards>
            <img src={evento.capa} alt={evento.titulo} />
            <BaixoCard>
                <p className="tag">
                    {evento.tema.nome}
                </p>
                <p className="data">
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4>
                    {evento.titulo}
                </h4>
                <p>
                    {evento.paragrafo}
                </p>
            </BaixoCard>
        </Cards>
    )
}

export default CardEvento;
