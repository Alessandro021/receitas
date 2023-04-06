import AsyncStorage from '@react-native-async-storage/async-storage'

//BUSCAR OS FAVORITOS
export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
}

//SALVAR UM NOVO FAVORITO
export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some( item => item.id === newItem)

    if(hasItem){
        console.log("Esse item ja esta salvo na lista")
        return;
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("Salvo com sucesso")

}

//REMOVER UM FAVORITO
export async function removeItem(id){
    let receipes = await getFavorites("@APPRECEITAS")

    let myFavorites = receipes.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem("@APPRECEITAS", JSON.stringify(myFavorites));
    console.log("Item deletado com sucesso")

    return myFavorites
}

//O ITEM ESTA FAVORITADO
export async function isFavorite(receipe){
    let myReceipes = await getFavorites("@APPRECEITAS")

    const favorite = myReceipes.find( item => item.id === receipe.id)

    if(favorite){
        return true;
    }

    return false;
}