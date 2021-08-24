import React from 'react';

import Input from '../../../Input';

import { Container, ContainerFeatures, ContainerCreate } from './style';

export const Menu: React.FC = () => {
  return (
    <Container>
      <h1>Menu</h1>

      <div>
        <ContainerFeatures>
          <Input placeholder="Pesquisar no menu" />

          <div className="feature-item-container">
            <h3>Social</h3>

            <div>
              <img src="" alt="" />

              <div>
                <h3>Eventos</h3>

                <caption>
                  Organize e encontre eventos e outras coisas para fazer online
                  e perto de você.
                </caption>
              </div>
            </div>
          </div>

          <div className="feature-item-container">
            <h3>Entretenimento</h3>

            <div>
              <img src="" alt="" />

              <div>
                <h3>Eventos</h3>

                <caption>
                  Organize e encontre eventos e outras coisas para fazer online
                  e perto de você.
                </caption>
              </div>
            </div>
          </div>
        </ContainerFeatures>

        <ContainerCreate>
          <h2>Criar</h2>
          <div className="create-item-container">
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
          </div>
          <div className="create-item-container">
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
            <div>
              <img src="" alt="" />
              Publicar
            </div>
          </div>
        </ContainerCreate>
      </div>
    </Container>
  );
};
