import React from 'react';
import { SafeAreaView } from 'react-native';

function SAFEVIEW({children}) {
    return (
<SafeAreaView style={{margin:"4%", minHeight:"60%"}}>
{children}
</SafeAreaView>
    );
}

export default SAFEVIEW;