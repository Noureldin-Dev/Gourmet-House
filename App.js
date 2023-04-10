import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./App/Screens/Welcome"
import Checkout from "./App/Screens/Checkout"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './App/Screens/Main';
import { IconComponentProvider, Icon, IconButton } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CheckoutButton from './components/CheckoutButton';
import FoodItem from './App/Screens/FoodItem';


const Stack = createStackNavigator();

function MyStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false,gestureEnabled: false}} name="Welcome" component={Welcome} />
      <Stack.Screen  options={{headerShown: false,gestureEnabled: false}} name="Main" component={Main} />
      <Stack.Screen options={{headerTitle:""}} name="FoodItem" component={FoodItem} />

    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <StatusBar
StatusBarStyle='light-content'
      />
<NavigationContainer>

    <MyStack/>
    

  </NavigationContainer>
  </IconComponentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
