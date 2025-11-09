import { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter} from 'expo-router'
import { useContext} from 'react';
import { CartContext} from '../Context/CartContext';
import { useCart } from '../Context/CartContext';

export default function ShopScreen() {
  const router = useRouter();
  const { addToCart}= useCart();
  const [selectedColor, setSelectedColor]=useState(null)
  const products = [
    {
      id: '1',
      name:  'First Aid Kits',
      price: 50000 ,
      colors: ['red', 'black', 'blue'],
      image: 'https://plus.unsplash.com/premium_photo-1677860446820-af83757f2957?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
    },
    {
      id: '2',
      name: 'Lab Coat',
      price:5000 ,
       colors: ['red', 'black', 'blue'],
      image: 'https://plus.unsplash.com/premium_photo-1677604592118-c54621a70d4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    },
    {
      id: '3',
      name: 'Centrifuge Machine',
      price: 270000,
       colors: ['red', 'black', 'blue'],
      image: 'https://images.unsplash.com/photo-1729944950511-e9c71556cfd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2187',
    },
    {
      id: '4',
      name: 'Anatomical Brain Image',
      price: 45500,
       colors: ['red', 'black', 'blue'],
      image: 'https://plus.unsplash.com/premium_photo-1661299287246-5fed4684a943?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
    {
      id: '5',
      name: 'Electrocardiogra machine',
      price: 712000,
       colors: ['red', 'black', 'blue'],
      image: 'https://images.unsplash.com/photo-1725859189283-eaeb03a0a1c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
    },
    {
      id: '6',
      name: 'Doppler Ultasound',
      price: 100000 ,
       colors: ['red', 'black', 'blue'],
      image: 'https://images.unsplash.com/photo-1691935052741-c8ce0a1ef543?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    },
    {
      id: '7',
      name: 'Surgical Microscope',
      price: 75000 ,
       colors: ['red', 'black', 'blue'],
      image: 'https://plus.unsplash.com/premium_photo-1661607090924-58a4776ae1c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
    },
    {
      id: '8',
      name: 'Wheelchair And Mobility Aid',
      price: 170500 ,
       colors: ['red', 'black', 'blue'],
      image:'https://media.istockphoto.com/id/996412696/photo/wheelchair-walking-frame-and-crutches-on-the-wooden-floor-in-the-room-3d-rendering.jpg?s=612x612&w=is&k=20&c=KDqTNY-6-HQEXQq9qrJrKW6lbRmbPfU35UD3vVq0iew=',
    },
    {
      id: '9',
      name: 'Neuro ICU Beds',
      price: 640000 ,
       colors: ['red', 'black', 'blue'],
      image: 'https://media.istockphoto.com/id/91156681/photo/empty-hospital-bed-in-intensive-care.jpg?s=612x612&w=is&k=20&c=CAvVJEi4B-NmDfSe6-fZKMpD-B-lLL3erxxp-ymBSbs=',
    },
    {
      id: '10',
      name: 'Nerve Conduction Velocity',
      price: 90000 ,
       colors: ['red', 'black', 'blue'],
      image: 'https://media.istockphoto.com/id/1459219548/photo/somatosensory-evoked-potentials-or-nerve-conduction-velocity-is-a-test-of-electrical-signals.jpg?s=1024x1024&w=is&k=20&c=FoXVN1sbwA-hAyn1zCFBly65dUOP-o4HqL0pbXISdf8=',
    },
  ];

const renderItem = ({ item }) => (
  <View style={styles.productContainer}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.price}>{item.price}</Text>

    <TouchableOpacity
      style={styles.cartButton}
      onPress={() => addToCart(item)}
    >
      <Text style={styles.cartButtonText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

  return (
  <View style={{ flex: 1 }}>
    <Text style={styles.header}>Med Station by DOC DEE</Text>

    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 120 }} // Added bottom padding

    />

    <View style={styles.navButtons}>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/tabs/cart')}>
        <Text style={styles.navButtonText}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/tabs/payment')}>
        <Text style={styles.navButtonText}>Payment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/tabs/profile')}>
        <Text style={styles.navButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  productContainer: {
  flex: 1,
  backgroundColor: "#f9f9f9",
  margin: 8,
  borderRadius: 10,
  padding: 10,
  alignItems: "center",
  justifyContent: "space-between",
  elevation: 3,
  maxWidth: "48%",       // keeps two per row
  height: 260,           // fixed card height (uniform)
},

image: {
  width: "100%",
  height: 120,           // fixed image height
  borderRadius: 10,
  resizeMode: "contain", // full image visible
  marginBottom: 8,
},
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 8,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  },
  
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },

  navButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between', //  evenly spread them out
  alignItems: 'center',
  paddingHorizontal: 20, //  adds spacing on the sides
  paddingVertical: 10,
  borderTopWidth: 1,
  borderColor: '#ccc',
  backgroundColor: '#fff',
  position: 'absolute',
  bottom: 0,
  width: '100%',
},
navButton: {
  flex: 1, //  each button takes equal width
  backgroundColor: 'blue',
  marginHorizontal: 5, //  adds space between buttons
  paddingVertical: 10,
  borderRadius: 8,
  alignItems: 'center', // centers text horizontally
},
navButtonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
cartButton: {
  backgroundColor: "orange",
  paddingVertical: 6,
  paddingHorizontal: 10,
  borderRadius: 5,
  marginTop: 8,
  alignSelf: 'stretch',  // makee all buttons equally wide 
},
cartButtonText: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
},
card: {
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 12,
  margin: 8,
  alignItems: "center",
  justifyContent: "space-between",
  width: "45%", // keeps two cards per row
  minHeight: 250, // ensures same height
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

image: {
  width: "100%",
  height: 120,
  borderRadius: 8,
  marginBottom: 10,
},

addButton: {
  backgroundColor: "blue",
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 5,
  marginTop: 8,
  width: "100%",
},

addButtonText: {
  color: "#fff",
  textAlign: "center",
  fontWeight: "bold",
},

card: {
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 10,
  width: "48%",            // Two cards per row with space between
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

image: {
  width: '100%',
  height: 120,  // Fixed height for all priduct images
  borderRadius: 8,
  resizeMode: 'contain', // Keeps the full image visible
  marginBottom: 8,

},
});