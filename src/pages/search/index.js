import { View, Text, StyleSheet} from 'react-native'

export default function Search(){
    return(
        <View style={styles.container}>
            <Text>Pagina Buscar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green'
    }
})