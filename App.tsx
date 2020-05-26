import React from 'react';
import { Provider } from 'react-redux';
import * as Contacts from 'expo-contacts';
import SplashScreen from 'react-native-splash-screen'


import store from './src/tools/store';
import Main from './src/Main';
import { useEffect } from 'react';

export default function App() {

    const getContacts = () => {
        Contacts.getContactsAsync();
    };

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
