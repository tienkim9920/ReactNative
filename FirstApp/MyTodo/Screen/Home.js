import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoList from '../Component/TodoList';
import Header from '../Component/Header';
import Submit from '../Component/Submit';

export default function Home() {

  const [Todo, setTodo] = useState([
    { text: 'Đẹp Trai', key: '1' },
    { text: 'Thanh Lịch', key: '2' },
    { text: 'Vô địch', key: '3' },
    { text: 'Khắp Vũ Trụ', key: '4' }
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return  prevTodo.filter(Todo => Todo.key != key)
    }) 
  };

  const submitHandler = (text) => {
    setTodo((prevTodo) => {
      return [
        { text : text, key: Math.random().toString()},
        ...prevTodo
      ]
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        <View style={styles.list}>
          <Submit submitHandler={submitHandler}/>
          <FlatList data={Todo}
          renderItem={({ item }) => (
            <TodoList item={item} pressHandler={pressHandler} />
          )} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 27,
  },
  list: {
    padding: 40,
    marginTop: 20,
  }
});
