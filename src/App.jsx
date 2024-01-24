import styled from "styled-components";
import AssinaturaNewsletter from "./components/AssinaturaNewsletter";
import Menu from "./components/Menu";
import vetorBackground from './assets/Vector.png'

const Container = styled.div`
  width: 100vw;
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
      <ImagemEstilizada src={vetorBackground}/>
    </Container>

  )
}

export default App
