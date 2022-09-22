import { useState } from 'react';
import * as C from './App styles';
import { IItem } from './interfaces/IItem';
import { Item } from './components/Item';
import { AdicionaTarefa } from './components/AdicionaTarefa';
import { listenerCount } from 'process';

function App() {
  const [ tarefa, setTarefa ] = useState<IItem[]>([
    {
      id: 1,
      name: 'Comprar pão francês',
      done: false
    }, {
      id: 2,
      name: 'Pagar conta de luz',
      done: true
    }
  ]);

  const handleNovaTarefa = (nomeTarefa : string) => {
    let novaLista = [...tarefa];
    novaLista.push({
      id: tarefa.length + 1,
      name: nomeTarefa,
      done: false
    })
    setTarefa(novaLista);
  }

  return (
    <C.Container>
      <C.Box>
        <C.Header>
          Lista de tarefas
        </C.Header>
        <AdicionaTarefa onEnter={handleNovaTarefa}/>
        {tarefa.map((item) => (
            <Item key={item.id} item={item}/>
        ))}
      </C.Box>
    </C.Container>
  );
}

export default App;
