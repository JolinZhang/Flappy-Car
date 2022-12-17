import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import Car from './Components/Car'

export default function App() {

  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const carLeft = screenWidth/2
  const [carBottom, setCarBottom] = useState(screenHeight/2) 

  return (
    <View style={styles.container}>
      <Car/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
