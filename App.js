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
                        onChangeText={setCep}
                        placeholder='Digite o CEP'
                        style={styles.inputCep}
                    />
                </View>
                <Button title='Enviar' onPress={consumirAPI} color={'orange'} style={styles.btn} />
                </View>

                {
                    data && (
                        <View style={styles.viewArea}>
                            <Text>CEP: {data.cep}</Text>
                            <Text>Logradouro: {data.logradouro}</Text>
                            <Text>Complemento: {data.complemento}</Text>
                            <Text>CEP: {data.bairro}</Text>
                            <Text>CEP: {data.localidade}</Text>
                            <Text>CEP: {data.uf}</Text>
                            <Text>CEP: {data.ibge}</Text>
                            <Text>CEP: {data.gia}</Text>
                            <Text>CEP: {data.ddd}</Text>
                            <Text>CEP: {data.siafi}</Text>
                            <Text style={styles.subText}> 1 - Guia de Informação e Apuração do ICMS, ou apenas GIA, é um documento fisca obrigatório.
                                2 - Sistema Integrado de Administração Financeiro do Governo Feral - SIAFI é um sistema contábil.

                            </Text>
                        </View>
                    )}
            
        </ScrollView>

    )
}