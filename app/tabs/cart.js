import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useCart } from '../../Context/CartContext';
import { useRouter } from 'expo-router'

export default function CartScreen() {
  const router =useRouter(); // define router here
  const { cartItems, removeFromCart, clearCart} = useCart();
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛒 Your Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.qty}>Qty: {item.quantity}</Text>
    </View>

    <TouchableOpacity
      style={styles.removeButton}
      onPress={() => removeFromCart(item.id)}
    >
      <Text style={styles.removeText}>Remove</Text>
    </TouchableOpacity>
  </View>
)}
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: #{totalAmount.toLocaleString()}</Text>
        <TouchableOpacity
  style={styles.paymentButton}
  onPress={() => router.push({
    pathname: '/tabs/payment',
    params: { total: totalAmount }
  })}
>
  <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { flexDirection: "row", marginBottom: 15, alignItems: "center" },
  image: { width: 70, height: 70, borderRadius: 10, marginRight: 10 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { color: "gray" },
  footer: { marginTop: 20, borderTopWidth: 1, borderTopColor: "#eee", paddingTop: 10 },
  total: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  button: { backgroundColor: "blue", padding: 12, borderRadius: 5 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  removeButton: { backgroundColor: "#ff4444", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 5, marginTop: 6, alignSelf: "flex-start", },
  removeText: { color: "#fff", fontWeight: "bold", },
  paymentButton: { backgroundColor: 'blue', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 10, },
  paymentButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold', },
});
