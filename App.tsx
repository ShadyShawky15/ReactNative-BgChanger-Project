
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  // generation of background color with state
  const [randomBackground, setRandomBackground] = useState("#ffffff")

  const generateColor = () => {
    let hexColor = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexColor[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionBtn: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 12,
    backgroundColor: "#6A1B4D"
  },
  actionBtnText: {
    fontSize: 25,
    color: "#FFFFFF",
    textTransform: "uppercase"

  }
});

export default App;
