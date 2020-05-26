import React, {FC} from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons }  from 'react-native-vector-icons';


import Welcome from '../screens/Welcome/Home';
import Account from '../screens/Account';
import TodoListScreen from '../screens/TodoList';

const Tab = createBottomTabNavigator();

function BottomTabs(){
    return(
        <Tab.Navigator
            initialRouteName = "Home"
            tabBarOptions = {{
                activeTintColor: '#a2cc00'
            }}
        >
            <Tab.Screen
                name = "Home"
                component = {Welcome}
                options = {{
                    tabBarLabel: 'News',
                    tabBarIcon: ({color, size}) => ( 
                      <MaterialCommunityIcons name= "home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name = "TodoList"
                component = {TodoListScreen}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name = "TodoList" color={color} size = {size} />
                    ),
                }}
            />
            <Tab.Screen
                name = "Account"
                component = {Account}
                options = {{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name = "account" color={color} size={size} />
                    ),
                }}
            />        
        </Tab.Navigator>
    )
}

export default BottomTabs;