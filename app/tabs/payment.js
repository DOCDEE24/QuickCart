import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { alert } from 'react-native';

export default function PaymentScreen() {
  const { total } = useLocalSearchParams(); // receives total sent from cart
  const router = useRouter();

  // Input states
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  //  Function should be here — before return
  const handlePayNow = () => {
    if (!cardNumber || !expiryDate || !cvv) {
      Alert.alert('Missing details', 'Please fill in all card details.');
      return;
    }

    // Simulate payment
    Alert.alert(
      'Payment Successful 🎉',
      `Your payment of ₦${Number(total).toLocaleString()} was successful!`,
      [{ text: 'OK', onPress: () => router.push('/tabs/profile') }]
    );
  };

  //  return handles UI only
  return (
    <View style={styles.container}>
      <Text style={styles.header}>💳 Payment</Text>

      <TextInput
        placeholder="Cardholder Name"
        style={styles.input}
      />
      <TextInput
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        style={styles.input}
      />
      <TextInput
        placeholder="CVV"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handlePayNow}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10, marginBottom: 15 },
  button: { backgroundColor: "green", padding: 15, borderRadius: 5 },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
});