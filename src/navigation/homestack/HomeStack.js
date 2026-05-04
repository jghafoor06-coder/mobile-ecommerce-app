import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Pages
import Home from '../../pages/home/Home';
import Category from '../../pages/category/Category';
import ProductsDetail from '../../pages/productdetail/ProductsDetail';
import SearchPage from '../../pages/searchpage/SearchPage';
import Wishlist from '../../pages/wishlist/Wishlist';
import Notification from "../../pages/notification/Notification"
import History from '../../pages/history/History';
import AuthStack from '../authstack/AuthStack';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="category" component={Category} />
      <Stack.Screen name="productdetail" component={ProductsDetail} />
      <Stack.Screen name="search" component={SearchPage} />
      <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 20,
          height: 90,
          borderTopWidth: 1,
          borderColor: '#eee',
          paddingTop: 5,
          elevation: 0,
        },
        tabBarButton: props => (
          <TouchableOpacity {...props} activeOpacity={0.5} />
        ),
        tabBarActiveTintColor: '#76C893',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

          const hideOnScreens = ['productdetail'];

          return {
            tabBarStyle: {
              display: hideOnScreens.includes(routeName) ? 'none' : 'flex',
              backgroundColor: 'white',
              paddingBottom: 20,
              height: 90,
              borderTopWidth: 1,
              borderColor: '#eee',
              paddingTop: 5,
              elevation: 0,
            },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          };
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="file-tray-full-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AuthStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
