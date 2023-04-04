import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import COLOR from '../../services'
import Logo from '../../components/logo'

import {Ionicons} from '@expo/vector-icons'

export default function Home(){
    const [inputValue, setInputValue] = useState("")
    function handleSearch(){

    }
    return(
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você.</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder='Digite o nome da comida...'
                    value={inputValue}
                    onChangeText={texto => setInputValue(texto)}
                />

                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color={COLOR.COLORES.principal_claro}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLOR.COLORES.secundario_fraco,
        paddingTop: 14,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        color: "#0e0e0e"
    },
    form:{
        backgroundColor: COLOR.COLORES.secundario,
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: COLOR.COLORES.secundario_forte,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 55,
    }
})