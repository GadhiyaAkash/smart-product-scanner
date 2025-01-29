import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DashboardScreen from '../../modules/dashboard/DashboardScreen';
import ScannerScreen from '../../modules/scanner/ScannerScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductInfo from '../../modules/product/ProductInfo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ScannerStackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Scanner" component={ScannerScreen} />
            <Stack.Screen name="Product" component={ProductInfo} />
        </Stack.Navigator>
    );
}
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
                    <Tab.Screen name="Scan" component={ScannerStackScreen} />
                    <Tab.Screen name="Home" component={DashboardScreen} />
                    <Tab.Screen name="History" component={DashboardScreen} />
                    <Tab.Screen name="Profile" component={DashboardScreen} />
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}
export default AppNavigation;   