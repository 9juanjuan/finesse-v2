import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Picker,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const screenWidth = Dimensions.get('window').width;
const today = new Date();
const InputForm = () => {
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    console.log(description);
    console.log(date);
    console.log(type);
  });
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={type}
        onValueChange={text => setType(text)}>
        <Picker.Item label="Income" value="income" />
        <Picker.Item label="Expense" value="expense" />
      </Picker>
      <TextInput
        editable={true}
        style={styles.form1}
        placeholder="Add description"
        onChangeText={text => setDescription(text)}
        value={description}
      />
      <TextInput
        editable={true}
        style={styles.form2}
        placeholder="Add Value"
        onChangeText={text => setValue(text)}
        value={value}
      />
      <DateTimePicker
        value={today}
        mode="date"
        onChange={e => setDate(new Date(e.timeStamp))}
      />
      <Button
        style={{height: 25}}
        title="Submit"
        onPress={console.log(
          'Description: ' + description,
          ' Value: ' + value + ' Date:' + date,
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'gray',
    width: screenWidth / 1.5,
    height: 350,
    // justifyContent: 'center',
  },
  form1: {
    height: 40,
    marginTop: 4,
    borderColor: 'gray',
    borderWidth: 1,
  },
  form2: {
    marginTop: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  datePicker: {
    // marginTop: 10,
    width: screenWidth / 2,
    // borderWidth: 1
  },
  picker: {
    // borderWidth: 1,
    height: 150,
    marginTop: -20,
    // marginBottom: 5,
    justifyContent: 'center',
  },
});

export default InputForm;
