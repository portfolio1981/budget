import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PrincipalNavigator from "./principal";
import PresupuestosNavigator from "./presupuestos";
import DespachosNavigator from "./despachos";

const BottomTab = createBottomTabNavigator ();

    const TabsNavigator = () => {
        return (
            <BottomTab.Navigator
             initialRouteName="Principal"
             screenOptions = {{
                headerShown : false,
             }}>
            <BottomTab.Screen name = "Principal" component = {PrincipalNavigator} /> 
            <BottomTab.Screen name = "Presupuestos" component = {PresupuestosNavigator} />
            <BottomTab.Screen name = "Despachos" component = {DespachosNavigator} />

            </BottomTab.Navigator>
        );
    }
export default TabsNavigator;