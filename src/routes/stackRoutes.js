import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Pressable } from 'react-native'

import Home from '../pages/home'
import Detail from '../pages/detail'
import Search from '../pages/search'

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
                // options={({route}) => ({
                //     title: route.params?.data.name,
                // })} 
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