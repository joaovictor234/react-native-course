import { Image, Platform, Pressable, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import MealDetails from "../MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity} />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
})