import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import Settings from './components/Settings';
import MyCards from './components/MyCards';
import Statistics from './components/Statistics';
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({}) => {
           
          const Icons = {
            Home : require('./assets/home.png'),
            MyCards : require('./assets/myCards.png'),
            Statistics : require('./assets/statictics.png'),
            Settings : require('./assets/settings.png'),
          }
          return <Image source={Icons[route.name]} style={styles.icon} />;
        },

        tabBarStyle:{
          borderTopWidth:0,
          paddingBottom:'15px'
        }
      })}
      tabBarOptions={{
        activeTintColor:'blue',
        inactiveTintColor:'grey'
      }} >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} />

        <Tab.Screen
          name="MyCards"
          component={MyCards} 
          options={{ headerShown: false }}/>

        <Tab.Screen
          name="Statistics"
          component={Statistics} 
          options={{ headerShown: false }}/>

        <Tab.Screen
          name="Settings"
          component={Settings} 
          options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
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
