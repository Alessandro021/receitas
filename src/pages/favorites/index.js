import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import COLOR  from '../../services'

import { getFavorites } from '../../utils/storage';
import FoodList from '../../components/foodList';

export default function Favorites(){
    const [receipes, setReceipes] = useState([]);
    const isFocused = useIsFocused() //SERVE PARA VERIFICAR SE ESTA TELA ESTA EM FOCO(se esta sendo usada no momento)

    useEffect( () => {

        let isActive = true

        async function getReceipes(){
            const result = await getFavorites("@APPRECEITAS")
            if(isActive){
                setReceipes(result);
            }
        }

        if(isActive){
            getReceipes();
        }

        return () => {
            isActive = false
        }

    },[isFocused])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>

            {receipes.length === 0 && (
                <Text>você ainda não tem nenhuma receita salva.</Text>
            )}

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 14 }}
                data={receipes}
                keyExtractor={item => String(item.id)}
                renderItem={ ({item}) => <FoodList data={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLOR.COLORES.secundario_fraco,
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36,
    },
    title:{
        color: COLOR.COLORES.Base,
        fontWeight: 'bold',
        fontSize: 24,

    }
})