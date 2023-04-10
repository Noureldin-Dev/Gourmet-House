import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, TextInput, View } from 'react-native';
import { Keyboard } from 'react-native';
import { ScrollView } from 'react-native';
import MenuItem from './MenuItem';
import {ProductInfo} from "../assets/ProductInfo"
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';



function SearchBar({shouldAutoFocus, navigation}) {
    const [SearchTerm, setSearchTerm] = useState("")
    const route = useRoute().name
    
    const [SearchResults, setSearchResults] = useState(null)

const SearchDatabase = ()=>{

     let searchresults = [];

for (let i in ProductInfo.MainCourses){
    if (ProductInfo.MainCourses[i].Name.includes(SearchTerm)){
        searchresults.push(ProductInfo.MainCourses[i])
    }
}
setSearchResults(searchresults)
    

}

    useEffect(()=>{
        if(SearchTerm != ""){

        }
        SearchDatabase()
    },[SearchTerm])
    return (
        <>
        {route == "Search"?
    <View style={{marginTop:"5%", backgroundColor:"#FEFEFE", padding:"3%", borderRadius:"10px",marginBottom:"5%", display:"flex", flexDirection:"row", width:"100%", alignSelf:'center', alignContent:'center', justifyContent:'flex-start', gap:15}}>
    <Icon size={30} name='magnify' />
    <TextInput 
      onSubmitEditing={Keyboard.dismiss}
      autoFocus defaultValue={SearchTerm} onChange={e=>setSearchTerm(e)} style={{fontSize:"17px", flex:1}} placeholder='Search...'/>
    
    </View>:
    <View style={{marginTop:"5%", backgroundColor:"#FEFEFE", padding:"3%", borderRadius:"10px",marginBottom:"5%", display:"flex", flexDirection:"row", width:"100%", alignSelf:'center', alignContent:'center', justifyContent:'flex-start', gap:15}}>
    <Icon size={30} name='magnify' />
    <Pressable 
    // onFocus={()=>navigation.navigate("Search")}
onPress={()=>navigation.navigate("Search")}
      onSubmitEditing={Keyboard.dismiss}

      autoFocus={shouldAutoFocus == true} defaultValue={SearchTerm} onChange={e=>setSearchTerm(e)} style={{fontSize:"17px", flex:1}} placeholder='Search...'

      style={{alignContent:'center', justifyContent:'center', flex:1}}
      >
<Text style={{fontSize:"17px", color:"#312323"}}>Search</Text>
      </Pressable>
    
    </View>
    }

{route == "Search"?
<ScrollView  showsVerticalScrollIndicator={false} style={{maxHeight:'79%'}}>
    { SearchResults != null?
    SearchResults.map(result=>
        <MenuItem navigation={navigation} isSearchResult meal={result} />
        )
    :<></>}

</ScrollView>:<></>

}
</>
    );
}

export default SearchBar;