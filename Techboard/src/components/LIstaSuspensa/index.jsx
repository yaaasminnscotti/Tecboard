import {CampoListaSuspensa} from "../../styles/global.js"

const ListaSuspensa=({itens, ...rest})=>{
    return(
        <CampoListaSuspensa {...rest} defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            {itens.map(function(item){
                return(
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                )
            })}
        </CampoListaSuspensa>
    )
}

export default ListaSuspensa;
