import styled from "styled-components";
import { fontePrimaria ,fonteSecundaria } from "../CSS/Variaveis";

const TituloEstilizado = styled.p`
  font-family: ${(props) => (props.$familiadafonte === fontePrimaria ? fontePrimaria : fonteSecundaria )};
  font-weight: ${(props) => props.$pesodafonte || 400};
  font-size: ${(props) => props.$tamanhodafonte}px;
  line-height: 120%;
`;

export default function Texto({ children, $tamanhodafonte, $familiadafonte, $pesodafonte }) {
  return (
    <TituloEstilizado $tamanhodafonte={$tamanhodafonte} $familiadafonte={$familiadafonte} $pesodafonte={$pesodafonte}>
      {children}
    </TituloEstilizado>
  );
}
