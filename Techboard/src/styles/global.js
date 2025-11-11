import styled from "styled-components";

export const Titulos = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
  color: #fff;
  margin-bottom: 32px;
`;

export const ContainderFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const ConteudeLabel = styled.label`
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  line-height: 120%;
  margin-top: 8px;
`;

export const InputDeTexto = styled.input`
  background-color: transparent;
  border: 1px solid #4a4949;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #fff;
  padding: 8px 16px;

  ::placeholder {
    color: #4a4949;
  }
`;

export const EhUmBotao = styled.button`
  background-color: #17d9b1;
  font-size: 16px;
  font-weight: 600;
  line-height: 120%;
  color: #212121;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const CampoListaSuspensa = styled.select`
  background-color: transparent;
  border: 1px solid #4a4949;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #ffffffff;
  padding: 8px 16px;

  option {
    color: #000;
    background-color: #b3aeaeff;
  }
`;

export const TemaCards = styled.h3`
  font-family: "Orbitron", sans-serif;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: 10%;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
`;

