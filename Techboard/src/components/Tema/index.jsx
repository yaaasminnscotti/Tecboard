import {TemaCards} from "../../styles/global.js"

const Tema=({tema}) =>{
  return (
    <>
    <TemaCards>{tema.nome}</TemaCards>
    </>
  );
}

export default Tema;