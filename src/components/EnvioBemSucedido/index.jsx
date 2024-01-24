import styled from "styled-components";
import { fontePrimaria } from "../CSS/Variaveis";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Content = styled.div`
  font-family: ${fontePrimaria};
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display:flex;
  flex-direction: column;
  gap:20px;
  align-items: end;
`;

const Button = styled.button`
    margin-top: 10px;
    max-width: 5rem;
    text-align: center;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    background-color: #FFCB47;
    color: white;
`;


const EnvioBemSucedido = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;
  
    return (
      <Overlay>
        <Content>
          {children} 
          <Button onClick={onClose}>Fechar</Button>
        </Content>
      </Overlay>
    );
  };

export default EnvioBemSucedido