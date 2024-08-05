import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';

import { styles } from './styles';
import { Input } from '../../components';
import SUBCATEGORIA  from '../../constants/data/subcategoria.json';
import { COLORS } from '../../themes';

function Subcategoria({ navigation, route }) {
  const { categoriasId, color } = route.params;
  const [search, setSearch] = useState('');
  const [filteredSubcategoria, setFilteredSubcategoria] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};

  const filteredSubcategoriaByCategorias  = SUBCATEGORIA.filter(
    (subcategoria) => subcategoria.categoriasId === categoriasId
    );
  
  const filterBySearch = (query) => {
    let updatedSubcategoriaList = [...filteredSubcategoriaByCategorias];
   
    updatedSubcategoriaList  =>  updatedSubcategoriaList.filter  ((subcategoria) => {
      return subcategoria.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredSubcategoria(updatedSubcategoriaList);
  };
  const clearSearch = () => {
    setSearch('');
    setFilteredSubcategoria([]);
  };

  const onSelectSubcategoria = ({ subcategoriaId, name }) => {
    navigation.navigate('SubacategoriaDetail', { subcategoriaId, color, name });
  };

  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Busqueda"
          borderColor={borderColor}
          marginHorizontal = {5}
        />
        
        {search.length > 0 && (
         <Ionicons 
          onPress={clearSearch}
          style={styles.clearIcon}
          name="close-circle"
          size={40}
          color={COLORS.tertiary}
          paddingTop = {21} 
          />
        )}
      </View>
      <FlatList
         style={styles.subcategoria}
         data={search.length > 0 ? filteredSubcategoria : filteredSubcategoriaByCategorias}
         renderItem={({ item }) => (
           <TouchableOpacity onPress={() => onSelectSubcategoria({subcategoriaId : item.id, name: item.name})} style={styles.subcategoriaContainer}>
             <ImageBackground
               source={{ uri: item.image }}
               style={[styles.subcategoriaImage, { backgroundColor: color }]}
               resizeMethod="resize"
               resizeMode="contain"
             />
             <View style={styles.subcategoriaDetail}>
               <Text style={styles.subcategoriaName} numberOfLines={2} ellipsizeMode="tail">
                 {item.name}
               </Text>
             </View>
           </TouchableOpacity>
         )}
         contentContainerStyle={styles.subcategoriaContent}
         keyExtractor={(item) => item.id.toString()}
         numColumns={2}
         showsVerticalScrollIndicator={false}
       />
       {filteredSubcategoria.length === 0 && search.length > 0 && (
         <View style={styles.notFound}>
           <Text style={styles.notFoundText}>No se encuentra la subcategoria</Text>
         </View>
         )}
         </View>
       );
     }

     export default Subcategoria;