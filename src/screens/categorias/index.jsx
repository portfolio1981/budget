import { FlatList, SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { CategoriasItem } from '../../components';
import CATEGORIAS from '../../constants/data/categorias.json';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';

function Categorias({ navigation}) {
  const orientation = useOrientation();
  const onSelectCategorias = ({categoriasId, color, name}) => {
    navigation.navigate ('Subcategoria', { categoriasId, color, name });    
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIAS}
          style={styles.categoriasContainer}
          contentContainerStyle={styles.listCategorias}
          renderItem={({ item }) =>  (
          <CategoriasItem {...item} onSelectCategorias={() =>
            onSelectCategorias({
              categoriasId: item.id,
              color : item.backgroundColor,
              name : item.name,
            })
          }
          style={orientation === ORIENTATION.LANDSCAPE ? styles.categoriasItemLandscape : {}}
           />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categorias;