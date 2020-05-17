import React, { useState } from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import GoalDelete from './components/GoalDelete';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isAskMode, setIsAskMode] = useState(false);
  const [IdTbd, setIdTbd] = useState(0);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals,{uid: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };
  
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const cancelGoalDeletionHandler = () => {
    setIsAskMode(false);
  };

  const putId = (goalId) => {
    setIsAskMode(true);
    setIdTbd(goalId);
  }

  const removeGoalHandler = goalId => {
    console.log(goalId);
    setCourseGoals(currentGoals => { return currentGoals.filter((goal) => goal.uid !== goalId );});
    setIsAskMode(false);
};

  return (
    <View style = {styles.screen}>
      <Button title = "ADD NEW GOAL" onPress = {() => setIsAddMode(true)} />
      <GoalInput visible = {isAddMode} onAddGoal = {addGoalHandler} onCancel = {cancelGoalAdditionHandler} />
      <FlatList keyExtractor = {(item, index) => item.uid} data = {courseGoals} 
      renderItem = {itemData => <GoalItem id = {itemData.item.uid} onDelete = {putId} title = {itemData.item.value}/>} />
      <GoalDelete visible = {isAskMode} onRemoveGoal = {removeGoalHandler.bind(this, IdTbd)} onCancel = {cancelGoalDeletionHandler}/>
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});