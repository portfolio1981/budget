import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Despachos } from "../screens";
import { COLORS, FONTS } from '../themes';


const Stack = createNativeStackNavigator ();

const DespachosNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName = "Despachos"
        screenOptions={() => ({
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: 60,
            },
            headerTitleStyle: {
              fontFamily: FONTS.bold,
              fontSize: 30,
            },
            headerTintColor: COLORS.white,
            animation: 'fade_from_bottom',
          })}>
            <Stack.Screen name = "Despachos" component = {Despachos} />
        </Stack.Navigator>
    );

};

export default DespachosNavigator;