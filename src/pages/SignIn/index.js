import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email("Email inválido!").required("Informe seu email"),
    password: yup.string().required("Informe a sua senha")
})

export default function SignIn(){
    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleSignIn(data){
        console.log(data);
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/mercedes.png')} style={styles.mercedes}>
                <Animatable.View 
                animation="fadeInLeft" delay={500} style={styles.containerHeader}>        
                    <View style={styles.containerLogo}>        
                        <Animatable.Image 
                            animation="flipInY"
                            source={require("../../assets/logo.png")}
                            style={{width: '100%'}}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.formulaMessage}>F Ó R M U L A  1</Text>
                </Animatable.View>
            </ImageBackground>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        placeholder="Digite seu email"
                        style={[styles.input, {
                            borderWidth: errors.email && 1,
                            borderColor: errors.email && '#ff375b'
                        }]}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        />
                    )}
                />
                {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

                <Text style={styles.title}>Senha</Text>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Digite sua senha"
                            style={[styles.input, {
                                borderWidth: errors.password && 1,
                                borderColor: errors.password && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
                

                <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#cb0c13'
    },
    containerLogo:{
        flex:2
    },
    formulaMessage:{
        marginTop:'39%',
        paddingStart:'12%',
        fontSize:40,
        color:'#ffffff',

    },
    mercedes:{
        flex:0.7,
        resizeMode:'cover',
        width:'100%'
    },
    containerHeader:{
        marginTop:'10%',
        marginBottom:'8%',
        paddingStart:'4%'
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff'
    },
    containerForm:{
        backgroundColor:'#fff',
        flex:1,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:20,
        marginTop:28,
        fontWeight:'bold'
    },
    input:{
        height:40,
        marginBottom:5,
        fontSize:16,
        backgroundColor:'#d9d9d9',
        paddingHorizontal:8
    },
    button:{
        backgroundColor:'#cb0c13',
        alignSelf:'center',
        width:'70%',
        borderBottomLeftRadius:25,
        borderTopRightRadius:25,
        paddingVertical:10,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center',
    },
    registerText:{
        color:'gray'
    },
    labelError:{
        alignSelf:'flex-start',
        color:'#ff375b',
        marginBottom:8
    },
})