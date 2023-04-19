import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/Categories';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: '#fff',
          contentStyle: { backgroundColor: "#3f2f25" }
        }}>
          <Stack.Screen
            name="MealsCategories"
            options={{
              title: "All Categories"
            }}
            component={CategoriesScreen} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});