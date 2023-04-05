import { View, Text, StyleSheet} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

export default function Detail({data}){

    const route = useRoute();
    return(
        <View style={styles.container}>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor: 'blue'
    }
})