import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'

const MenuScreen = () => {
  return (
    <View>
      <Text>MenuScreen</Text>
      <ProgressCircle style={styles.progressCircle} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressCircle: {
    height: 200,
    marginVertical: 16,
  },
});

export default MenuScreen;
