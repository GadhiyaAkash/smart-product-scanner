import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderTitle from './HeaderTitle';
// import HomeScreen from '../../modules/home/HomeScreen';
import DashboardScreen from '../../modules/dashboard/DashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AppNavigation() {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            const icons = {
                                Home: 'home-outline',
                                Scan: 'scan-outline',
                                History: 'time-outline',
                                Profile: 'person-outline'
                            };
                            return <Ionicons name={icons[route.name]} size={size} color={color} />;
                        }
                    })}
                >
                    <Tab.Screen name="Home" component={DashboardScreen} />
                    <Tab.Screen name="Scan" component={DashboardScreen} />
                    <Tab.Screen name="History" component={DashboardScreen} />
                    <Tab.Screen name="Profile" component={DashboardScreen} />
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}
export default AppNavigation;   