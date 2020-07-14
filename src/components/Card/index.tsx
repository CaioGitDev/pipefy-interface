import React from 'react';
import { Container, Label } from './styles';

const Card : React.FC = () => {
  return(
    <Container>
      <header>
        <Label color="#f84a4b"/>
      </header>
      <p>Criar algoritmo para identificar pessoas recuperadas do covid!</p>
      <img src="https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895" alt="Avatar"/>
      
    </Container>
  )
};

export default Card;