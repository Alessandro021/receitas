import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Pressable } from 'react-native'

import Home from '../pages/home'
import Detail from '../pages/detail'
import Search from '../pages/search'

import {Entypo} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Detail' 
                component={Detail}
                options={({route}) => ({
                    title: route.params?.data.name,
                    headerRight: () => (
                        <Pressable onPress={() => console.log("ola")}>
                            <Entypo name='heart' size={28} color='#FF4141'/>
                        </Pressable>
                    )
                })} 
            />
            <Stack.Screen 
                name='Search' 
                component={Search}
                options={{
                    title: "Veja o que encontramos",
                }}
            />
        </Stack.Navigator>
    )
}