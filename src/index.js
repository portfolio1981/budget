import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';

import { COLORS, FONTS } from './themes';
import RootNavigator from './navigations';


export default function App() {
  const [loaded] = useFonts ({
    [FONTS.regular] : require('../assets/fonts/Jost-Regular.ttf'),
    [FONTS.bold] : require('../assets/fonts/Jost-Bold.ttf'),
    [FONTS.light] : require('../assets/fonts/Jost-Light.ttf'),
    [FONTS.medium] : require('../assets/fonts/Jost-Medium.ttf'),
  });
  
  if (!loaded) {

    return (
      <View style ={styles.loaderContainer}>
    <ActivityIndicator color = {COLORS.primary} size = 'large'/>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
     <RootNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer : {
    flex : 1,
    justifyContent : 'center',
    alignContent: 'center',

  },
});