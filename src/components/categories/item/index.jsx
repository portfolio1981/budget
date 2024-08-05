import { TouchableHighlight, Text, ImageBackground } from "react-native";

import {styles} from "./styles";
import { COLORS } from '../../../themes';


const CategoriasItem = ({ 
    id,
    name,
    backgroundColor,
    backgroundImage,
    onSelectCategorias,
 }) => {
   
    return (
        <TouchableHighlight 
        onPress = {() => onSelectCategorias(id)}
        style={[styles.container, {backgroundColor:backgroundColor}]}
         underlayColor = {COLORS.tertiary}>
            
        <ImageBackground 
            source={{uri:backgroundImage}} 
            style = {[styles.imageBackground, styles]} 
            resizeMode="cover">
            <Text style = {styles.categoriasName}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
        );


 };

 export default CategoriasItem;
