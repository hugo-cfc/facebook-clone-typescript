import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
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
`;
