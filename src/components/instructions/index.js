import {View, Text, StyleSheet} from "react-native"
import COLOR from '../../services'

export default function Instructions({data, index}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{index + 1} - </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 5,
        flexDirection: 'row',
        padding: 8,
        marginBottom: 14,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    text:{
        lineHeight: 20,
    }
})