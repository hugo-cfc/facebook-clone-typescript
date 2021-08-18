import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoFacebook from '../../assets/images/facebookLogin.svg';

import {
  Container,
  Description,
  LoginContainer,
  ExternalLoginContainer,
  CreatePageContainer,
  Footer,
  InternalFooterContainer,
} from './style';

export const Login: React.FC = () => {
  const date = new Date();

  return (
    <Container>
      <main>
        <Description>
          <img src={LogoFacebook} alt="Facebook" />

          <article>
            <h2>
              O Facebook ajuda você a se conectar e compartilhar com as pessoas
              que fazem parte da sua vida.
            </h2>
          </article>
        </Description>

        <ExternalLoginContainer>
          <LoginContainer>
            <form>
              <input type="email" placeholder="Email ou telefone" />
              <input type="password" placeholder="Senha" />
              <NavLink to="/feed">
                <button id="login-button" type="submit">
                  Entrar
                </button>
              </NavLink>
              <div>
                <NavLink id="forget-password-link" to="/">
                  Esqueceu a senha?
                </NavLink>
              </div>
              <button id="new-account-button">Criar nova conta</button>
            </form>
          </LoginContainer>
          <CreatePageContainer>
            <NavLink to="/">Criar uma Página</NavLink> para uma celebridade,
            banda ou empresa.
          </CreatePageContainer>
        </ExternalLoginContainer>
      </main>
      <Footer>
        <InternalFooterContainer>
          <div id="languages-container">
            <NavLink to="/">Português (Brasil)</NavLink>
            <NavLink to="/">English (US)</NavLink>
            <NavLink to="/">Español</NavLink>
            <NavLink to="/">Français (France)</NavLink>
            <NavLink to="/">Italiano</NavLink>
            <NavLink to="/">العربية</NavLink>
            <NavLink to="/">Deutsch</NavLink>
            <NavLink to="/">हिन्दी</NavLink>
            <NavLink to="/">中文(简体)</NavLink>
            <NavLink to="/">日本語</NavLink>
            <button>+</button>
          </div>
          <div id="links-container">
            <ul>
              <li>
                <NavLink to="/">Cadastre-se</NavLink>
              </li>
              <li>
                <NavLink to="/">Entrar</NavLink>
              </li>
              <li>
                <NavLink to="/">Messenger</NavLink>
              </li>
              <li>
                <NavLink to="/">Facebook Lite</NavLink>
              </li>
              <li>
                <NavLink to="/">Watch</NavLink>
              </li>
              <li>
                <NavLink to="/">Pessoas</NavLink>
              </li>
              <li>
                <NavLink to="/">Páginas</NavLink>
              </li>
              <li>
                <NavLink to="/">Categorias de Página</NavLink>
              </li>
              <li>
                <NavLink to="/">Locais</NavLink>
              </li>
              <li>
                <NavLink to="/">Jogos</NavLink>
              </li>
              <li>
                <NavLink to="/">Marketplace</NavLink>
              </li>
              <li>
                <NavLink to="/">Facebook Pay</NavLink>
              </li>
              <li>
                <NavLink to="/">Grupos</NavLink>
              </li>
              <li>
                <NavLink to="/">Vagas de emprego</NavLink>
              </li>
              <li>
                <NavLink to="/">Oculus</NavLink>
              </li>
              <li>
                <NavLink to="/">Portal</NavLink>
              </li>
              <li>
                <NavLink to="/">Instagram</NavLink>
              </li>
              <li>
                <NavLink to="/">Local</NavLink>
              </li>
              <li>
                <NavLink to="/">Campanhas de arrecadação de fundos</NavLink>
              </li>
              <li>
                <NavLink to="/">Serviços</NavLink>
              </li>
              <li>
                <NavLink to="/">Central de Informações de Votação</NavLink>
              </li>
              <li>
                <NavLink to="/">Sobre</NavLink>
              </li>
              <li>
                <NavLink to="/">Criar Anúncio</NavLink>
              </li>
              <li>
                <NavLink to="/">Criar Página</NavLink>
              </li>
              <li>
                <NavLink to="/">Desenvolvedores</NavLink>
              </li>
              <li>
                <NavLink to="/">Carreiras</NavLink>
              </li>
              <li>
                <NavLink to="/">Privacidade</NavLink>
              </li>
              <li>
                <NavLink to="/">Cookies</NavLink>
              </li>
              <li>
                <NavLink to="/">Escolhas para anúncios</NavLink>
              </li>
              <li>
                <NavLink to="/">Termos</NavLink>
              </li>
              <li>
                <NavLink to="/">Ajuda</NavLink>
              </li>
            </ul>
          </div>
          <div>Facebook &copy; {date.getFullYear()}</div>
        </InternalFooterContainer>
      </Footer>
    </Container>
  );
};

export default Login;
