/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/layout/Header';
import GuideItem from './components/app/GuideItem';
import Quadratic from './components/app/Exercises/Quadratic';
import Salary from './components/app/Exercises/Salary';
import MinMax from './components/app/Exercises/MinMax';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {Exercises.map(exercise => (
          <GuideItem description={exercise.description} key={exercise.key}>
            {exercise.component()}
          </GuideItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Exercises = [
  {
    key: 1,
    description:
      'Realizar una aplicación, que resuelva la solución de la ecuación cuadrática',
    component: Quadratic,
  },
  {
    key: 2,
    description:
      'Realizar una aplicación, que calcule el salario neto de un empleado',
    component: Salary,
  },
  {
    key: 3,
    description:
      'Realizar una aplicación, que solicite al usuario 4 numeros enteros mayores a cero, mostrar el menor y el mayor',
    component: MinMax,
  },
];
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
