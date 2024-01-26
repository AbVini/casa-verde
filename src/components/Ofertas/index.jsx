import Texto from '@/components/Texto/';
import styled from 'styled-components';
import Card from '../Card';
import { fontePrimaria, fonteSecundaria } from '../CSS/Variaveis';
import { useEffect, useState } from 'react';

const Container = styled.div`
    text-align: center;
    position: relative;
    section{
        display:flex;
        gap: 20px;
    }   
    select{
        height: 2rem;
        background-color: white;
        box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
        font-family: ${fontePrimaria};

    }
    option{
        box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    }
`;

const CabecalhoOfertas = styled.div`
    display:flex;
    justify-content: space-evenly;
`;

const ContainerOpcoes = styled.div`
    display:flex;
    font-family: ${fontePrimaria};
    margin-top: 2rem;
    gap: 1rem;
    align-items:center;
    
`


function Ofertas() {

    const url = 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz-_i_iR0FWIDZlk_IzZ0_nwdoCO8yhR7MyIhi_b88TrokWdd_b-PC0xUgD4zpIGeBWmH45nBzR7C8r2eSd3eAZAxKkfS5g&utm_content=231361624&utm_source=hs_automation'

    const [plantas, setPlantas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro HTTP! Status: ${response.status}`);
                }

                const dados = await response.json();
                setPlantas(dados);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    const [filtroPreco, setFiltroPreco] = useState('');
    const [plantasFiltradas, setPlantasFiltradas] = useState([]);

    function filtrarPlantas(evento) {
        setFiltroPreco(evento.target.value);
    }

    useEffect(() => {
        switch (filtroPreco) {
            case 'menorPreco':
                // Lógica para filtrar por menor preço
                setPlantasFiltradas([...plantas].sort((a, b) => a.preco - b.preco));
                break;
            case 'maiorPreco':
                // Lógica para filtrar por maior preço
                setPlantasFiltradas([...plantas].sort((a, b) => b.preco - a.preco));
                break;
            default:
                // Se o filtroPreco não corresponde a nenhum caso conhecido, exibe todas as plantas
                setPlantasFiltradas([...plantas]);
        }
    }, [filtroPreco, plantas]);



    return (
        <Container>
            <CabecalhoOfertas>
                <Texto $tamanhodafonte={82} $familiadafonte={fonteSecundaria} $pesodafonte={900} >Nossas plantas</Texto>
                <ContainerOpcoes>
                    <label>Ordenar por:</label>
                    <select value={filtroPreco} onChange={evento => filtrarPlantas(evento)}>
                        <option value="">Selecione</option>
                        <option value="menorPreco">Menor preço</option>
                        <option value="maiorPreco">Maior preço</option>
                    </select>
                </ContainerOpcoes>
            </CabecalhoOfertas>
            <section>
                {plantasFiltradas.map(planta => (
                    <Card key={planta.ordem}
                        img={`/src/assets/${planta.img}.png`}
                        preco={Number(planta.preco).toFixed(2)}
                        titulo={planta.name}
                    />
                ))}
            </section>
        </Container>
    )
}

export default Ofertas