import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default () => {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    function calculateMinMax() {
      return [Math.min(...numbers), Math.max(...numbers)];
    }
    if (numbers.length === 4) {
      const [min, max] = calculateMinMax();
      setResult(`
          El número máximo es: ${max}, adicionado por condición de número menor mayor a 10: ${
        max + (min > 10 ? 10 : 0)
      }
        El número mínimo es: ${min}, restado por condición de número máximo menor a 50: ${
        min - (max < 50 ? 5 : 0)
      }
        `);
    }
  }, [numbers]);
  const addNumber = () => {
    if (number === 0) {
      alert('El número ingresado debe ser mayor a cero');
      return;
    }

    setNumbers([...numbers, number]);
    setNumber(0);
  };

  function reboot() {
    setNumbers([]);
    setNumber(0);
  }
  return (
    <View style={styles.exercise}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={value => setNumber(value)}
            defaultValue={number.toString()}
            placeholder="Ingresa un nùmero"
          />
        </View>
        <View style={styles.input}>
          <Button
            onPress={addNumber}
            title="Agregar"
            disabled={numbers.length > 4}
          />
        </View>
        <View>
          <Button
            onPress={reboot}
            title="Reiniciar"
            disabled={numbers.length < 4}
          />
        </View>
      </View>

      <View style={styles.result}>
        <Text>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exercise: {
    paddingVertical: 20,
  },
  input: {
    // backgroundColor: 'red',
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#dddddd',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  variable: {
    fontSize: 15,
    color: 'blue',
  },
  button: {
    marginVertical: 20,
  },
  result: {
    color: 'red',
  },
});
