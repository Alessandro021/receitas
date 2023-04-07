import {View, Text, StyleSheet} from "react-native"
import COLOR from '../../services'

export default function Ingredients({data}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLOR.COLORES.secundario,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,1)',
        elevation: 3,
        
    },
    name:{
        fontWeight: 500,
        fontSize: 16,
    }
})