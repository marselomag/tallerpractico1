import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
export default () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState(0);
  const [result, setResult] = useState('');

  function calculateValues() {
    const isss = Number((salary * 0.03).toFixed(2));
    const afp = Number((salary * 0.04).toFixed(2));
    const rent = Number((salary * 0.05).toFixed(2));

    const deductions = Number((isss + afp + rent).toFixed(2));
    setResult(`
    Empleado: ${name}
    Deducciones: 
      - ISSS(3%) : $${isss}
      - AFP(4%) : $${afp}
      - Renta : $${rent}
      - Total de deducciones: $${deductions}
      - Salario neto: $${(salary - deductions).toFixed(2)}
    `);
  }
  return (
    <View style={styles.exercise}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            onChangeText={value => setName(value)}
            defaultValue={name}
            placeholder="Ingresa tu nombre"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={value => setSalary(value)}
            defaultValue={salary.toString()}
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
    paddingVertical: 20,
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
    marginVertical: 20,
  },
  result: {
    color: 'red',
  },
});
