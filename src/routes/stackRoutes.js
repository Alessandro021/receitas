import {CardStyleInterpolators, createStackNavigator  } from '@react-navigation/stack';

import Home from '../pages/home'
import Detail from '../pages/detail'
import Search from '../pages/search'

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator
            screenOptions={{

                gestureDirection: "horizontal",
                cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
            }}
        >
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