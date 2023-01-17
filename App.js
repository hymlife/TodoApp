import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { state, useState } from "react";
import styles from "./styles.js";
const App = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };
  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}> Yapılacaklar Listesi</Text>
        <Text style={styles.subtitle}> Günlük Plan</Text>
        <TextInput
          style={styles.input}
          placeholder="Yapılacağı Yazınız"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddTaskPress}
        >
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>

        <View style={styles.littleTitleContainer}>
          <Text style={styles.littleTitleText}>YAPILACAKLAR</Text>
        </View>
        <View style={styles.divider} />

        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity
                style={styles.deleteTaskContainer}
                onPress={() => handleDeleteTaskPress(index)}
              >
                <Text style={styles.deleteTaskText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
