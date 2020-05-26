import * as React from 'react';
import {Image, Text, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';


import Colors from '../../constans/Colors'

const TitleText = styled.Text`
    margin: 50px 20px;
    font-size: 24px;
    color: ${Colors.black};
    fontWeight: bold
    textAlign: center
`;


const CustomImage = styled.Image`
    width: 100px;
    height: 100px;
    top: 200px;
    border-radius: 100px;
    position: absolute;
    alignSelf: flex-end;
    right: 10px;
`;
const SubtitleText =styled.Text`
left: 25px;
top: 25px;
font-size: 16px;
`;

interface IContactsProps { }

const Home: React.FC<IContactsProps> = (props) =>{
    return(
        <View>
            <TitleText>Aplikacja jest interpertacją strony essentialmusic.pl Stworzoną jednynie w celu edukacyjnym.</TitleText>
            <CustomImage
                source={require('../../assets/Tomek.jpeg')}
            />
            <SubtitleText>Właścicelem jest Tomasz Bagiński</SubtitleText>
        </View>
    )
}

export default Home;