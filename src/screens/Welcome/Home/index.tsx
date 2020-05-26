import * as React from 'react';
import { StyleSheet, ScrollView, Dimensions,  } from 'react-native';
import styled from 'styled-components/native';



import Colors from '../../../constans/Colors';

const Styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30

    }
})


const LogoImage = styled.Image`
    resizeMode={'cover'}
    width: 100%
    flexGrow: 1
`;
const TitleText = styled.Text`
    margin: 10px 20px;
    font-size: 24px;
    color: ${Colors.black};
    fontWeight: bold
    textAlign: center
`;
const NewsImage = styled.Image`
   marginTop: 20px
`;



const ContentText = styled.Text`
    font-size: 16px
`;
const SubtitleText = styled.Text`
    font-size: 20px;
    textAlign: center;
    fontWeight: bold
    
`;
interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props) => {

    return (
        <ScrollView style={Styles.container}>
            <LogoImage
                source={require('../../../assets/logo-black.png')}
            />
            <NewsImage
                source={require('../../../assets/blindersAfro.jpg')}
            />
            <TitleText>Blinders i Afrojack wydają wspólny utwór “Hydra”. Premiera już w czwartek! </TitleText>
            <ContentText>Dziś pojawiła się oficjalna zapowiedź wspólnego utworu noszącego tytuł "Hydra" Blindersa i Afrojacka, który reaktywuje swój poboczny alias NLW.

            {"\n"}{"\n"}<SubtitleText>Afrojack i Blinders w STMPD RCRDS</SubtitleText> 

            {"\n"}{"\n"}Wreszcie poznaliśmy datę premiery wspólnego utworu Blindersa i Afrojacka. Kawałek podpisywany do tej pory, jako ID przyjął nazwę “Hydra”. Mogliśmy go usłyszeć w wielu setach Afrojacka, w tym podczas Ultra Europe 2019, jak i w setach Blindersa, który zagrał go między innymi w trakcie seta b2b z TV Noise, podczas Martin Garrix: The Ether. Wiedzieliśmy, że numer jest już gotowy, ale nie znaliśmy daty premiery. Okazuje się, że “Hydra” wyjdzie szybciej niż się spodziewaliśmy!

            {"\n"}{"\n"}W tym roku Afrojack postanowił reaktywować swoje dwa poboczne aliasy. Nie tak dawno informował o nowych utworach pod pseudonimem Kapuchon, a przy okazji współpracy z Blindersem, do życia powrócił alias NLW. Jest to powrót w wielkim stylu, bo “Hydra” naprawdę może się podobać!{"\n"}</ContentText>
        </ScrollView>
    )
}

export default Home;