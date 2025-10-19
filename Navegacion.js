import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; // 
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Users from './Screens/Users';
import DetailHome from './Screens/DetailHome';
import AnotherDetailsHome from './Screens/AnotherDetailsHome';

const Tab = createBottomTabNavigator();
const DetailsHomeNavigator = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigate() {
    return (
        <Drawer.Navigator initialRouteName="User">
            <Drawer.Screen name="User" component={Users} />
            <Drawer.Screen name="DetailHome" component={DetailHome} />
            <Drawer.Screen name="OtroDetalle" component={AnotherDetailsHome} />
        </Drawer.Navigator>
    );
}

function StackDetailHome() {
    return (
        <DetailsHomeNavigator.Navigator initialRouteName="Home">
            <DetailsHomeNavigator.Screen name="Home" component={Home} />
            <DetailsHomeNavigator.Screen name="DetailHome" component={DetailHome} />
            <DetailsHomeNavigator.Screen name="AnotherDetailsHome" component={AnotherDetailsHome} />
        </DetailsHomeNavigator.Navigator>
    );
}

export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen
                name="HomeScreen" component={StackDetailHome}
                options={{
                    tabBarLabel: 'HomeScreen',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Drawer" component={DrawerNavigate}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}