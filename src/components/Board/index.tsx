import React, { useState } from 'react'
import produce from 'immer'
import { loadLists } from '../../services/api'
import List from '../List/index'
import BoardContext from './context'
import { Container } from './styles'

const data = loadLists()

const Board: React.FC = () => {
  const [lists, setLists] = useState(data)

  function move (fromList: number, toList: number, from: number, to: number): void {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]
      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged)
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>

  )
}

export default Board
