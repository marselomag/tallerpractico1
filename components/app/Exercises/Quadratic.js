import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState('');

  function calculateValues() {
    if (a === 0) {
      alert('El valor de x^2 no puede ser 0');
      return;
    }
    const disc = Math.pow(b, 2) - 4 * a * c;

    if (disc < 0) {
      setResult('No tiene solución');
    } else if (disc === 0) {
      setResult(`Tiene una solución:
      X1=${((-b + Math.sqrt(disc)) / (2 * a)).toFixed(4)}`);
    } else {
      setResult(
        `Tiene dos soluciones:
        X1=${((-b + Math.sqrt(disc)) / (2 * a)).toFixed(4)}
        X1=${((-b - Math.sqrt(disc)) / (2 * a)).toFixed(4)}`,
      );
    }
  }
  return (
    <View style={styles.exercise}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={value => setA(value)}
            defaultValue={a.toString()}
          />
          <Text style={styles.variable}>x^2</Text>
        </View>
        <Text>+</Text>
        <View style={styles.input}>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={value => setB(value)}
            defaultValue={b.toString()}
          />
          <Text style={styles.variable}>x</Text>
        </View>
        <Text>+</Text>
        <View style={styles.input}>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={value => setC(value)}
            defaultValue={c.toString()}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button onPress={calculateValues} title="Calcular" />
      </View>

      <View style={styles.result}>
        <Text>{result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exercise: {
    paddingVertical: 10,
  },
  input: {
    // backgroundColor: 'red',
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
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
    marginTop: 20,
  },
  result: {
    color: 'red',
  },
});
