import { Button } from '@react-native-material/core';
import React, { useState } from 'react';
import { Image, Keyboard, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { ImageBackground, Text, View } from 'react-native';
import SAFEVIEW from '../../components/SAFEVIEW';




function Welcome({ navigation }) {
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    return (



            <SAFEVIEW>

    <View style={{marginTop:"auto", marginBottom:"auto", height:340, }}>
      <Image style={{height:190 , width:190, alignSelf:'center'}} source={require("../../assets/main1.png")}/>
    <Text style={{fontSize:"40px", marginTop:-20, textAlign:'center', fontWeight:"bold", marginBottom:10}}>Gourmet House</Text>
    {/* <Text style={{fontSize:"20px",marginBottom:10, textAlign:'center'}}>Official App</Text> */}
    
    
    <Text style={{color:'grey',fontSize:"20px", textAlign:'center'}}>Login</Text>

<Text style={{marginTop:20,marginBottom:10, fontSize:20}}>Name</Text>
<TextInput
      onSubmitEditing={Keyboard.dismiss}

style={{height: 50, borderRadius:10, padding:10, borderColor:"grey", borderWidth:2, fontSize:15}}
        placeholder="Enter your Name"
        
        onChangeText={newText => setName(newText)}
        defaultValue={name}
        />
      <Text style={{marginTop:20,marginBottom:10, fontSize:20}}>Phone Number</Text>

<TextInput
      onSubmitEditing={Keyboard.dismiss}

style={{height: 50, borderRadius:10, padding:10, borderColor:"grey", borderWidth:2, fontSize:15}}
placeholder="Enter your UAE phone number"
keyboardType = 'phone-pad'
onChangeText={newText => setPhone(newText)}
        defaultValue={phone}
        />
      <Button style={{marginTop:30, height:60, justifyContent:'center'}} onPress={()=>navigation.navigate('Main')} disabled={phone.length <9} title='Login'></Button>
      </View>
</SAFEVIEW>


    );
}

export default Welcome;

