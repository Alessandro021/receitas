import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'
import COLOR from '../../services'

import { Feather } from '@expo/vector-icons'

export default function VideoView({ handleClose, videoUrl }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleClose}>
                <Feather name='arrow-left' size={24} color={COLOR.COLORES.secundario} />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <WebView
                style={styles.contentView}
                source={{ uri: videoUrl }}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    backButton: {
        width: '100%',
        backgroundColor: COLOR.COLORES.principal_claro,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14,
    },
    backText: {
        color: COLOR.COLORES.secundario,
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 14,
    },
    contentView:{
        flex: 1,
        width: '100%',
    }
})