import styled from "styled-components";
import { Titulo } from "../Titulo";
import { Fieldset } from "../Fieldset";
import { Label } from "../Label";
import { InputTexto } from "../InputTexto";
import Botao from "../Botao";
import ListaSuspensa from "../LIstaSuspensa";

const Formulario= styled.form`
    background-color: #212121;
    padding: 32px 28px;
    border-radius: 16px;
    width: 384px;
    max-width: 90%;
    margin: 64px auto;

    @media(max-width: 360px){
        width: 328px;
        margin: 32px auto;
        padding: 10px;
    }

`

const ContainderFieldset= styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const AlinhaBotao=styled.div`
    margin-top: 32px;
    text-align: center;

`

const FormularioDeEvento =({temas, aoSubmeter})=>{

    function aoFormSubmetido(formData){
        console.log('opa, ta  na hora de criar um novo evento', formData)
        const evento={
            capa: formData.get('capa'),
            tema: temas.find(function (item){
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('dataEvento')),
            titulo: "Mulheres no Front"
        }

        aoSubmeter(evento)
    }

    return(
        <Formulario action={aoFormSubmetido}>
            <Titulo>
                Preencha para criar um evento:
            </Titulo>
            <ContainderFieldset>
               <Fieldset>
                <Label htmlFor="nome">
                    Qual é o nome do evento?
                    </Label>
                <InputTexto
                type="text" 
                id="nome" 
                placeholder="Summer dev hits"
                name="nomeEvento"
                />
            </Fieldset>

            <Fieldset>
                <Label htmlFor="nome">
                    Qual o endereço da imagem de capa?
                    </Label>
                <InputTexto
                type="text" 
                id="capa" 
                placeholder="http://..."
                name="capa"
                />
            </Fieldset>

            <Fieldset>
                <Label htmlFor="data">
                    Data do evento
                    </Label>
                <InputTexto 
                type="date" 
                id="data" 
                placeholder="XX/XX/XXXX"
                name="dataEvento"
                />
            </Fieldset> 

            <Fieldset>
                <Label htmlFor="tema">
                    Tema do evento
                    </Label>
                <ListaSuspensa itens={temas} id="tema" name="tema" />
            </Fieldset> 
            </ContainderFieldset>
            
            <AlinhaBotao>
                <Botao>
                    Criar evento
                </Botao>
            </AlinhaBotao>
        </Formulario>
    )
}

export default FormularioDeEvento;
