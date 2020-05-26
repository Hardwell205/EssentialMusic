import {Image, Text, View} from 'react-native';
import React, {FC, useState } from 'react';

import Form from '../../components/Form';
import TodoList from '../../components/TodoList';


const TodoListScreen = ({navigation}) => { 
    const [formView, setFormView] = useState<boolean>(false);

    return(
        <View>
            {formView ? (
                <Form switchView={setFormView} />
            ) : (
                <TodoList switchView={setFormView}/>
            )}
        </View>
    );
};

export default TodoListScreen;