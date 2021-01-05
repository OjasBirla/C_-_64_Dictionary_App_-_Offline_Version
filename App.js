import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import database from './database';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isSearchPressed: false,
      lexicalCatergory: '',
      defination: '',
    }
  }

  getWord = (word) => {
    var search = word.toLowerCase();

    if(database[search]){
      
        var wordData = database[search]

        var definition = wordData["definition"];
        var lexicalCatergory = wordData["lexicalCategory"];

        this.setState({
          defination: definition,
          lexicalCatergory: lexicalCatergory
        })
        console.log(this.state)
    } else {
      this.setState({
        defination: "Error 404 - Word Not Found",
      })
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container2}>
          <Text style={{fontSize: 20, color: "white"}}>Willy - Library Management System</Text>          
        </View>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View style={{flexDirection: "row"}}>
            <TextInput style={styles.input}
            onChangeText={text => {
              this.setState({text: text})
            }} />

            <TouchableOpacity style={styles.button}
            onPress={() => {
              this.setState({isSearchPressed: true})
              this.getWord(this.state.text)
            }}>
              Search
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>Catergory: {this.state.lexicalCatergory}</Text>
            <Text style={styles.text}>Defination: {this.state.defination}</Text>
          </View>
          <View style={styles.container1}>
              <Text style={{fontSIze: 20}}>{this.state.text}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 20,
    padding: 20,
    borderRadius: 25, 
    backgroundColor: "#909090",
  },

  button: {
    width: 100,
    height: 50,
    margin: 20,
    padding: 20,
    paddingLeft: 30,
    paddingBottom: 35,
    borderRadius: 25,
    backgroundColor: "#00ff00",
  },

  text: {
    fontSize: 20,
    margin: 20,
  },

  container1: {
    width: 200,
    height: 50,
    margin: 20,
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "orange",
  },

  container2: {
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
})