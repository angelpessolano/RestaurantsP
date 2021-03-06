import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements/dist/icons/Icon'

import AccountStack from './AccountStack'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'
import RestaurantsStack from './RestaurantsStack'
import TopRestaurantsStack from './TopRestaurantsStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route,color) => {

        let iconName
        switch (route.name) {
            case "restaurants":
                iconName ="compass-outline"
                break;
        
            case "favorites":
                iconName ="heart-outline"
                break;
        
            case "search":
                iconName ="magnify"
                break;
                // case "search":
                // iconName ="camera"
                // break;
        
            case "top-restaurants":
                iconName ="star-plus-outline"
                break;
        
            case "account":
                iconName ="home-outline"
                break;
          
            default:
                break;
        }
        return <Icon
                     type="material-community" 
                     name={iconName}  
                     size={24} 
                     color={color}     />

    }
    return (
       <NavigationContainer>

           <Tab.Navigator 
           initialRouteName="restaurants"
           tabBarOptions={{
               inactiveTintColor:"#a17dc3",
               activeTintColor:"#1e81b0"
               }}
               screenOptions={({route}) => ({ 
                   tabBarIcon:({color}) => screenOptions(route,color)
                })}
               
               
               >
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
