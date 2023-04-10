import { Icon, IconButton } from '@react-native-material/core';
import React from 'react';
import { View } from 'react-native';
import SAFEVIEW from './SAFEVIEW';

function CheckoutButton({navigation}) {
    return (

    <IconButton  
    style={{alignSelf:"flex-end", marginTop:10, marginRight:10}}
    onPress={()=>navigation.navigate('Checkout')} 
    icon={props => <Icon name="shopping" {...props} />} size={34} color="black"/>

    );
}

export default CheckoutButton;