import { Surface } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { Image, Text, Touchable, TouchableHighlight, View } from 'react-native';

function MenuItem({navigation, meal, isSearchResult}) {



    return (
        <>
        {isSearchResult?
    <TouchableHighlight
    style={{width: '100%', height: 240, marginTop:120 }}
    onPress={()=>{
        
      
    navigation.navigate('FoodItem', meal)
    // navigation.navigate('FoodItem')
    }}
    underlayColor="white"
    >
    
    <Surface
    
          elevation={4}
          category="medium"
          style={{ height:"100%", padding:15, alignContent:"center", alignItems:"center"}}
        >
    
            
            <Image 
            style={{width: 230, height: 230, marginTop:-130}}
    
    source={meal.Image}/>
            
           
        <Text style={{fontSize:"20px", marginTop:-10, marginBottom:5, fontWeight:'bold', textAlign:'center'}}>{meal.Name}</Text>
        <Text style={{textAlign:'center', marginTop:-10, marginBottom:5, marginTop:6}}>{meal.ShortDescription}</Text>
        <Text style={{textAlign:'center', marginTop:-10, fontWeight:'bold', marginTop:6, fontSize:17}}>${meal.Price}</Text>
    
        </Surface>
        </TouchableHighlight>:
        <TouchableHighlight
        style={{width: 240, height: 240 }}
        onPress={()=>{
            
          
        navigation.navigate('FoodItem', meal)
        // navigation.navigate('FoodItem')
        }}
        underlayColor="white"
        >
        
        <Surface
        
              elevation={4}
              category="medium"
              style={{ height:"100%", padding:15, alignContent:"center", alignItems:"center"}}
            >
        
                
                <Image 
                style={{width: 230, height: 230, marginTop:-130}}
        
        source={meal.Image}/>
                
               
            <Text style={{fontSize:"20px", marginTop:-10, marginBottom:5, fontWeight:'bold', textAlign:'center'}}>{meal.Name}</Text>
            <Text style={{textAlign:'center', marginTop:-10, marginBottom:5, marginTop:6}}>{meal.ShortDescription}</Text>
            <Text style={{textAlign:'center', marginTop:-10, fontWeight:'bold', marginTop:6, fontSize:17}}>${meal.Price}</Text>
        
            </Surface>
            </TouchableHighlight>
    
    }

    </>
    );
}

export default MenuItem;