import React, { Component} from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import cors from 'cors';
import express from 'express';

import {
    ApolloServer
} from 'apollo-server-express';

const app = express();
app.use(cors());
const server = new ApolloServer({});
server.applyMiddleware({
    app,
    path: '/graphql'
});

export default class App extends Component {

    clicou = () => {
        Alert.alert("TaskManager","Login com sucesso!");
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./assets/logo/logo_coffee.png')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {this.clicou()} }
                >
                    <Text style={styles.botaoText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})