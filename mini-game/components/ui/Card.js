import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: deviceWidth * 0.8,
    marginHorizontal: 24,
    marginTop: deviceWidth < 300 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})