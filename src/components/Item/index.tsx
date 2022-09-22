import * as C from './styles';
import {IItem} from '../../interfaces/IItem';

interface Props {
    item: IItem,
    onChange: (id: number, done: boolean) => void
}

export const Item = ({ item, onChange }: Props) => {

    return(
        <C.Container done={item.done}>
            <input 
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}