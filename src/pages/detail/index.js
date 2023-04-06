import { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import {Entypo, Ionicons, AntDesign, Feather} from '@expo/vector-icons'
import COLOR from '../../services'

import Ingredients from '../../components/ingredients';
import Instructions from '../../components/instructions';
import VideoView from '../../components/video';

import { isFavorite, saveFavorite, removeItem } from '../../utils/storage';

export default function Detail({data}){
    const route = useRoute();
    const navigation = useNavigation();
    const [showVideo, setShowVideo] = useState(false)
    const [favorite, setFavorite] = useState(false)

    useLayoutEffect(() => {

        async function getStatusFavorites(){
            const receipeFavorite = await isFavorite(route.params?.data)
            setFavorite(receipeFavorite)
        }

        getStatusFavorites()

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => handleFavoriteReceipe(route.params?.data)}>
                    {favorite ? 
                    (
                        <Ionicons
                            name='heart'
                            size={28}
                            color="#FF4141"
                        />
                    ) :

                    (
                        <Ionicons
                            name='heart-outline'
                            size={28}
                            color="#FF4141"
                        />
                    )
                
                    }
                </Pressable>
            )
        })
    },[navigation, route.params?.data, favorite])

    async function handleFavoriteReceipe(receipe){
        if(favorite){
            await removeItem(receipe.id)
            setFavorite(false)
        }else{
            await saveFavorite("@APPRECEITAS", receipe)
            setFavorite(true)
        }
    }

    function handleOpenVideo(){
        setShowVideo(true)
    }

    async function shareReceipe(){
        try {
            await Share.share({
                url: route.params?.data.name.video,
                message: `Receita : ${route.params?.data.name} \nIngredientes: ${route.params?.data.video}
                \nIngredientes: ${route.params?.data.total_ingredients} \nEssa receita esta no App Receita Facil`
            })
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ScrollView contentContainerStyle={{paddingBottom: 14}} showsVerticalScrollIndicator={false} style={styles.container}>
            <Pressable onPress={ handleOpenVideo}>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={50} color="#FAFAFA" />
                </View>
                <Image 
                    source={{uri: route.params?.data.cover}}
                    style={styles.cover}
                />
            </Pressable>

            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.ingredientsText}>ingredientes ({route.params?.data.total_ingredients})</Text>
                </View>

                <Pressable onPress={shareReceipe}>
                    <Feather name='share-2' size={24} color='#121212'/>
                </Pressable>
            </View>

            {route.params?.data.ingredients.map( item => (
                <Ingredients key={item.id} data={item}/>
            ))}

            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}>Modo de preparo</Text>
                <Feather name='arrow-down' size={24} color={COLOR.COLORES.secundario} />
            </View>

            {route.params?.data.instructions.map( (item, index) => (
                <Instructions key={item.id} data={item} index={index}/>
            ))}

            <Modal visible={showVideo} animationType='slide'>
                <VideoView 
                    handleClose={() => setShowVideo(false)}
                    videoUrl={route.params?.data.video}
                />
            </Modal>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLOR.COLORES.secundario_fraco,
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14,
    },
    cover:{
        height: 220,
        borderRadius: 15,
        width: "100%"
    },
    playIcon:{
        position: "absolute",
        zIndex: 9,
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 18,
        marginTop: 14,
        fontWeight: 'bold',
        color: COLOR.COLORES.Base,
        marginBottom: 5,
    },
    ingredientsText:{
        marginBottom: 14,
        fontSize: 16,
    },
    headerDetails:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
    },
    instructionsArea:{
        backgroundColor: COLOR.COLORES.principal_claro,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 5,
        marginBottom: 14,
    },
    instructionsText:{
        fontSize: 18,
        fontWeight: '500',
        color: COLOR.COLORES.secundario
    }
})