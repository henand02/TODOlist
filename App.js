import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform, ImageBackground } from 'react-native';
import Task from './src/Task';
import Header from './src/Header';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const image = { uri: "https://cached-images.bonnier.news/swift/bilder/mly/44bf2d7b-df29-4263-955c-af81f5ca698d.jpeg" };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios"}
        style={styles.writeTask}
      >
        <TextInput style={styles.input} placeholder={'Skriv in TODO'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.button}>
            <Text style={styles.text}>Lägg Till</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <View style={styles.content}>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    alignItems: 'center',
  },
  items: {
    marginTop: 30,
  },
  writeTask: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'yellow',
    textAlign: 'center',
    borderColor: 'blue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 400,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'blue',
    textAlign: 'center',
    borderColor: 'yellow',
  },
  text: {
    color: 'yellow',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
});