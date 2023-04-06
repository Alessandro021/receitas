import { Text, StyleSheet} from 'react-native'
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
            <Text style={styles.logo}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        backgroundColor: COLOR.COLORES.principal_claro,
        alignSelf: "flex-start", //A VIEW E ALINHADA COM O TAMANHO DO TEXTO.
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8,
    },
    logo:{
        fontSize: 19,
        fontWeight: "bold",
        color: "#FFF"
    }
})