import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pages/home'
import Favorites from '../pages/favorites'
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true, //PARA MOSTRAR O NOME DEBAIXO DA TABBAR
                tabBarActiveTintColor: "#121212", //COR DA TABBAR

                tabBarStyle:{
                    backgroundColor: "#FFF",
                    borderTopWidth: 0,
                }//COR DE FUNDO DO BACKGRAUND DA TABBAR

            }}
        >
            <Tab.Screen 
                name='HomeTab' 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name='home' color={"#000"} size={size}/>
                        }
                        return <Ionicons name='home-outline' color={color} size={size}/> 
                    }
                }}
            />
            <Tab.Screen 
                name='FavoritesTab' 
                component={Favorites}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name='heart' color={"#FF4141"} size={size} />
                        }
                        return <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}