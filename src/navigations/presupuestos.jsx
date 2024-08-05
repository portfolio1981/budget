import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Presupuestos } from "../screens";
import { COLORS, FONTS } from "../themes";

const Stack = createNativeStackNavigator ();

const PresupuestosNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName = "Presupuestos"
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
            <Stack.Screen name = "Presupuestos" component = {Presupuestos} />
        </Stack.Navigator>
    );

};

export default PresupuestosNavigator;