import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-native-paper';
import Home from './src/Home';
import Profile from './src/Profile';
import HomePage from './src/HomePage';
import DailyTask from './src/DailyTasks';
import RecordIntake from './src/RecordIntake';
import homePage2 from './src/HomePage2';
import homePage3 from './src/HomePage3';

// Define your stack and tab navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Screen Component
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// Profile Screen Component
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// Bottom Tab Navigator
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#f0f0f0' }, // Customize tab bar
      }}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      <Tab.Screen name='DailyTask' component={DailyTask}/>
      <Tab.Screen name='HomePage' component={HomePage}/>
    </Tab.Navigator>
  );
}

// Main App Component
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomePage2"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Main screen uses BottomTabs */}
          <Stack.Screen name="Main" component={BottomTabs} />
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name='RecordIntake' component={RecordIntake}/>
          <Stack.Screen name='HomePage2' component={homePage2}/>
          <Stack.Screen name='HomePage3' component={homePage3}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
