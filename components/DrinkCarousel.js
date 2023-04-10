import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {ProductInfo as MainCourses} from "../assets/ProductInfo"
import MenuItem from './MenuItem';

function MainCoursesCarousel({navigation}) {
const [Meals, setMeals] =useState(null)

useEffect(()=>{
    setMeals(MainCourses.Drinks)

},[])


    return (
        <>
        {Meals == null||undefined?
<></>:
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop:25,display:"flex", flexDirection:"row", overflow:"scroll", height:250, alignContent:'center', paddingTop:330, overflow:"visible"}} contentContainerStyle={{alignItems:'flex-end',paddingBottom:10, justifyContent:'flex-start',gap:10}}>
            {Meals.map(meal=>
        <MenuItem meal={meal} navigation={navigation}/>
                
                )}
        </ScrollView>}
        </>
    );
}

export default MainCoursesCarousel;