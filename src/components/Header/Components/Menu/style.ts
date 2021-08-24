import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundPopup};

  width: 608px;
  height: 90vh;
  padding: 16px;
  border-radius: 10px;

  overflow: auto;

  position: absolute;
  right: 15px;

  -webkit-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);
  -moz-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);
  box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);

  & > div {
    display: flex;
  }
`;

export const ContainerFeatures = styled.div`
  width: 360px;
  margin-right: 15px;
  border-radius: 10px;
  padding: 16px;

  background: ${(props) => props.theme.colors.primary};

  -webkit-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);
  -moz-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);
  box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);
`;

export const ContainerCreate = styled.div`
  width: 212px;
  border-radius: 10px;
  padding: 16px;

  background: ${(props) => props.theme.colors.primary};

  -webkit-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);
  -moz-box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);
  box-shadow: 0px 1px 2px 0px rgba(50, 50, 50, 0.52);

  div + svg {
    width: 100%;
  }
`;
