import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";

import * as Animatable from 'react-native-animatable'
import { useNavigation} from '@react-navigation/native'

const backgroundApp = '../../assets/background.png'

export default function Welcome(){
    const navigation = useNavigation();

    return(
            <View style={styles.container}>
                <ImageBackground source={require(backgroundApp)}
                style={styles.background}>
                    <View style={styles.containerLogo}>        
                        <Animatable.Image 
                            animation="flipInY"
                            source={require("../../assets/logo.png")}
                            style={{width: '100%'}}
                            resizeMode="contain"
                        />
                    </View>
                    <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>O mundo do Automobilismo na palma da sua mão</Text>
                        <Text style={styles.text}>Faça login para saber mais</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.buttonText}>Entrar/Registrar</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex:1,
        resizeMode:'cover',
        width:'100%'
    },
    containerLogo:{
        flex:2
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12
    },
    text:{
        color:'gray'
    },
    button:{
        position:'absolute',
        backgroundColor:'#cb0c13',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    }

})