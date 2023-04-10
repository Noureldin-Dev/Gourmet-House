import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Flex, Icon, IconButton, Surface } from '@react-native-material/core';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View , Text, SafeAreaView, ScrollView, Image} from 'react-native';
import SAFEVIEW from '../../components/SAFEVIEW';

function Checkout({navigation}) {

const [Items, setItems] = useState([])


const isFocused = useIsFocused();

const RemoveItem = async (value) => {
// console.log(value)
  let NewItems = []
  // console.log(Items)

  for (let Item in Items){
    
    if (Items[Item].UnitID != value){
      NewItems.push(Items[Item])
    }
  }

  const jsonValue = JSON.stringify(NewItems)

  // console.log(jsonValue)

  // console.log(value)
  await AsyncStorage.setItem('FoodItems', jsonValue)
  setItems(NewItems)
}

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('FoodItems')
          // console.log(jsonValue)
          let ValueToBeSaved = jsonValue != null ? JSON.parse(jsonValue) : [];
          if (Array.isArray(ValueToBeSaved)){
            setItems(ValueToBeSaved)
          }else{
            setItems([ValueToBeSaved])
          }
          
        } catch(e) {
          // error reading value
          // console.log(e)
        }
      }


      const addMore = async(value)=>{
        let NewItems = []
        // console.log(Items)
      
        for (let Item in Items){
          
          if (Items[Item].UnitID != value){
            NewItems.push(Items[Item])
          }else{
            let changed = Items[Item]
            // console.log(changed)
            changed.quantity = changed.quantity +1
            // console.log(changed)

            NewItems.push(changed)
        
          }
        }
      
        const jsonValue = JSON.stringify(NewItems)
      
        // console.log(jsonValue)
      
        // console.log(value)
        await AsyncStorage.setItem('FoodItems', jsonValue)
        setItems(NewItems)
      }

      const remove1 = async(value)=>{
        let NewItems = []
        // console.log(Items)
      
        for (let Item in Items){
          
          if (Items[Item].UnitID != value){
            NewItems.push(Items[Item])
          }else{
            let changed = Items[Item]
            // console.log(changed)
            changed.quantity = changed.quantity -1
            if (changed.quantity== 0){
              // console.log("triggered")
              await RemoveItem(value)
            }else{

              NewItems.push(changed)
            }
            // console.log(changed)

        
          }
        }
      
        const jsonValue = JSON.stringify(NewItems)
      
        // console.log(jsonValue)
      
        // console.log(value)
        await AsyncStorage.setItem('FoodItems', jsonValue)
        setItems(NewItems)
      }

    useEffect(()=>{
      // console.log("data gotten")
        getData()
    },[isFocused])
    return (
      <>
<SAFEVIEW>
<Text style={{fontSize:"30px", fontWeight:"bold", marginTop:40, marginBottom:40}}>Checkout</Text>

{Items.length == 0?<Text>
    No items here
</Text>:

<ScrollView style={{display:"flex", gap:10}}>
{Items.map(item=>
  <Surface
  key={item.UnitID}

elevation={4}
category="medium"
style={{ width: "100%",marginBottom:15, height: 90, padding:10 , display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
>

  <Flex style={{flexDirection:"column", gap:4, justifyContent:'space-between'}}>
<Text style={{fontSize:15}}>{item.quantity}x {item.Name}</Text>
<Text style={{fontSize:13, color:"#212121"}}>{item.AdditionalInstructions}</Text>
<Text style={{fontSize:15}}>${parseFloat(item.Price) * parseFloat(item.quantity)}</Text>
</Flex>

{/* <Image source={item.Image} style={{width:100, height:100}} /> */}
<Flex style={{flexDirection:'row', gap:10, alignItems:'center'}}>
<Button style={{width:35,height:35, alignItems:'center', justifyContent:'center'}} title='-' onPress={()=>remove1(item.UnitID)} />
<Text style={{fontSize:20}}>{item.quantity}</Text>
<Button style={{width:35,height:35, alignItems:'center', justifyContent:'center'}} title='+' onPress={()=>addMore(item.UnitID)} />
</Flex>
    {/* <IconButton onPress={()=>{

      RemoveItem(item.UnitID)
      
      }} icon={props => <Icon name="basket-remove" {...props} />} /> */}


    </Surface>
    )}



</ScrollView>

}


</SAFEVIEW>
<Flex style={{flexDirection:"row", width:"100%", position:'absolute', bottom:10, gap:10, padding:10}}>
<Button onPress={()=>navigation.navigate("Home")} style={{flex:1, padding:10}} title="Add items" />
<Button style={{flex:1, padding:10, backgroundColor:"indigo"}} title="Checkout" />
</Flex>
</>

    );
}

export default Checkout;