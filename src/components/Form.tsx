import React, {FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';
import { setNewElTodoList } from '../actions/todolistActions';
import { ISingleElList } from '../entitles/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const CustomText = styled.TextInput`
    border: 2px solid;
    padding: 10px;
    color: green;
    width: 100%;
`;

type setNewElTodoList = ReturnType<typeof setNewElTodoList>;

const Form: FC<{switchView(formView: boolean)}> = props =>{
    const dispatch = useDispatch();
    const[nameInput, setNameInput] = useState<string>('');
    const[descInput, setDescInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    const descValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text);
    }

    const save = () => {
        dispatch<setNewElTodoList>(setNewElTodoList({
            name: nameInput,
            description: descInput
        } as ISingleElList
        ));
        props.switchView(false)
    }

    return(
        <Wrapper>
            <CustomText value={nameInput} onChange={nameValueChange} placeholder="Nickname"/>
            <CustomText value={descInput} onChange={descValueChange} placeholder="Komentarz"/>
            <Button title="Dodaj" onPress={save} />
        </Wrapper>
    )
}

export default Form;