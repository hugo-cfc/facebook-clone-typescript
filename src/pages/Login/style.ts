import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  min-height: 720px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  main {
    width: 980px;
    margin: 0 auto;
    background: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    @media (max-width: 1075px) {
      width: 100vw;
      padding: 0px 55px 0px 55px;
    }

    @media (max-width: 900px) {
      padding: 0;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Description = styled.section`
  width: 500px;

  img {
    width: 301px;
    height: 106px;
    margin-left: -26px;
  }

  h2 {
    font-size: 28px;
    line-height: 32px;
    color: ${(props) => props.theme.colors.text};
    font-family: Helvetica;
    font-weight: normal;
  }

  @media (max-width: 1075px) {
    width: 400px;

    h2 {
      font-size: 24px;
      line-height: 28px;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;

export const ExternalLoginContainer = styled.div`
  width: 396px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginContainer = styled.div`
  height: 311px;
  padding: 0 10px;
  padding-top: 10px;
  padding-bottom: 24px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    margin: 6px 0;
    border: 1px solid #dddfe2;
    padding: 14px 16px;
    border-radius: 6px;
    &::placeholder {
      opacity: 0.8;
    }
    &:focus {
      outline: none;
      border: 1px solid #1877f2;
      box-shadow: 0 0 0 2px #e7f3ff;
      caret-color: #1877f2;
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  a:first-child {
    text-decoration: none;
  }

  button#login-button {
    width: 100%;
    margin-top: 6px;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-size: 20px;
    font-weight: 600;
    background-color: #1877f2;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #166fe5;
      transition: 0.8s;
    }
  }

  a#forget-password-link {
    color: #1877f2;
    text-decoration: none;
    &:hover {
      text-decoration: underline !important;
    }
  }

  div {
    padding-top: 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid #dadde1;
    margin-bottom: 20px;
    text-align: center;
  }

  button#new-account-button {
    padding: 10px 16px;
    margin: 0 auto;
    border-radius: 6px;
    background: #42b72a;
    font-weight: 600;
    color: #fff;
    border: none;
    font-size: 17px;
    font-size: inherit;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #36a420;
      border-color: #36a420;
    }
  }
`;

export const CreatePageContainer = styled.div`
  margin-top: 28px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 900px) {
    margin-bottom: 70px;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.text};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Footer = styled.footer`
  background: ${(props) => props.theme.colors.primary};
`;

export const InternalFooterContainer = styled.div`
  width: 980px;
  margin: 0 auto;
  padding-top: 20px;

  @media (max-width: 1075px) {
    width: 100vw;
    padding: 0 50px;
    margin-bottom: 50px;
  }

  a {
    color: ${(props) => props.theme.colors.textTertiary};
    font-size: 12px;
    text-decoration: none;
    margin-right: 0px;

    &:hover {
      text-decoration: underline;
    }
  }

  div#languages-container {
    padding: 8px 0;
    border-bottom: 1px solid #dddfe2;

    a {
      margin-right: 10px;
    }

    button {
      padding: 0 8px;
      font-size: 12px;
      font-weight: bold;
      border: 1px solid #ccd0d5;
      color: #8a8d91;
      transition: 200ms;
      &:focus {
        outline: none;
        background-color: #f5f6f7;
        border-color: #ccd0d5;
        opacity: 0.8;
      }
      &:hover {
        background-color: #f5f6f7;
        border-color: #ccd0d5;
        opacity: 0.4;
      }
    }
  }

  div#links-container {
    display: block;

    ul {
      padding: 0;
      margin: 0;
      margin-left: -20px;
      list-style: none;
    }

    li {
      display: inline-block;
      padding-left: 20px;
    }
  }

  div:last-child {
    margin: 20px 0;
    color: ${(props) => props.theme.colors.textTertiary};
    font-size: 11px;
  }
`;
