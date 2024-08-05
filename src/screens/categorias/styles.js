import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoriasContainer: {
    marginHorizontal: 25,
    marginTop: 25,
  },
  listCategorias : {
    gap : 20,
    paddingBottom: 30,
  },
  categoriasItemLandscape: {
    height: 100,
  },
});