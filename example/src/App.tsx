// @ts-nocheck
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import DatePickerAndroid from './DatePickerAndroid';
import DatePickerIOS from './DatePickerIOS';

const DatePicker = Platform.select({
  android: DatePickerAndroid,
  ios: DatePickerIOS,
});

export default function App() {
  return (
    <View style={styles.container}>
      <DatePicker
        androidVariant="iosClone"
        locale="en_GB"
        is24hourSource="locale"
        date={new Date()}
        mode="datetime"
        selectedIndicatorColor="red"
        minimumDate={new Date()}
        textColor={'#000000'}
        onConfirm={(date) => {
          console.log(date);
        }}
        onDateChange={(date) =>{
          console.log('leon', 'date = ', date)
        }}
        // textColor="red"
        // backgroundColor="green"
        onCancel={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfcfc'
  },

});
