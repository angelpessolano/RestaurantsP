import React from 'react'
import TopRestaurants from '../screens/TopRestaurants'
import { createStackNavigator} from '@react-navigation/stack'

  const Stack = createStackNavigator()


export default function TopRestaurantsStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen
            name="top-restaurants"
            component={TopRestaurants}
            options={{title:"Top 5"}}        
            />
        </Stack.Navigator>
    )
}
