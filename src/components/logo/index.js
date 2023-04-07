import { Text, StyleSheet, Image} from 'react-native'
import { View } from 'moti'
import COLOR from '../../services'

export default function Logo(){
    return(
        <View 
        style={styles.logoArea}
        from={{
            opacity: 0,
            translateY: -50,
        }}
        animate={{
            opacity: 1,
            translateY: 0,
        }}
        transition={{
            type: 'timing',
            duration: 850
        }}
        >
            <Image style={styles.img} source={require('../../../assets/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        alignSelf: "flex-start", //A VIEW E ALINHADA COM O TAMANHO DO TEXTO.
    },
    img:{
        width: 220,
        height: 50,
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8,
    }
})