import styled, { css } from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  height: 56px;
  width: 100vw;
  padding: 0 16px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }

  div#input-container {
    height: 40px;
    width: 240px;
    background: ${(props) => props.theme.colors.background};
    display: flex;
    align-items: center;
    border-radius: 50px;

    svg {
      width: 18px;
      margin-left: 12px;

      circle,
      line {
        stroke: ${(props) => props.theme.colors.textSecundary};
      }
    }

    input {
      background: ${(props) => props.theme.colors.background};
      border: none;
      outline: none;
      height: 40px;
      padding: 16px 9px;
      box-sizing: border-box;
      flex: 1;
      border-radius: 50px;

      &::placeholder {
        font-size: 15px;
      }
    }
  }
`;

export const NavContainer = styled.div`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  ul {
    height: 100%;
    padding: 0;
    margin: 0;
    background: ${(props) => props.theme.colors.primary};
    list-style: none;

    li {
      height: 100%;
      display: inline;
    }
  }
`;

interface NavLinkProps {
  active?: boolean | string;
}

export const NavLink = styled(LinkRouter)<NavLinkProps>`
  width: 111.6px;
  height: 100%;
  display: inline-block;
  padding: 3px;
  text-decoration: none;

  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid ${props.theme.colors.secundary};
    `}

  div {
    height: 100%;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    ${(props) =>
      !props.active &&
      css`
      &:hover {
        background: rgba(0, 0, 0, 0.1)};
      }
    `}

    svg {
      fill: ${(props) => props.theme.colors.textSecundary};
      ${(props) =>
        props.active &&
        css`
          fill: ${props.theme.colors.secundary};
        `}
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  div#user-details {
    display: flex;
    align-items: center;
    margin-right: 20px;

    img {
      width: 28px;
      border-radius: 50%;
      margin-right: 6px;
    }

    font-size: 15px;
    font-weight: 600;
  }

  div#containet-options-buttons {
    button {
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 50%;

      & + button {
        margin-left: 8px;
      }
    }
  }
`;
