import styled from "styled-components";
import AssinaturaNewsletter from "./components/AssinaturaNewsletter";
import Menu from "./components/Menu";
import vetorBackground from './assets/Vector.png'
import Tutorial from './components/Tutorial';
import Ofertas from "./components/Ofertas";

const Container = styled.div`
  width: 60vw;
  height: 100vh;
  margin-left: 20%;
   
`
const ImagemEstilizada = styled.img`
  position: absolute;
  left: 50%;
  top: -50%;
  z-index:-1;
  width: 60%;
`

function App() {
  return (
    <Container>
      <Menu />
      <AssinaturaNewsletter />
      <ImagemEstilizada src={vetorBackground} />
      <Tutorial />
      <Ofertas/>
    </Container>

  )
}

export default App
