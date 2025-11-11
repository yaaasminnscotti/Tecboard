import {ConteudeLabel} from "../../styles/global.js"


export function Label({children, htmlFor}){
    return(
        <ConteudeLabel htmlFor={htmlFor}>
            {children}
        </ConteudeLabel>
    )
}