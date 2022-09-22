import { useState } from 'react';
import * as C from './App styles';
import { IItem } from './interfaces/IItem';
import { Item } from './components/Item';

function App() {
  const [ tarefa, setTarefa ] = useState<IItem[]>([
    {
      id: 1,
      name: 'Comprar pão francês',
      done: false
    }, {
      id: 2,
      name: 'Pagar conta de luz',
      done: false
    }
  ]);

  return (
    <C.Container>
      <C.Box>
        <C.Header>
          Lista de tarefas
        </C.Header>
        {tarefa.map((item) => (
            <Item key={item.id} item={item}/>
        ))}
      </C.Box>
    </C.Container>
  );
}

export default App;
