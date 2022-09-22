import styled from 'styled-components';

interface ContainerProps {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) =>
    (`
        background-color: #20212c;
        display: flex;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        align-items: center;

        input {
            width: 25px;
            height: 25px;
            margin-right: 12px;
        }

        label {
            text-decoration: ${done ? 'line-through' : 'initial'}; //muda a estilização dependendo do estado da prop!!
            color: #ccc;
        }    
    `
));