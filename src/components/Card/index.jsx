import Texto from '@/components/Texto';
import { fontePrimaria, fonteSecundaria } from '../CSS/Variaveis';
import styled from 'styled-components';
import seta from './seta.png';


const Container = styled.div`
    width: 379px;
    height: 200px;
    display: flex;
    text-align: left;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    position: relative;
    img{
        max-height:200px;
        position:absolute;
    }
    a{
        color: #FFCB47;
        font-family: ${fontePrimaria};
        text-decoration:none;
    };
    div{
        display:flex;
        flex-direction: column;
        gap: 20px;
        padding-left: 210px;
        
    };
`

function Card({titulo, preco, img}) {
    return (
        <Container>
            <img src={img} alt={titulo} />
            <div>
                <Texto $tamanhodafonte={32} $familiadafonte={fonteSecundaria} $pesodafonte={900}>{titulo}</Texto>
                <Texto $tamanhodafonte={16} $familiadafonte={fontePrimaria} $pesodafonte={400}>R$ {preco}</Texto>
                <a href='#'>Comprar <img src={seta} alt="" /></a>
            </div>
        </Container>  
    )

}

export default Card