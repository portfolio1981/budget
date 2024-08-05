import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';

import { styles } from './styles';
import { Input } from '../../components';
import SUBCATEGORY  from '../../constants/data/subcategory.json';
import { COLORS } from '../../themes';

function Subcategory({ onHandleGoBack, categorySelected }) {
  const [search, setSearch] = useState('');
  const [filteredSubcategory, setFilteredSubcategory] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};

  const filteredSubcategoryByCategory  = SUBCATEGORY.filter((subcategory) => subcategory.categoryId === categorySelected.categoryId);
  
  const filterBySearch = (query) => {
    let updateSubcategoryList = [...filteredSubcategoryByCategory];
   
    updatedSubcategoryList = updatedSubcategoryList.filter((subcategory) => {
      return subcategory.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredSubcategory(updatedSubcategoryList);
  };
  const clearSearch = () => {
    setSearch('');
    setFilteredSubcategory([]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
        <Text style={styles.goBackText}>Atras</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Busqueda"
          borderColor={borderColor}
        />
        
        {search.length > 0 && (
         <Ionicons 
          onPress={clearSearch}
          style={styles.clearIcon}
          name="close-circle"
          size={40}
          color={COLORS.black} 
          />
        )}
      </View>
      <FlatList
         style={styles.subcategory}
         data={search.length > 0 ? filteredSubcategory : filteredSubcategoryByCategory}
         renderItem={({ item }) => (
           <TouchableOpacity onPress={() => null} style={styles.subcategoryContainer}>
             <ImageBackground
               source={{ uri: item.image }}
               style={[styles.subcategoryImage, { backgroundColor: categorySelected.color }]}
               resizeMethod="resize"
               resizeMode="contain"
             />
             <View style={styles.subcategoryDetail}>
               <Text style={styles.subcategoryName} numberOfLines={1} ellipsizeMode="tail">
                 {item.name}
               </Text>
             </View>
           </TouchableOpacity>
         )}
         contentContainerStyle={styles.subcategoryContent}
         keyExtractor={(item) => item.id.toString()}
         numColumns={2}
         showsVerticalScrollIndicator={false}
       />
       {filteredSubcategory.length === 0 && search.length > 0 && (
         <View style={styles.notFound}>
           <Text style={styles.notFoundText}>No se encuentra la subcategoria</Text>
         </View>
         )}
         </View>
       );
     }

     export default Subcategory;