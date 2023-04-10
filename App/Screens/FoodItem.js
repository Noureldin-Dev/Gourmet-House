import { Button } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import SAFEVIEW from '../../components/SAFEVIEW';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import { TouchableHighlight } from 'react-native';
import uuid4 from "uuid4";


function FoodItem({navigation, route}) {
    const [quantity, setQuantity] = useState(1)
    const [AdditionalInstructions, setAdditionalInstructions] =useState("")



const [data, setData] = useState()

    const storeData = async (value) => {
        try {
            let existingData = await getData()

            if (existingData != null){
                console.log(existingData)

                if(Array.isArray(existingData)){
                    existingData.push(value)
                }else{
                    existingData = [existingData, value]

                }

                
            }else{
                existingData = value
            }
          const jsonValue = JSON.stringify(existingData)
          console.log(jsonValue)
          await AsyncStorage.setItem('FoodItems', jsonValue)
        } catch (e) {
          // saving error
          
          console.log(e)
        }
      }



      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('FoodItems')
          console.log(jsonValue)
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
          console.log(e)
        }
      }
      
  
    
    return (
<SAFEVIEW>
<ScrollView>
    <Text>FOOD</Text>
    <Text style={{fontSize:"25px"}}>{route.params.Name}</Text>
    <Image style={{width:400, height:400}} source={route.params.Image}  />
    
    <View style={{
      // backgroundColor:"yellow",
      marginTop:-30,
    height:40,
    width:"40%",
    alignSelf:"flex-end",
    
    justifyContent:"flex-end",display:"flex", flexDirection:"row", gap:"9%", alignItems:'center'}}>
    <Button style={{width:"33%", height:"100%",alignItems:"center", justifyContent:"center"}} 
    disabled={quantity ==0} 
    onPress={()=>{
        if (quantity !=0){
            setQuantity(quantity-1)
        }
    }} title="-"/>

    <Text style={{fontSize:"25%"}}>{quantity}</Text>
    <Button style={{width:"33%", height:"100%",alignItems:"center", justifyContent:"center"}}  onPress={()=>setQuantity(quantity+1)} title="+"/>
    </View>

    <Text style={{fontSize:"15px", marginTop:30}}>{route.params.LongDescriptions}</Text>
    {/* <Text style={{fontSize:"15px"}}>{JSON.stringify(route.params)}</Text> */}


 




    <TextInput
style={{height: 50,marginTop:20, marginBottom:20, borderRadius:10, padding:10, borderColor:"grey", borderWidth:2, fontSize:15}}
        placeholder="Side notes for us"
        onChangeText={newText => setAdditionalInstructions(newText)}
        defaultValue={AdditionalInstructions}
      />


<TouchableHighlight
onPress={async()=>{
  await storeData({...route.params, quantity:quantity, AdditionalInstructions:AdditionalInstructions, UnitID:uuid4()}).then(()=>navigation.navigate("Main"))

}}
>
    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", borderRadius:"10px", backgroundColor:"indigo", padding:"5%"}}>
<Text style={{color:'white', fontWeight:'bold'}}>Add to basket</Text>
<Text style={{color:'white', fontWeight:'bold'}}>${parseFloat(route.params.Price) * parseInt(quantity)}</Text>
</View>
</TouchableHighlight>


</ScrollView></SAFEVIEW>
    );
}

export default FoodItem;