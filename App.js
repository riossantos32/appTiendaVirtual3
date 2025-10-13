import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Categoria from './Componentes/Categoria';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Producto from './Componentes/Productos';

export default function App() {
  const Categorias = [
    { id: 1, nombre: 'book', texto: 'Book' },
    { id: 2, nombre: 'baby-carriage', texto: 'Baby' },
    { id: 3, nombre: 'bicycle', texto: 'Sport' },
    { id: 4, nombre: 'gamepad', texto: 'Game' },
    { id: 5, nombre: 'camera', texto: 'Camera' },
    { id: 5, nombre: 'laptop', texto: 'Laptop' },
    { id: 5, nombre: 'apple', texto: 'Apple' },
  ];

  const Productos = [
    {
      id: 1,
      image: require('./IMAGENES/ows.png'),
      precio: '12',
      descripcion: "A Room of One's Own",
      hora_mes: '5 hours ago',
      fondoColor: 'rgb(125, 183, 219)',
      cora: 'heart',
    },
    {
      id: 2,
      image: require('./IMAGENES/wireless.png'),
      precio: '50',
      descripcion: 'Wireless headphones',
      hora_mes: '8 hours ago',
      fondoColor: 'rgb(163, 227, 255)',
      cora: 'heart',
    },
    {
      id: 3,
      image: require('./IMAGENES/zapa.png'),
      precio: '10',
      descripcion: 'White sneakers',
      hora_mes: '3 hours ago',
      fondoColor: 'rgb(255, 194, 203)',
      cora: 'heart',
    },
    {
      id: 4,
      image: require('./IMAGENES/camera.png'),
      precio: '12',
      descripcion: 'Camera-Video & photo',
      hora_mes: '6 hours ago',
      fondoColor: 'rgb(165, 143, 255)',
      cora: 'heart',
    },
    {
      id: 5,
      image: require('./IMAGENES/oso.png'),
      precio: '15',
      descripcion: 'Teddy',
      hora_mes: '10 hours ago',
      fondoColor: 'rgb(189, 226, 242)',
      cora: 'heart',
    },
    {
      id: 6,
      image: require('./IMAGENES/cartera.png'),
      precio: '50',
      descripcion: 'Makeup travel bag',
      hora_mes: '12 hours ago',
      fondoColor: 'rgb(255, 236, 166)',
      cora: 'heart',
    },
    {
      id: 7,
      image: require('./IMAGENES/gaseosa.png'),
      precio: '50',
      descripcion: 'Makeup travel bag',
      hora_mes: '12 hours ago',
      fondoColor: 'rgb(255, 236, 166)',
      cora: 'heart',
    },
    {
      id: 8,
      image: require('./IMAGENES/cartera.png'),
      precio: '50',
      descripcion: 'Makeup travel bag',
      hora_mes: '12 hours ago',
      fondoColor: 'rgb(255, 236, 166)',
      cora: 'heart',
    },
    
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Buscador */}
      <View style={styles.contenedor_buscador}>
        <View style={styles.buscador}>
          <FontAwesome name="search" size={20} color="black" />
          <TextInput
            style={styles.textoBuscador}
            placeholder="Buscar"
            placeholderTextColor="#753c3cff"
          />
        </View>
      </View>

      {/* Categorías */}
      <View style={styles.contenedorCategoria}>
        <FlatList
          data={Categorias}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Categoria nombre={item.nombre} texto={item.texto} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriasLista}
        />
      </View>

      {/* Productos en dos columnas */}
      <View style={styles.productosContainer}>
        <Text style={styles.titulo}>Views</Text>

        <FlatList
          data={Productos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.filaTarjetas}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Producto
                image={item.image}
                precio={item.precio}
                descripcion={item.descripcion}
                hora_mes={item.hora_mes}
                fondoColor={item.fondoColor}
                cora={item.cora}
              />
            </View>
          )}
          contentContainerStyle={styles.container_tarjetas}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contenedor_buscador: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buscador: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(245, 245, 255)',
    marginTop: 60,
    padding: 15,
    borderRadius: 10,
  },
  textoBuscador: {
    flex: 1,
    height: 45,
    color: '#529c6bff',
    fontSize: 15,
    paddingLeft: 15,
  },
  contenedorCategoria: {
    height: 85,
    backgroundColor: '#fff',
  },
  categoriasLista: {
    paddingHorizontal: 16,
  },
  titulo: {
    marginLeft: 19,
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10,
  },
  productosContainer: {
    flex: 1,
    width: '100%',
  },
  container_tarjetas: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  filaTarjetas: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tarjeta: {
    flex: 1,
    marginHorizontal: 8,
  },
});