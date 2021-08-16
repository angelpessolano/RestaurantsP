import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Restaurants from '../screens/Restaurants'
import TopRestaurantsStack from './TopRestaurantsStack'
import FavoritesStack from './FavoritesStack'
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'
import RestaurantsStack from './RestaurantsStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
       <NavigationContainer>

           <Tab.Navigator>
           {/* <Tab.Screen
               name="restaurants"
               component={Restaurants}               
               options={{title:"Restaurantes"}} /> */}
               <Tab.Screen name="restaurants"
               component={RestaurantsStack}
               options={{title:"Restaurantes"}} />
               <Tab.Screen name="favorites"
               component={FavoritesStack}
               options={{title:"Favoritos"}} />
               <Tab.Screen name="search"
               component={SearchStack}
               options={{title:"Buscar"}} />                
               <Tab.Screen name="top-restaurants"
               component={TopRestaurantsStack}
               options={{title:"Top 5"}} />
               <Tab.Screen name="account"
               component={AccountStack}
               options={{title:"Cuenta"}} />

           </Tab.Navigator>
       </NavigationContainer>
    )
}
