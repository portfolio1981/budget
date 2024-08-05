import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import SUBCATEGORIA  from '../../constants/data/subcategoria.json';

function SubcategoriaDetail({ navigation, route }) {
  const { color, subcategoriaId } = route.params;

  const subcategoria = SUBCATEGORIA.find((subcategoria) => subcategoria.id === subcategoriaId);

   return (
    <View style={styles.container}>
      <View style={[styles.containerImage, { backgroundColor: color }]}>
        <Image source={{ uri: subcategoria.image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{subcategoria.name}</Text>
     </View>
    </View>
  );
}

export default SubcategoriaDetail;