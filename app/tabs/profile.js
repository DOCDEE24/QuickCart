import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from'@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    router.push('/login'); // navigate back to login after logout
  };

  return (
    <View style={styles.container}>
      <Image source={{
          uri:'https://plus.unsplash.com/premium_photo-1661761151437-a5f7fbe5753b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',  
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>
        {user ? user.name || 'No name set' : 'Loading...'}
      </Text>
      <Text style={styles.email}>{user ? user.email : ''}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/editProfile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logout]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold' },
  email: { fontSize: 16, color: 'gray', marginBottom: 20 },
  button: { backgroundColor: 'blue', padding: 12, borderRadius: 5, width: 150, marginBottom: 10 },
  logout: { backgroundColor: 'red' },
  buttonText: { color: 'white', textAlign: 'center' },
});