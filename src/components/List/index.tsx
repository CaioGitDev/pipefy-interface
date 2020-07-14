import React from 'react'
import { Container, AddMore } from './styles'
import Card from '../Card'

interface List {
  title: string;
  creatable: boolean;
  done: boolean;
  cards: Card[];
}

interface Card {
  id: number;
  content: string;
  labels: string[];
  user: string;
}

type Props = {
  index: number;
  data: List;
}

const List: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <header>
        <h2></h2>
        <button type="button">
          <AddMore/> ${props.data.title}
        </button>
      </header>

      <ul>
      </ul>
    </Container>
  )
}

export default List
