import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { firebaseApp } from '../../utils/firebase';
import   firebase from 'firebase';
import { getCurrentUser} from '../../utils/actions'


import Loading from '../../components/Loading'
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

    


export default function Account() {
    

    const [login, setLogin] = useState(null);
   //const currentUser = getCurrentUser()
useEffect(() => {
    const user = getCurrentUser()
    user ? setLogin(true) : setLogin(false)
    
}, [])
 
     if(login == null) {  
        return <Loading isVisible={true} text="Cargando..." />
    }

    return login ? <UserLogged/> : <UserGuest/>
}



const styles = StyleSheet.create({})
