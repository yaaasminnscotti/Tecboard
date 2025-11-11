import {ContainderFieldset} from "../../styles/global.js"


export function Fieldset(props){
    return(
        <ContainderFieldset>
            {props.children}
        </ContainderFieldset>
    )
}