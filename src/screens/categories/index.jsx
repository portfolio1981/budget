import { FlatList, SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import CATEGORIAS from '../../constants/data/categories.json';

function Categories({ onSelectCategory }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIAS}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) =>  (
          <CategoryItem {...item} onSelectCategory={() =>
            onSelectCategory({categoryId: item.id, color : item.backgroundColor})
          }
           />
  )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;