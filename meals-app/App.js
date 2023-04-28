import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/Categories';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetail';
import FavoritesScreen from './screens/Favorites';
// import FavoritesContextProvider from './store/context/favorite-content';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: '#fff',
    sceneContentStyle: { backgroundColor: "#3f2f25" },
    drawerContentStyle: { backgroundColor: "#351401" },
    drawerInactiveTintColor: "#fff",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#e4baa1"
  }}>
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list" />
      }} />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        title: "About the meal",
        drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="star" />
      }} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: "#3f2f25" }
          }}>
            <Stack.Screen
              name="Drawer"
              options={{
                headerShown: false
              }}
              component={DrawerNavigator} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});