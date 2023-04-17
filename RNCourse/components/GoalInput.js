import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

function GoalInput({ onAddGoal, onCancel, visible }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/target-icon.png')} />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31283"
              onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              color="#b180f0"
              onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})