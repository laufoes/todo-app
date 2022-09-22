import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

//recebe uma função como prop, que seta um determinado valor no componente pai
interface Props {
    onEnter: (novaTarefa: string) => void
}

export const AdicionaTarefa = ({ onEnter }: Props) => {
    const [ novaTarefa, setNovaTarefa ] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && novaTarefa !== ''){
            onEnter(novaTarefa);
            setNovaTarefa('');
        }
        console.log(e.code);
    }
    return(
        <C.Container>
            <div className="image"> + </div>
            <input
                type="text"
                placeholder='Adicione uma tarefa'
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                onKeyUp={handleKeyUp}//aciona a funcao quando uma tecla especifica for clicada (no caso a tecla enter)
            ></input>
        </C.Container>
    )
}