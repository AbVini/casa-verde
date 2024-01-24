// Importando componentes e bibliotecas necessários
import Texto from "../Texto";
import { fontePrimaria, fonteSecundaria } from "../CSS/Variaveis";
import styled from "styled-components";
import mail from './mail.png'
import plantaNoVaso from './plantaNoVaso.png';
import { useState } from "react";
import EnvioBemSucedido from "../EnvioBemSucedido";
import emailjs from '@emailjs/browser';

// Estilizando o componente ContainerNewsletter
const ContainerNewsletter = styled.div`
    display:flex;
    flex-direction: column;
    width: 500px;
    margin-top: 100px;
    gap:1rem;
    input, button{
        padding: 15px;
        border-style: none;
    }
`;

// Estilizando o componente CampoEmail
const CampoEmail = styled.input`
  width: 60%;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
  background-image : url(${(props) => props.$icone});
  background-repeat: no-repeat;
  background-position-x: 2%;
  background-position-y: 50%;
  text-indent: 20px;
`;

// Estilizando o componente Botao
export const Botao = styled.button`
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    background-color: #FFCB47;
    color: white;
`;

// Estilizando o componente ImagemEstilizada
const ImagemEstilizada = styled.img`
    position: absolute;
    top: 3%;
    right: 40%;
    left: 43%;
    width: 30%;
`;

// Estilizando o componente SpanEstilizado
const SpanEstilizado = styled.span`
    color:red;
    display:inline-block;
    font-family : ${fontePrimaria};
    margin-top: 10px;
`;

// Função principal do componente AssinaturaNewsletter
export default function AssinaturaNewsletter() {
    // Estados do componente
    const [email, setEmail] = useState('');
    const [erroEmail, setEmailErro] = useState('');
    const [modalAberta, setModalAberta] = useState(false);

    // Abre o modal
    function abrirModal() {
        setModalAberta(true);
    };

    // Fecha o modal
    function fecharModal() {
        setModalAberta(false);
    };

    // Validação do email
    function validarEmail(email) {
        if (email.length > 5 && !email.includes('@') && email.length === 0) {
            return setEmailErro('Email Inválido');
        } else {
            return setEmailErro('');
        }
    };

    // Obtém o nome do email
    function obterNome(email){
        const partesDoEmail = email.split('@');
        return partesDoEmail[0];
    };

    // Envia o email
    const EnviarEmail = (e) => {
        e.preventDefault();
        validarEmail(email);

        const nome = obterNome(email);
        const chavesDeAcesso = {
            serviceID: import.meta.env.VITE_SERVICE_ID,
            templateID: import.meta.env.VITE_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_PUBLIC_KEY
        };

        const templateParams = {
            to_email: email,
            from_name: 'Casa Verde',
            message: `Olá, ${nome}. Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!`,
        };

        // Envia o email usando o serviço emailjs
        emailjs.send(chavesDeAcesso.serviceID, chavesDeAcesso.templateID, templateParams, chavesDeAcesso.publicKey)
            .then((result) => {
                console.log(result.text);
                abrirModal(); // Abre o modal após o envio bem-sucedido
            })
            .catch((error) => {
                console.log(error.text);
                // Lida com o erro, se necessário
            });

        // Limpa o formulário após o envio
        e.target.reset();
    };
    return (
        <>
            <ContainerNewsletter>
                {/* Componente de texto para a introdução */}
                <Texto $tamanhodafonte="22" $familiadafonte={fontePrimaria} $pesodafonte={400}>
                    Sua casa com as
                </Texto>
                {/* Componente de texto para o título */}
                <Texto $tamanhodafonte="89" $familiadafonte={fonteSecundaria} $pesodafonte={900}>
                    melhores plantas
                </Texto>
                {/* Componente de texto para a descrição */}
                <Texto $tamanhodafonte="16" $familiadafonte={fontePrimaria} $pesodafonte={400} >Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </Texto>
                {/* Formulário de assinatura */}
                <form noValidate onSubmit={evento => EnviarEmail(evento)}>
                    {/* Campo de email */}
                    <CampoEmail
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Insira seu e-mail"
                        $icone={mail}
                        onChange={(evento) => setEmail(evento.target.value)}
                    />
                    {/* Botão de assinatura */}
                    <Botao type="submit">Assinar newsletter</Botao>
                    {/* Exibe mensagem de erro, se houver */}
                    {erroEmail && <SpanEstilizado>{erroEmail}</SpanEstilizado>}
                </form>
                {/* Componente para exibir mensagem de envio bem-sucedido */}
                <EnvioBemSucedido isOpen={modalAberta} onClose={fecharModal}>
                    Obrigado pela sua assinatura, você receberá nossas novidades no e-mail : {email}
                </EnvioBemSucedido>
            </ContainerNewsletter>
            {/* Imagem estilizada exibida à direita do formulário */}
            <ImagemEstilizada src={plantaNoVaso} alt="" />
        </>
    )
}
