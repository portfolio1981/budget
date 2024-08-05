import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal : 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  Atras: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  AtrasText: {
    fontSize: 14,
    color: COLORS.text,
  },
  subcategory: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
  },
  notFoundText: {},
  clearIcon: {
    position: 'absolute',
    zIndex: 2,
    right: 5,
  },
  subcategoryContent: {
    paddingVertical: 25,
    gap: 15,
  },
  subcategoryContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    width: '45%',
    marginHorizontal: 10,
  },
  subcategoryImage: {
    width: '100%',
    height: 150,
  },
  subcategoryDetail: {
    padding: 10,
    gap: 5,
  },
  subcategoryName: {
    fontSize: 14,
   },
});