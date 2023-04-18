import { StyleSheet, Text, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    alignSelf: 'center',
    color: '#fff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})