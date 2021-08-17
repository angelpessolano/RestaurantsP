import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'
import Loading from '../../components/Loading'
import { Button } from 'react-native-elements/dist/buttons/Button'

export default function UserGuest() {
    return (
       <ScrollView
       centerContent
       style={styles.viewBody}
       >
           <Image
             source={require("../../assets/Restaurant-Logo.png")}
             resizeMode="contain"
             style={styles.image}
             />
             <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
             <Text style={styles.description}>¿Como describirias tu mejor Restaurante comenta tu experiencia</Text>
            <Button
            buttonStyle={styles.button}
            title="Ver tu Perfil"
            onPress={() => console.log("Hizo Click")}
            />
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal:30,
    },
    image:{
        height:300,
        width: "100%",
        marginBottom: 10,
        textAlign: "center"    
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    description:{
        textAlign:"justify",
        marginBottom:20,
        color:"#a65273"

    },
    button:{
        backgroundColor:"#442484"

    }
})
