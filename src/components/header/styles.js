import { StyleSheet, StatusBar } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        paddingStart: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    tabletContainer: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.primary,
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        paddingStart: 10,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    title: {
        color: COLORS.white,
        fontSize: 30,
        fontFamily:FONTS.bold,
        
    },
    tabletTitle: {
        fontSize: 45,
        color: COLORS.text,
        fontFamily: FONTS.bold,
        
      },
});
