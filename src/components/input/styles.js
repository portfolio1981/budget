import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  input :{
    borderWidth : 2,
    borderRadius : 15,
    paddingHorizontal: 15,
    color : COLORS.black,
    fontSize : 16,
    height : 40,
    
  },
});