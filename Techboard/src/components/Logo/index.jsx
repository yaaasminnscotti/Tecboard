import styled from "styled-components"
import LogoTech from "../../assets/Logo.png"
import LogoMobile from "../../assets/logo-mobile.png"

const FundoHeader = styled.header`
    background-color: #06151A;
    display: flex;
    justify-content: center;
    padding: 32px;

    @media(max-width: 360px){
        padding: 0;
    }

    .LogoDesktop{
    @media(max-width:360px){
            display: none;            
        }
    }

    .LogoMobile{
        display: none;

        @media(max-width:360px){
            position: relative;
            display: block;
        }
    }
`

const Logo =()=>{
    return(
        <FundoHeader>
            <img src={LogoMobile} className="LogoMobile" alt="Logo em mobile" />
        <img src={LogoTech} className="LogoDesktop" alt="Logo da Techboard" />
      </FundoHeader>
    )
}

export default Logo
