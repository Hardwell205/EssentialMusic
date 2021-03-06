import React, {FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Text, Button } from 'react-native';
import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todolistReducer';

import { ISingleElList } from '../entitles/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
    
`;
const SingelElementList = styled.View`
    border: 3px solid green;
    margin: 0 0 20px 0;
`;
const TodoList: FC<{switchView(formView: boolean)}> = props =>{
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const goToForm = () => {
        props.switchView(true);
    }
    return(
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElList , index: number) => 
            <SingelElementList key={index}>
                <Text>{elem.name}</Text>
                <Text>{elem.description}</Text>
            </SingelElementList>
            )}
            <Button title="Dodaj nowy" onPress={goToForm} />
        </Wrapper>
    )
};

export default TodoList;