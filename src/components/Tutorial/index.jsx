import Texto from '@/components/Texto';
import plantaTutorial from './PlantaTutorial.png';
import styled from "styled-components";
import { fontePrimaria, fonteSecundaria } from "../CSS/Variaveis";
import ellipse from './Ellipse.png'

const Container = styled.div`
   display:grid;
   grid-template-columns: auto auto;
   width: 995px;
   height:440px;
   background-color: white;
   padding-top: 30px;
   margin-top:120px;
   margin-bottom: 30px;
   filter: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.06));
   div{
    display: flex;
    flex-direction: column;
    justify-content: center;
   }
`;
const ListaEstilizada = styled.ul`
   display: flex;
   flex-direction: column;
   gap:20px;
  
`
const ItemListaEstilizada = styled.li`
   display: flex;
   align-items: center;
   gap: 1rem;
`

function Tutorial() {
    return (
        <Container>
            <img src={plantaTutorial} alt="" />
            <div>
                <Texto $familiadafonte={fontePrimaria} $tamanhodafonte={22} $pesodafonte={400}>Como conseguir</Texto>
                <Texto $familiadafonte={fonteSecundaria} $tamanhodafonte={42} $pesodafonte={900}>minha planta</Texto>
                <ListaEstilizada>
                    <ItemListaEstilizada>
                        <img src={ellipse} alt="" />
                        <Texto $familiadafonte={fontePrimaria} $tamanhodafonte={22} $pesodafonte={400}>Escolha suas plantas</Texto>
                    </ItemListaEstilizada>
                    <ItemListaEstilizada>
                        <img src={ellipse} alt="" />
                        <Texto $familiadafonte={fontePrimaria} $tamanhodafonte={22} $pesodafonte={400}>Faça seu pedido</Texto>
                    </ItemListaEstilizada>
                    <ItemListaEstilizada>
                        <img src={ellipse} alt="" />
                        <Texto $familiadafonte={fontePrimaria} $tamanhodafonte={22} $pesodafonte={400}>Aguarde na sua casa</Texto>
                    </ItemListaEstilizada>
                </ListaEstilizada>
            </div>
        </Container>
    )
}

export default Tutorial