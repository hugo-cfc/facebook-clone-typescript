import React from 'react';

import FacebookLogo from '../../assets/icons/facebookCircle.svg';
import SearchIcon from '../../assets/icons/searchicon.svg';

import {
  ContainerGeneral,
  FirstContainer,
  Logo,
  LogoInput,
  InputContainer,
  SearchInput,
  MiddleContainer,
  Ul,
  Li,
  LinksNav,
  NavButtons,
  LastContainer,
} from './style';

export const Header: React.FC = () => {
  return (
    <ContainerGeneral>
      <FirstContainer>
        <Logo src={FacebookLogo} />
        <InputContainer>
          <LogoInput src={SearchIcon} />
          <SearchInput placeholder="Pesquisar no Facebook" />
        </InputContainer>
      </FirstContainer>
      <MiddleContainer>
        <Ul>
          <Li>
            <LinksNav to="/">
              <NavButtons viewBox="0 0 48 48">
                <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
              </NavButtons>
            </LinksNav>
          </Li>
          <Li>
            <LinksNav to="/">
              <NavButtons viewBox="0 0 48 48">
                <path d="M43,42H5c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v28  C47,40.209,45.209,42,43,42z M12,8H5c-1.104,0-2,0.896-2,2v2h9V8z M23,8h-9v4h9V8z M34,8h-9v4h9V8z M45,10c0-1.104-0.896-2-2-2h-7v4  h9l0,0V10z M45,14L45,14H3v20h42l0,0V14z M45,36L45,36h-9v4h-2v-4h-9v4h-2v-4h-9v4h-2v-4H3v2c0,1.104,0.896,2,2,2h38  c1.104,0,2-0.896,2-2V36z M21.621,29.765C21.449,29.904,21.238,30,21,30c-0.553,0-1-0.447-1-1V19c0-0.552,0.447-1,1-1  c0.213,0,0.4,0.082,0.563,0.196l7.771,4.872C29.72,23.205,30,23.566,30,24c0,0.325-0.165,0.601-0.405,0.783L21.621,29.765z" />
              </NavButtons>
            </LinksNav>
          </Li>
          <Li>
            <LinksNav to="/">
              <NavButtons viewBox="0 0 256 256">
                <g>
                  <path d="M92.4,129H60.9c-2.7,0-4.9,2.2-4.9,4.9v25.9c0,2.7,2.2,4.9,4.9,4.9h31.5c2.7,0,4.9-2.2,4.9-4.9v-25.9   C97.3,131.2,95.1,129,92.4,129z M87.5,154.9H65.7v-16.1h21.8V154.9z" />
                  <path d="M143.8,129h-31.5c-2.7,0-4.9,2.2-4.9,4.9v25.9c0,2.7,2.2,4.9,4.9,4.9h31.5c2.7,0,4.9-2.2,4.9-4.9v-25.9   C148.7,131.2,146.5,129,143.8,129z M138.9,154.9h-21.8v-16.1h21.8V154.9z" />
                  <path d="M195.3,129h-31.5c-2.7,0-4.9,2.2-4.9,4.9v25.9c0,2.7,2.2,4.9,4.9,4.9h31.5c2.7,0,4.9-2.2,4.9-4.9v-25.9   C200.2,131.2,198,129,195.3,129z M190.4,154.9h-21.8v-16.1h21.8V154.9z" />
                  <path d="M248.6,90.7l-17.2-51.9c-0.7-2-2.5-3.4-4.6-3.4H29.3c-2.1,0-4,1.3-4.6,3.4L7.4,90.7c-0.4,0.7-0.6,1.4-0.6,2.3   c-0.1,2.7,2.2,4.9,4.9,5c6.7,0.2,13.1,2.7,17.8,7.2c0.7,0.7,1.5,1.4,2.3,2.1l-0.1,108.4c0,1.3,0.5,2.5,1.4,3.5   c0.9,0.9,2.2,1.4,3.5,1.4h182.8c2.7,0,4.9-2.2,4.9-4.9l0-108.5c0.7-0.6,1.5-1.2,2.1-1.9c4.9-4.5,11.2-7.1,18-7.3   c2.7-0.1,4.8-2.4,4.8-5C249.2,92.2,248.9,91.4,248.6,90.7z M214.5,210.7h-173l0-19.7h172.9L214.5,210.7z M214.5,181.3H41.5   l0.1-68.9c2.7,0.8,5.5,1.3,8.4,1.3c7.7,0,15-3,20.5-8.5c9.7-9.7,26.6-9.6,36.9,0.1c5.6,5.4,12.9,8.4,20.6,8.4c7.7,0,15-3,20.6-8.4   c10.1-9.7,27-9.7,36.9-0.1c5.5,5.5,12.7,8.5,20.5,8.5c2.9,0,5.7-0.5,8.5-1.3L214.5,181.3z M219.6,98.2c-0.6,0.6-1.3,1.2-2.1,1.8   c-0.6,0.3-1.1,0.6-1.6,1.1c-3,1.8-6.4,2.8-9.9,2.8c-5.1,0-9.9-2-13.6-5.7c-13.7-13.2-36.8-13.2-50.6,0c-3.8,3.6-8.7,5.6-13.8,5.7   c-5.1,0-10.1-2-13.9-5.7c-7-6.6-16.3-9.9-25.5-9.9c-9.2,0-18.4,3.3-25.1,10c-3.6,3.6-8.4,5.6-13.5,5.6c-3.4,0-6.7-0.9-9.7-2.6   c-0.5-0.6-1.2-1-1.9-1.3c-0.7-0.5-1.4-1.1-2.1-1.8c-5-4.7-11.3-7.9-17.9-9.2l14.5-43.7h190.3l14.5,43.7   C230.9,90.3,224.7,93.4,219.6,98.2z" />
                </g>
              </NavButtons>
            </LinksNav>
          </Li>
          <Li>
            <LinksNav to="/">
              <NavButtons viewBox="0 0 80.13 80.13">
                <path
                  d="M48.355,17.922c3.705,2.323,6.303,6.254,6.776,10.817c1.511,0.706,3.188,1.112,4.966,1.112
                    c6.491,0,11.752-5.261,11.752-11.751c0-6.491-5.261-11.752-11.752-11.752C53.668,6.35,48.453,11.517,48.355,17.922z M40.656,41.984
                    c6.491,0,11.752-5.262,11.752-11.752s-5.262-11.751-11.752-11.751c-6.49,0-11.754,5.262-11.754,11.752S34.166,41.984,40.656,41.984
                    z M45.641,42.785h-9.972c-8.297,0-15.047,6.751-15.047,15.048v12.195l0.031,0.191l0.84,0.263
                    c7.918,2.474,14.797,3.299,20.459,3.299c11.059,0,17.469-3.153,17.864-3.354l0.785-0.397h0.084V57.833
                    C60.688,49.536,53.938,42.785,45.641,42.785z M65.084,30.653h-9.895c-0.107,3.959-1.797,7.524-4.47,10.088
                    c7.375,2.193,12.771,9.032,12.771,17.11v3.758c9.77-0.358,15.4-3.127,15.771-3.313l0.785-0.398h0.084V45.699
                    C80.13,37.403,73.38,30.653,65.084,30.653z M20.035,29.853c2.299,0,4.438-0.671,6.25-1.814c0.576-3.757,2.59-7.04,5.467-9.276
                    c0.012-0.22,0.033-0.438,0.033-0.66c0-6.491-5.262-11.752-11.75-11.752c-6.492,0-11.752,5.261-11.752,11.752
                    C8.283,24.591,13.543,29.853,20.035,29.853z M30.589,40.741c-2.66-2.551-4.344-6.097-4.467-10.032
                    c-0.367-0.027-0.73-0.056-1.104-0.056h-9.971C6.75,30.653,0,37.403,0,45.699v12.197l0.031,0.188l0.84,0.265
                    c6.352,1.983,12.021,2.897,16.945,3.185v-3.683C17.818,49.773,23.212,42.936,30.589,40.741z"
                />
              </NavButtons>
            </LinksNav>
          </Li>
          <Li>
            <LinksNav to="/">
              <NavButtons viewBox="0 0 24 24">
                <path d="M 4.1992188 2 C 2.9962489 2 2 2.9962489 2 4.1992188 L 2 19.800781 C 2 21.003751 2.9962489 22 4.1992188 22 L 19.800781 22 C 21.003751 22 22 21.003751 22 19.800781 L 22 4.1992188 C 22 2.9962489 21.003751 2 19.800781 2 L 4.1992188 2 z M 4.1992188 4 L 19.800781 4 C 19.923811 4 20 4.0761886 20 4.1992188 L 20 8 L 8 8 L 8 16 L 14 16 L 14 20 L 4.1992188 20 C 4.0761886 20 4 19.923811 4 19.800781 L 4 4.1992188 C 4 4.0761886 4.0761886 4 4.1992188 4 z M 10 10 L 20 10 L 20 19.800781 C 20 19.923811 19.923811 20 19.800781 20 L 16 20 L 16 14 L 10 14 L 10 10 z" />
              </NavButtons>
            </LinksNav>
          </Li>
        </Ul>
      </MiddleContainer>
      <LastContainer>sdhakj</LastContainer>
    </ContainerGeneral>
  );
};

export default Header;
