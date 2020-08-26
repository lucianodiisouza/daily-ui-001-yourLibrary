import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button} from './components';

const storytime = require('./assets/images/galshir-storytime.png');

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Your Library</Text>
      <Image
        source={storytime}
        alt="Storytime by Gal Shir"
        style={styles.img}
      />
      <View style={styles.btnContainer}>
        <Button btnLabel="Sign In" txtStyle="white" btnStyle="full" />
        <Button btnLabel="Create Account" txtStyle="blue" btnStyle="outlined" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  img: {
    width: '25%',
    height: '25%',
  },
  btnContainer: {
    padding: 10,
    alignItems: 'center',
  },
});

export default App;
