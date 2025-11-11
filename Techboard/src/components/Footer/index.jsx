import styled from "styled-components";
import Techboard from "../../assets/Logo.png"

const EstilosFooter=styled.footer`
    margin: 60px 0 20px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p{
        color: #fff;
        font-size: 14px;
        line-height: 125%;
        font-weight: 500;
    }

    @media(max-width:360px){
        p{
            margin: 16px;
            text-align: center;
        }
    }
`

const Footer=()=>{
    return(
        <EstilosFooter>
            <img src={Techboard} alt="" />
            <p>
                Desenvolvido por Alura. Projeto fictício  sem fins comerciais.
            </p>
        </EstilosFooter>
    )
}

export default Footer;
