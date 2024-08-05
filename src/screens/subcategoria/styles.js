import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

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
    fontSize: 100,
    color: COLORS.primary,
  },
  subcategoria: {
    flex: 1,
    marginHorizontal : -5,
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
  subcategoriaContent: {
    paddingVertical: 25,
    gap: 15,
  },
  subcategoriaContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 30,
    width: '45%',
    marginHorizontal: 10,
  },
  subcategoriaImage: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  subcategoriaDetail: {
    padding: 10,
    gap: 5,
  },
  subcategoriaName: {
    fontSize: 20,
    marginLeft: 15,
    color: COLORS.secundary,
    fontFamily:FONTS.bold,
       
   },
});