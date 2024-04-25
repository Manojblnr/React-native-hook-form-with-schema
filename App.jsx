import { View, Text, StyleSheet } from "react-native"
import HomePage from "./src/pages/HomePage";
import LinearGradient from "react-native-linear-gradient";
import TestForm from "./src/components/TestForm";

const App = () => {
  return(
    <LinearGradient colors={['rgba(251,249,241,1)', 'rgba(208,253,226,1)']} style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={styles.root}>
          {/* <HomePage/> */}
          <TestForm/>
        </View>
      </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 12,
    paddingRight: 2,
    paddingLeft: 2,
    paddingBottom: 2,
    // backgroundColor: 'blue' 
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  root: {
    flex: 1,
    // backgroundColor:'red'
  }
});

export default App;