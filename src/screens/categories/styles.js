import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoryContainer: {
    marginHorizontal: 25,
    marginTop: 25,
  },
  listCategory : {
    gap : 20,
    paddingBottom: 30,

  },
});