import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.AppHeader}>
        <Text style={styles.text}> Student Attendance </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AppHeader: {
    backgroundColor: 'crimson',
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
