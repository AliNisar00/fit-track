import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const MenuScreen = () => {
  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item); // this function call ensures that the last stored value is displayed on app startup
  };

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setValue(newValue); // this function call allows new values to be displayed during runtime
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Current value: {value}</Text>
      <TouchableOpacity
        onPress={() =>
          writeItemToStorage(
            Math.random()
              .toString(36)
              .substr(2, 5)
          )
        }
      >
        <Text>Update value</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    margin: 40,
  },
});

export default MenuScreen;
