import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import {Categorias, Subcategoria, SubcategoriaDetail} from "../screens";
import {COLORS, FONTS } from "../themes";

const Stack = createNativeStackNavigator();

function PrincipalNavigator (){
    return (
        <Stack.Navigator
         initialRouteName ="Categorias"
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
          <Stack.Screen name ="Categorias" component = {Categorias} />
          <Stack.Screen
             name = "Subcategoria"
             component = {Subcategoria}
             options={({ navigation, route }) => ({
                headerStyle: {
                  backgroundColor: route.params.color,
                },
                headerLeft: () => (
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                      <Ionicons name="arrow-back-circle" size={50} color={COLORS.tertiary}  />
                    </TouchableOpacity>
                   ),
                   title: route.params.name,
                })}    
             />
             <Stack.Screen
        name="SubcategoriaDetail"
        component={SubcategoriaDetail}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
        </Stack.Navigator>
    );
} 
const styles = StyleSheet.create({
 Atras: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  AtrasText: {
    fontSize: 100,
    color: COLORS.primary,
  },
});

export default PrincipalNavigator;