import React from 'react';
import { Text, View } from 'react-native';
import SAFEVIEW from '../../components/SAFEVIEW';
import SearchBar from '../../components/SearchBar';

function SearchScreen({navigation}) {
    return (
<SAFEVIEW>
    <Text style={{fontSize:"30px", fontWeight:"bold", marginTop:40}}>Search Items</Text>
    <SearchBar navigation={navigation} shouldAutoFocus/>

</SAFEVIEW>
    );
}

export default SearchScreen;