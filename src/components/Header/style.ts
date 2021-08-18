import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const ContainerGeneral = styled.div`
  height: 56px;
  width: 100vw;
  padding: 0 16px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const FirstContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  margin-right: 12px;
`;

export const InputContainer = styled.div`
  height: 40px;
  width: 240px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  border-radius: 50px;
`;

export const LogoInput = styled.img`
  width: 16px;
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  background: ${(props) => props.theme.colors.background};
  border: none;
  outline: none;
  height: 40px;
  padding: 16px 9px;
  box-sizing: border-box;
`;

export const MiddleContainer = styled.div`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;

export const Ul = styled.ul`
  height: 100%;
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.colors.primary};
  list-style: none;
`;

export const Li = styled.li`
  height: 100%;
  display: inline;
`;

export const LinksNav = styled(NavLink)`
  width: 111.6px;
  height: 100%;
  padding: 2px 10px;
  display: inline-block;
  border-bottom: 2px solid red;
  text-decoration: none;
`;

export const NavButtons = styled.svg`
  width: 28px;
  height: 28px;
  fill: ${(props) => props.theme.colors.secundary};
`;

export const LastContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
