import React,{useLayoutEffect} from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useRoute,useNavigation } from '@react-navigation/native'

export default function Sobre(){
    const route = useRoute()
    const navigation = useNavigation()

    function navegaContato(){
        navigation.navigate('Contato')
    }
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:route.params?.name === ''? 'Sobre':route.params?.name
        })

    },[navigation])

    return(
        <View style={styles.container}>
            <Text>Sobre View</Text>
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
