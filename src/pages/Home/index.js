import { Button, StyleSheet, Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation()

    function navegaDetalhes(){
        navigation.navigate('Detalhes')
    }   
    return(
        <View style={styles.container}>
            <Text>Home View</Text>
            <Button title="ir Para Detalhes" onPress={navegaDetalhes}></Button>
        </View>
    )
}


 
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});
