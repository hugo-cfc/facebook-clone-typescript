import React, { InputHTMLAttributes } from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icons/searchicon.svg';

import { Container } from './style';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <Container>
      <SearchIcon />
      <input {...props} />
    </Container>
  );
};

export default Input;
