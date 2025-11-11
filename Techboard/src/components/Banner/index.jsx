import styled from "styled-components"
import BannerTech from "../../assets/banner.png"

const FundoGradiente= styled.section`
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #17E4B9 0%, #091D24 100%);

    img{
        max-width: 90%;
    }

`

const Banner =()=>{
    return(
        <FundoGradiente>
            <img src={BannerTech} alt="Banner da Techboard" />
        </FundoGradiente>
    )
}

export default Banner
