import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(goal => goal.id !== id))
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color='#b180f0'
          onPress={startAddGoalHandler}/>
        <GoalInput 
          onAddGoal={addGoalHandler} 
          visible={modalIsVisible} 
          onCancel={endAddGoalHandler}/>

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) =>
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler} />
            }
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 5
  }
});
