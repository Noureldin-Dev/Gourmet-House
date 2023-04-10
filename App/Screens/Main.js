import { Icon, IconButton } from '@react-native-material/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SoupsCarousel from "../../components/SoupsCarousel"
import DrinkCarousel from "../../components/DrinkCarousel"
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CheckoutButton from '../../components/CheckoutButton';
import MainCoursesCarousel from '../../components/MainCoursesCarousel';
import MenuItem from '../../components/MenuItem';
import SAFEVIEW from '../../components/SAFEVIEW';
import SearchBar from '../../components/SearchBar';
import Checkout from './Checkout';
import SearchScreen from './SearchScreen';


const Tab = createBottomTabNavigator();

function TABBER({navigation}){
    return(
        <Tab.Navigator
        
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Search') {
                iconName = focused ? 'magnify' : 'magnify';
              }
              else if (route.name === "Checkout"){
                iconName = "cart-outline"
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          
          >
        <Tab.Screen options={{headerShown: false,gestureEnabled: false, 
            // tabBarIcon:<Icon name="users" size={30} color="#900" />
            }} name="Home" component={Main} />
        <Tab.Screen options={{headerShown: false,gestureEnabled: false}} name="Search" component={SearchScreen} />
        <Tab.Screen options={{headerShown: false,gestureEnabled: false}} name="Checkout" component={Checkout} />
      </Tab.Navigator>
    )
}
function Main({navigation}) {
const [ProductType, setProductType] = useState(1)

    return (

<SAFEVIEW>
    <ScrollView style={{marginTop:30}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

    {/* <CheckoutButton navigation={navigation}/> */}

    <Text style={{fontSize:30, fontWeight:"bold", marginBottom:5}}>Great Food 😍</Text>
    <Text style={{fontSize:30, fontWeight:"bold"}}>Fast Delivery ⚡️</Text>
    <SearchBar navigation={navigation} />

    <View  style={{marginBottom:30}}>
        <View style={{display:'flex', flexDirection:'row',
        // backgroundColor:'yellow', 
        justifyContent:'space-around', alignContent:'center'}}>
        <IconButton  
        
            style={{alignSelf:"flex-end", marginTop:10, marginRight:10, 
            backgroundColor:ProductType==1?"indigo":'white'
            , borderRadius:'20px', padding:35}}
            onPress={()=>setProductType(1)} 
            icon={props => <Icon name="food" {...props} />} size={34} color={ProductType ==1? "white":"black"}/>
        
        <IconButton  
                style={{alignSelf:"flex-end", marginTop:10, marginRight:10, 
            backgroundColor:ProductType==2?"indigo":'white'
            , borderRadius:'20px', padding:35}}
            onPress={()=>setProductType(2)} 
            icon={props => <Icon name="bowl" {...props} />} size={34} color={ProductType ==2? "white":"black"}/>
        
        
        <IconButton  
                style={{alignSelf:"flex-end", marginTop:10, marginRight:10, 
            backgroundColor:ProductType==3?"indigo":'white'
            , borderRadius:'20px', padding:35}}
            onPress={()=>setProductType(3)} 
            icon={props => <Icon name="cup" {...props} />} size={34} color={ProductType ==3? "white":"black"}/>
        
        </View>
        
            </View>
    <Text style={{fontSize:20, fontWeight:"bold"}}>Popular Items</Text>
    {ProductType == 1?
    <MainCoursesCarousel navigation={navigation}/>:
    ProductType == 2?
    <SoupsCarousel navigation={navigation} />:
<DrinkCarousel navigation={navigation} />
    }
        <Text style={{fontSize:20, fontWeight:"bold", marginTop:25}}>New Items</Text>
{ProductType == 1?
    <MainCoursesCarousel navigation={navigation}/>:
    ProductType == 2?
    <SoupsCarousel navigation={navigation} />:
<DrinkCarousel navigation={navigation} />
    }
    </ScrollView>
</SAFEVIEW>

    );
}

export default TABBER;
