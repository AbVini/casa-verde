import styled from 'styled-components';
import logo from './logo.png';

const HeaderEstilizado = styled.header`
    display: flex;
    font-family: Montserrat;
    gap: 20%;
    padding-top:1rem;
    ul{
        list-style: none;
        display: flex;
        gap: 0.5rem;
        padding-top: 25px;
        
    }
    a{
        text-decoration:none;
        color: black;
        font-weight: 500;
    
    }
`

function MenuCabecalho() {
    return (
        <HeaderEstilizado>
            <img src={logo} alt="Logo da Casa Verde" />
            <nav>
                <ul>
                    <li><a href="#">Como Fazer</a></li> /
                    <li><a href="#">Ofertas</a></li> /
                    <li><a href="#">Depoimentos</a> </li>/
                    <li><a href="#">Videos</a></li> /
                    <li><a href="#">Meu Carrinho</a></li>
                </ul>
            </nav>
        </HeaderEstilizado>
    )
}

export default MenuCabecalho 