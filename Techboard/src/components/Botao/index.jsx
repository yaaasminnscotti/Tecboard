import { EhUmBotao } from "../../styles/global.js"

const Botao=(props)=>{
    return(
        <EhUmBotao>
            {props.children}
        </EhUmBotao>
    )
}

export default Botao;
