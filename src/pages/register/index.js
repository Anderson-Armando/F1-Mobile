import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    username: yup.string().required("Informe seu nome!"),
    email: yup.string().email("Email inválido!").required("Informe seu email"),
    password: yup.string().min(6, "A senha deve conter pelo menos 6 dígitos").required("Informe sua senha"),
    passwordConfirm: yup.string().required("Senha diferente")
})

export default function Register(){

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleSignIn(data){
        console.log(data);
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={require('../../assets/redbull.png')} style={styles.redbull}>
                    <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                        <View style={styles.containerLogo}>        
                            <Animatable.Image 
                                animation="flipInX"
                                source={require("../../assets/logo.png")}
                                style={{width: '100%'}}
                                resizeMode="contain"
                            />
                        </View>
                        <Animatable.Text animation="fadeInLeft" style={styles.message}>Faça seu cadastro!</Animatable.Text>
                    </Animatable.View>
                </ImageBackground>
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Nome</Text>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                            placeholder="Digite seu nome"
                            style={[styles.input, {
                                borderWidth: errors.username && 1,
                                borderColor: errors.username && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            />
                        )}
                    />
                    {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

                    <Text style={styles.title}>Email</Text>
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

                    <Text style={styles.title}>Confirmar senha</Text>
                    <Controller
                        control={control}
                        name="passwordConfirm"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                            placeholder="Confirme sua senha"
                            style={[styles.input, {
                                borderWidth: errors.passwordConfirm && 1,
                                borderColor: errors.passwordConfirm && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            secureTextEntry={true}
                            />
                        )}
                    />
                    {errors.passwordConfirm && <Text style={styles.labelError}>{errors.passwordConfirm?.message}</Text>}

                    <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#cb0c13'
    },
    redbull:{
        flex:0.5,
        resizeMode:'cover',
        width:'100%'
    },
    containerLogo:{
        flex:2
    },
    containerHeader:{
        marginTop:'10%',
        marginBottom:'8%',
        paddingStart:'12%'
    },
    message:{
        fontSize:38,
        fontWeight:'bold',
        color:'#fff'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#fff',
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
        marginTop:28,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'8%'
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    labelError:{
        alignSelf:'flex-start',
        color:'#ff375b',
        marginBottom:8
    },
})