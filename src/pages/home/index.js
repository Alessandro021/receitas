import { useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import COLOR from '../../services'
import Logo from '../../components/logo'
import api from '../../servidor/api'
import FoodList from '../../components/foodList'

import {Ionicons} from '@expo/vector-icons'

import { Text as Motitext} from 'moti'

export default function Home(){
    const [inputValue, setInputValue] = useState("")
    const [foods, setFoods] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchApi(){
            const response = await api.get("/foods")
            setFoods(response.data)
        }

        fetchApi();

    },[])

    function handleSearch(){
        if(!inputValue) return;

        let input = inputValue;
        setInputValue("")
        navigation.navigate("Search", { name: input})
    }
    return(
        <SafeAreaView style={styles.container}>
            <Logo />
            <Motitext 
            style={styles.title}
            from={{
                opacity: 0,
                translateY: 15,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{
                delay: 100,
                type: 'timing',
                duration: 650
            }}

            >Encontre a receita</Motitext>

            <Motitext 
            style={styles.title}
            from={{
                opacity: 0,
                translateY: 18,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{
                delay: 200,
                type: 'timing',
                duration: 850
            }}
            >que combina com você.</Motitext>

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
            <FlatList 
                data={foods}
                keyExtractor={(item) => String(item.id) }
                renderItem={({item}) => <FoodList data={item} />}
                showsVerticalScrollIndicator={false}
            />
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