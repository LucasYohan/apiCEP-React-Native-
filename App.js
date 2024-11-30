//Imports Necessarios
import React, { useState } from 'react'
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native'
import axios, { Axios } from 'axios'
import styles from './Styles'

//Definindo o componente principal do app
export default function App() {

    //Variaveis que irão armanezar os dados
    const [cep, setCep] = useState('')
    const [data, setData] = useState(null)

    //Função acionada ao clicar "enviar"
    const consumirAPI = async () => {

        //Fazendo solicitação com get
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        // Armazenando a resposta na variavel data
        setData(response.data)
    }

    //Renderizando o JSX
    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logoArea}>
                    <Image source={require('./assets/logo.png')} style={styles.logo} />
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        value={cep}
                        onChange={setCep}
                        placeholder='Digite o CEP'
                        style={styles.inputCep}
                    />
                </View>


                <Button title='Enviar' onPress={consumirAPI} color={'orange'} />
            </View>
        </ScrollView>

    )
}