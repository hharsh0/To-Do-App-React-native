import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoalText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goals"
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add goals" />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal, id) => (
            <View style={styles.goalItem} key={id}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding:8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});
