import * as C from './styles';
import {IItem} from '../../interfaces/IItem';

interface Props {
    item: IItem
}

export const Item = ({ item }: Props) => {
    return(
        <C.Container>
            Ola
        </C.Container>
    )
}