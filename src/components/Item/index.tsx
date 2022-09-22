import * as C from './styles';
import { useState } from 'react';
import {IItem} from '../../interfaces/IItem';

interface Props {
    item: IItem
}

export const Item = ({ item }: Props) => {
    const [ feito, setFeito ] = useState(item.done);

    return(
        <C.Container done={feito}>
            <input 
                type="checkbox"
                checked={feito}
                onChange={(e) => setFeito(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}